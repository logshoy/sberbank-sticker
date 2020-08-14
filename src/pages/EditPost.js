import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { todoById, changeById } from '../store/actions/todos';
import { showModal } from '../store/actions/modal';

class EditPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoTitle: '',
      arr: [],
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.todoById(this.props.match.params.id);
      this.setState({
        todoTitle: this.props.todoId.title,
        arr: this.props.todoId.todosList,
      });
    });
  }

  handleChangeTitle(event) {
    this.setState({
      todoTitle: event.target.value,
    });
  }

  addTodoItem = () => {
    this.setState({
      arr: [...this.state.arr, ''],
    });
  };

  handleChange = (e, index) => {
    this.state.arr[index] = {
      name: e.target.value,
      completed: false,
    };
    this.setState({
      arr: this.state.arr,
    });
  };

  handleRemove = index => {
    this.state.arr.splice(index, 1);
    this.setState({
      arr: [...this.state.arr],
    });
  };

  handleSave() {
    this.props.changeById(
      this.props.todoId.id,
      this.state.todoTitle,
      this.state.arr,
    );
  }

  render() {
    return (
      <div className="container">
        <Link to="/">Вернуться</Link>
        <h1>Изменить заметку</h1>
        <input
          value={this.state.todoTitle}
          onChange={e => this.handleChangeTitle(e)}
        />
        {this.state.arr.map((todo, index) => (
          <div className="input-createTodo" key={index}>
            <input
              type="text"
              placeholder="Task"
              onChange={e => this.handleChange(e, index)}
              value={todo.name}
            />
            <button onClick={() => this.handleRemove(index)}>Remove</button>
          </div>
        ))}
        <button onClick={this.addTodoItem}>Add checkbox</button>
        <button
          onClick={() => {
            this.handleSave();
          }}
        >
          {' '}
          Сохранить{' '}
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoId: state.todos.todo,
  };
}

function mapDispathToProps(dispatch) {
  return {
    todoById: id => dispatch(todoById(id)),
    changeById: (id, title, todosList) => {
      dispatch(changeById(id, title, todosList));
    },
    showModal: id => dispatch(showModal(id)),
  };
}

export default connect(mapStateToProps, mapDispathToProps)(EditPost);
