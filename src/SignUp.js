import React, { Component } from 'react'

export default class SignUp extends Component {
    state = {
        username: '',
        password: ''
    }




    render() {
        return (
            <div>
                SIGN UP PAGE!!!
                <p>
                    Fill out this lovely form to get your chores done. :)
                </p>
                <form>
                    <label>
                        Username:
                        <input />
                    </label>
                    <label>
                        Password:
                        <input />
                    </label>
                    <button>
                        Sign Up!
                    </button>
                </form>
            </div>
        )
    }
}
