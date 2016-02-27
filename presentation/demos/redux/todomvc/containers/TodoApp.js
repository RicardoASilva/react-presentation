import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';

class TodoApp extends Component {
  render() {
    const { todos, actions } = this.props;

    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  //O que retornar do state vai surgir como props
  //dentro dos todos
  return {
    todos: state.todos
  };
}

//Tudo o que for retornado desta função vai acabar
//como props no container TodoApp
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
