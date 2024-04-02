import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type MateriaRecord_1 from "./com/example/application/services/MateriaService/MateriaRecord.js";
import client_1 from "./connect-client.default.js";
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("MateriaService", "delete", { id }, init); }
async function findAllMaterias_1(init?: EndpointRequestInit_1): Promise<Array<MateriaRecord_1>> { return client_1.call("MateriaService", "findAllMaterias", {}, init); }
async function save_1(laMateria: MateriaRecord_1, init?: EndpointRequestInit_1): Promise<MateriaRecord_1> { return client_1.call("MateriaService", "save", { laMateria }, init); }
export { delete_1 as delete, findAllMaterias_1 as findAllMaterias, save_1 as save };
