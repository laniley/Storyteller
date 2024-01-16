import React from 'react';

import ContentEditable from "react-contenteditable";
import ReactHtmlParser from 'react-html-parser';

import './TextInput.css';

export class TextInput extends React.Component {

	constructor(props) {

		super(props);

		this.state = {
			html: props.html || "",
			initial_value: props.html || "",
			isInEditMode: !props.html || props.html.length <= 0,
			multiLine: props.multiLine,
			mouseOver: false,
		};
	}

	render() {
		return (
			<ContentEditable
				id={this.props.id}
				style={this.props.style}
				className={`${this.state.isInEditMode || this.state.mouseOver ? 'showBorder ' : ''}` + "editable"}
				placeholder={this.props.placeholder}
				html={this.state.html} // innerHTML of the editable div
				disabled={false} // use true to disable edition
				onClick={this.openEditMode.bind(this)}
				onKeyDown={this.handleKeyDown.bind(this)}
				onChange={this.handleChange.bind(this)} // handle innerHTML change
				onBlur={this.handleBlur.bind(this)} // the element looses focus
				onMouseEnter={this.onMouseEnter.bind(this)}
				onMouseLeave={this.onMouseLeave.bind(this)}
			/>
		);
	}

	onMouseEnter() {
		this.setState({ mouseOver: true })
	}

	onMouseLeave() {
		this.setState({ mouseOver: false })
	}

	openEditMode() {
		this.setState({ isInEditMode: true });
	}

	closeEditMode() {
		this.setState({ isInEditMode: false })
	}

	undoEditing() {
		this.setState({
			isInEditMode: !this.props.html || this.props.html.length <= 0,
			html: this.props.initial_value
		});
	}

	handleChange(event) {

		if (this.props.onChange) {
			this.props.onChange(event)
		}

		this.setState({
			html: event.target.value,
		});
	}

	handleKeyDown(event) {
		if (event.which === 13 && !this.state.multiLine) {
			event.preventDefault();
			document.getElementById(this.props.id).blur();
			window.getSelection().removeAllRanges();
			this.handleBlur();
		}
	}

	handleBlur() {
		if (this.state.html !== this.state.initial_value) {
			this.state.initial_value = this.state.html;
			this.props.save();
		}

		this.closeEditMode();
	}
}

export default TextInput;
