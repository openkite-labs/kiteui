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
import { Button, Input } from '@openkite/kite-ui'
import '@openkite/kite-ui/styles'

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
    </div>
  )
}
```
