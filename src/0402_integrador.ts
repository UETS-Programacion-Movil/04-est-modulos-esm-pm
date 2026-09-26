/**
 * ============================================================================
 * RETO 0402: Desafio Integrador — Catalogo & Carrito Movil Bar Salesiano
 * Semana 04 PM — Modulos ESM | Programacion Movil 3° BGU (UETS)
 * ============================================================================
 *
 * MISION (BASE PARA EL SCREENCAST):
 * Este reto simula el motor de compras y facturacion para la futura app
 * movil del Bar Salesiano de la UETS.
 *
 * INSTRUCCIONES:
 * 1. Revisa las interfaces de datos del pedido y catalogo.
 * 2. Implementa la funcion `calcularTotalesPedido` aplicando las reglas de
 *    negocio (subtotal acumulado, descuento estudiantil del 10% si el
 *    subtotal >= $10.00, IVA del 15%).
 * 3. Ejecuta en tu terminal: `pnpm run start:0402` para verificar los tests
 *    y ver tu ticket digital impreso en pantalla.
 */

// ============================================================================
// 1. Modelos e Interfaces de la App Movil
// ============================================================================
export type MetodoPago = "EFECTIVO" | "TRANSFERENCIA" | "TARJETA_DIGITAL";
export type EstadoPedido = "PENDIENTE" | "PAGADO" | "EN_CAMINO" | "ENTREGADO";

export interface ItemMenu {
  readonly id: string;
  nombre: string;
  precioUnitario: number;
  categoria: "SNACKS" | "BEBIDAS" | "ALMUERZOS" | "PAPELERIA";
  disponible: boolean;
}

export interface LineaDetalle {
  producto: ItemMenu;
  cantidad: number;
  notasEspeciales?: string;
}

export interface PedidoMovil {
  readonly numeroOrden: string;
  cliente: {
    nombre: string;
    cursoParalelo: string;
  };
  detalles: LineaDetalle[];
  metodoPago: MetodoPago;
  estado: EstadoPedido;
}

export interface ResumenFinanciero {
  subtotal: number;
  descuentoEstudiantil: number; // 10% si subtotal >= $10.00, sino 0
  iva15: number;                // 15% sobre la base imponible neta
  totalPagar: number;           // baseImponible + iva15
}

// ============================================================================
// 2. Funcion de Logica Financiera
// ============================================================================
/**
 * TODO: Implementa `calcularTotalesPedido`.
 * Reglas de Negocio:
 * 1. `subtotal`: Sumar (precioUnitario * cantidad) de cada elemento en `pedido.detalles`.
 * 2. `descuentoEstudiantil`: Si `subtotal >= 10.00`, calcular el 10% (subtotal * 0.10). Si es menor, 0.
 * 3. `baseImponible`: subtotal - descuentoEstudiantil.
 * 4. `iva15`: baseImponible * 0.15.
 * 5. `totalPagar`: baseImponible + iva15.
 *
 * Todos los valores numericos deben retornar redondeados a 2 decimales: Number(val.toFixed(2)).
 */
export function calcularTotalesPedido(pedido: PedidoMovil): ResumenFinanciero {
  // TODO: Escribe tu logica de calculo aqui y reemplaza el objeto por defecto:
  return {
    subtotal: 0,
    descuentoEstudiantil: 0,
    iva15: 0,
    totalPagar: 0
  };
}

/**
 * Funcion visual para imprimir el ticket en consola
 */
export function imprimirTicketDigital(pedido: PedidoMovil): void {
  const totales = calcularTotalesPedido(pedido);

  console.log("╔══════════════════════════════════════════════════════════════╗");
  console.log("║           BAR SALESIANO UETS - RECIBO DIGITAL                ║");
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log(`║ Orden #: ${pedido.numeroOrden.padEnd(52)}║`);
  console.log(`║ Cliente: ${(pedido.cliente.nombre + " (" + pedido.cliente.cursoParalelo + ")").padEnd(52)}║`);
  console.log(`║ Pago:    ${pedido.metodoPago.padEnd(52)}║`);
  console.log("╟──────────────────────────────────────────────────────────────╢");
  console.log("║ ITEMS DEL PEDIDO:                                            ║");

  pedido.detalles.forEach((item, idx) => {
    const totalItem = (item.producto.precioUnitario * item.cantidad).toFixed(2);
    const linea = `${idx + 1}. [${item.cantidad}x] ${item.producto.nombre} - $${totalItem}`;
    console.log(`║ ${linea.padEnd(61)}║`);
  });

  console.log("╟──────────────────────────────────────────────────────────────╢");
  console.log(`║ Subtotal:               $${totales.subtotal.toFixed(2).padStart(35)} ║`);
  console.log(`║ Descuento Estudiantil: -$${totales.descuentoEstudiantil.toFixed(2).padStart(35)} ║`);
  console.log(`║ IVA (15%):              $${totales.iva15.toFixed(2).padStart(35)} ║`);
  console.log("╠══════════════════════════════════════════════════════════════╣");
  console.log(`║ TOTAL A PAGAR:          $${totales.totalPagar.toFixed(2).padStart(35)} ║`);
  console.log("╚══════════════════════════════════════════════════════════════╝\n");
}
