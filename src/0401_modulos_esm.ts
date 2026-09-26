/**
 * ============================================================================
 * RETO 0401: Modulos ESM — export / import nombrado + por defecto
 * Semana 04 PM — Modulos ESM | Programacion Movil 3° BGU (UETS)
 * ============================================================================
 *
 * MISION:
 * Este reto es la puerta de entrada a la modularizacion ESM de la futura
 * app movil del Bar Salesiano: un mini-modulo financiero con exports
 * nombrados y un export por defecto.
 *
 * INSTRUCCIONES:
 * 1. Completa el TODO 1 (export nombrado: calcularSubtotal).
 * 2. Completa el TODO 2 (export por defecto: calcularTotalConIva).
 * 3. Ejecuta en tu terminal: `pnpm run start:0401` para verificar.
 *
 * NOTA ESM:
 * Este proyecto usa `"type": "module"` en package.json, por eso los tests
 * importan este archivo con extension `.js`:
 *   import calcularTotalConIva, { calcularSubtotal } from "../src/0401_modulos_esm.js";
 * Se ejecuta con `tsx` (sin compilacion manual a dist/).
 */

export interface ProductoMenu {
  readonly id: string;
  nombre: string;
  precio: number;
}

/** IVA vigente Ecuador 2026 (15%). */
export const IVA_ECUADOR = 0.15;

/**
 * TODO 1: Implementa `calcularSubtotal`.
 * Suma el `precio` de cada item y retorna el resultado redondeado a
 * 2 decimales: Number(total.toFixed(2)).
 */
export function calcularSubtotal(items: ProductoMenu[]): number {
  // TODO 1: Escribe tu logica aqui y reemplaza el valor por defecto.
  return 0;
}

/**
 * TODO 2: Implementa el export POR DEFECTO `calcularTotalConIva`.
 * Recibe un subtotal, le suma el IVA (subtotal * IVA_ECUADOR) y retorna
 * el total redondeado a 2 decimales: Number(total.toFixed(2)).
 */
export default function calcularTotalConIva(subtotal: number): number {
  // TODO 2: Escribe tu logica aqui y reemplaza el valor por defecto.
  return 0;
}
