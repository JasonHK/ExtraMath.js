/**
 * Calculates the remainder of a division using the floored division algorithm.
 * 
 * @param dividend The dividend number.
 * @param divisor  The divisor number.
 */
export function modulo(dividend: number, divisor: number): number
{
    return (((dividend % divisor) + divisor) % divisor);
}

/**
 * An alias of {@link modulo}.
 */
export const mod = modulo;

export default modulo;
