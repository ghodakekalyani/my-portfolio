import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import App from "./app";
import "./index.less";

ReactDom.render(
    <App/>,
    document.getElementById('app')
)