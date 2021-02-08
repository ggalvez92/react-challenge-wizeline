import React, { Component } from 'react';

export default class FloatingLabelInput extends Component {
    state = {
        name: this.props.name,
        type: this.props.type,
        children: this.props.children,
        active: false,
    };
    handleActivation = (e) => {
        this.setState({ active: !!e.target.value });
    };
    render() {
        const { name, type, children, active } = this.state;
        return (
            <div className="relative mb-2 bg-transparent">
                <input
                    className={[
                        'w-full bg-transparent border border-t-0 border-r-0 border-l-0 border-black rounded-none outline-none  text-sm transition-all duration-200 ease-in-out p-2',
                        active ? 'pt-6 border-blue-500' : '',
                    ].join(' ')}
                    id={name}
                    name={name}
                    type={type}
                    onChange={this.handleActivation}
                />
                <label
                    className={[
                        'absolute top-0 left-0 flex items-center text-gray-500 text-opacity-50 p-2 transition-all duration-200 ease-in-out',
                        active ? 'text-xs text-blue-500' : 'text-sm',
                    ].join(' ')}
                    htmlFor={name}
                >
                    {children}
                </label>
            </div>
        );
    }
}
