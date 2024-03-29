import React from 'react';
import { PartTitle } from "../../../../../../components";
import ScriptPartCreationDialog from "../ScriptNav/ScriptPartCreationDialog";

import {
	TextArea
} from '@blueprintjs/core';

export default function Parts() {
/*
	constructor(props) {

		super(props);

		let url_parts = window.location.hash.replace('#', '').split("/");

		this.state = {
			selectedPartIndex: url_parts[url_parts.length-1]
		};
	}
*/

		var parts = [];

		if (this.props.parts) {
			parts = this.props.parts
				.sort((a, b) => a.position > b.position)
				.map((name, index) => {
					return (
						<div>Part {this.props.parts[index].position}: {this.props.parts[index].name}</div>
					);
				});
		}

		var selectedPart = this.props.parts[this.state.selectedPartIndex];

		return (
			<div>

				{/* <div>{window.location.hash}</div> */}

				{parts}

				<ScriptPartCreationDialog />

				<Switch>

					<Redirect exact from="/script/structure/parts" to={`/script/structure/parts/0`} />

					{selectedPart &&

						<Route path={`/script/structure/parts/${this.state.selectedPartIndex}`} component={() => { return (
							<div style={{
								display: 'flex',
								flexDirection: 'column',
								overflow: 'auto',
								resize: 'none',
							}}>
								<PartTitle part={selectedPart} />
								<TextArea id="ScriptTextArea"
									style={{
										height: '100%',
										margin: '1%',
										overflow: 'auto',
										border: '1px solid #ddd',
										resize: 'none',
									}}
									onKeyDown={this.onInput}
									value={this.state.text}
								/>
							</div>
						)}} />
					}
				</Switch>
			</div>
		);
	}
