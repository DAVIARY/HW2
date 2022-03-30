import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    /*
            TODO - set initial state for link name and URL 
        */
        this.state = {name: '', URL: ''}
  }

  handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
        if(event.target.id === "link")
            this.setState({ name: event.target.value}); //updates the name 
        else
            this.setState({ URL: event.target.value}); //updates the url 

  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()
    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
            let newFavLink = {name: this.state.name, URL: this.state.URL};
            this.props.addNew(newFavLink); //addNew was passed as props from LinkContainer
            this.setState({ name: '', URL: ''}); //reset the states
  }

  render() {
    return (
      <form>
        {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
            <label htmlFor="link">Link Name : </label>
            <input type="text" id="link" value={this.state.name} onChange={(event) =>this.handleChange(event)}/>  {/*Inserts the Name*/}  
            <label htmlFor="url">URL : </label>
            <input type="text" id="url" value={this.state.URL} onChange={(event) =>this.handleChange(event)}/> {/*Inserts the URL*/}
            <button type="submit" onClick={(o)=>this.onFormSubmit()}>Submit</button> {/*Inserts the name and URL to the array*/}
      </form>
    )
  }
}

export default Form
