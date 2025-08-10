import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../lib/components/Container';
import { FlexContainer } from '../lib/components/FlexContainer';
import { GridContainer } from '../lib/components/GridContainer';

const meta: Meta<typeof Container> = {
    title: 'Layout/Container',
    component: Container,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        padding: {
            control: { type: 'select' },
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        margin: {
            control: { type: 'select' },
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
        background: {
            control: { type: 'select' },
            options: ['none', 'white', 'gray', 'primary', 'secondary'],
        },
        border: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg'],
        },
        rounded: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
        },
        shadow: {
            control: { type: 'select' },
            options: ['none', 'sm', 'md', 'lg', 'xl'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        padding: 'md',
        background: 'white',
        border: 'sm',
        rounded: 'md',
    },
    render: (args) => (
        <Container {...args}>
            <p>This is a basic container with default styling.</p>
        </Container>
    ),
};

export const Card: Story = {
    args: {
        padding: 'lg',
        background: 'white',
        border: 'sm',
        rounded: 'lg',
        shadow: 'md',
    },
    render: (args) => (
        <Container {...args}>
            <h3 className="text-lg font-semibold mb-2">Card Title</h3>
            <p className="text-gray-600">This container is styled like a card with shadow and rounded corners.</p>
        </Container>
    ),
};

export const ColoredBackgrounds: Story = {
    render: () => (
        <FlexContainer direction="column" gap="md">
            <Container padding="md" background="white" border="sm" rounded="md">
                <strong>White Background:</strong> Clean and minimal
            </Container>
            <Container padding="md" background="gray" border="sm" rounded="md">
                <strong>Gray Background:</strong> Subtle and neutral
            </Container>
            <Container padding="md" background="primary" border="sm" rounded="md">
                <strong>Primary Background:</strong> Brand colored
            </Container>
            <Container padding="md" background="secondary" border="sm" rounded="md">
                <strong>Secondary Background:</strong> Alternative brand color
            </Container>
        </FlexContainer>
    ),
};

export const PaddingVariants: Story = {
    render: () => (
        <FlexContainer direction="column" gap="sm">
            <Container padding="xs" background="gray" border="sm">
                <span className="bg-blue-100 p-1 rounded">Extra Small Padding</span>
            </Container>
            <Container padding="sm" background="gray" border="sm">
                <span className="bg-blue-100 p-1 rounded">Small Padding</span>
            </Container>
            <Container padding="md" background="gray" border="sm">
                <span className="bg-blue-100 p-1 rounded">Medium Padding</span>
            </Container>
            <Container padding="lg" background="gray" border="sm">
                <span className="bg-blue-100 p-1 rounded">Large Padding</span>
            </Container>
            <Container padding="xl" background="gray" border="sm">
                <span className="bg-blue-100 p-1 rounded">Extra Large Padding</span>
            </Container>
        </FlexContainer>
    ),
};

export const BorderVariants: Story = {
    render: () => (
        <GridContainer columns={2} gap="md">
            <Container padding="md" background="white" border="none">
                <strong>No Border:</strong> Clean look
            </Container>
            <Container padding="md" background="white" border="sm">
                <strong>Small Border:</strong> Subtle definition
            </Container>
            <Container padding="md" background="white" border="md">
                <strong>Medium Border:</strong> More prominent
            </Container>
            <Container padding="md" background="white" border="lg">
                <strong>Large Border:</strong> Bold outline
            </Container>
        </GridContainer>
    ),
};

export const RoundedVariants: Story = {
    render: () => (
        <GridContainer columns={3} gap="md">
            <Container padding="md" background="primary" border="sm" rounded="none">
                <strong>No Rounding</strong>
            </Container>
            <Container padding="md" background="primary" border="sm" rounded="sm">
                <strong>Small Rounded</strong>
            </Container>
            <Container padding="md" background="primary" border="sm" rounded="md">
                <strong>Medium Rounded</strong>
            </Container>
            <Container padding="md" background="primary" border="sm" rounded="lg">
                <strong>Large Rounded</strong>
            </Container>
            <Container padding="md" background="primary" border="sm" rounded="xl">
                <strong>XL Rounded</strong>
            </Container>
            <Container padding="md" background="primary" border="sm" rounded="2xl">
                <strong>2XL Rounded</strong>
            </Container>
        </GridContainer>
    ),
};

export const ShadowVariants: Story = {
    render: () => (
        <GridContainer columns={3} gap="lg">
            <Container padding="md" background="white" border="sm" rounded="md" shadow="none">
                <strong>No Shadow</strong>
            </Container>
            <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                <strong>Small Shadow</strong>
            </Container>
            <Container padding="md" background="white" border="sm" rounded="md" shadow="md">
                <strong>Medium Shadow</strong>
            </Container>
            <Container padding="md" background="white" border="sm" rounded="md" shadow="lg">
                <strong>Large Shadow</strong>
            </Container>
            <Container padding="md" background="white" border="sm" rounded="md" shadow="xl">
                <strong>XL Shadow</strong>
            </Container>
        </GridContainer>
    ),
};

export const NestedContainers: Story = {
    render: () => (
        <Container padding="lg" background="gray" border="sm" rounded="lg" shadow="md">
            <h2 className="text-xl font-bold mb-4">Outer Container</h2>
            <FlexContainer direction="column" gap="md">
                <Container padding="md" background="white" border="sm" rounded="md" shadow="sm">
                    <h3 className="font-semibold mb-2">Nested Container 1</h3>
                    <p className="text-sm text-gray-600">This container is nested inside another container.</p>
                </Container>
                <Container padding="md" background="primary" border="sm" rounded="md" shadow="sm">
                    <h3 className="font-semibold mb-2">Nested Container 2</h3>
                    <p className="text-sm">Different styling for variety.</p>
                </Container>
            </FlexContainer>
        </Container>
    ),
};

export const ResponsiveCard: Story = {
    render: () => (
        <Container padding="lg" background="white" border="sm" rounded="xl" shadow="lg" className="max-w-md mx-auto">
            <div className="text-center">
                <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Profile Card</h3>
                <p className="text-gray-600 mb-4">This is an example of a responsive card using Container component.</p>
                <FlexContainer justify="center" gap="sm">
                    <Container padding="sm" background="primary" rounded="md" className="text-white text-sm">
                        Follow
                    </Container>
                    <Container padding="sm" background="gray" rounded="md" className="text-sm">
                        Message
                    </Container>
                </FlexContainer>
            </div>
        </Container>
    ),
};