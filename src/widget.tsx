import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from "./App";

export function createQ2LPWidget(container: HTMLElement, options: any = {}) {
    const root = createRoot(container);

    root.render(
        <React.StrictMode>
            <App q2forms={options.q2forms || []} />
        </React.StrictMode>
    );

    return {
        destroy() {
            root.unmount();
        }
    };
}
