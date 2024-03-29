import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks'

import TopNavBar from '../../components/TopNavBar/TopNavBar';
import Workspace from '../../components/Workspace/Workspace';

import {
	Icon,
} from '@blueprintjs/core';

export default function WelcomeRoute () {

	return (
		<div id="WelcomeRoute" className={'absolute w-full h-full flex flex-col ' + useAppSelector(state => state.appState.theme)}>

			<div className="flex flex-col h-screen justify-center items-center">

				<div className="relative -left-3 top-3">
					Welcome to
				</div>

				<div className="app_name text-5xl mb-8">
					<Icon icon="draw" size={55} className="mr-4" />Storyteller
				</div>

				<Workspace />

			</div>

		</div>
	);
}
