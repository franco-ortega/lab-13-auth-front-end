import React, { Component } from 'react';
import request from 'superagent';

export default class Todos extends Component {
    state = {
        todos: [],
        todoName: '',
        loading: false
    }

    componentDidMount = async () => {
        await this.fetchTodos()
    }

    fetchTodos = async () => {
        await this.setState({ loading: true });
        const response = await request.get('https://still-chamber-35164.herokuapp.com/api/todos')
        .set('Authorization', this.props.token)

        await this.setState({ todos: response.body, loading: false })
    }

    handleSubmitTodoForm = async (e) => {
        e.preventDefault();

        const newTodo = {
            chore: this.state.todoName
        };

        await this.setState({ loading: true });

        await request.post('https://still-chamber-35164.herokuapp.com/api/todos')
        .send(newTodo)
        .set('Authorization', this.props.token);

        await this.fetchTodos();
    }

    handleClickChore = async (someId) => {
        await request.put(`https://still-chamber-35164.herokuapp.com/api/todos/${someId}`)
        .set('Authorization', this.props.token);

        await this.fetchTodos();
    }


    render() {
        return (
            <div>
                Welcome to your Todos page of Chores.
                <form onSubmit={this.handleSubmitTodoForm}>
                    <label>
                        Add a chore (you can always do more!!):
                        <input
                        value={this.state.todoName}
                        onChange={(e) => this.setState({ todoName: e.target.value })}
                        />
                    </label>
                    <button>
                        Add Chore
                    </button>
                </form>
                {
                    this.state.loading
                    ? '~ ~ ~ ~ ~ Loading ~ ~ ~ ~ ~'
                    : this.state.todos.map(todo =>
                        <div key={`${todo.chore}${todo.id}${Math.random()}`} style={{ textDecoration: todo.comleted ? 'line-through' : 'none'}}
                        >
                            Chore: {todo.chore}
                            {
                                todo.completed ? ' Well done! You did a chore!' : <button onClick={() => this.handleClickChore(todo.id)}>
                                    Do Chore
                                </button>
                            }
                        </div>)


                }





            </div>
        )
    }
}
