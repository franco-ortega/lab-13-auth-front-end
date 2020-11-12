import React, { Component } from 'react';
import request from 'superagent';

export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        loading: false
    }

    handleSubmitLogin = async (e) => {
        e.preventDefault();

console.log(this.state);

        this.setState({ loading: true })

        const user = await request
        .post('https://still-chamber-35164.herokuapp.com/auth/signin')
        .send(this.state)

console.log(user.body, 'sending signup info');

        this.setState({ loading: false })

        this.props.handleChangeUsernameAndToken(user.body.email, user.body.token)

        this.props.history.push('/todos');

    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitLogin}>
                Login to do Chores!!!
                    <label>
                        Email:
                        <input
                        onChange={(e) => this.setState({ email: e.target.value })}
                        value={this.state.email} />
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
                            Log In!
                        </button>
                    }
                </form>
            </div>
        )
    }
}
