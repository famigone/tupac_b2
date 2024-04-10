import type AbstractEntity_1 from "./AbstractEntity.js";
import type Desafio_1 from "./Desafio.js";
import type Materia_1 from "./Materia.js";
import type User_1 from "./User.js";
interface Practico extends AbstractEntity_1 {
    id: number;
    descripcion: string;
    nombre: string;
    materia: Materia_1;
    fechaVisible: string;
    desafios: Array<Desafio_1>;
    users: Array<User_1>;
}
export default Practico;
