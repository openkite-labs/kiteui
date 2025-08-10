import { Routes, Route } from "react-router";
import { MDXProvider } from "@mdx-js/react";

// Import all MDX content
import OverviewMDX from "./content/overview.mdx";
import ButtonsMDX from "./content/buttons.mdx";
import InputsMDX from "./content/inputs.mdx";
import TypographyMDX from "./content/typography.mdx";
import BlockquotesMDX from "./content/blockquotes.mdx";
import TabsMDX from "./content/tabs.mdx";

export function AppRouter() {
    return (
        <MDXProvider>
            <Routes>
                <Route path="/" element={<OverviewMDX />} />
                <Route path="/components/buttons" element={<ButtonsMDX />} />
                <Route path="/components/inputs" element={<InputsMDX />} />
                <Route path="/components/typography" element={<TypographyMDX />} />
                <Route path="/components/blockquotes" element={<BlockquotesMDX />} />
                <Route path="/components/tabs" element={<TabsMDX />} />
            </Routes>
        </MDXProvider>
    );
}

export default AppRouter;
