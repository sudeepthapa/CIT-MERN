import React, {Component, Fragment} from 'react';
import './App.css'
class App extends Component{

  state = { // useState
    count: 0,
    shouldHide: false
  }

  // lifecycles

  componentDidMount = () => {   // useEffect
    console.log('Component did mount')
  }

  componentWillUnmount = () => { // useEffect
    console.log('component will unmount')
  }

  shouldComponentUpdate = (nextProp, nextState) => { // useEffect
    return nextState.count !== 0;
  }


  // lifecyles end


  increment = () => {
    this.setState({
      ...this.state,
      count: this.state.count + 1,
    })
  }

  decrement = () => {
    this.setState({
      ...this.state,
      count: this.state.count - 1
    })
  }

  hide = () => {
    this.setState({
      ...this.state,
      shouldHide: !this.state.shouldHide
    })
  }

  render(){
    console.log('render')
    return <div className="container">
        { !this.state.shouldHide && <h1>{this.state.count}</h1>}
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.hide}>{ !this.state.shouldHide ? 'Hide' : 'Show'}</button>
    </div>
  }

}

export default App;