import "./context-BG0dlajy.js";
import { tscEmit } from "./tsc-BLPzoCMq.js";
import process from "node:process";
import { createBirpc } from "birpc";

//#region src/tsc/worker.ts
const functions = { tscEmit };
createBirpc(functions, {
	post: (data) => process.send(data),
	on: (fn) => process.on("message", fn)
});

//#endregion
export {  };