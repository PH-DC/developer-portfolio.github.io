import React from 'react';
import './App.css';

import Header from '../Header/Header';
import Home from '../Main/Home';

export default function App() {
    return (
        <div className="homePage">
            <Header />
            <Home />
        </div>
    )
}