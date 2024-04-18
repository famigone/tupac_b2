import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotBlank as NotBlank_1, NotNull as NotNull_1, NumberModel as NumberModel_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import type Desafio_1 from "./Desafio.js";
import PracticoModel_1 from "./PracticoModel.js";
import UserModel_1 from "./UserModel.js";
class DesafioModel<T extends Desafio_1 = Desafio_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(DesafioModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { annotations: [{ name: "jakarta.persistence.Id" }], javaType: "java.lang.Long" } }));
    }
    get narrativa(): StringModel_1 {
        return this[_getPropertyModel_1]("narrativa", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1(), new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get practico(): PracticoModel_1 {
        return this[_getPropertyModel_1]("practico", (parent, key) => new PracticoModel_1(parent, key, false, { meta: { annotations: [{ name: "jakarta.persistence.ManyToOne" }] } }));
    }
    get users(): ArrayModel_1<UserModel_1> {
        return this[_getPropertyModel_1]("users", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new UserModel_1(parent, key, false), { meta: { annotations: [{ name: "jakarta.persistence.ManyToMany" }], javaType: "java.util.List" } }));
    }
    get ordenamiento(): NumberModel_1 {
        return this[_getPropertyModel_1]("ordenamiento", (parent, key) => new NumberModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.Integer" } }));
    }
}
export default DesafioModel;
