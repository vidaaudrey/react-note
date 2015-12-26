import React from 'react'
import Main from '../components/Main'
import Home from '../components/Home'
import Profile from '../components/Profile'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute} from 'react-router'
// var Route = Router.Route;
// var IndexRoute = Router.IndexRoute

const routes = (
    <Route path="/" component={Main}>
        <Route path="profile/:username" component={Profile} />
        //default path 
        <IndexRoute component={Home}/>
    </Route>
)

export default routes