import type AbstractEntity_1 from "./AbstractEntity.js";
import type Materia_1 from "./Materia.js";
import type Role_1 from "./Role.js";
interface User extends AbstractEntity_1 {
    materias: Array<Materia_1>;
    username: string;
    name: string;
    roles: Array<Role_1>;
    profilePicture: Array<number>;
}
export default User;
