import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from './../../hooks'

import * as workspaceReducer from "./../../store/workspace/workspace.reducer";
import * as projectActions from "../../store/project/project.actions";

//import { save } from '../../store/chapters/chapter.actions';

import * as ProjectListItem from './ProjectListItem';

import "./Workspace.css";

import {
	Button,
	ButtonGroup,
	Card,
	Collapse,
	FormGroup,
	InputGroup,
	Intent,
	Pre,
} from '@blueprintjs/core';

export default function ProjectList () {

	const dispatch = useAppDispatch();

	const [ createIsOpen ] = useState(false)
  const workspace = useAppSelector(state => state.workspace)
  const no_projects = workspace.projects.length == 0

  let projectListItems = workspace.projects.map((project:Project) =>
      <ProjectListItem
        key={project.name}
        project={project}
        isCurrentlyOpen={project.isCurrentlyOpen}
        onClick={() => { this.props.openProject(project.path); this.props.changeCurrentRootRoute('script'); this.props.save(); }}
        onDelete={() => { this.props.deleteProject(project.path); }} />
    )

	return(
		<div className="flex flex-col justify-center mt-3">
      {no_projects &&
        <div className="mb-3">There are currently no projects in this workspace.</div>
      }
      {!no_projects &&
        <ButtonGroup id="projectsList" className='' minimal={false} vertical={true} style={{ minWidth: "250px" }}>
          {projectListItems}
          <Collapse isOpen={createIsOpen}>
            <Pre>
              <InputGroup
                placeholder={"Title of new project..."}
                /*
                onChange={() => this.setState({
                  name_of_new_project: event.target.value,
                  name_of_new_project_is_valid: this.is_a_valid_new_project_name(event.target.value)
                })}
                */
                autoFocus />
            </Pre>
          </Collapse>
          
          {createIsOpen &&
            <ButtonGroup>
              <Button id="CreateProjectButton"
              style={{width:"50%"}}
              minimal={false}
              icon={"floppy-disk"}
              text={"Save"}
              disabled={this.state.name_of_new_project_is_valid ? false : true}
              onClick={this.handleSaveClick.bind(this)} />

              <Button id="CancelCreateProjectButton"
              style={{ width: "50%" }}
              minimal={false}
              icon={"delete"}
              text={"Cancel"}
              onClick={this.handleCancelClick.bind(this)} />
            </ButtonGroup>
          }
        </ButtonGroup>
      }
      {!createIsOpen &&
        <div className="flex justify-center mt-2">
          <Button id="CreateProjectButton"
            minimal={false}
            icon={"folder-new"}
            text={"Create a new project"}
            intent={Intent.SUCCESS}
            //onClick={this.handleCreateClick.bind(this)} 
          />
        </div>
      }
    </div>
	);
}

/*
	is_a_valid_new_project_name(new_name) {

		new_name = new_name.trim();

		var new_name_is_unique = true;

		this.props.workspace.projects.forEach(project => {
			if (project.name == new_name) {
				new_name_is_unique = false;
			}
		})

		return new_name.length > 0 && new_name_is_unique
	}

	handleCreateClick() {
		this.setState({ createIsOpen: true });
	}

	handleSaveClick() {
		let path_of_new_project = path.join(this.props.workspace.path, this.state.name_of_new_project);
		console.log(path_of_new_project);
		this.props.createProject(path_of_new_project)
		this.props.loadProjects();
		this.setState({
			createIsOpen: false,
			name_of_new_project: ""
		});
	}

	handleCancelClick() {
		this.setState({
			createIsOpen: false,
			name_of_new_project: ""
		});
	}
}
*/