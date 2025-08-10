import React from "react";
import { Link, useLocation } from "react-router";
import TableOfContents from "./components/TableOfContents";

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const location = useLocation();

    const components = [
        { id: "overview", name: "Overview", path: "/" },
        { id: "buttons", name: "Buttons", path: "/components/buttons" },
        { id: "inputs", name: "Inputs", path: "/components/inputs" },
        { id: "typography", name: "Typography", path: "/components/typography" },
        { id: "blockquotes", name: "Blockquotes", path: "/components/blockquotes" },
        { id: "tabs", name: "Tabs", path: "/components/tabs" },
    ];



    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="border-b border-gray-200 bg-white">
                <div className="px-6 py-4">
                    <h1 className="text-2xl font-bold text-gray-900">Kite UI Documentation</h1>
                </div>
            </header>

            <div className="flex">
                {/* Left Sidebar - Component Menu */}
                <div className="min-h-screen w-64 border-r border-gray-200 bg-white">
                    <div className="p-6">
                        <h2 className="mb-6 text-lg font-semibold text-gray-900">Components</h2>
                        <nav className="space-y-2">
                            {components.map((component) => (
                                <Link
                                    key={component.id}
                                    to={component.path}
                                    className={`flex w-full items-center rounded-lg px-3 py-2 text-left transition-colors ${
                                        location.pathname === component.path
                                            ? "border border-blue-200 bg-blue-50 text-blue-700"
                                            : "text-gray-700 hover:bg-gray-50"
                                    }`}
                                >
                                    <span className="font-medium">{component.name}</span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-1">
                    {/* Middle - Content */}
                    <div className="w-full max-w-4xl p-8">
                        <div className="rounded-lg border border-gray-200 bg-white p-8">
                            <div className="prose prose-gray max-w-none">
                                {children}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Table of Contents */}
                    <div className="min-h-screen w-64 border-l border-gray-200 bg-white">
                        <TableOfContents />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;