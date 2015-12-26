import React from 'react';
import ReactDOM from 'react-dom'
import './style.scss'

class Hello extends React.Component {
    // static defaultProps = {
    //     autoPlay: false,
    //     maxLoops: 10,
    //   }
    //   static propTypes = {
    //     autoPlay: React.PropTypes.bool.isRequired,
    //     maxLoops: React.PropTypes.number.isRequired,
    //     videoSrc: React.PropTypes.string.isRequired,
    //   }
    //   state = {
    //     loopsRemaining: this.props.maxLoops,
    //   } 
 render() {
    return <div className="hello"> <h1>Hello</h1></div>
  }
}

ReactDOM.render(<Hello/>, document.getElementById('app'));
