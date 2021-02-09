import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAsync } from '../../redux/actions/auth';
import { loginModalToggle } from '../../redux/actions/template';
import FloatingLabelInput from '../FloatingLabelInput';

class LoginForm extends Component {
    state = {
        email: 'react@wizeline.com',
        password: '123456',
        canSubmit: true,
    };
    handleClick = () => {
        this.props.login();
    };

    handleLoginInput = (event) => {
        this.setState({ email: event.target.value });
    };

    handlePasswordInput = (event) => {
        this.setState({ password: event.target.value });
    };

    handleSubmitLogin = async (event) => {
        event.preventDefault();
        this.setState({ canSubmit: false });
        const { email, password } = this.state;
        if (!(email === 'react@wizeline.com' && password === '123456')) {
            alert('ERROR en usuario');
            this.setState({ canSubmit: true });
            return;
        }

        await this.props.login(1, email);
        this.setState({ canSubmit: true });
        this.props.loginModalToggle(false);
    };

    render() {
        const { email, password, canSubmit } = this.state;
        return (
            <form onSubmit={this.handleSubmitLogin}>
                <div className="modal-body">
                    <div className="container px-4">
                        <FloatingLabelInput
                            name="email"
                            type="text"
                            children="Email"
                            handleChange={this.handleLoginInput}
                            value={email}
                        />
                        <FloatingLabelInput
                            name="password"
                            type="password"
                            children="Password"
                            handleChange={this.handlePasswordInput}
                            value={password}
                        />
                    </div>
                </div>
                <div className="modal-footer bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                        disabled={canSubmit ? '' : 'disabled'}
                    >
                        Submit
                    </button>
                    <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                        Cancel
                    </button>
                </div>
            </form>
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
        login: (id, email) => dispatch(loginAsync(id, email)),
        loginModalToggle: (loginModalToggleValue) =>
            dispatch(loginModalToggle(loginModalToggleValue)),
    };
}

const Form = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default Form;
