import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ToDoApp from "./ToDoApp";
import Test from '../Component/Test';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ToDoApp />} />
                <Route path='/test' element={<Test />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
