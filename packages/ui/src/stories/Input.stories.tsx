import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../lib/components/Input";
import { Search, Mail, Lock, User, Eye, Calendar, MapPin, Phone, Hash, DollarSign } from "lucide-react";

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
        icon: {
            control: false,
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

export const WithIcons: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "300px",
            }}
        >
            <Input icon={<Search />} placeholder="Search..." />
            <Input icon={<Mail />} type="email" placeholder="Email address" />
            <Input icon={<Lock />} type="password" placeholder="Password" />
            <Input icon={<User />} placeholder="Username" />
            <Input icon={<Phone />} type="tel" placeholder="Phone number" />
            <Input icon={<Calendar />} type="date" placeholder="Select date" />
            <Input icon={<MapPin />} placeholder="Location" />
        </div>
    ),
};

export const IconSizes: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
            }}
        >
            <Input icon={<Search />} size="sm" placeholder="Small with icon" />
            <Input icon={<Search />} size="md" placeholder="Medium with icon" />
            <Input icon={<Search />} size="lg" placeholder="Large with icon" />
        </div>
    ),
};

export const FormExample: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "300px",
                padding: "1rem",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
            }}
        >
            <h3 style={{ margin: 0, marginBottom: "0.5rem" }}>Sign Up Form</h3>
            <Input icon={<User />} placeholder="Full name" required />
            <Input icon={<Mail />} type="email" placeholder="Email address" required />
            <Input icon={<Lock />} type="password" placeholder="Password" required />
            <Input icon={<Phone />} type="tel" placeholder="Phone number" />
        </div>
    ),
};

export const Interactive: Story = {
    args: {
        icon: <Search />,
        placeholder: "Try typing here...",
        size: "md",
    },
};

export const NumberAndDateInputs: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "300px",
            }}
        >
            <div style={{ width: "100%" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "14px", fontWeight: "500" }}>Number Input (no spinners)</label>
                <Input icon={<Hash />} type="number" placeholder="Enter amount" />
            </div>
            <div style={{ width: "100%" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "14px", fontWeight: "500" }}>Price Input (no spinners)</label>
                <Input icon={<DollarSign />} type="number" placeholder="0.00" step="0.01" />
            </div>
            <div style={{ width: "100%" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "14px", fontWeight: "500" }}>Date Input (no picker icon)</label>
                <Input icon={<Calendar />} type="date" />
            </div>
            <div style={{ width: "100%" }}>
                <label style={{ display: "block", marginBottom: "0.5rem", fontSize: "14px", fontWeight: "500" }}>Time Input</label>
                <Input type="time" />
            </div>
        </div>
    ),
};

export const CleanNumberInputs: Story = {
    render: () => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                alignItems: "center",
                width: "300px",
            }}
        >
            <Input icon={<Hash />} type="number" placeholder="Quantity" size="sm" />
            <Input icon={<DollarSign />} type="number" placeholder="Price" size="md" step="0.01" />
            <Input icon={<Hash />} type="number" placeholder="Age" size="lg" />
        </div>
    ),
};
