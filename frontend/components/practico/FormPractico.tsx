import { TextField } from "@hilla/react-components/TextField";
import { Select, SelectItem } from "@hilla/react-components/Select";
import { Button } from "@hilla/react-components/Button";
import { useForm, useFormPart } from "@hilla/react-form";
import { MateriaService, PracticoService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import PracticoRecord from "Frontend/generated/com/example/application/services/PracticoService/PracticoRecord";
import PracticoRecordModel from "Frontend/generated/com/example/application/services/PracticoService/PracticoRecordModel";
import { Icon } from "@hilla/react-components/Icon.js";
import { NotEmpty } from "@hilla/form/Validators.js";
import { DatePicker } from "@hilla/react-components/DatePicker.js";
import { TextArea } from "@hilla/react-components/TextArea.js";

interface PracticoFormProps {
    Practico?: PracticoRecord | null;
    onSubmit?: (Practico: PracticoRecord) => Promise<void>;
}

export default function PracticoForm({ Practico, onSubmit }: PracticoFormProps) {
    const [materias, setMaterias] = useState<SelectItem[]>([]);
    useEffect(() => {
        getMaterias();
    }, []);

    async function getMaterias() {
        const materias = await MateriaService.findAllMaterias();
        const materiasItems = materias.map(materia => {
            return {
                label: materia.nombre,
                value: materia.id + ""
            };
        });
        setMaterias(materiasItems);

    }

    const [Practicos, setPracticos] = useState<SelectItem[]>([]);

    const { field, model, submit, reset, read } = useForm(PracticoRecordModel, { onSubmit });
    const eliminarPractico = async () => {
        if (Practico && Practico.id) {
            try {
                // Llamar al servicio para eliminar el registro
                await PracticoService.delete(Practico.id);

                // Si la eliminación es exitosa, ejecutar la función onSubmit para actualizar el estado de la lista de Practicoes
                if (onSubmit) {
                    await onSubmit(Practico);
                }

                // Limpiar el formulario después de eliminar el registro
                reset();
            } catch (error) {
                console.error("Error al eliminar el Practico:", error);
            }
        }
    };

    useEffect(() => {
        read(Practico);
    }, [Practico]);

    //control de vacíos del lado del cliente

    const nombre  =  useFormPart(model.nombre);
    

    useEffect(() => {
        nombre.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un nombre'
            }));
        
    }, []);


    return (
        <>
            <div className="flex gap-s items-start"></div>
            <Select label="Materia" items={materias} {...field(model.materia.id)} />
                
            <div className="flex gap-s items-start">
                <TextField label="Nombre" {...field(model.nombre)} />
                <TextArea label="Descripción" {...field(model.descripcion)} />
                <DatePicker label="Visible desde" {...field(model.fechaVisible)} />                                    

            </div>

            <div className="flex gap-m"  >
                <Button onClick={submit} theme="primary small"> <Icon icon="vaadin:arrow-circle-down" />
                    Guardar</Button>

            </div>

        </>
    );

}