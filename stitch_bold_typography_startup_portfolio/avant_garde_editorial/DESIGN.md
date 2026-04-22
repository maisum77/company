---
name: Avant-Garde Editorial
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#ffb4a2'
  on-tertiary: '#621100'
  tertiary-container: '#1d0200'
  on-tertiary-container: '#e53600'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#ffdad2'
  tertiary-fixed-dim: '#ffb4a2'
  on-tertiary-fixed: '#3c0700'
  on-tertiary-fixed-variant: '#8a1d00'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display-2xl:
    fontFamily: Inter Tight
    fontSize: 120px
    fontWeight: '900'
    lineHeight: 100px
    letterSpacing: -0.06em
  display-xl:
    fontFamily: Inter Tight
    fontSize: 80px
    fontWeight: '800'
    lineHeight: 72px
    letterSpacing: -0.06em
  headline-lg:
    fontFamily: Inter Tight
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.04em
  serif-accent:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter Tight
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  stat-lg:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1'
spacing:
  unit: 4px
  gutter: 24px
  margin: 48px
  container-max: 1440px
  divider-weight: 1px
  accent-underline: 2px
---

## Brand & Style

This design system is rooted in the high-contrast world of Swiss Punk and modern editorial poster design. It rejects the softness of contemporary digital interfaces in favor of a rigid, architectural structure that feels both permanent and provocative. The brand personality is unapologetically confident, minimalist, and elite, aiming to evoke the visceral emotional response of a luxury art publication.

The aesthetic leans heavily into **High-Contrast / Bold** and **Minimalism**. It utilizes expansive negative space to create tension, directing focus toward massive typographic hierarchies and sharp, 1px structural boundaries. The addition of a subtle grain texture adds a tactile, physical quality to the near-black digital canvas, bridging the gap between high-end print and screen.

## Colors

The palette is restricted to three high-impact tones to maintain an editorial purity. The near-black background provides a deep, infinite void that makes the warm white typography appear to float on the surface. Vermillion is used sparingly as a "high-alert" accent for interactive cues and critical focus points.

- **Background (#0A0A0A):** The foundation. Deep, dark, and sophisticated.
- **Foreground (#FAFAFA):** Used for all primary text and structural lines. The warm white reduces eye strain compared to pure white.
- **Accent (#FF3D00):** A vibrant vermillion for underlines, active states, and calls to action.
- **Texture:** A global grain overlay at 1.5% opacity is applied to all surfaces to simulate paper stock and break up digital flatness.

## Typography

Typography is the primary visual engine of this design system. We utilize three distinct typefaces to establish a clear information hierarchy:

1.  **Inter Tight:** Used for the "brutal" massive headlines. The tracking is intentionally constricted (-0.06em) to create a block-like, graphic effect where the words become shapes.
2.  **Playfair Display:** Used for editorial asides, quotes, or secondary accents. Its presence introduces a classic, luxury feel that softens the rigidity of the sans-serif headings.
3.  **JetBrains Mono:** Used for technical data, labels, and micro-copy. The fixed-width nature of this font reinforces the grid-based, precision-engineered feel of the system.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy inspired by broadsheet newspapers. Elements are aligned to a strict 12-column grid with generous 48px outer margins to frame the content.

- **Rhythm:** Spacing follows a 4px base unit, but layouts should prioritize large, asymmetric gaps to create an editorial flow.
- **Dividers:** Use 1px #FAFAFA lines to separate sections horizontally and vertically. No element should float without a clear relationship to a grid line.
- **Accents:** Active links or emphasized text should use a 2px #FF3D00 underline, offset by 4px from the baseline.

## Elevation & Depth

This design system is strictly 2D. Depth is communicated through contrast and scale rather than shadows or blurs. 

- **Flat Hierarchy:** Avoid all box-shadows and drop-shadows. 
- **Layering:** Hierarchy is achieved by stacking elements directly on the background. To indicate a "higher" layer (such as a modal), use a solid 1px #FAFAFA border to contain the element against the background. 
- **Grain:** The 1.5% grain texture is global; it should not vary in intensity between layers, maintaining the illusion of a single physical surface.

## Shapes

The shape language is defined by absolute geometric precision. 

- **Sharp Edges:** All corners are set to 0px radius. This applies to buttons, input fields, containers, and images. 
- **Structural Lines:** Use 1px vertical and horizontal strokes to define regions. These lines should intersect cleanly without rounded joins.
- **Asymmetry:** Encourage the use of rectangular blocks of varying heights to create a dynamic, poster-like composition.

## Components

### Buttons
Primary buttons are solid #FAFAFA with #0A0A0A text in JetBrains Mono. Secondary buttons are outlined with a 1px #FAFAFA stroke. All buttons have 0px corner radii. On hover, the primary button shifts to #FF3D00.

### Input Fields
Inputs consist of a 1px bottom border only (#FAFAFA). Labels are placed above the line in JetBrains Mono (12px, uppercase). The active state is indicated by the 2px #FF3D00 underline.

### Cards
Cards are not treated as "elevated" boxes. They are simply regions defined by 1px dividers. If a card needs to be distinct, it should have a 1px border on all sides. Do not use background color changes for cards.

### Labels & Chips
Labels utilize JetBrains Mono for a technical, metadata appearance. Chips are rectangular with a 1px border; they do not use "pill" shapes.

### Navigation
The navigation should be treated as a header block separated by a 1px horizontal divider. Use Inter Tight for nav links, with the 2px Vermillion underline appearing only on the active page state.