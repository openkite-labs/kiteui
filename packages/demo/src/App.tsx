import React from 'react'
import { Button, Input } from '@openkite/kite-ui'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          Kite UI Demo
        </h1>
        
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Inputs</h2>
            <div className="space-y-4 max-w-md">
              <Input placeholder="Default input" />
              <Input placeholder="Email input" type="email" />
              <Input placeholder="Password input" type="password" />
              <Input placeholder="Disabled input" disabled />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App