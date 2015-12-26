var React = require('react')

var Main = React.createClass({
    render: function(){
        return (
            <div>
                Hello World
            {this.props.children}
            </div>
            )
            
    }
})

module.exports = Main