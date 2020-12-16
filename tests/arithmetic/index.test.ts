import * as Arithmetic from "#src/arithmetic/index";

it("should export the specified members", () =>
{
    expect(Arithmetic).toContainAllKeys(
        [
            "modulo",
            "mod",
        ]);
});
