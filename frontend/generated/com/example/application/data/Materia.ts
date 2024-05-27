import type AbstractEntity_1 from "./AbstractEntity.js";
import type Practico_1 from "./Practico.js";
import type User_1 from "./User.js";
interface Materia extends AbstractEntity_1 {
    id: number;
    practicos: Array<Practico_1>;
    users: Array<User_1>;
    nombre: string;
    codigo: string;
    descripcion: string;
}
export default Materia;
