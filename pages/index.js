import * as React from "react";
import { useStrict } from 'mobx';
import App from "../containers/App";
import Head from "next/head";
useStrict(true);
export default function Index() {
    return (React.createElement("div", null,
        React.createElement(Head, null,
            React.createElement("title", null, "\u25B2 Higher or \u25BC Lower?"),
            React.createElement("meta", { charSet: "utf-8" }),
            React.createElement("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" }),
            React.createElement("link", { href: "static/tachyons.css", media: "all", rel: "stylesheet" }),
            React.createElement("link", { href: "static/style.css", media: "all", rel: "stylesheet" })),
        React.createElement(App, null)));
}
//# sourceMappingURL=index.js.map