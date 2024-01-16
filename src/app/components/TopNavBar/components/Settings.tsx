import React from 'react';
import { useAppSelector, useAppDispatch } from './../../../hooks'
import { connect } from 'react-redux';

import * as appStateActions from "../../../store/appState/appState.actions";

import {
	Menu,
	MenuItem,
} from '@blueprintjs/core';

export class Settings extends React.Component {

	handleThemeChange(theme) {
		this.props.changeTheme(theme);
	}

	render() {
		return (
			<Menu>
				<MenuItem text="Theme" icon="style">
					<MenuItem text="Light Mode" active={this.props.appState.theme == 'bp3-body'} onClick={() => this.handleThemeChange('bp3-body')} />
					<MenuItem text="Dark Mode" active={this.props.appState.theme == 'bp3-dark'} onClick={() => this.handleThemeChange('bp3-dark')} />
				</MenuItem>
			</Menu>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		// app_state
		changeTheme: (theme) => dispatch(appStateActions.changeTheme(theme)),
	};
}

export default connect(
	null,
	mapDispatchToProps,
)(Settings)
