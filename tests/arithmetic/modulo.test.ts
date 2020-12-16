import { modulo, mod } from "#src/arithmetic/modulo";

describe(nameof(modulo), () =>
{
    it("should return a positive remainder when the divisor is a positive integer", () =>
    {
        expect(modulo(-33, 32)).toBe(31);
        expect(modulo(-32, 32)).toBe(0);
        expect(modulo(-31, 32)).toBe(1);
        expect(modulo(-1, 32)).toBe(31);
        expect(modulo(0, 32)).toBe(0);
        expect(modulo(1, 32)).toBe(1);
        expect(modulo(31, 32)).toBe(31);
        expect(modulo(32, 32)).toBe(0);
        expect(modulo(33, 32)).toBe(1);
    });

    it("should return a negative remainder when the divisor is a negative integer", () =>
    {
        expect(modulo(-33, -32)).toBe(-1);
        expect(modulo(-32, -32)).toBe(-0);
        expect(modulo(-31, -32)).toBe(-31);
        expect(modulo(-1, -32)).toBe(-1);
        expect(modulo(0, -32)).toBe(-0);
        expect(modulo(1, -32)).toBe(-31);
        expect(modulo(31, -32)).toBe(-1);
        expect(modulo(32, -32)).toBe(-0);
        expect(modulo(33, -32)).toBe(-31);
    });
});

describe(nameof(mod), () =>
{
    it(`should be an alias of \`${ nameof(modulo) }\``, () =>
    {
        expect(mod).toStrictEqual(modulo);
    });
});
