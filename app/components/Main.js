import React from 'react'


const Main = React.createClass({
  render: function () {
    return ( < div className = "main" >
      < nav className = "navbar navbar-default"
      role = "navigation" >
      < div className = "col-sm-8 col-sm-offset-2"
      style = {
        {
          marginTop: 15
        }
      } >
      Menu < /div> < /nav> < div className = "container" > {
        this.props.children
      } < /div> < /div>
    )

  }
})

module.exports = Main
