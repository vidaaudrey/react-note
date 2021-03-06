import React, { Component } from 'react'
import SearchGithub from './SearchGithub'

export default ({children, history}) => {
    return ( 
      < div className = "main" >
        < nav className = "navbar navbar-default" role = "navigation" >
          < div className = "col-sm-8 col-sm-offset-2" style = {{ marginTop: 15}} >
             <SearchGithub history={history} />
          < /div> 
        < /nav> 
        < div className = "container" > 
          {children} 
        < /div> 
      < /div>
    )
  }



