import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state = {favLinks: [],} //Will store the list of favorite links
  }

  handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       const tempArray = this.state.favLinks;
       this.setState ({favLinks : tempArray}); //New state
       tempArray.splice(index, 1); //Will remove the element on the index

       

        }

  handleSubmit = (favLink) => {
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState({
        favLinks:[...this.state.favLinks, favLink]
       })

  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        {/*TODO - Add Table Component */}
        <Table linkData= {this.state.favLinks} removeLink= {(index) => this.handleRemove(index)} /> {/*Renders Table*/}
        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form addNew = {(favLink) => this.handleSubmit(favLink)} /> {/*Renders Form*/} 
      </div>
    )
  }
}

export default LinkContainer
