import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigationDrawerToggle } from '../../redux/actions/template';
class NavigationMenu extends Component {
    handleNavigationDrawerToggle = () => {
        this.props.navigationDrawerToggleAction(
            !this.props.template.navigationDrawerToggle
        );
    };

    render() {
        const { navigationDrawerToggle } = this.props.template;
        return (
            <div
                className={
                    'navigation-drawer-container w-full fixed bg-black bg-opacity-50 top-0 h-screen transition-all duration-300 transform ' +
                    (!navigationDrawerToggle ? '-translate-x-full' : 'translate-x-0')
                }
            >
                <div className="navigation-drawer w-64 absolute bg-gray-700 top-0 h-screen">
                    <div className="flex pr-2 justify-end pt-3">
                        <button
                            className="p-1 text-white text-xl font-bold leading-4"
                            onClick={this.handleNavigationDrawerToggle}
                        >
                            &times;
                        </button>
                    </div>
                    <h1 className="text-xl text-center pt-5 text-white">Home</h1>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        template: state.template,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        navigationDrawerToggleAction: (navigationDrawerToggleValue) =>
            dispatch(navigationDrawerToggle(navigationDrawerToggleValue)),
    };
}

const NavigationMenuWithReduxStates = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavigationMenu);

export default NavigationMenuWithReduxStates;
