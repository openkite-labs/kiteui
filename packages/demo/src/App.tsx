import React, { useState } from 'react'
import { Button, Input, Heading, Text, Blockquote, ButtonGroup, Tab } from '@openkite/kite-ui'

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

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Typography - Headings</h2>
            <div className="space-y-4">
              <Heading size="1">Heading Size 1</Heading>
              <Heading size="2">Heading Size 2</Heading>
              <Heading size="3">Heading Size 3</Heading>
              <Heading size="4">Heading Size 4</Heading>
              <Heading size="5">Heading Size 5</Heading>
              <Heading size="6">Heading Size 6</Heading>
              <Heading size="7">Heading Size 7</Heading>
              <Heading size="8">Heading Size 8</Heading>
              <Heading size="9">Heading Size 9</Heading>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Typography - Text</h2>
            <div className="space-y-4">
              <Text size="1">Text Size 1 - Lorem ipsum dolor sit amet</Text>
              <Text size="2">Text Size 2 - Lorem ipsum dolor sit amet</Text>
              <Text size="3">Text Size 3 - Lorem ipsum dolor sit amet</Text>
              <Text size="4">Text Size 4 - Lorem ipsum dolor sit amet</Text>
              <Text size="5">Text Size 5 - Lorem ipsum dolor sit amet</Text>
              <Text size="6">Text Size 6 - Lorem ipsum dolor sit amet</Text>
              <Text size="7">Text Size 7 - Lorem ipsum dolor sit amet</Text>
              <Text size="8">Text Size 8 - Lorem ipsum dolor sit amet (default)</Text>
              <Text size="9">Text Size 9 - Lorem ipsum dolor sit amet</Text>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
             <h2 className="text-2xl font-semibold mb-6 text-gray-800">Typography - Blockquotes</h2>
             <div className="space-y-4">
               <Blockquote size="5">"This is a blockquote with size 5. It demonstrates how quotes can be styled with different text sizes."</Blockquote>
               <Blockquote size="7">"This is a smaller blockquote with size 7. Perfect for inline quotes or smaller emphasis."</Blockquote>
               <Blockquote>"This is a default blockquote (size 8). Great for standard quotations in your content."</Blockquote>
             </div>
           </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Button Groups</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Single Selection</h3>
                <div className="space-y-3">
                  <ButtonGroup type="single" defaultValue="left">
                    <ButtonGroup.Item value="left">Left</ButtonGroup.Item>
                    <ButtonGroup.Item value="center">Center</ButtonGroup.Item>
                    <ButtonGroup.Item value="right">Right</ButtonGroup.Item>
                  </ButtonGroup>
                  
                  <ButtonGroup type="single" variant="secondary" size="sm">
                    <ButtonGroup.Item value="bold">Bold</ButtonGroup.Item>
                    <ButtonGroup.Item value="italic">Italic</ButtonGroup.Item>
                    <ButtonGroup.Item value="underline">Underline</ButtonGroup.Item>
                  </ButtonGroup>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Multiple Selection</h3>
                <ButtonGroup type="multiple" defaultValue={["bold", "italic"]}>
                  <ButtonGroup.Item value="bold">Bold</ButtonGroup.Item>
                  <ButtonGroup.Item value="italic">Italic</ButtonGroup.Item>
                  <ButtonGroup.Item value="underline">Underline</ButtonGroup.Item>
                  <ButtonGroup.Item value="strikethrough">Strike</ButtonGroup.Item>
                </ButtonGroup>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Tabs</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Default Tabs</h3>
                <Tab defaultValue="tab1">
                  <Tab.List>
                    <Tab.Trigger value="tab1">Account</Tab.Trigger>
                    <Tab.Trigger value="tab2">Password</Tab.Trigger>
                    <Tab.Trigger value="tab3">Settings</Tab.Trigger>
                  </Tab.List>
                  <Tab.Content value="tab1">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Account Information</h4>
                      <p className="text-gray-600">Manage your account details and preferences here.</p>
                    </div>
                  </Tab.Content>
                  <Tab.Content value="tab2">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Password Settings</h4>
                      <p className="text-gray-600">Update your password and security settings.</p>
                    </div>
                  </Tab.Content>
                  <Tab.Content value="tab3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">General Settings</h4>
                      <p className="text-gray-600">Configure your application preferences.</p>
                    </div>
                  </Tab.Content>
                </Tab>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Primary Tabs</h3>
                <Tab defaultValue="overview" variant="primary">
                  <Tab.List>
                    <Tab.Trigger value="overview">Overview</Tab.Trigger>
                    <Tab.Trigger value="analytics">Analytics</Tab.Trigger>
                    <Tab.Trigger value="reports">Reports</Tab.Trigger>
                  </Tab.List>
                  <Tab.Content value="overview">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Dashboard Overview</h4>
                      <p className="text-gray-600">View your key metrics and performance indicators.</p>
                    </div>
                  </Tab.Content>
                  <Tab.Content value="analytics">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Analytics Data</h4>
                      <p className="text-gray-600">Detailed analytics and insights about your data.</p>
                    </div>
                  </Tab.Content>
                  <Tab.Content value="reports">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Generated Reports</h4>
                      <p className="text-gray-600">Access and download your reports here.</p>
                    </div>
                  </Tab.Content>
                </Tab>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3 text-gray-700">Underline Tabs</h3>
                <Tab defaultValue="home" variant="underline">
                  <Tab.List>
                    <Tab.Trigger value="home">Home</Tab.Trigger>
                    <Tab.Trigger value="products">Products</Tab.Trigger>
                    <Tab.Trigger value="about">About</Tab.Trigger>
                    <Tab.Trigger value="contact">Contact</Tab.Trigger>
                  </Tab.List>
                  <Tab.Content value="home">
                    <div className="p-4">
                      <h4 className="font-medium mb-2">Welcome Home</h4>
                      <p className="text-gray-600">This is the home page content with underline tab styling.</p>
                    </div>
                  </Tab.Content>
                  <Tab.Content value="products">
                    <div className="p-4">
                      <h4 className="font-medium mb-2">Our Products</h4>
                      <p className="text-gray-600">Browse through our amazing product catalog.</p>
                    </div>
                  </Tab.Content>
                  <Tab.Content value="about">
                    <div className="p-4">
                      <h4 className="font-medium mb-2">About Us</h4>
                      <p className="text-gray-600">Learn more about our company and mission.</p>
                    </div>
                  </Tab.Content>
                  <Tab.Content value="contact">
                    <div className="p-4">
                      <h4 className="font-medium mb-2">Contact Information</h4>
                      <p className="text-gray-600">Get in touch with us through various channels.</p>
                    </div>
                  </Tab.Content>
                </Tab>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App