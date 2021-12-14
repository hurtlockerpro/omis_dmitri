import React from 'react';

class IncDecButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 30
        }
        //this.setState({ count : 20 })
    }

    getMyName(name = 'Vladimir'){
        return name
    }

    increment = () => {
        this.setState(
          prevState => ({ count: prevState.count + 1 })
        )
      };
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <div>
            <h1>My name is: { this.getMyName('Vasja') }</h1>
            <div className="myclass">result: { this.state.count }</div>
            <button onClick={this.increment}>Add one</button>
        </div>
      );
    }
  }



export default IncDecButton;