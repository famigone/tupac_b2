import { TextField } from "@hilla/react-components/TextField";
import { Select, SelectItem } from "@hilla/react-components/Select";
import { Button } from "@hilla/react-components/Button";
import { useForm, useFormPart } from "@hilla/react-form";
import { MateriaService, DesafioService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import DesafioRecord from "Frontend/generated/com/example/application/services/DesafioService/DesafioRecord";
import DesafioRecordModel from "Frontend/generated/com/example/application/services/DesafioService/DesafioRecordModel";
import { Icon } from "@hilla/react-components/Icon.js";
import { NotEmpty } from "@hilla/form/Validators.js";
import { DatePicker } from "@hilla/react-components/DatePicker.js";
import { TextArea } from "@hilla/react-components/TextArea.js";
import PracticoRecord from "Frontend/generated/com/example/application/services/DesafioService/PracticoRecord";

interface DesafioFormProps {
    Practico?: PracticoRecord | null;
    Desafio?: DesafioRecord | null;
    onSubmit?: (Desafio: DesafioRecord) => Promise<void>;
}

export default function FormDesafio({ Practico, Desafio, onSubmit }: DesafioFormProps) {


    const { field, model, submit, reset, read } = useForm(DesafioRecordModel, { onSubmit });

    useEffect(() => {
        read(Desafio);
    }, [Desafio]);

    //control de vacíos del lado del cliente

    const narrativa = useFormPart(model.narrativa);

    useEffect(() => {
        narrativa.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese una narrativa'
            }));
    }, []);

    
    return (
        <>
            <div className="flex gap-s items-start">
                <TextField label="Narrativa" {...field(model.narrativa)} />
                <TextField label="Orden" {...field(model.ordenamiento )} />
            </div>

            <div className="flex gap-m"  >
                <Button onClick={submit} theme="primary small"> <Icon icon="vaadin:arrow-circle-down" />
                    Guardar
                </Button>
            </div>

        </>
    );

}