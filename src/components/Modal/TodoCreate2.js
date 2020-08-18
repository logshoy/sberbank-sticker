import React from 'react';
import { connect } from 'react-redux';
import { addTodoItem } from '../../store/actions/todos';
import { hideModal } from '../../store/actions/modal';

class TodoCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todosTitle: '',
      todos: [
        {
          name: '',
          completed: false,
        },
      ],
    };
  }

  addTodo = event => {
    if (event.key === 'Enter') {
      this.props.addTodoItem(this.state.todosTitle, this.state.todos);
      this.props.hideModal();
    }
  };

  addCheckboxItem = () => {
    console.log('gf');
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: '',
          completed: false,
        },
      ],
    });
  };

  handleChange = (e, index) => {
    const newState = this.state.todos;
    newState[index].name = e.target.value;
    this.setState({
      todos: [...newState],
    });
  };

  checkItem = (completed, index) => {
    const newState = this.state.todos;
    newState[index].completed = !completed;
    this.setState({
      todos: [...newState],
    });
  };

  handleRemoveTodo = i => {
    if (i > -1) {
      this.state.todos.splice(i, 1);
      console.log(this.state.todos);
      this.setState({
        todos: [...this.state.todos],
      });
    }
  };

  addTodoItem = () => {
    this.props.addTodoItem(this.state.todosTitle, this.state.todos);
    this.props.hideModal();
  };

  render() {
    return (
      <div className="create-todo">
        <h1>Создать заметку</h1>
        <div>
          <input
            type="text"
            placeholder="Название заметки"
            value={this.state.todosTitle}
            onChange={event => {
              this.setState({ todosTitle: event.target.value });
            }}
            onKeyPress={() => this.addTodo}
          />
        </div>
        {this.state.todos.map((todo, index) => {
          const cls = ['todoCheck'];
          if (todo.completed) {
            cls.push('completed');
          }
          return (
            <div className={cls.join(' ')} key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => this.checkItem(todo.completed, index)}
                />
                <div className="todoCheck__text"></div>
              </label>
              <input
                type="text"
                placeholder="Задание"
                onChange={e => this.handleChange(e, index)}
                value={todo.name}
              />
              <button
                className="button--delete"
                onClick={() => this.handleRemoveTodo(index)}
              >
                &times;
              </button>
              <div></div>
            </div>
          );
        })}
        <div className="button-add">
          <button className="btn-circle" onClick={this.addCheckboxItem}>
            +
          </button>
        </div>
        <div className="buttons">
          <button
            className="button"
            onClick={() => this.addTodoItem}
            disabled={!this.state.todosTitle}
          >
            Сохранить
          </button>
          <button className="button" onClick={this.props.hideModal}>
            Закрыть
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoTitle: state.todos.todoTitle,
  };
}

function mapDispathToProps(dispatch) {
  return {
    addTodoItem: (todosTitle, todosList) => {
      dispatch(addTodoItem(todosTitle, todosList));
    },
    hideModal: () => dispatch(hideModal()),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(TodoCreate);
