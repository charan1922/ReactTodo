import React, {Component} from 'react';
import uuid from 'uuid'
import $ from 'jquery'
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';
import Todos from './Components/Todos'

class App extends Component {

  constructor() {
    super();
    this.state = {
      Projects: [],
      Todo: []
    }
  }

getTodos(){
$.ajax({
  url:'https://jsonplaceholder.typicode.com/todos',
  dataType:'json',
  cache:'false',
  success:function(data){
    this.setState({Todo:data},function(){
     // console.log(this.state);
    });

  }.bind(this),
  error: function(xhr,status,err){
    console.log(err);
  }

})
}

getProjects(){
  this.setState({
    Projects: [
      { id: uuid.v4(),
        title: 'Facebook',
        category: 'web design'
      }, {
        id: uuid.v4(),
        title: 'Paypal',
        category: 'web developmet'
      }, {
        id: uuid.v4(),
        title: 'whatsapp',
        category: 'mobile developmet'
      }
    ]
  });

}
  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

componentDidMount(){
this.getTodos();
}


handleAddProject(Project){
  let Projects = this.state.Projects;
  Projects.push(Project);
  this.setState({Projects:Projects});
}


handleDeleteProject(id){
  let projects = this.state.Projects;
  let index = projects.findIndex(x => x.id === id);
  projects.splice(index,1);
  this.setState({projects:projects});
}

  render() {

    return (

      <div className="App">
        <AddProject AddProject={this.handleAddProject.bind(this)} />

        <br/>

        <Projects Projects={this.state.Projects} onDelete={this.handleDeleteProject.bind(this)} />

        <hr/>
        <Todos todos={this.state.Todo} />
        
            </div>
    );
  }
}

export default App;
