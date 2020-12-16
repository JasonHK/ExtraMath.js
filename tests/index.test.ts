import * as ExtraMath from "#src/index";

it("should export the specified members", () =>
{
    expect(ExtraMath).toContainAllKeys(
        [
            "modulo",
            "mod",
        ]);
});
