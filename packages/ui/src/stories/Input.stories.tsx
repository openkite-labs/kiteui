import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../lib/components/Input";

const meta = {
    title: "Components/Input",
    component: Input,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
        disabled: {
            control: "boolean",
        },
        placeholder: {
            control: "text",
        },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter text...",
    },
};

export const Small: Story = {
    args: {
        size: "sm",
        placeholder: "Small input",
    },
};

export const Medium: Story = {
    args: {
        size: "md",
        placeholder: "Medium input",
    },
};

export const Large: Story = {
    args: {
        size: "lg",
        placeholder: "Large input",
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: "Disabled input",
    },
};

export const AllSizes: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
            }}
        >
            <Input size="sm" placeholder="Small" />
            <Input size="md" placeholder="Medium" />
            <Input size="lg" placeholder="Large" />
        </div>
    ),
};

export const WithDifferentTypes: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
            }}
        >
            <Input type="text" placeholder="Text input" />
            <Input type="email" placeholder="Email input" />
            <Input type="password" placeholder="Password input" />
            <Input type="number" placeholder="Number input" />
        </div>
    ),
};
