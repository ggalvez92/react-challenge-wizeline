import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

class LoginForm extends Component {
    handleClick = () => {
        this.props.login();
    };

    render() {
        return (
            <div>
                Login form
                <button onClick={this.handleClick}>Probar dispatch</button>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        auth: state.auth,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        login: () => dispatch(login(1, 'Gianpierre')),
    };
}

const Form = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default Form;
