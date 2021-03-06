import React, { Component } from 'react'
import FirstComponent from './components/examples/FirstComponent'
import SecondComponent from './components/examples/SecondComponet'
import ThirdComponent from './components/examples/ThirdComponent'
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './App.css'
import './bootstrap.css'
import { render } from '@testing-library/react';
 
class App extends Component {
  render() {
    return (
      <div className="App">
       {/* <Counter /> */}
       <TodoApp/>
      </div>
    )
  }
}

class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
        My Hello World
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

export default App;