import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.scss';
import CoursesPage from './Pages/Courses/Courses';
const App = () => {
    return (
        <Router basename="/eleqtrasoft">
            <div className="app">
               <Switch>
                   <Route path="/" exact component={CoursesPage}/>
               </Switch>
            </div>
        </Router>
    )
}

export default App
