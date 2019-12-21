import React from 'react';

import '../css/Button.css';

// props:
  // title
  // height
  // width
  // font-size

// const baseStyle = {
//     height: '75px',
//     width: '254px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ff8e3a',
//     color: '#ffffff',
//     borderRadius: '10px',
//     fontFamily: 'sans-serif',
//     fontWeight: 'bold',
//     fontSize: '20px'
// }

class Button extends React.Component {
    render() {
        return (
            <div className="button">
                <div className="title" style={this.props.extraStyle}>{this.props.title}</div>
            </div>
        )
    }
}

export default Button; 