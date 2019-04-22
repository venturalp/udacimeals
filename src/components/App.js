import React, { Component } from 'react'
import { addRecipe } from '../actions'
import  { connect } from 'react-redux'

class App extends Component {

  state = {
    calendar: null
  }

  submitFood = () => {    
     
  }

  render() {
    console.log(this.props)
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

function mapStateToProps (calendar) {
  const dayOrder = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ]
  return {
    calendar: dayOrder.map(day => ({
      day,
      meals: Object.keys(calendar[day]).reduce((meals, meal) => {
        meals[meal] = calendar[day][meal] ? calendar[day][meal] : 'sem receita'
        return meals
      }, {})
    }))
  }
}

export default connect(mapStateToProps)(App)
