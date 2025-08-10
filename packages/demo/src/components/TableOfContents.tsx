import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { TocItem } from '../utils/toc-parser';

interface TableOfContentsProps {
    className?: string;
}

export function TableOfContents({ className = '' }: TableOfContentsProps) {
    const location = useLocation();
    const [tocItems, setTocItems] = useState<TocItem[]>([]);

    useEffect(() => {
        // For now, we'll use a simple approach to extract headings from DOM
        // This will be updated once the page is rendered
        const extractHeadingsFromDOM = () => {
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            const tocItems: TocItem[] = [];
            
            headings.forEach((heading) => {
                const level = parseInt(heading.tagName.charAt(1));
                const text = heading.textContent || '';
                const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                
                // Set id on the heading element for anchor links
                if (!heading.id) {
                    heading.id = id;
                }
                
                tocItems.push({ id, text, level });
            });
            
            setTocItems(tocItems);
        };
        
        // Extract headings after a short delay to ensure MDX content is rendered
        const timer = setTimeout(extractHeadingsFromDOM, 100);
        
        return () => clearTimeout(timer);
    }, [location.pathname]);

    // Parse MDX source content to extract headings
    function extractTocFromMDXSource(mdxSource: string): TocItem[] {
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

    if (tocItems.length === 0) {
        return (
            <div className={`p-6 ${className}`}>
                <h3 className="mb-4 text-lg font-semibold text-gray-900">Table of Contents</h3>
                <p className="text-sm text-gray-500">No headings found in this page.</p>
            </div>
        );
    }

    return (
        <div className={`p-6 ${className}`}>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Table of Contents</h3>
            <nav className="space-y-1">
                {tocItems.map((item, index) => (
                    <a
                        key={index}
                        href={`#${item.id}`}
                        className={`block rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-50 hover:text-gray-900 ${
                            item.level === 1 ? 'font-medium text-gray-900' :
                            item.level === 2 ? 'text-gray-700 pl-4' :
                            item.level === 3 ? 'text-gray-600 pl-8' :
                            'text-gray-500 pl-12'
                        }`}
                        style={{ paddingLeft: `${(item.level - 1) * 12 + 12}px` }}
                    >
                        {item.text}
                    </a>
                ))}
            </nav>
        </div>
    );
}

export default TableOfContents;