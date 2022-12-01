// import { WASMIR } from "./WAIRTypes.js";

// const ir_module = WASMIR.Module(
// 	WASMIR.Import("env", "memory", WASMIR.Memory(1)),
// 	WASMIR.Import("env", "log", WASMIR.Func(WASMIR.$.log, WASMIR.Param(WASMIR.I32, WASMIR.I32))),

// 	WASMIR.Data(WASMIR.I32.Const(0), "Hello, World!")

// 	WASMIR.Func(WASMIR.export("hello")
// 		WASMIR.I32.Const(0)
// 		WASMIR.I32.Const(13),
// 		WASMIR.Call(WASMIR.$.log)
// 	),
// );

// const environment = Runtime.Environment();
// const emitter = WASMIR.Emitter();
// WASMIR.emit_module(emitter, ir_program);
// const buffer = Emitter.to_buffer(emitter);
// Runtime.load_module(environment, buffer);
// Runtime.exec_call(environment, "hello.hello");
