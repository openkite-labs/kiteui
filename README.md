# Kite UI

A modern React UI component library built with TypeScript, Tailwind CSS v4, tailwind-variants, and Vite for OpenKite Projects

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Build the UI library:
```bash
npm run build:lib
```

3. Run the demo application:
```bash
npm run dev
```

The demo will be available at `http://localhost:3000`

### Package Structure

- `packages/ui/` - The main UI component library
- `packages/demo/` - Demo application showcasing the components

### Available Scripts

- `npm run build:lib` - Build the UI library
- `npm run dev` - Start the demo development server
- `npm run build` - Build both packages
- `npm run storybook` - Run Storybook (if available)

## Usage

Install the package in your project:

```bash
npm install @openkite/kite-ui
```

Import components and styles:

```tsx
import { Button, Input, FlexContainer, GridContainer, Container } from '@openkite/kite-ui'
import '@openkite/kite-ui/styles'

function App() {
  return (
    <FlexContainer direction="column" gap="md">
      <Container padding="md" rounded="md" border="sm">
        <Button variant="primary">Click me</Button>
        <Input placeholder="Enter text" />
      </Container>
      <GridContainer columns={3} gap="sm">
        <Container>Item 1</Container>
        <Container>Item 2</Container>
        <Container>Item 3</Container>
      </GridContainer>
    </FlexContainer>
  )
}
```

## Design Tokens

Kite UI uses a simplified design token system that focuses on the most important customizable values while leveraging Tailwind's standard utilities for consistency.

### Color Palette

Custom color scales are available for primary and secondary colors:

```css
/* Primary Colors */
--color-primary-50: #eaf3ff;
--color-primary-100: #d9e8ff;
--color-primary-200: #bad4ff;
--color-primary-300: #90b7ff;
--color-primary-400: #658bff;
--color-primary-500: #4261ff; /* Main primary color */
--color-primary-600: #2134ff;
--color-primary-700: #1220e2;
--color-primary-800: #1523be;
--color-primary-900: #1a2795;
--color-primary-950: #101656;

/* Secondary Colors */
--color-secondary-50: #f7f8f8;
--color-secondary-100: #f1f3f4;
--color-secondary-200: #d7dee0;
--color-secondary-300: #b4c0c5;
--color-secondary-400: #8c9fa4;
--color-secondary-500: #6d838a; /* Main secondary color */
--color-secondary-600: #586b71;
--color-secondary-700: #48565c;
--color-secondary-800: #3e494e;
--color-secondary-900: #374043;
--color-secondary-950: #242a2d;
```

### Configurable Border Radius

A single configurable base radius that other radius values derive from:

```css
--radius-base: 0.375rem; /* 6px - Base radius for consistent rounded corners */
```

Components use this base radius with calculated multipliers:
- `rounded="sm"` = `calc(var(--radius-base) * 0.33)` (~2px)
- `rounded="md"` = `var(--radius-base)` (6px)
- `rounded="lg"` = `calc(var(--radius-base) * 1.33)` (~8px)
- `rounded="xl"` = `calc(var(--radius-base) * 2)` (~12px)
- `rounded="2xl"` = `calc(var(--radius-base) * 2.67)` (~16px)

### Standard Tailwind Utilities

For spacing, shadows, borders, and other properties, Kite UI uses standard Tailwind classes:
- **Spacing**: `p-4`, `m-2`, `gap-6` (standard Tailwind spacing scale)
- **Shadows**: `shadow-sm`, `shadow-md`, `shadow-lg` (standard Tailwind shadows)
- **Borders**: `border`, `border-2`, `border-4` (standard Tailwind border widths)

### Customization

To customize the design tokens, override the CSS custom properties in your application:

```css
:root {
  /* Customize primary color */
  --color-primary-500: #3b82f6; /* Change to blue */
  
  /* Customize base radius */
  --radius-base: 0.5rem; /* Make all rounded corners larger */
}
```

This approach provides flexibility where it matters most (colors and radius) while maintaining consistency and familiarity through standard Tailwind utilities.
