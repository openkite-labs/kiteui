import type { Meta, StoryObj } from "@storybook/react";
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
    type AccordionProps,
} from "../lib/components/Accordion";

const meta: Meta<AccordionProps> = {
    title: "Components/Accordion",
    component: Accordion,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["default", "bordered", "ghost"],
        },
        size: {
            control: { type: "select" },
            options: ["sm", "md", "lg"],
        },
        type: {
            control: { type: "select" },
            options: ["single", "multiple"],
        },
        collapsible: {
            control: { type: "boolean" },
        },
        disabled: {
            control: { type: "boolean" },
        },
    },
};

export default meta;
type Story = StoryObj<AccordionProps>;

const SampleContent = () => (
    <>
        <AccordionItem value="item-1">
            <AccordionTrigger>What is React?</AccordionTrigger>
            <AccordionContent>
                React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small
                and isolated pieces of code called "components".
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
            <AccordionTrigger>What is TypeScript?</AccordionTrigger>
            <AccordionContent>
                TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling
                at any scale.
            </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
            <AccordionTrigger>What is Tailwind CSS?</AccordionTrigger>
            <AccordionContent>
                Tailwind CSS is a utility-first CSS framework packed with classes that can be composed to build any
                design, directly in your markup.
            </AccordionContent>
        </AccordionItem>
    </>
);

export const Default: Story = {
    render: (args: AccordionProps) => {
        if (args.type === "single") {
            return (
                <div className="w-96">
                    <Accordion
                        type="single"
                        collapsible={args.collapsible}
                        variant={args.variant}
                        size={args.size}
                        defaultValue={args.defaultValue}
                        value={args.value}
                        onValueChange={args.onValueChange}
                    >
                        <SampleContent />
                    </Accordion>
                </div>
            );
        } else {
            return (
                <div className="w-96">
                    <Accordion
                        type="multiple"
                        variant={args.variant}
                        size={args.size}
                        defaultValue={args.defaultValue}
                        value={args.value}
                        onValueChange={args.onValueChange}
                    >
                        <SampleContent />
                    </Accordion>
                </div>
            );
        }
    },
    args: {
        type: "single" as const,
        collapsible: true,
        variant: "default" as const,
        size: "md" as const,
    },
};

export const Multiple: Story = {
    render: () => (
        <div className="w-96">
            <Accordion type="multiple">
                <SampleContent />
            </Accordion>
        </div>
    ),
    args: {},
};

export const Bordered: Story = {
    render: () => (
        <div className="w-96">
            <Accordion type="single" collapsible variant="bordered">
                <SampleContent />
            </Accordion>
        </div>
    ),
    args: {},
};

export const Ghost: Story = {
    render: () => (
        <div className="w-96">
            <Accordion type="single" collapsible variant="ghost">
                <SampleContent />
            </Accordion>
        </div>
    ),
    args: {},
};

export const Sizes: Story = {
    render: () => (
        <div className="space-y-8">
            <div>
                <h3 className="mb-4 text-sm font-medium">Small</h3>
                <div className="w-96">
                    <Accordion type="single" collapsible size="sm">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Small accordion</AccordionTrigger>
                            <AccordionContent>This is a small accordion with compact spacing.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div>
                <h3 className="mb-4 text-sm font-medium">Medium</h3>
                <div className="w-96">
                    <Accordion type="single" collapsible size="md">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Medium accordion</AccordionTrigger>
                            <AccordionContent>This is a medium accordion with default spacing.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            <div>
                <h3 className="mb-4 text-sm font-medium">Large</h3>
                <div className="w-96">
                    <Accordion type="single" collapsible size="lg">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Large accordion</AccordionTrigger>
                            <AccordionContent>This is a large accordion with generous spacing.</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </div>
    ),
    args: {},
};

export const NonCollapsible: Story = {
    render: () => (
        <div className="w-96">
            <Accordion type="single" defaultValue="item-1">
                <SampleContent />
            </Accordion>
        </div>
    ),
    args: {},
};

export const WithDefaultValue: Story = {
    render: () => (
        <div className="w-96">
            <Accordion type="single" collapsible defaultValue="item-2">
                <SampleContent />
            </Accordion>
        </div>
    ),
    args: {},
};
