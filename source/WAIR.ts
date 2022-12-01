export type I32Type = { type: "i32" };
export type I64Type = { type: "i64" };
export type F32Type = { type: "f32" };
export type F64Type = { type: "f64" };
export type NumType = I32Type | I64Type | F32Type | F64Type;
export type V128Type = { type: "v128" };
export type VecType = V128Type;
export type FuncRefType = { type: "funcref" };
export type ExternRefType = { type: "externref" };
export type RefType = FuncRefType | ExternRefType;
export type ValType = NumType | VecType | RefType;
export type ResultType = ValType[];
export type FuncType = {
	type: "functype";
	params: ResultType;
	results: ResultType;
};
export type Limits = { min: number; max?: number };
export type TableType = { type: "tabletype"; limits: Limits; reftype: RefType };
export type MemType = { type: "memtype"; limits: Limits };
export type GlobalType = { type: "globaltype"; mut: boolean; valtype: ValType };
export type BlockType = FuncType | ValType;

export type Instruction =
	| { opcode: "i32.const"; value: number }
	| { opcode: "i64.const"; value: number }
	| { opcode: "f32.const"; value: number }
	| { opcode: "f64.const"; value: number };

export const i32 = {
	type: "i32",
	const(value: number) {
		return { opcode: "i32.const", value } as const;
	},
	clz: { opcode: "i32.clz" },
	ctz: { opcode: "i32.ctz" },
	popcnt: { opcode: "i32.popcnt" },
	add: { opcode: "i32.add" },
	sub: { opcode: "i32.sub" },
	mul: { opcode: "i32.mul" },
	div_u: { opcode: "i32.div_u" },
	div_s: { opcode: "i32.div_s" },
	rem_u: { opcode: "i32.rem_u" },
	rem_s: { opcode: "i32.rem_s" },
	and: { opcode: "i32.and" },
	or: { opcode: "i32.or" },
	xor: { opcode: "i32.xor" },
	shl: { opcode: "i32.shl" },
	shr_u: { opcode: "i32.shr_u" },
	shr_s: { opcode: "i32.shr_s" },
	rotl: { opcode: "i32.rotl" },
	rotr: { opcode: "i32.rotr" },
	eqz: { opcode: "i32.eqz" },
	eq: { opcode: "i32.eq" },
	ne: { opcode: "i32.ne" },
	lt_u: { opcode: "i32.lt_u" },
	lt_s: { opcode: "i32.lt_s" },
	gt_u: { opcode: "i32.gt_u" },
	gt_s: { opcode: "i32.gt_s" },
	le_u: { opcode: "i32.le_u" },
	le_s: { opcode: "i32.le_s" },
	ge_u: { opcode: "i32.ge_u" },
	ge_s: { opcode: "i32.ge_s" },
	extend8s: { opcode: "i32.extend8s" },
	extend16s: { opcode: "i32.extend16s" },
	wrap_i64: { opcode: "i32.wrap_i64" },
	trunc_f32_u: { opcode: "i32.trunc_f32_u" },
	trunc_f32_s: { opcode: "i32.trunc_f32_s" },
	trunc_f64_u: { opcode: "i32.trunc_f64_u" },
	trunc_f64_s: { opcode: "i32.trunc_f64_s" },
	trunc_sat_f32_u: { opcode: "i32.trunc_sat_f32_u" },
	trunc_sat_f32_s: { opcode: "i32.trunc_sat_f32_s" },
	trunc_sat_f64_u: { opcode: "i32.trunc_sat_f64_u" },
	trunc_sat_f64_s: { opcode: "i32.trunc_sat_f64_s" },
	reinterpret_f32: { opcode: "i32.reinterpret_f32" },
	reinterpret_f64: { opcode: "i32.reinterpret_f64" },
} as const;

export const i64 = {
	type: "i64",
	const(value: number) {
		return { opcode: "i64.const", value } as const;
	},
	clz: { opcode: "i64.clz" },
	ctz: { opcode: "i64.ctz" },
	popcnt: { opcode: "i64.popcnt" },
	add: { opcode: "i64.add" },
	sub: { opcode: "i64.sub" },
	mul: { opcode: "i64.mul" },
	div_u: { opcode: "i64.div_u" },
	div_s: { opcode: "i64.div_s" },
	rem_u: { opcode: "i64.rem_u" },
	rem_s: { opcode: "i64.rem_s" },
	and: { opcode: "i64.and" },
	or: { opcode: "i64.or" },
	xor: { opcode: "i64.xor" },
	shl: { opcode: "i64.shl" },
	shr_u: { opcode: "i64.shr_u" },
	shr_s: { opcode: "i64.shr_s" },
	rotl: { opcode: "i64.rotl" },
	rotr: { opcode: "i64.rotr" },
	eqz: { opcode: "i64.eqz" },
	eq: { opcode: "i64.eq" },
	ne: { opcode: "i64.ne" },
	lt_u: { opcode: "i64.lt_u" },
	lt_s: { opcode: "i64.lt_s" },
	gt_u: { opcode: "i64.gt_u" },
	gt_s: { opcode: "i64.gt_s" },
	le_u: { opcode: "i64.le_u" },
	le_s: { opcode: "i64.le_s" },
	ge_u: { opcode: "i64.ge_u" },
	ge_s: { opcode: "i64.ge_s" },
	extend8s: { opcode: "i64.extend8s" },
	extend16s: { opcode: "i64.extend16s" },
	extend32s: { opcode: "i64.extend32s" },
	extend_i32_u: { opcode: "i64.extend_i32_u" },
	extend_i32_s: { opcode: "i64.extend_i32_s" },
	trunc_f32_u: { opcode: "i64.trunc_f32_u" },
	trunc_f32_s: { opcode: "i64.trunc_f32_s" },
	trunc_f64_u: { opcode: "i64.trunc_f64_u" },
	trunc_f64_s: { opcode: "i64.trunc_f64_s" },
	trunc_sat_f32_u: { opcode: "i64.trunc_sat_f32_u" },
	trunc_sat_f32_s: { opcode: "i64.trunc_sat_f32_s" },
	trunc_sat_f64_u: { opcode: "i64.trunc_sat_f64_u" },
	trunc_sat_f64_s: { opcode: "i64.trunc_sat_f64_s" },
	reinterpret_f32: { opcode: "i64.reinterpret_f32" },
	reinterpret_f64: { opcode: "i64.reinterpret_f64" },
} as const;

export const f32 = {
	type: "f32",
	const(value: number) {
		return { opcode: "f32.const", value } as const;
	},
	abs: { opcode: "f32.abs" },
	neg: { opcode: "f32.neg" },
	sqrt: { opcode: "f32.sqrt" },
	ceil: { opcode: "f32.ceil" },
	floor: { opcode: "f32.floor" },
	trunc: { opocode: "f32.trunc" },
	nearest: { opcode: "f32.nearest" },
	add: { opcode: "f32.add" },
	sub: { opcode: "f32.sub" },
	mul: { opcode: "f32.mul" },
	div: { opcode: "f32.div" },
	min: { opcode: "f32.min" },
	max: { opcode: "f32.max" },
	copysign: { opcode: "f32.copysign" },
	eq: { opcode: "f32.eq" },
	ne: { opcode: "f32.ne" },
	lt: { opcode: "f32.lt" },
	gt: { opcode: "f32.gt" },
	le: { opcode: "f32.le" },
	ge: { opcode: "f32.ge" },
	demote_f64: { opcode: "f32.demote_f64" },
	convert_i32_u: { opcode: "f32.convert_i32_u" },
	convert_i32_s: { opcode: "f32.convert_i32_s" },
	convert_i64_u: { opcode: "f32.convert_i64_u" },
	convert_i64_s: { opcode: "f32.convert_i64_s" },
	reinterpret_i32: { opcode: "f32.reinterpret_i32" },
	reinterpret_i64: { opcode: "f32.reinterpret_i64" },
} as const;

export const f64 = {
	type: "f64",
	const(value: number) {
		return { opcode: "f64.const", value } as const;
	},
	abs: { opcode: "f64.abs" },
	neg: { opcode: "f64.neg" },
	sqrt: { opcode: "f64.sqrt" },
	ceil: { opcode: "f64.ceil" },
	floor: { opcode: "f64.floor" },
	trunc: { opocode: "f64.trunc" },
	nearest: { opcode: "f64.nearest" },
	add: { opcode: "f64.add" },
	sub: { opcode: "f64.sub" },
	mul: { opcode: "f64.mul" },
	div: { opcode: "f64.div" },
	min: { opcode: "f64.min" },
	max: { opcode: "f64.max" },
	copysign: { opcode: "f64.copysign" },
	eq: { opcode: "f64.eq" },
	ne: { opcode: "f64.ne" },
	lt: { opcode: "f64.lt" },
	gt: { opcode: "f64.gt" },
	le: { opcode: "f64.le" },
	ge: { opcode: "f64.ge" },
	promote_f32: { opcode: "f64.promote_f32" },
	convert_i32_u: { opcode: "f64.convert_i32_u" },
	convert_i32_s: { opcode: "f64.convert_i32_s" },
	convert_i64_u: { opcode: "f64.convert_i64_u" },
	convert_i64_s: { opcode: "f64.convert_i64_s" },
	reinterpret_i32: { opcode: "f64.reinterpret_i32" },
	reinterpret_i64: { opcode: "f64.reinterpret_i64" },
} as const;

export const v128 = {
	type: "v128",
	const(value: number) {
		return { opcode: "vi128.const", value } as const;
	},
	not: { opcode: "v128.not" },
	and: { opcode: "v128.and" },
	andnot: { opcode: "v128.andnot" },
	or: { opcode: "v128.or" },
	xor: { opcode: "v128.xor" },
	bitselect: { opcode: "v128.bitselect" },
	any_true: { opcode: "v128.any_true" },
} as const;

export const i8x16 = {
	shuffle(laneIndex: number) {
		return { opcode: "i8x16.shuffle", laneIndex } as const;
	},
	swizzle: { opcode: "i8x16.swizzle" },
	splat: { opcode: "i8x16.splat" },
} as const;

export const i16x8 = {
	splat: { opcode: "i16x8.splat" },
} as const;

export const i32x4 = {
	splat: { opcode: "i32x4.splat" },
} as const;

export const i64x2 = {
	splat: { opcode: "i64x2.splat" },
} as const;

export const f32x4 = {
	splat: { opcode: "f32x4.splat" },
} as const;

export const f64x2 = {
	splat: { opcode: "f64x2.splat" },
} as const;

export const funcref = { type: "funcref" } as const;

export const externref = { type: "externref" } as const;

export function functype(params: ResultType, result: ResultType) {
	return { type: "functype", params, result } as const;
}

export function tabletype(limits: Limits, reftype: RefType) {
	return { type: "tabletype", limits, reftype };
}

export function memtype(limits: Limits) {
	return { type: "memtype", limits };
}

export function globaltype(mut: boolean, valtype: ValType) {
	return { type: "globaltype", mut, valtype };
}

export function label(name: string) {
	return { label: name } as const;
}

export type Label = ReturnType<typeof label>;

export type Func = {};
export type Table = {};

export const unreachable = { opcode: "unreachable" } as const;

export const nop = { opcode: "nop" } as const;

export function block(blockType: BlockType, instr: Instruction[]) {
	return { opcode: "block", blockType, instr } as const;
}

export function loop(blockType: BlockType, instr: Instruction[]) {
	return { opcode: "loop", blockType, instr } as const;
}

export function _if(
	blockType: BlockType,
	thenInstr: Instruction[],
	elseInstr: Instruction[]
) {
	return { opcode: "if", blockType, thenInstr, elseInstr } as const;
}

export function br(label: Label) {
	return { opcode: "br", label } as const;
}

export function br_if(label: Label) {
	return { opcode: "br_if", label } as const;
}

export function br_table(labels: Label[], defaultLabel: Label) {
	return { opcode: "br_table", labels, defaultLabel };
}

export const _return = { opcode: "return" } as const;

export function call(func: Func) {
	return { opcode: "call", func };
}

export function call_indirect(table: Table, funcType: FuncType) {
	return { opcode: "call_indirect", table, funcType };
}
