"use client";

import { useEffect, useState } from "react";

export default function ClientLayout({
    children,
    inter,
}: {
    children: React.ReactNode;
    inter: string;
}) {
    const [mounted, setMounted] = useState(false);

    // This helps avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <html lang="vi" className="scroll-smooth mdl-js">
            <body className={`${inter} font-sans antialiased`}>
                {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
            </body>
        </html>
    );
}
