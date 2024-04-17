import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type PracticoRecord_1 from "./com/example/application/services/PracticoService/PracticoRecord.js";
import client_1 from "./connect-client.default.js";
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("PracticoService", "delete", { id }, init); }
async function findAllPracticos_1(init?: EndpointRequestInit_1): Promise<Array<PracticoRecord_1>> { return client_1.call("PracticoService", "findAllPracticos", {}, init); }
async function findById_1(practicoid: number, init?: EndpointRequestInit_1): Promise<PracticoRecord_1> { return client_1.call("PracticoService", "findById", { practicoid }, init); }
async function save_1(laPractico: PracticoRecord_1, init?: EndpointRequestInit_1): Promise<PracticoRecord_1> { return client_1.call("PracticoService", "save", { laPractico }, init); }
export { delete_1 as delete, findAllPracticos_1 as findAllPracticos, findById_1 as findById, save_1 as save };
