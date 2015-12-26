var React = require('react')
var Main = require('../components/Main.js')
var Home = require('../components/Home.js')
var ReactDOM = require('react-dom')
var Router = require('react-router')
var Route = Router.Route;
var IndexRoute = Router.IndexRoute

module.exports = (
    <Route path="/" component={Main}>
        //default path 
        <IndexRoute component={Home}/>
    </Route>
)
