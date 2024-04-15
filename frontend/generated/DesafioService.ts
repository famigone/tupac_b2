import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type DesafioRecord_1 from "./com/example/application/services/DesafioService/DesafioRecord.js";
import client_1 from "./connect-client.default.js";
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("DesafioService", "delete", { id }, init); }
async function findAllDesafios_1(init?: EndpointRequestInit_1): Promise<Array<DesafioRecord_1>> { return client_1.call("DesafioService", "findAllDesafios", {}, init); }
async function save_1(elDesafio: DesafioRecord_1, init?: EndpointRequestInit_1): Promise<DesafioRecord_1> { return client_1.call("DesafioService", "save", { elDesafio }, init); }
export { delete_1 as delete, findAllDesafios_1 as findAllDesafios, save_1 as save };
