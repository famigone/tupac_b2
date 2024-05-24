import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { useEffect, useState } from 'react';
import { Grid } from "@hilla/react-components/Grid";
import { GridColumn } from "@hilla/react-components/GridColumn";

import PracticoRecord from 'Frontend/generated/com/example/application/services/PracticoService/PracticoRecord';
import { PracticoService } from 'Frontend/generated/endpoints';
import PracticoForm from '../../components/practico/FormPractico';
import { ConfirmDialog } from '@hilla/react-components/ConfirmDialog.js';
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';
import { Icon } from '@hilla/react-components/Icon.js';
import { GridSortColumn } from '@hilla/react-components/GridSortColumn.js';
import { GridFilterColumn } from '@hilla/react-components/GridFilterColumn.js';
import { Link } from 'react-router-dom';

export default function HomePracticoEstudiante() {
  const [Practicos, setPracticos] = useState<PracticoRecord[]>([]);
  const [selected, setSelected] = useState<PracticoRecord | null>();
  const [dialogOpened, setDialogOpened] = useState(false);
  const [deleteHabilitado, setDeleteHabilitado] = useState(true);

  useEffect(() => {
    PracticoService.findAllPracticos().then(setPracticos)
  }, []);


  const onPracticoDeleted = async () => {
    if (selected && selected.id) {
      try {
        // Llamar al servicio para eliminar el registro
        await PracticoService.delete(selected.id);
        //actualizamos el estado          
        setPracticos(Practicos.filter(Practico => Practico.id != selected.id))
      } catch (error) {
        console.error("Error al eliminar el Practico:", error);
      }
    }
  };

  async function onPracticoSaved(Practico: PracticoRecord) {
    console.log("Materia " + Practico.materia.id)
    console.log("Practico " + Practico.nombre)
    const saved = await PracticoService.save(Practico)
    if (Practico.id) {
      setPracticos(Practicos => Practicos.map(current => current.id === saved.id ? saved : current));
    } else {
      setPracticos(Practicos => [...Practicos, saved]);
    }
    setSelected(saved);


  }

  return (
    <>
      <div className="p-m  gap-m border: 2px card">
        <PracticoForm
          Practico={selected}
          onSubmit={onPracticoSaved}
        />
      </div>
      <div className="p-m  gap-m">
        <Grid
          theme="row-stripes"
          allRowsVisible
          items={Practicos}
          onActiveItemChanged={e => setSelected(e.detail.value)}
          selectedItems={[selected]}>
          <GridFilterColumn path="materia.nombre" header="MATERIA" />
          <GridFilterColumn path="nombre" header="NOMBRE" />
          <GridFilterColumn path="descripcion" header="DESCRIPCIÓN" />
          <GridFilterColumn path="fechaVisible" header="VISIBLE DESDE" />
        </Grid>

        <div style={{ margin: '3px' }} className="flex gap-m gap-s">

          <Button disabled={selected == null} theme="primary error small" onClick={() => setDialogOpened(true)} ><Icon icon="vaadin:close" /> Eliminar</Button>
          <Button onClick={() => setSelected(null)} theme="primary small" ><Icon icon="vaadin:refresh" />
            Nuevo</Button>

          <Link to={`/desafios/${selected?.id}`}>
            <Button theme="primary small" ><Icon icon="vaadin:calc" /> Desafios</Button>
          </Link>
        </div>
        <ConfirmDialog
          header="Desea eliminar el Practico?"
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

      </div>
    </>
  );
}