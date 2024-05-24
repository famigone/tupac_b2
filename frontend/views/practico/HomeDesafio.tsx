import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { useEffect, useState } from 'react';
import { Grid } from "@hilla/react-components/Grid";
import { GridColumn } from "@hilla/react-components/GridColumn";

import PracticoRecord from 'Frontend/generated/com/example/application/services/PracticoService/PracticoRecord';
import { DesafioService, PracticoService } from 'Frontend/generated/endpoints';
import PracticoForm from '../../components/practico/FormPractico';
import { ConfirmDialog } from '@hilla/react-components/ConfirmDialog.js';
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';
import { Icon } from '@hilla/react-components/Icon.js';
import { GridSortColumn } from '@hilla/react-components/GridSortColumn.js';
import { GridFilterColumn } from '@hilla/react-components/GridFilterColumn.js';
import { useParams } from 'react-router-dom';
import FormDesafio from 'Frontend/components/desafios/FormDesafio';
import DesafioRecord from 'Frontend/generated/com/example/application/services/DesafioService/DesafioRecord';
import { Dialog } from '@hilla/react-components/Dialog.js';
export default function HomeDesafio() {
  const [Desafios, setDesafios] = useState<DesafioRecord[]>([]);
  const [Desafio, setDesafio] = useState<DesafioRecord>();
  const [elPracticoid, setElPracticoid] = useState<Number>();
  const [Practico, setPractico] = useState<PracticoRecord | null>();
  const [selected, setSelected] = useState<DesafioRecord | null>();
  const [dialogOpened, setDialogOpened] = useState(false);
  const [testOpened, setTestOpened] = useState(false);
  const [deleteHabilitado, setDeleteHabilitado] = useState(true);
  let { practicoid } = useParams();


  useEffect(() => {
    if (practicoid)
      PracticoService.findById(parseInt(practicoid)).then(setPractico)

  }, []);



  const onPracticoDeleted = async () => {
    if (selected && selected.id) {
      try {
        // Llamar al servicio para eliminar el registro
        await PracticoService.delete(selected.id);
        //actualizamos el estado          
        setDesafios(Desafios.filter(Desafio => Desafio.id != selected.id))
      } catch (error) {
        console.error("Error al eliminar el Desafio:", error);
      }
    }
  };

  async function onDesafioSaved(Desafio: DesafioRecord) {
    if (Practico?.id) {
      Desafio.practico.id = Practico?.id;
      Desafio.practico.nombre = Practico?.nombre;
    }

    const saved = await DesafioService.save(Desafio)
    if (Desafio.id) {
      setDesafios(Desafios => Desafios.map(current => current.id === saved.id ? saved : current));
    } else {
      setDesafios(Desafios => [...Desafios, saved]);
    }
    setSelected(saved);


  }

  return (
    <>

      <div className="p-m  gap-m border: 2px card">
        <h4>{Practico?.nombre}</h4>
        <p>{Practico?.materia.nombre}</p>
      </div>
      <hr />
      <div className="p-m  gap-m border: 2px card">
        <FormDesafio
          Practico={Practico}
          Desafio={selected}
          onSubmit={onDesafioSaved}
        />
      </div>
      <div className="p-m  gap-m">
        <Grid
          theme="row-stripes"
          allRowsVisible
          items={Desafios}
          onActiveItemChanged={e => setSelected(e.detail.value)}
          selectedItems={[selected]}>
          <GridFilterColumn path="narrativa" header="NARRATIVA" />
          <GridFilterColumn path="orden" header="ORDEN" />
        </Grid>

        <div style={{ margin: '3px' }} className="flex gap-m gap-s">

          <Button disabled={selected == null} theme="primary error small" onClick={() => setDialogOpened(true)} ><Icon icon="vaadin:close" /> Eliminar</Button>
          <Button onClick={() => setSelected(null)} theme="primary small" ><Icon icon="vaadin:refresh" />
            Nuevo</Button>
          <Button disabled={selected == null} onClick={() => setTestOpened(true)} theme="primary small" ><Icon icon="vaadin:calc" />
            Casos de Test</Button>
        </div>
        <ConfirmDialog
          header="Desea eliminar el Desafío?"
          cancelButtonVisible
          confirmText="Eliminar"
          cancelText="Cancelar"
          opened={dialogOpened}
          onConfirm={() => {
            onPracticoDeleted()
            setDialogOpened(false)
          }}
          onCancel={() => {
            setDialogOpened(false)
          }}
        />
        <Dialog
          theme="no-padding"
          header-title="Ingresá el caso de test"
          opened={testOpened}
          onOpenedChanged={({ detail }) => setTestOpened(detail.value)}
          footerRenderer={() => (
            <Button theme="primary" onClick={() => setTestOpened(false)}>
              Cerrar
            </Button>
          )}
        >
          <Grid  style={{ width: '500px', maxWidth: '100%' }}>
            
            
          </Grid>
        </Dialog>
      </div>
    </>
  );
}