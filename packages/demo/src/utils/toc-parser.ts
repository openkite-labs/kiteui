import { ReactElement } from 'react';

export interface TocItem {
    id: string;
    text: string;
    level: number;
}

// Extract headings from MDX content by traversing React elements
export function extractTocFromMDX(mdxContent: ReactElement): TocItem[] {
    const headings: TocItem[] = [];
    
    function traverse(element: any): void {
        if (!element) return;
        
        // Check if element is a heading (h1, h2, h3, h4, h5, h6)
        if (typeof element.type === 'string' && /^h[1-6]$/.test(element.type)) {
            const level = parseInt(element.type.charAt(1));
            const text = extractTextFromChildren(element.props?.children);
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            
            headings.push({ id, text, level });
        }
        
        // Recursively traverse children
        if (element.props?.children) {
            if (Array.isArray(element.props.children)) {
                element.props.children.forEach(traverse);
            } else {
                traverse(element.props.children);
            }
        }
    }
    
    traverse(mdxContent);
    return headings;
}

// Extract text content from React children (including nested elements)
function extractTextFromChildren(children: any): string {
    if (typeof children === 'string') {
        return children;
    }
    
    if (Array.isArray(children)) {
        return children.map(extractTextFromChildren).join('');
    }
    
    if (children?.props?.children) {
        return extractTextFromChildren(children.props.children);
    }
    
    return '';
}

// Alternative approach: Parse MDX source content directly
export function extractTocFromMDXSource(mdxSource: string): TocItem[] {
    const headings: TocItem[] = [];
    const lines = mdxSource.split('\n');
    
    lines.forEach(line => {
        const match = line.match(/^(#{1,6})\s+(.+)$/);
        if (match) {
            const level = match[1].length;
            const text = match[2].trim();
            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            
            headings.push({ id, text, level });
        }
    });
    
    return headings;
}