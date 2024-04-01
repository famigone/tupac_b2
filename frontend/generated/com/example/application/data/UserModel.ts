import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import RoleModel_1 from "./RoleModel.js";
import type User_1 from "./User.js";
class UserModel<T extends User_1 = User_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(UserModel);
    get username(): StringModel_1 {
        return this[_getPropertyModel_1]("username", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get name(): StringModel_1 {
        return this[_getPropertyModel_1]("name", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get roles(): ArrayModel_1<RoleModel_1> {
        return this[_getPropertyModel_1]("roles", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new RoleModel_1(parent, key, false), { meta: { javaType: "java.util.Set" } }));
    }
    get profilePicture(): ArrayModel_1<NumberModel_1> {
        return this[_getPropertyModel_1]("profilePicture", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "byte" } }), { meta: { javaType: "byte[]" } }));
    }
}
export default UserModel;
