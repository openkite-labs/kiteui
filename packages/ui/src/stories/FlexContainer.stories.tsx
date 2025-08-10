import type { Meta, StoryObj } from '@storybook/react';
import { FlexContainer } from '../lib/components/FlexContainer';
import { Container } from '../lib/components/Container';

const meta: Meta<typeof FlexContainer> = {
    title: 'Layout/FlexContainer',
    component: FlexContainer,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        direction: {
            control: { type: 'select' },
            options: ['row', 'column', 'row-reverse', 'column-reverse'],
        },
        justify: {
            control: { type: 'select' },
            options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
        },
        align: {
            control: { type: 'select' },
            options: ['start', 'end', 'center', 'baseline', 'stretch'],
        },
        wrap: {
            control: { type: 'select' },
            options: ['nowrap', 'wrap', 'wrap-reverse'],
        },
        gap: {
            control: { type: 'select' },
            options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content for demonstrations
const SampleBox = ({ children, color = 'bg-blue-100' }: { children: React.ReactNode; color?: string }) => (
    <Container padding="md" background="white" border="sm" rounded="md" className={`${color} min-h-16 flex items-center justify-center`}>
        {children}
    </Container>
);

export const Default: Story = {
    args: {
        direction: 'row',
        justify: 'start',
        align: 'start',
        wrap: 'nowrap',
        gap: 'md',
    },
    render: (args) => (
        <FlexContainer {...args}>
            <SampleBox>Item 1</SampleBox>
            <SampleBox>Item 2</SampleBox>
            <SampleBox>Item 3</SampleBox>
        </FlexContainer>
    ),
};

export const Column: Story = {
    args: {
        direction: 'column',
        gap: 'md',
    },
    render: (args) => (
        <FlexContainer {...args}>
            <SampleBox>Item 1</SampleBox>
            <SampleBox>Item 2</SampleBox>
            <SampleBox>Item 3</SampleBox>
        </FlexContainer>
    ),
};

export const CenterAligned: Story = {
    args: {
        direction: 'row',
        justify: 'center',
        align: 'center',
        gap: 'lg',
    },
    render: (args) => (
        <div className="h-64 border border-gray-300 rounded">
            <FlexContainer {...args} className="h-full">
                <SampleBox color="bg-green-100">Centered 1</SampleBox>
                <SampleBox color="bg-yellow-100">Centered 2</SampleBox>
                <SampleBox color="bg-pink-100">Centered 3</SampleBox>
            </FlexContainer>
        </div>
    ),
};

export const SpaceBetween: Story = {
    args: {
        direction: 'row',
        justify: 'between',
        align: 'center',
    },
    render: (args) => (
        <FlexContainer {...args}>
            <SampleBox color="bg-red-100">Left</SampleBox>
            <SampleBox color="bg-blue-100">Center</SampleBox>
            <SampleBox color="bg-green-100">Right</SampleBox>
        </FlexContainer>
    ),
};

export const Wrapped: Story = {
    args: {
        direction: 'row',
        wrap: 'wrap',
        gap: 'md',
        justify: 'start',
    },
    render: (args) => (
        <div className="w-80">
            <FlexContainer {...args}>
                <SampleBox>Item 1</SampleBox>
                <SampleBox>Item 2</SampleBox>
                <SampleBox>Item 3</SampleBox>
                <SampleBox>Item 4</SampleBox>
                <SampleBox>Item 5</SampleBox>
                <SampleBox>Item 6</SampleBox>
            </FlexContainer>
        </div>
    ),
};

export const NestedContainers: Story = {
    args: {
        direction: 'column',
        gap: 'lg',
    },
    render: (args) => (
        <FlexContainer {...args}>
            <Container padding="md" background="gray" border="sm" rounded="lg">
                <h3 className="text-lg font-semibold mb-4">Header Section</h3>
                <FlexContainer direction="row" gap="md">
                    <SampleBox color="bg-purple-100">Nav 1</SampleBox>
                    <SampleBox color="bg-purple-100">Nav 2</SampleBox>
                    <SampleBox color="bg-purple-100">Nav 3</SampleBox>
                </FlexContainer>
            </Container>
            <Container padding="md" background="white" border="sm" rounded="lg">
                <h3 className="text-lg font-semibold mb-4">Content Section</h3>
                <FlexContainer direction="row" gap="md" justify="between">
                    <SampleBox color="bg-orange-100">Sidebar</SampleBox>
                    <SampleBox color="bg-orange-100">Main Content</SampleBox>
                </FlexContainer>
            </Container>
        </FlexContainer>
    ),
};