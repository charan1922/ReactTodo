import React, {Component} from 'react'
import ProjectItem from './ProjectItem'

class Projects extends Component {
deleteProject(id){
    this.props.onDelete(id);

}


    render() {
        let ProjectItems;
        if(this.props.Projects){
ProjectItems=this.props.Projects.map( (Project) => { return <ProjectItem onDelete={this.deleteProject.bind(this)} key={Project.id} project={Project} />

    });

        }

        return(
            <div className="Projects" >
            <h3> Latest Projects </h3>
              {ProjectItems}
             </div>

        );
    }
}

export default Projects;