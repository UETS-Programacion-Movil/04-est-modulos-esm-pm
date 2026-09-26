# Semana 04: Modulos ESM + Desafio Integrador Bar Salesiano
### Programacion Movil — 3° Bachillerato Tecnico (2026–2027)

> [!IMPORTANT]
> **Modelo Evaluativo Dual (10.0 puntos):**
> - **Bloque A (5.0 pts):** Codigo en GitHub con `pnpm test` en verde, `pnpm run check` limpio y Pull Request.
> - **Bloque B (5.0 pts):** Video Screencast oral (3 a 5 min) con camara y voz.

## Material de clase

👉 **[Abrir diapositivas TypeScript (Semanas 02–04) en el Portal Oficial](https://uets-pm-portal.vgmiltonisaac.workers.dev/02-typescript/)**

## Abrir en Codespaces

1. En GitHub pulsa **Code > Codespaces > Create codespace on main**.
2. En el terminal del Codespace ejecuta:
   ```bash
   pnpm install
   pnpm test
   ```

## Retos (`src/` con `// TODO:`)

```text
Reto 0401: Modulos ESM — export/import nombrado + por defecto (src/0401_modulos_esm.ts)
Reto 0402: Desafio Integrador — Carrito del Bar Salesiano (src/0402_integrador.ts)
```

## Comandos

```bash
pnpm install
pnpm run start:0401   # Reto 0401: Modulos ESM
pnpm run start:0402   # Reto 0402: Desafio Integrador
pnpm test             # Todos los retos (Auto-Sync con main)
pnpm run check        # Typecheck estricto (tsc --noEmit)
```

## Entrega en Pull Request

```bash
git checkout -b entrega/nombre-apellido
git add -A
git commit -m "feat(reto-0401): implementar subtotal y total con IVA ESM"
git commit -m "feat(reto-0402): completar logica de carrito del bar salesiano"
git push origin entrega/nombre-apellido
```

Luego abre el PR contra `UETS-Programacion-Movil/04-est-modulos-esm-pm` (base `main`) y pega el enlace de tu Screencast.

*Programacion Movil — Unidad Educativa Tecnico Salesiano (UETS) 2026–2027.*
