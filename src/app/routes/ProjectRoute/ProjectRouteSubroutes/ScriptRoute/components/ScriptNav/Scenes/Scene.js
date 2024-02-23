import React from 'react';
import { connect } from 'react-redux';
import { Draggable } from "react-beautiful-dnd";
import SceneCreationDialog from "./SceneCreationDialog";

import * as appStateActions from "../../../store/appState/appState.actions";

import {
	Button,
	ButtonGroup,
	Tree,
	Intent,
} from '@blueprintjs/core';

class Scene extends React.Component {

	constructor(props) {

		super(props);

		this.state = {

			position: this.props.scene.position || 0,

		};
	}

	render() {

		let treeContent = [];

		let aScene =
		{
			id: treeContent.length,
			hasCaret: false,
			isExpanded: false,
			icon: "folder-close",
			label: <div>Scene {this.state.position}: {this.props.scene.name}</div>,
			secondaryLabel:
				<ButtonGroup>
					<Button minimal icon="edit" />
					<Button minimal icon="trash" onClick={() => this.handleMoveToTrash()} />
					<Button minimal icon="drag-handle-vertical" />
				</ButtonGroup>,
			childNodes: [],
		};

		treeContent.push(aScene);

		return (

			<Draggable key={this.props.scene.id} draggableId={`part-${this.props.scene.id}`} index={this.state.position}>
				{(provided, snapshot) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
						className="Scene">
						<Tree contents={treeContent} />
					</div>
				)}
			</Draggable>
		);
	}

	handleMoveToTrash() {
		this.props.setObjectToDelete({ type: "Scene", id: this.props.scene.id, position: this.props.scene.position, title: this.props.scene.title });
		this.props.showMoveToTrashAlert(this.props.scene);
	}

}

function mapStateToProps({ appState }) {
	return {
		appState
	};
}

function mapDispatchToProps(dispatch) {
	return {
		delete: sceneID => dispatch(sceneActions.deleteSceneAction(sceneID)),
		setObjectToDelete: objectToDelete => dispatch(appStateActions.setObjectToDelete(objectToDelete)),
		showMoveToTrashAlert: (objectToDelete) => dispatch(appStateActions.showMoveToTrashAlert(objectToDelete)),
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Scene)
