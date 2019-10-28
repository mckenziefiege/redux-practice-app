import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { loadTodos } from './redux/actions.js';

class App extends Component {

  componentDidMount() {
    console.log(this.props)
    this.props.loadTodos();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <header className="App-header">
         <div>test</div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    todos: state.todos
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTodos: () => dispatch(loadTodos())
  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(App);
