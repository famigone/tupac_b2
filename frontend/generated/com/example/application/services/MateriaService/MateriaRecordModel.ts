import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotNull as NotNull_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import type MateriaRecord_1 from "./MateriaRecord.js";
class MateriaRecordModel<T extends MateriaRecord_1 = MateriaRecord_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(MateriaRecordModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "java.lang.Long" } }));
    }
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get codigo(): StringModel_1 {
        return this[_getPropertyModel_1]("codigo", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get descripcion(): StringModel_1 {
        return this[_getPropertyModel_1]("descripcion", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
}
export default MateriaRecordModel;
