import type { Meta, StoryObj } from '@storybook/react';
import { FlexContainer } from '../lib/components/FlexContainer';
import { GridContainer } from '../lib/components/GridContainer';
import { Container } from '../lib/components/Container';
import { Button } from '../lib/components/Button';
import { Input } from '../lib/components/Input';

const meta: Meta = {
    title: 'Layout/Examples',
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FlexContainerWithContainers: Story = {
    name: 'FlexContainer with Containers',
    render: () => (
        <FlexContainer direction="column" gap="lg">
            <Container padding="lg" background="white" border="sm" rounded="lg" shadow="md">
                <h2 className="text-xl font-bold mb-4">Header Section</h2>
                <FlexContainer justify="between" align="center">
                    <Container>
                        <h3 className="text-lg font-semibold">Logo</h3>
                    </Container>
                    <Container>
                        <FlexContainer gap="md">
                            <Button variant="ghost">Home</Button>
                            <Button variant="ghost">About</Button>
                            <Button variant="ghost">Contact</Button>
                            <Button variant="primary">Sign In</Button>
                        </FlexContainer>
                    </Container>
                </FlexContainer>
            </Container>

            <FlexContainer gap="lg">
                <Container padding="lg" background="gray" border="sm" rounded="lg" className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">Sidebar</h3>
                    <FlexContainer direction="column" gap="sm">
                        <Container padding="sm" background="white" rounded="md">
                            Navigation Item 1
                        </Container>
                        <Container padding="sm" background="white" rounded="md">
                            Navigation Item 2
                        </Container>
                        <Container padding="sm" background="white" rounded="md">
                            Navigation Item 3
                        </Container>
                    </FlexContainer>
                </Container>

                <Container padding="lg" background="white" border="sm" rounded="lg" shadow="sm" className="flex-[3]">
                    <h3 className="text-lg font-semibold mb-4">Main Content</h3>
                    <FlexContainer direction="column" gap="md">
                        <Container>
                            <p className="text-gray-600 mb-4">
                                This demonstrates how FlexContainer and Container work together to create flexible layouts.
                            </p>
                        </Container>
                        <Container>
                            <FlexContainer gap="md">
                                <Input placeholder="Search..." className="flex-1" />
                                <Button variant="primary">Search</Button>
                            </FlexContainer>
                        </Container>
                    </FlexContainer>
                </Container>
            </FlexContainer>
        </FlexContainer>
    ),
};

export const GridContainerWithContainers: Story = {
    name: 'GridContainer with Containers',
    render: () => (
        <GridContainer columns={3} gap="lg">
            <Container padding="lg" background="white" border="sm" rounded="lg" shadow="md" className="col-span-3">
                <h2 className="text-xl font-bold text-center">Dashboard Header</h2>
            </Container>

            <Container padding="md" background="primary" border="sm" rounded="lg" shadow="sm">
                <h3 className="font-semibold text-white mb-2">Total Users</h3>
                <p className="text-2xl font-bold text-white">1,234</p>
            </Container>

            <Container padding="md" background="secondary" border="sm" rounded="lg" shadow="sm">
                <h3 className="font-semibold text-white mb-2">Revenue</h3>
                <p className="text-2xl font-bold text-white">$12,345</p>
            </Container>

            <Container padding="md" background="white" border="sm" rounded="lg" shadow="sm">
                <h3 className="font-semibold mb-2">Growth</h3>
                <p className="text-2xl font-bold text-green-600">+15%</p>
            </Container>

            <Container padding="lg" background="white" border="sm" rounded="lg" shadow="sm" className="col-span-2">
                <h3 className="font-semibold mb-4">Recent Activity</h3>
                <GridContainer columns={1} gap="sm">
                    <Container padding="sm" background="gray" rounded="md">
                        User John Doe signed up
                    </Container>
                    <Container padding="sm" background="gray" rounded="md">
                        New order #1234 received
                    </Container>
                    <Container padding="sm" background="gray" rounded="md">
                        Payment processed successfully
                    </Container>
                </GridContainer>
            </Container>

            <Container padding="lg" background="white" border="sm" rounded="lg" shadow="sm">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <FlexContainer direction="column" gap="sm">
                    <Button variant="primary" className="w-full">Add User</Button>
                    <Button variant="secondary" className="w-full">Generate Report</Button>
                    <Button variant="outline" className="w-full">Settings</Button>
                </FlexContainer>
            </Container>
        </GridContainer>
    ),
};

export const ResponsiveLayout: Story = {
    name: 'Responsive Layout Example',
    render: () => (
        <FlexContainer direction="column" gap="lg">
            {/* Header */}
            <Container padding="lg" background="white" border="sm" rounded="lg" shadow="sm">
                <FlexContainer justify="between" align="center">
                    <Container>
                        <h1 className="text-2xl font-bold">My App</h1>
                    </Container>
                    <Container>
                        <FlexContainer gap="md" align="center">
                            <Input placeholder="Search..." />
                            <Button variant="primary">Search</Button>
                        </FlexContainer>
                    </Container>
                </FlexContainer>
            </Container>

            {/* Main Content Area */}
            <GridContainer columns={4} gap="lg">
                {/* Sidebar */}
                <Container padding="lg" background="gray" border="sm" rounded="lg">
                    <h3 className="font-semibold mb-4">Navigation</h3>
                    <FlexContainer direction="column" gap="sm">
                        <Container padding="sm" background="white" rounded="md" className="cursor-pointer hover:bg-primary-50">
                            Dashboard
                        </Container>
                        <Container padding="sm" background="white" rounded="md" className="cursor-pointer hover:bg-primary-50">
                            Users
                        </Container>
                        <Container padding="sm" background="white" rounded="md" className="cursor-pointer hover:bg-primary-50">
                            Settings
                        </Container>
                    </FlexContainer>
                </Container>

                {/* Main Content */}
                <Container padding="lg" background="white" border="sm" rounded="lg" shadow="sm" className="col-span-3">
                    <h2 className="text-xl font-bold mb-6">Content Area</h2>
                    
                    {/* Content Grid */}
                    <GridContainer columns={2} gap="md">
                        <Container padding="md" background="primary" rounded="lg">
                            <h4 className="font-semibold text-white mb-2">Feature 1</h4>
                            <p className="text-white text-sm">Description of feature 1</p>
                        </Container>
                        <Container padding="md" background="secondary" rounded="lg">
                            <h4 className="font-semibold text-white mb-2">Feature 2</h4>
                            <p className="text-white text-sm">Description of feature 2</p>
                        </Container>
                        <Container padding="md" background="gray" rounded="lg" className="col-span-2">
                            <h4 className="font-semibold mb-2">Full Width Section</h4>
                            <p className="text-gray-600 text-sm mb-4">
                                This section spans the full width of the content area.
                            </p>
                            <FlexContainer gap="md">
                                <Button variant="primary">Action 1</Button>
                                <Button variant="outline">Action 2</Button>
                            </FlexContainer>
                        </Container>
                    </GridContainer>
                </Container>
            </GridContainer>

            {/* Footer */}
            <Container padding="lg" background="white" border="sm" rounded="lg" shadow="sm">
                <FlexContainer justify="center" align="center">
                    <Container>
                        <p className="text-gray-600 text-center">
                            © 2024 My App. Built with FlexContainer, GridContainer, and Container components.
                        </p>
                    </Container>
                </FlexContainer>
            </Container>
        </FlexContainer>
    ),
};

export const UserRequestedExamples: Story = {
    name: 'User Requested Usage Patterns',
    render: () => (
        <FlexContainer direction="column" gap="xl">
            {/* Example 1: FlexContainer with Container */}
            <Container padding="lg" background="gray" border="sm" rounded="lg">
                <h3 className="text-lg font-bold mb-4">Example 1: &lt;FlexContainer&gt; with &lt;Container&gt;</h3>
                <FlexContainer gap="md" justify="center">
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Container 1
                    </Container>
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Container 2
                    </Container>
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Container 3
                    </Container>
                </FlexContainer>
            </Container>

            {/* Example 2: GridContainer with column prop and Container */}
            <Container padding="lg" background="gray" border="sm" rounded="lg">
                <h3 className="text-lg font-bold mb-4">Example 2: &lt;GridContainer column="3"&gt; with &lt;Container&gt;</h3>
                <GridContainer column={3} gap="md">
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Grid Item 1
                    </Container>
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Grid Item 2
                    </Container>
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Grid Item 3
                    </Container>
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Grid Item 4
                    </Container>
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Grid Item 5
                    </Container>
                    <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                        Grid Item 6
                    </Container>
                </GridContainer>
            </Container>
        </FlexContainer>
    ),
};