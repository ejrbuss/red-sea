export function match(union, cases) {
    const tag = Object.keys(union)[0];
    const matchedCase = cases[tag];
    if (matchedCase) {
        return matchedCase(union[tag]);
    }
}
const Option = {
    None: { None: {} },
    Some: (value) => ({ Some: value }),
};
const x = Option.None;
const y = Option.Some(4);
match(x, {
    None: () => console.log("None"),
    Some: (x) => console.log("Some"),
});
match(y, {
    None: () => console.log("None"),
    Some: (x) => console.log("Some"),
});
