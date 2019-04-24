import React, { Component } from 'react'
import { addRecipe, removeFromCalendar } from '../actions'
import  { connect } from 'react-redux'

class App extends Component {

  state = {
    calendar: null
  }

  submitFood = () => {    
     
  }

  componentDidMount() {
    this.props.addRecipe({
      day: 'monday',
      meal: 'lunch',
      recipe: {label: 'lasanha'},
    })
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

function mapDispatchToProps(dispatch) {
  return {
    addRecipe: (data) => dispatch(addRecipe(data)),
    removeFromCalendar: (data) => dispatch(removeFromCalendar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
