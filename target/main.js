const ir_module = module(
	_import("env", "memory", memory(1)),
	_import("env", "log", func($.log, functype([i32, i32], []))),
	data(i32.const(0), "Hello, World!"),
	func(
		_export("hello"),
		functype([], []),
		i32.const(0),
		i32.const(13),
		call($.log)
	)
);

const buffer = module_to_buffer(ir_program);
Runtime.load_module(environment, buffer);
Runtime.exec_call(environment, "hello.hello");
