# red-sea

```
-- Variables/Conts
var name: type = value   -- re-assignable value
const name: type = value -- un-assignable value

-- Type Declarations
struct { ...fields }
enum { ...variants }
proc (params) -> return_type {}
proto name(type_params) {}
impl name(type_args) {}

-- Type Expressions
var x: ref t
var x: mut t
var x: mut ref t
var x: static t
var x: static ref t
```

File Structure
```
dist/
deps/
src/
project.rc
```

project.rc
```
export const project = Project {
	name = "Example",
	version = "0.0.1",
	deps = [],
}
```

Library notes
```
export proc helloComponent(name: Str) -> ref UI.Component {
	UI.Container(title = name, children = [
		UI.Button("Click me!", onClick = proc (event) -> {
			event.target.text = "I have been clicked!"
		})
	])
}

Array(Vec3(Float32))
Array<Vec3<Float32>>
Array[Vec3[Float32]]

proc floor(n: x) where x <= Int32 | Float64 | Float32 | Float64 {
	...
}

Type.of(floor) == proc (x) where x <= Int32 | Float64 | Float32 | Float64

BTree(Int)
BTree<Int>
BTree[Int]

proto Iter<Iterable, Iterator> {}


impl Iter<BTree<Item>, BTree.Iterator, Item> {

}

proto Iter(iterable, iterator, item) {}

impl Iter(BTree(a), BTree.Iterator(a), a) where PartialOrder(a) {

}

impl<a> Iter<BTree<a>, BTree.Iterator<a>, a> where PartialOrder<a> {

}

struct Out {
	@builtin(position) clip_position: Vec4(Float32)
}

@vertex
proc vertex_main(@builtin(position) vertex_index: Uint32) -> Out {
	const x = Float32 { 1 - Int32 { in_vertex_index } } * 0.5;
	const y = Float32 { Int32 { in_vertex_index & 1u } * 2 - 1 } * 0.5;
	return Out { clip_position = Vec4(Float32) { x, y, 0, 1 } }
}

// Vertex shader

struct VertexOutput {
    [[builtin(position)]] clip_position: vec4<f32>;
};

[[stage(vertex)]]
fn vs_main(
    [[builtin(vertex_index)]] in_vertex_index: u32,
) -> VertexOutput {
    var out: VertexOutput;
    let x = f32(1 - i32(in_vertex_index)) * 0.5;
    let y = f32(i32(in_vertex_index & 1u) * 2 - 1) * 0.5;
    out.clip_position = vec4<f32>(x, y, 0.0, 1.0);
    return out;
}

```


