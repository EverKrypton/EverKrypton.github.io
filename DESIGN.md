# Design

<!-- impeccable:design-schema 1 -->

## Thesis

A crypto-product portfolio that behaves like a trading surface: near-black
ground, three signal colors used as *data*, and the products shown through their
own mechanics (an order book, a bet slip) rather than screenshots or adjectives.
It refuses the generic dev-portfolio scaffold — no avatar hero, no skill bars,
no logo wall.

## Color

Strategy: **Restrained** — a near-black ground with three committed signal
colors that carry meaning, never decoration.

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#07070b` | Page ground |
| `--surface` | `#0e0e16` | Cards, panels, terminal |
| `--surface-2` | `#14141e` | Raised rows, hover fills |
| `--ink` | `#f2f3f8` | Primary text (18.1:1) |
| `--ink-2` | `#a7adc0` | Body / secondary (9.0:1) |
| `--ink-3` | `#7c8298` | Meta, labels (5.3:1) |
| `--violet` | `#8b5cff` | Brand accent, marks, focus |
| `--violet-2` | `#a78bfa` | Accent text / links (7.4:1) |
| `--violet-btn` | `#6d3fe0` | Primary button fill (white = 5.6:1) |
| `--emerald` | `#2ee6a6` | "Live", bids, positive, the rotating word |
| `--amber` | `#ffb020` | Third signal, one step |
| `--ask` | `#ff8a8a` | Ask side of the book |

Violet is identity; emerald and amber are signals. Color never carries meaning
alone — every colored state also has a text or shape cue.

## Type

- **Display + UI:** Schibsted Grotesk (400/500/600/700), tight tracking
  (`-0.025em` to `-0.035em` on the hero), `text-wrap: balance`.
- **Data:** JetBrains Mono for prices, labels, tickers, and micro-copy — mono is
  reserved for numbers and machine labels, never used as a costume.
- Fluid scale via `clamp()`; hero maxes near `92px`, section headings `52px`,
  body `16–19px`.

## Components

- **Buttons:** pill radius `999px`. Primary = violet fill + shadow; secondary =
  translucent fill + hairline border; quiet = text only. All ≥44px tall.
- **Terminal panel:** `--surface` with hairline border and `--shadow-3`; a title
  bar (mono label + pulsing `live` pill) over a two-column chart / order-book
  grid. Authored in SVG/CSS from real product facts.
- **Order book rows:** grid of price / size with a proportional fill bar; ask
  rows red, bid rows emerald.
- **Bet slip:** match header, three-way odds grid (selected leg outlined
  emerald), stake/legs/payout rows, full-width primary CTA.
- **Capability grid:** 6 cells sharing 1px hairline rules (no nested cards);
  icon tile + mono label + title + body.
- **FAQ:** native `<details>` with a custom `+`/`−` marker.
- **Nav:** sticky, translucent with backdrop blur; collapses to a disclosure
  button + full-width sheet below 720px.

## Motion

One authored system: `IntersectionObserver` reveal (opacity + 24px rise, 0.75s,
`cubic-bezier(0.22,1,0.36,1)`) staggered per section. The hero word rotates every
2.2s. The `live` pill pulses. Everything collapses under
`prefers-reduced-motion: reduce` (handled in both CSS and JS).

## Layout

- Max width `1180px`, gutter `24px` (18px ≤520px).
- Section rhythm `clamp(72px, 11vw, 148px)`; tighter `clamp(56px, 8vw, 104px)`.
- Product blocks alternate 50/50 and collapse to a single column ≤900px.
- Hairline `.rule` dividers between major bands.

## Signature

The authored **exchange terminal** in the hero: a live order book with
proportional depth bars, spread row, and a generated price line — the product
demonstrating itself in the first viewport. It is the one element that could
exist on no other portfolio.

## Accessibility

- Body/secondary text ≥4.5:1; primary button fill darkened to `#6d3fe0` for
  white-text AA compliance.
- Global `:focus-visible` ring (violet-2, 7.4:1).
- Decorative mocks use `role="img"` + `aria-label`; icons are `aria-hidden`.
- The rotating word is `aria-hidden` with an `sr-only` static equivalent.
- `color-scheme: dark`; skip link; native `<details>` FAQ; reduced-motion honored.
