import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        username: '',
        password: ''
    }

    handleSubmitSignUpForm = (e) => {
        e.preventDefault();

        console.log(this.state);
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
                    <button>
                        Sign Up!
                    </button>
                </form>
            </div>
        )
    }
}
