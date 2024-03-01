import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ToDoApp from "./ToDoApp";

console.log(document);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <ToDoApp />
    </StrictMode>
);
