import React, { Component } from 'react';
import request from 'superagent';

export default class SignUp extends Component {
    state = {
        username: '',
        password: '',
        loading: false
    }

    handleSubmitSignUpForm = async (e) => {
        e.preventDefault();

        console.log(this.state);

        this.setState({ loading: true })

        const user = await request
        .post('https://still-chamber-35164.herokuapp.com/todos/auth/signup')
        .send(this.state)

        console.log(user.body, 'sending signup info');

        this.setState({ loading: false })
    }




    render() {
        return (
            <div>
                SIGN UP PAGE!!!
                <p>
                    Fill out this lovely form to get your chores done. :)
                </p>
                <form onSubmit={this.handleSubmitSignUpForm}>
                    <label>
                        Username:
                        <input
                        onChange={(e) => this.setState({ username: e.target.value })}
                        value={this.state.username} />
                    </label>
                    <label>
                        Password:
                        <input
                        onChange={(e) => this.setState({ password: e.target.value })}
                        value={this.state.password} type='password'/>
                    </label>
                    {
                        this.state.loading
                        ? '~ ~ ~ ~ ~ Loading ~ ~ ~ ~ ~'
                        : <button>
                            Sign Up!
                        </button>
                    }
                </form>
            </div>
        )
    }
}
