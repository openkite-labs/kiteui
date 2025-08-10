import type { Meta, StoryObj } from '@storybook/react';
import { GridContainer } from '../lib/components/GridContainer';
import { Container } from '../lib/components/Container';

const meta: Meta<typeof GridContainer> = {
    title: 'Layout/GridContainer',
    component: GridContainer,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        columns: {
            control: { type: 'select' },
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        },
        rows: {
            control: { type: 'select' },
            options: [1, 2, 3, 4, 5, 6],
        },
        gap: {
            control: { type: 'select' },
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        justify: {
            control: { type: 'select' },
            options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
        },
        align: {
            control: { type: 'select' },
            options: ['start', 'end', 'center', 'baseline', 'stretch'],
        },
        column: {
            control: { type: 'number' },
            description: 'Alternative prop name for columns (for convenience)',
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content for demonstrations
const GridItem = ({ children, color = 'bg-blue-100' }: { children: React.ReactNode; color?: string }) => (
    <Container padding="md" background="white" border="sm" rounded="md" className={`${color} min-h-20 flex items-center justify-center text-sm font-medium`}>
        {children}
    </Container>
);

export const Default: Story = {
    args: {
        columns: 3,
        gap: 'md',
    },
    render: (args) => (
        <GridContainer {...args}>
            <GridItem>Item 1</GridItem>
            <GridItem>Item 2</GridItem>
            <GridItem>Item 3</GridItem>
            <GridItem>Item 4</GridItem>
            <GridItem>Item 5</GridItem>
            <GridItem>Item 6</GridItem>
        </GridContainer>
    ),
};

export const TwoColumns: Story = {
    args: {
        columns: 2,
        gap: 'lg',
    },
    render: (args) => (
        <GridContainer {...args}>
            <GridItem color="bg-green-100">Left Column</GridItem>
            <GridItem color="bg-yellow-100">Right Column</GridItem>
            <GridItem color="bg-pink-100">Left Bottom</GridItem>
            <GridItem color="bg-purple-100">Right Bottom</GridItem>
        </GridContainer>
    ),
};

export const FourColumns: Story = {
    args: {
        columns: 4,
        gap: 'sm',
    },
    render: (args) => (
        <GridContainer {...args}>
            {Array.from({ length: 12 }, (_, i) => (
                <GridItem key={i} color={`bg-${['red', 'blue', 'green', 'yellow'][i % 4]}-100`}>
                    Item {i + 1}
                </GridItem>
            ))}
        </GridContainer>
    ),
};

export const WithColumnProp: Story = {
    args: {
        column: 3,
        gap: 'md',
    },
    render: (args) => (
        <GridContainer {...args}>
            <GridItem color="bg-indigo-100">Using 'column' prop</GridItem>
            <GridItem color="bg-teal-100">Instead of 'columns'</GridItem>
            <GridItem color="bg-orange-100">Both work the same</GridItem>
        </GridContainer>
    ),
};

export const ResponsiveLayout: Story = {
    args: {
        columns: 3,
        gap: 'lg',
        justify: 'center',
        align: 'center',
    },
    render: (args) => (
        <GridContainer {...args}>
            <GridItem color="bg-red-100">Header</GridItem>
            <GridItem color="bg-red-100">Navigation</GridItem>
            <GridItem color="bg-red-100">User Menu</GridItem>
            <GridItem color="bg-blue-100">Sidebar</GridItem>
            <GridItem color="bg-green-100">Main Content Area</GridItem>
            <GridItem color="bg-yellow-100">Ads/Widgets</GridItem>
            <GridItem color="bg-purple-100">Footer Left</GridItem>
            <GridItem color="bg-purple-100">Footer Center</GridItem>
            <GridItem color="bg-purple-100">Footer Right</GridItem>
        </GridContainer>
    ),
};

export const DashboardLayout: Story = {
    args: {
        columns: 4,
        rows: 3,
        gap: 'md',
    },
    render: (args) => (
        <GridContainer {...args} className="h-96">
            <GridItem color="bg-slate-100">Metric 1</GridItem>
            <GridItem color="bg-slate-100">Metric 2</GridItem>
            <GridItem color="bg-slate-100">Metric 3</GridItem>
            <GridItem color="bg-slate-100">Metric 4</GridItem>
            <GridItem color="bg-blue-100">Chart 1</GridItem>
            <GridItem color="bg-blue-100">Chart 2</GridItem>
            <GridItem color="bg-green-100">Table</GridItem>
            <GridItem color="bg-green-100">List</GridItem>
            <GridItem color="bg-orange-100">Activity</GridItem>
            <GridItem color="bg-orange-100">Notifications</GridItem>
            <GridItem color="bg-purple-100">Settings</GridItem>
            <GridItem color="bg-purple-100">Profile</GridItem>
        </GridContainer>
    ),
};

export const NestedGrids: Story = {
    args: {
        columns: 2,
        gap: 'lg',
    },
    render: (args) => (
        <GridContainer {...args}>
            <Container padding="md" background="gray" border="sm" rounded="lg">
                <h3 className="text-lg font-semibold mb-4">Left Section</h3>
                <GridContainer columns={2} gap="sm">
                    <GridItem color="bg-cyan-100">Sub 1</GridItem>
                    <GridItem color="bg-cyan-100">Sub 2</GridItem>
                    <GridItem color="bg-cyan-100">Sub 3</GridItem>
                    <GridItem color="bg-cyan-100">Sub 4</GridItem>
                </GridContainer>
            </Container>
            <Container padding="md" background="white" border="sm" rounded="lg">
                <h3 className="text-lg font-semibold mb-4">Right Section</h3>
                <GridContainer columns={1} gap="md">
                    <GridItem color="bg-rose-100">Full Width 1</GridItem>
                    <GridItem color="bg-rose-100">Full Width 2</GridItem>
                    <GridItem color="bg-rose-100">Full Width 3</GridItem>
                </GridContainer>
            </Container>
        </GridContainer>
    ),
};