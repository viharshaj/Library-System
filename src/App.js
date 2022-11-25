import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Switch ,Route, Routes} from 'react-router-dom';
import {AddBook} from "./components/add-book.component";
import {DeleteBook} from "./components/delete-book.component";
import {AddMember} from "./components/add-member.component";
import {IssueBook} from "./components/issue-book.component";
import {ReturnBook} from "./components/return-book.component";
import {SearchBook} from "./components/search-book.component";
import {Signup} from "./components/signup.";
import {Home} from "./components/home";
import {EditBook} from "./components/edit-book.component";
import {SearchMember} from "./components/search-member.component";
import {EditMember} from "./components/edit-member.component";

function App() {
    return(
        <Routes>
            <Route
                exact
                path="/"
                element={<Home/>}
            />
            <Route
                exact
                path="/add-book"
                element={<AddBook/>}
            />
            <Route
                exact
                path="/login"
                element={<Signup/>}
            />
            <Route
                exact
                path="/delete-book"
                element={<DeleteBook/>}
            />
            <Route
                exact
                path="/add-member"
                element={<AddMember/>}
            />
            <Route
                exact
                path="/issue-book"
                element={<IssueBook/>}
            />
            <Route
                exact
                path="/return-book"
                element={<ReturnBook/>}
            />
            <Route
                exact
                path="/search-book"
                element={<SearchBook />}
            />
            <Route
                exact
                path="/edit-book"
                element={ <EditBook/>}
            />

            <Route
                exact
                path="/search-member"
                element={<SearchMember/>}
            />
            <Route
                exact
                path='/edit-member'
                element={<EditMember/>}
            />
        </Routes>
    )
}

export default App