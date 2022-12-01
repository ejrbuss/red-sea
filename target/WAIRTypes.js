export const i32 = {
    type: "i32",
    const(value) {
        return { opcode: "i32.const", value };
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
};
export const i64 = {
    type: "i64",
    const(value) {
        return { opcode: "i64.const", value };
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
};
export const f32 = {
    type: "f32",
    const(value) {
        return { opcode: "f32.const", value };
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
};
export const f64 = {
    type: "f64",
    const(value) {
        return { opcode: "f64.const", value };
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
};
export const v128 = {
    type: "v128",
    const(value) {
        return { opcode: "vi128.const", value };
    },
    not: { opcode: "v128.not" },
    and: { opcode: "v128.and" },
    andnot: { opcode: "v128.andnot" },
    or: { opcode: "v128.or" },
    xor: { opcode: "v128.xor" },
    bitselect: { opcode: "v128.bitselect" },
    any_true: { opcode: "v128.any_true" },
};
export const i8x16 = {
    shuffle(laneIndex) {
        return { opcode: "i8x16.shuffle", laneIndex };
    },
    swizzle: { opcode: "i8x16.swizzle" },
    splat: { opcode: "i8x16.splat" },
};
export const i16x8 = {
    splat: { opcode: "i16x8.splat" },
};
export const i32x4 = {
    splat: { opcode: "i32x4.splat" },
};
export const i64x2 = {
    splat: { opcode: "i64x2.splat" },
};
export const f32x4 = {
    splat: { opcode: "f32x4.splat" },
};
export const f64x2 = {
    splat: { opcode: "f64x2.splat" },
};
export const funcref = { type: "funcref" };
export const externref = { type: "externref" };
export function functype(params, result) {
    return { type: "functype", params, result };
}
export function tabletype(limits, reftype) {
    return { type: "tabletype", limits, reftype };
}
export function memtype(limits) {
    return { type: "memtype", limits };
}
export function globaltype(mut, valtype) {
    return { type: "globaltype", mut, valtype };
}
export function label(name) {
    return { label: name };
}
export const unreachable = { opcode: "unreachable" };
export const nop = { opcode: "nop" };
export function block(blockType, instr) {
    return { opcode: "block", blockType, instr };
}
export function loop(blockType, instr) {
    return { opcode: "loop", blockType, instr };
}
export function _if(blockType, thenInstr, elseInstr) {
    return { opcode: "if", blockType, thenInstr, elseInstr };
}
export function br(label) {
    return { opcode: "br", label };
}
export function br_if(label) {
    return { opcode: "br_if", label };
}
export function br_table(labels, defaultLabel) {
    return { opcode: "br_table", labels, defaultLabel };
}
export const _return = { opcode: "return" };
export function call(func) {
    return { opcode: "call", func };
}
export function call_indirect(table, funcType) {
    return { opcode: "call_indirect", table, funcType };
}
