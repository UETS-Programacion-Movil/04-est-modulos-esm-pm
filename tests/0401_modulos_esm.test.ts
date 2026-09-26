import calcularTotalConIva, {
  calcularSubtotal,
  IVA_ECUADOR,
  type ProductoMenu
} from "../src/0401_modulos_esm.js";

console.log("=================================================================");
console.log("EJECUTANDO PRUEBAS: RETO 0401 — Modulos ESM Bar Salesiano");
console.log("=================================================================\n");

let testsFallidos = 0;

function assert(condicion: boolean, descripcion: string, pista?: string) {
  if (condicion) {
    console.log(`  ✅ [PASO]: ${descripcion}`);
  } else {
    console.log(`  ❌ [FALLO]: ${descripcion}`);
    if (pista) console.log(`     PISTA: ${pista}`);
    testsFallidos++;
  }
}

// 1. Export nombrado: constante del modulo.
assert(IVA_ECUADOR === 0.15, "IVA_ECUADOR exportado vale 0.15",
  "Exporta 'export const IVA_ECUADOR = 0.15' en src/0401_modulos_esm.ts");

// 2. Export nombrado: calcularSubtotal con 2 items (2.50 + 1.25 = 3.75).
const items: ProductoMenu[] = [
  { id: "ITM-01", nombre: "Sandwich de Pollo", precio: 2.50 },
  { id: "ITM-02", nombre: "Jugo de Mora", precio: 1.25 }
];
assert(calcularSubtotal(items) === 3.75, "Subtotal de 2 items: $3.75",
  "Suma item.precio de cada elemento en src/0401_modulos_esm.ts (TODO 1)");

// 3. Export nombrado: lista vacia retorna 0.
assert(calcularSubtotal([]) === 0, "Subtotal de lista vacia: $0.00");

// 4. Export por defecto: total con IVA (3.75 * 1.15 = 4.3125 -> 4.31).
assert(typeof calcularTotalConIva === "function", "Export por defecto es una funcion importable",
  "Declara 'export default function calcularTotalConIva' en src/0401_modulos_esm.ts");
assert(calcularTotalConIva(3.75) === 4.31, "Total con IVA de $3.75: $4.31",
  "subtotal + (subtotal * IVA_ECUADOR), redondeado a 2 decimales (TODO 2)");
assert(calcularTotalConIva(10) === 11.50, "Total con IVA de $10.00: $11.50");

console.log("-----------------------------------------------------------------");
if (testsFallidos === 0) {
  console.log("¡FELICITACIONES! Has completado el Reto 0401 (Modulos ESM).");
  console.log("Ahora ejecuta 'pnpm run check' para confirmar que no hay errores de tipos.\n");
  process.exit(0);
} else {
  console.log(`Tienes ${testsFallidos} prueba(s) pendiente(s). Completa tu codigo en src/0401_modulos_esm.ts y vuelve a ejecutar.`);
  process.exit(1);
}
