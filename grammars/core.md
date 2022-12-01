# Core Grammar

## Comments

### Single Line

```
-- Single line comment
---
Multi line comment
---
```

## Boolean Literals

```
true
false
```

## Integer Literals

```
static Int

proc empty<t>() -> List<t> { ... }
proc empty[t]() -> List[t] { ... }
proc empty() -> List(t) { ... }

enum List<t> {
	Empty,
	Cons { t, ref List<t> }
}

enum List[t] {
	Empty,
	Cons { t, ref List[t] }
}

enum List(t) {
	Empty,
	Const { t, ref List(t) }
}

struct {}
[Int, 64]
[Int = Int]

-- 64 element array
[Int, 64]

--
static mut ref [Int]



export const square = \(a: Int) -> Int { a * a }

export const sort = proc (array: mut ref [a]) -> {} where PartialOrder(a) { ... }

export proc sort(array: mut ref[a]) -> {} where PartialOrder(a) { ... }

```

```
export const Array = proc (t: static Type) -> static Type {
	type struct {
		@public.read item_size: static UInt32 = Type.size_of(t),
		@public.read length: UInt32,
		@public.read capacity: UInt32,
		@private data: UInt32,
	}
}

@public			-- public read/write  private read/write
@public.read    -- public read        private read/write
@public.write   -- public write	      private read/write
@private        -- public             private read/write
@private.read   -- public             private read
@private.write  -- public             private write


type Point = struct<{
	x: number,
	y: number,
}>

type Option<T> = union<{
	none: {},
	some: { value: T }
}>
```

