import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AboutMe } from './components/about/aboutMe';
import ResponsiveAppBar from './components/navigationBar';
import Header from './components/Header/header';
import Nav from './components/Nav/nav';
import Experience from './components/skills/skills';
import Contact from './components/contact/contact';

function App() {
    return (
        <>
            <Header />
        </>
    );
}

export default App;
