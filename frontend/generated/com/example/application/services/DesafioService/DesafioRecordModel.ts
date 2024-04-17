import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotNull as NotNull_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import type DesafioRecord_1 from "./DesafioRecord.js";
import PracticoRecordModel_1 from "./PracticoRecordModel.js";
class DesafioRecordModel<T extends DesafioRecord_1 = DesafioRecord_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(DesafioRecordModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "java.lang.Long" } }));
    }
    get narrativa(): StringModel_1 {
        return this[_getPropertyModel_1]("narrativa", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get ordenamiento(): NumberModel_1 {
        return this[_getPropertyModel_1]("ordenamiento", (parent, key) => new NumberModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.Integer" } }));
    }
    get practico(): PracticoRecordModel_1 {
        return this[_getPropertyModel_1]("practico", (parent, key) => new PracticoRecordModel_1(parent, key, false));
    }
}
export default DesafioRecordModel;
