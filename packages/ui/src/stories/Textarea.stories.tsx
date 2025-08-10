import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "../lib/components/Textarea";

const meta = {
    title: "Components/Textarea",
    component: Textarea,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
        autoResize: {
            control: "boolean",
        },
        maxRows: {
            control: { type: "number", min: 1, max: 20 },
        },
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Enter your message...",
    },
};



export const Sizes: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "400px",
            }}
        >
            <Textarea size="sm" placeholder="Small textarea" />
            <Textarea size="md" placeholder="Medium textarea" />
            <Textarea size="lg" placeholder="Large textarea" />
        </div>
    ),
};



export const AutoResize: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "400px",
            }}
        >
            <div style={{ width: "100%" }}>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: "600" }}>Regular Textarea</h3>
                <Textarea 
                    placeholder="This textarea has fixed height and manual resize..." 
                    rows={3}
                />
            </div>
            <div style={{ width: "100%" }}>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: "600" }}>Auto-Resize Textarea</h3>
                <Textarea 
                    autoResize
                    placeholder="This textarea automatically grows as you type more content. Try typing multiple lines to see it expand!" 
                    rows={2}
                />
            </div>
            <div style={{ width: "100%" }}>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: "600" }}>Auto-Resize with Max Rows (4)</h3>
                <Textarea 
                    autoResize
                    maxRows={4}
                    placeholder="This textarea grows up to 4 rows, then becomes scrollable. Try typing many lines!" 
                    rows={2}
                />
            </div>
        </div>
    ),
};

export const MaxRowsExamples: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "400px",
            }}
        >
            <div style={{ width: "100%" }}>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: "600" }}>Max 2 Rows</h3>
                <Textarea 
                    autoResize
                    maxRows={2}
                    placeholder="Limited to 2 rows maximum" 
                    rows={1}
                />
            </div>
            <div style={{ width: "100%" }}>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: "600" }}>Max 6 Rows</h3>
                <Textarea 
                    autoResize
                    maxRows={6}
                    placeholder="Limited to 6 rows maximum" 
                    rows={1}
                />
            </div>
            <div style={{ width: "100%" }}>
                <h3 style={{ marginBottom: "0.5rem", fontSize: "14px", fontWeight: "600" }}>No Max Rows (Unlimited)</h3>
                <Textarea 
                    autoResize
                    placeholder="Grows indefinitely with content" 
                    rows={1}
                />
            </div>
        </div>
    ),
};

export const LongContent: Story = {
    args: {
        autoResize: true,
        defaultValue: "This is a textarea with pre-filled content that demonstrates the auto-resize functionality.\n\nAs you can see, it automatically adjusts its height based on the content.\n\nYou can continue typing and it will keep growing to accommodate your text.\n\nThis is particularly useful for forms where you want the textarea to expand naturally without requiring users to manually resize it.",
        placeholder: "Start typing...",
    },
};