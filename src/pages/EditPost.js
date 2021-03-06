import React from 'react';
import BinDelete from '../svg/BinDelete';
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
      titleChange: false,
    };
  }

  componentDidMount() {
    document.title = `Заметка ${this.props.match.params.id}`;
    setTimeout(() => {
      this.props.todoById(this.props.match.params.id);
      this.setState({
        todoTitle: this.props.todoId.title,
        arr: this.props.todoId.todosList,
      });
      this.state.arr.forEach(item => (item.change = false));
      this.setState({
        arr: this.state.arr,
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
      arr: [
        ...this.state.arr,
        {
          name: '',
          completed: false,
          change: true,
        },
      ],
    });
  };

  handleChange = (e, index) => {
    const newState = this.state.arr;
    newState[index].name = e.target.value;
    this.setState({
      arr: newState,
    });
  };

  handleRemove = index => {
    this.state.arr.splice(index, 1);
    this.setState({
      arr: [...this.state.arr],
    });
  };

  checkItem = (completed, index) => {
    const newState = this.state.arr;
    newState[index].completed = !completed;
    this.setState({
      arr: newState,
    });
  };

  onChangeTitle = () => {
    this.setState({
      titleChange: !this.state.titleChange,
    });
  };

  onChangeTitleKeyPress = event => {
    if (event.key === 'Enter') {
      this.onChangeTitle();
    }
  };

  onChange = (change, index) => {
    const newState = this.state.arr;
    newState[index].change = !change;
    this.setState({
      arr: newState,
    });
  };

  onChangePressEnter = (event, change, index) => {
    if (event.key === 'Enter') {
      this.onChange(change, index);
    }
  };

  handleSave() {
    this.props.changeById(
      this.props.todoId.id,
      this.state.todoTitle,
      this.state.arr,
    );
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="container">
        <div className="main-title">
          <Link to="/">&larr;</Link>
          <h1>Изменить заметку</h1>
          <div></div>
        </div>
        <div className="todoTitle">
          {!this.state.titleChange ? (
            <h2 onClick={() => this.onChangeTitle()}>{this.state.todoTitle}</h2>
          ) : (
            <input
              type="text"
              value={this.state.todoTitle}
              onKeyPress={e => this.onChangeTitleKeyPress(e)}
              onChange={e => this.handleChangeTitle(e)}
            />
          )}
          <div
            className="todoItem__change"
            onClick={() => this.onChangeTitle()}
          ></div>
        </div>
        {this.state.arr.map((todo, index) => {
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
              {todo.change ? (
                <input
                  type="text"
                  placeholder="Task"
                  onChange={e => this.handleChange(e, index)}
                  onKeyPress={e =>
                    this.onChangePressEnter(e, todo.change, index)
                  }
                  value={todo.name}
                />
              ) : (
                <span onClick={() => this.onChange(todo.change, index)}>
                  {todo.name}
                </span>
              )}
              <div
                className="todoItem__change"
                onClick={() => this.onChange(todo.change, index)}
              ></div>
              <button
                className="button--delete"
                onClick={() => this.handleRemove(index)}
              >
                &times;
              </button>
            </div>
          );
        })}
        <div className="button-add">
          <button className="btn-circle" onClick={this.addTodoItem}>
            +
          </button>
        </div>
        <div className="buttons buttons--editPost">
          <div className="buttons">
            <button
              className="button"
              onClick={() => {
                this.props.showModal('CHANGE_TODO', {
                  id: this.props.todoId.id,
                  title: this.state.todoTitle,
                  todosList: this.state.arr,
                });
              }}
              disabled={!this.state.todoTitle}
            >
              Сохранить
            </button>
            <Link className="button" to="/">
              Отмена
            </Link>
          </div>
          <div
            onClick={() => {
              this.props.showModal('DELETE_POST', {
                id: this.props.todoId.id,
                deleteType: 'page',
              });
            }}
          >
            <BinDelete size="50" />
          </div>
        </div>
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
    showModal: (modalType, modalProps) => {
      dispatch(showModal(modalType, modalProps));
    },
  };
}

export default connect(mapStateToProps, mapDispathToProps)(EditPost);
