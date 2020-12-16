/**
 * Calculates the remainder of a division using the floored division algorithm.
 * 
 * @since 1.0.0
 * 
 * @param dividend The dividend number.
 * @param divisor  The divisor number.
 * @returns The remainder number.
 */
export function modulo(dividend: number, divisor: number): number
{
    return (((dividend % divisor) + divisor) % divisor);
}

/**
 * An alias of {@linkcode modulo}.
 * 
 * @since 1.0.0
 */
export const mod = modulo;

export default modulo;
