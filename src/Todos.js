import React, { Component } from 'react';
import request from 'superagent';

export default class Todos extends Component {
    state = {
        todos: []
    }

    componentDidMount = async () => {
        const response = await request.get('https://still-chamber-35164.herokuapp.com/todos')
        .set('Authorization', this.props.token)

        this.setState({ todos: response.body })
    }


    render() {
        return (
            <div>
                Welcome to your Todos page of Chores.
                {
                    Boolean(this.state.todos.length) && this.state.todos.map(todo =>
                        <div>
                            name: {todo.chore}; completed: {todo.comleted}
                        </div>)
                }
            </div>
        )
    }
}
