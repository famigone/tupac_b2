import type AbstractEntity_1 from "./AbstractEntity.js";
import type Practico_1 from "./Practico.js";
import type User_1 from "./User.js";
interface Desafio extends AbstractEntity_1 {
    id: number;
    narrativa: string;
    practico: Practico_1;
    users: Array<User_1>;
    ordenamiento: number;
    tpId: number;
}
export default Desafio;
