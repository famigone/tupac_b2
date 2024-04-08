import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotBlank as NotBlank_1, NotNull as NotNull_1, NumberModel as NumberModel_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import DesafioModel_1 from "./DesafioModel.js";
import type Practico_1 from "./Practico.js";
import UserModel_1 from "./UserModel.js";
class PracticoModel<T extends Practico_1 = Practico_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(PracticoModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { annotations: [{ name: "jakarta.persistence.Id" }], javaType: "java.lang.Long" } }));
    }
    get descripcion(): StringModel_1 {
        return this[_getPropertyModel_1]("descripcion", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1(), new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1(), new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get fechaVisible(): StringModel_1 {
        return this[_getPropertyModel_1]("fechaVisible", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.util.Date" } }));
    }
    get desafios(): ArrayModel_1<DesafioModel_1> {
        return this[_getPropertyModel_1]("desafios", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new DesafioModel_1(parent, key, false), { meta: { annotations: [{ name: "jakarta.persistence.OneToMany" }], javaType: "java.util.List" } }));
    }
    get users(): ArrayModel_1<UserModel_1> {
        return this[_getPropertyModel_1]("users", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new UserModel_1(parent, key, false), { meta: { annotations: [{ name: "jakarta.persistence.ManyToMany" }], javaType: "java.util.List" } }));
    }
}
export default PracticoModel;
