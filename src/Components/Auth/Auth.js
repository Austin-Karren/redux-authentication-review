import React, {Component} from 'react';
import Axios from 'axios';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            registerView: true
        }
    }

    handleInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleRegister = () => {
        console.log(this.props)
        const {email, password} = this.state;
        Axios.post('/api/register', {email, password})
        .then(res => {
            //Place user information somewhere(state, reduxState)

            //React-router-dom moves the user to dash
            this.props.history.push('/dash');
        })
        .catch(err => console.log(err));
    }

    handleToggle = () => {
        this.setState({
            registerView: !this.state.registerView
        })
    }

    handleLogin = () => {
        const {email, password} = this.state;
        Axios.post('/api/login', {email, password})
        .then(res => {
            // place session information

            this.props.history.push('/dash')
        })
        .catch(err => console.log(err));
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <input 
                    value={this.state.email} 
                    name='email' 
                    onChange={event => this.handleInput(event)}
                />
                <input 
                    value={this.state.password} 
                    name='password' 
                    onChange={event => this.handleInput(event)}
                />
                {this.state.registerView
                ?(<>
                    <button onClick={this.handleRegister}>Register</button>
                    <p>Already have an account? <span onClick={this.handleToggle}>Login here</span></p>
                </>)
                : (<>
                    <button onClick={this.handleLogin}>Login</button>
                    <p>Don't have an account? <span onClick={this.handleToggle}>Register here</span></p>
                </>)
                }
            </div>
        )
    }
}

export default Auth;