import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../lib/components/Avatar";

const meta: Meta<typeof Avatar> = {
    title: "Components/Avatar",
    component: Avatar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg", "xl"],
        },
        src: {
            control: { type: "text" },
        },
        alt: {
            control: { type: "text" },
        },
        fallback: {
            control: { type: "text" },
        },
        className: {
            control: { type: "text" },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        alt: "John Doe",
        size: "md",
    },
};

export const WithFallback: Story = {
    args: {
        src: "invalid-url",
        alt: "John Doe",
        size: "md",
    },
};

export const CustomFallback: Story = {
    args: {
        src: "invalid-url",
        alt: "John Doe",
        fallback: "JD",
        size: "md",
    },
};

export const Sizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="John Doe"
                size="sm"
            />
            <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="John Doe"
                size="md"
            />
            <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="John Doe"
                size="lg"
            />
            <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="John Doe"
                size="xl"
            />
        </div>
    ),
};

export const FallbackSizes: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar alt="John Doe" size="sm" />
            <Avatar alt="Jane Smith" size="md" />
            <Avatar alt="Bob Johnson" size="lg" />
            <Avatar alt="Alice Brown" size="xl" />
        </div>
    ),
};

export const MixedContent: Story = {
    render: () => (
        <div className="flex items-center gap-4">
            <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="John Doe"
                size="md"
            />
            <Avatar alt="Jane Smith" size="md" />
            <Avatar fallback="AB" size="md" />
            <Avatar alt="Single Name" size="md" />
        </div>
    ),
};
