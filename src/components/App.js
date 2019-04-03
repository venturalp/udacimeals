import React, { Component } from 'react'
import { addRecipe } from '../actions'

class App extends Component {

  state = {
    calendar: null
  }

  submitFood = () => {    
     
  }

  render() {
    return (
      <div>
        <input type='text' ref={(input)=> this.input = input} placeholder='Monday breakfast'/>
        <button onClick={this.submitFood}>Submit</button>

        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </div>
    )
  }
}

export default App
