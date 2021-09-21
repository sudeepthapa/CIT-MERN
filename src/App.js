import React, {Component, Fragment } from 'react';
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


const FunctionalApp = () => {

  const [count, setCount] = React.useState(0);
  const [shouldHide, setShouldHide] = React.useState(false);
  const [person, setPerson] = React.useState({
    name: 'alex',
    age: 12
  })

  const increment = () => setCount(count + 1);
  
  const decrement = () => setCount(count - 1);

  const hide = () => setShouldHide(!shouldHide);

  const changePerson = () => setPerson({
    ...person,
    name: 'blex'
  });

  return <div className="container">
        { !shouldHide && <h1>{count}</h1>}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={hide}>{ !shouldHide ? 'Hide' : 'Show'}</button>
    </div>
}

export default FunctionalApp;