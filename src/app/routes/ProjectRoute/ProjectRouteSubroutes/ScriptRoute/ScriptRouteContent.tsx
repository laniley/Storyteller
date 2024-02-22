import React from 'react';
import { connect } from 'react-redux';

import {
	Cover,
	TitleAndAuthor,
	Abstract,
	Parts
} from '../../../../components';

import Chapters from '../../../../components/Chapters/Chapters';
import Dedication from '../../../../components/Dedication/Dedication';

import { getRoute } from '../../../../store/project/project.selectors';

export default function ScriptRouteContent() {
	return (
		<div
			id="ScriptRouteContent"
			style={{
				width: '100%',
				height: '100%'
			}}>
			<Content id="Content" route={this.props.route} />
		</div>
	);
}

export function Content(props) {

	if (props.route === "/script/title_author") {
		return (<TitleAndAuthor />);
	}

	if (props.route === "/script/abstract") {
		return (<Abstract />);
	}

	if (props.route === "/script/dedication") {
		return (<Dedication />);
	}

	if (props.route === "/script/parts") {
		return (<Parts />);
	}

	if (props.route === "/script/chapters") {
		return (<Chapters />);
	}

	return (<Cover />);
}