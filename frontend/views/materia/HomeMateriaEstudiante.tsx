
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { useEffect, useState } from 'react';
import { Grid } from "@hilla/react-components/Grid";
import { GridColumn } from "@hilla/react-components/GridColumn";
import MateriaCard from "Frontend/components/materia/MateriaCard";
import MateriaRecord from 'Frontend/generated/com/example/application/services/MateriaService/MateriaRecord';
import { MateriaService } from 'Frontend/generated/endpoints';
import MateriaForm from './MateriaForm';
import { ConfirmDialog } from '@hilla/react-components/ConfirmDialog.js';
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';
import { Icon } from '@hilla/react-components/Icon.js';
import { GridSortColumn } from '@hilla/react-components/GridSortColumn.js';
import { GridFilterColumn } from '@hilla/react-components/GridFilterColumn.js';
import { Box, Text, Heading, Button, Stack, Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export default function HomeMateriaEstudiante() {
  const [Materias, setMaterias] = useState<MateriaRecord[]>([]);
  const [selected, setSelected] = useState<MateriaRecord | null>();
  const [dialogOpened, setDialogOpened] = useState(false);
  const [deleteHabilitado, setDeleteHabilitado] = useState(true);

  useEffect(() => {
    MateriaService.findAllMaterias().then(setMaterias)
  }, []);


  const onMateriaDeleted = async () => {
    if (selected && selected.id) {
      try {
        // Llamar al servicio para eliminar el registro
        await MateriaService.delete(selected.id);
        //actualizamos el estado          
        setMaterias(Materias.filter(Materia => Materia.id != selected.id))
      } catch (error) {
        console.error("Error al eliminar el Materia:", error);
      }
    }
  };

  async function onMateriaSaved(Materia: MateriaRecord) {
    const saved = await MateriaService.save(Materia)
    if (Materia.id) {
      setMaterias(Materias => Materias.map(current => current.id === saved.id ? saved : current));
    } else {
      setMaterias(Materias => [...Materias, saved]);
    }
    setSelected(saved);


  }

  return (
    <>

      <div className="p-m  gap-m">
        <HorizontalLayout theme="spacing padding">
          {Materias.map((unaMateria: MateriaRecord, index: number) => (

            <Card
              direction={{ base: 'column', sm: 'row' }}
              overflow='hidden'
              variant='filled'
              
            >

              <Stack>
                <CardBody>
                <Box>
                  <Heading size='sm'>{unaMateria.codigo}</Heading>
                  <Text>{unaMateria.nombre}</Text>
                </Box>
                  

                  <Text py='2'>
                  {unaMateria.descripcion}
                  </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' colorScheme='blue' size='xs'>
                  
                  <Text> MATRICULARME</Text>
                </Button>
                </CardFooter>
              </Stack>

            </Card>
          ))}

        </HorizontalLayout>
      </div>
    </>
  );
}