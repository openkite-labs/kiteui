# Kite UI

A modern React UI component library built with TypeScript, Tailwind CSS v4, tailwind-variants, and Vite. Features comprehensive Storybook documentation for component development and testing.

## Installation

```bash
npm install kite-ui
# or
yarn add kite-ui
# or
pnpm add kite-ui
# or
bun add kite-ui
```

## Usage

```tsx
import { Button } from 'kite-ui'

function App() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>
    </div>
  )
}
```

## Components

### Button

A versatile button component with multiple variants and sizes, built with tailwind-variants for type-safe styling.

#### Props

- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `disabled`: `boolean` (default: `false`)
- `className`: `string` - Additional CSS classes
- All standard HTML button attributes

#### Examples

```tsx
// Different variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

## Development

To set up the development environment:

```bash
# Clone the repository
git clone <repository-url>
cd kite-ui

# Install dependencies
bun install

# Start Storybook for component development
bun run storybook

# Build the library
bun run build:lib

# Build Storybook for deployment
bun run build-storybook
```

## Storybook Documentation

This project uses Storybook for component documentation and development. You can:

- **View components**: `bun run storybook` - Opens Storybook at http://localhost:6006
- **Build docs**: `bun run build-storybook` - Generates static documentation in `storybook-static/`

Storybook provides:
- Interactive component playground
- Auto-generated documentation from TypeScript props
- Visual testing of all component variants
- Responsive design testing

## Project Structure

```
src/
├── lib/
│   ├── components/
│   │   └── Button.tsx
│   ├── types/
│   │   └── index.ts
│   ├── styles.css          # Tailwind CSS v4 styles
│   └── index.ts
├── stories/
│   ├── Button.stories.tsx  # Storybook stories
│   ├── Configure.mdx       # Storybook configuration docs
│   └── assets/             # Storybook assets
└── vite-env.d.ts

.storybook/
├── main.ts                 # Storybook configuration
└── preview.ts              # Global Storybook settings
```

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **tailwind-variants** - Type-safe component variants
- **Vite** - Build tool and dev server
- **Storybook** - Component documentation and development
- **Bun** - Package manager and runtime

## License

MIT