import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotNull as NotNull_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import MateriaModel_1 from "../../data/MateriaModel.js";
import type PracticoRecord_1 from "./PracticoRecord.js";
class PracticoRecordModel<T extends PracticoRecord_1 = PracticoRecord_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(PracticoRecordModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "java.lang.Long" } }));
    }
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get descripcion(): StringModel_1 {
        return this[_getPropertyModel_1]("descripcion", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get fechaVisible(): StringModel_1 {
        return this[_getPropertyModel_1]("fechaVisible", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.util.Date" } }));
    }
    get materia(): MateriaModel_1 {
        return this[_getPropertyModel_1]("materia", (parent, key) => new MateriaModel_1(parent, key, false));
    }
}
export default PracticoRecordModel;
