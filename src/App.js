import React, { Component } from 'react';
import AddCourse from './components/addcourse/AddCourse'
import ShowCourse from './components/ShowCourse/ShowCourse'
import {AppDiv, ShowCourses, Perr} from './components/ShowCourse/showCourseStyle'

class App extends Component {

  state = {
    courses: [
      { name: 'HTML' },
      { name: 'SASS' },
      { name: 'CSS' }
    ]
  }

  addCourse = (value) => {
    this.setState({
      courses: [...this.state.courses, { name: value }]
    })
  }

  deleteCourse = (i) => {
    let oldState = this.state.courses
    oldState.splice(i, 1)
    this.setState({
      courses: oldState
    })
  }

  updateCourse = (index, newValue) => {

    let oldCourses = this.state.courses
    oldCourses[index].name = newValue

    this.setState({
      courses: oldCourses
    })

  }

  render() {

    //map returns an array
    //The map method calls the callbackfn function one time for each element in the array.
    const myCourses = this.state.courses.length > 0 ? this.state.courses.map((item, index) => {
      return <ShowCourse key={index} i={index} delete={this.deleteCourse} 
      cour={item} update={this.updateCourse} />
    }) : <Perr>nothing to show!! </Perr>

    return (
      <AppDiv>
        <AddCourse add={this.addCourse} />
        <ShowCourses>
          {myCourses}
        </ShowCourses>
      </AppDiv>
    );
  }
}

export default App;
