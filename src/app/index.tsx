import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import { store } from './store';

import { FocusStyleManager } from "@blueprintjs/core";
FocusStyleManager.onlyShowFocusOnTabs();

import RootRoute from './routes/RootRoute';

class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<RootRoute />
			</Provider>
		)
	}
}

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App/>);