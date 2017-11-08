import React, { Component } from 'react';
import uuid from 'uuid';


 class AddProject  extends Component {
constructor(props){
    super(props);
    this.state = {newProject:{} }

}


   static defaultProps = {

       categories:['web design', 'web development','mobile development']
   }

handleSubmit(e){
    if(this.refs.title.value === ''){
        alert('Title Required')
    }
    else {
        this.setState({newProject:{
            id: uuid.v4(),
            title:this.refs.title.value,
            category:this.refs.category.value
        }}, function(){
            
            this.props.AddProject(this.state.newProject)
        
        
        })
    }

    e.preventDefault();
    
}


    render() {

        let categoryOptions = this.props.categories.map(category => {
           return <option key={category} value={category}>{category}</option>
        }
        );

        return (
            <div >
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
            <label>Title:</label>
            <input type="text" ref="title" /> 
            </div>
            <br/>
            <div>
            <label>Category</label>
            <select ref="category">
            {categoryOptions}
             </select>   
            </div>
            <br/>
            <input type="submit" value="submit" />
            
       
            </form>
            </div>

            
        
         );
    }
}

export default AddProject ;