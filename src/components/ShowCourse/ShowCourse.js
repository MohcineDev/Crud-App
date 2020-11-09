import React, { Component } from 'react'
import {CourseRow, P, Update, Delete, Form, InputText, InputSubmit} from './showCourseStyle'

class ShowCourse extends Component {

    state = {
        edit: false
    }

    course = () => {
        return <CourseRow>
            <P>{this.props.cour.name}</P>
            <Delete id="delete" onClick={() => this.props.delete(this.props.i)}> Delete </Delete>
            <Update id="update" onClick={() => this.toggelState()}> Update </Update>
        </CourseRow>
    }
    //toggle state value {true, false}
    toggelState = () => {
        let { edit } = this.state
        this.setState({
            edit: !edit
        })
    }

    //display the edit form
    editForm = () => {
        return (
            <Form onSubmit={this.update}>  {/* add reference to access input value */}
                <InputText type="text" placeholder="new course name" id="new" defaultValue={this.props.cour.name} />
                <InputSubmit type="submit" value="update" />
            </Form>
        )
    }

    update = () => {
        // this.props.update(this.props.i, this.input.value)
        this.props.update(this.props.i, document.querySelector('#new').value) 
        this.toggelState()
    }

    render() {
        return <>{this.state.edit ? this.editForm() : this.course()}</>

    }
}

export default ShowCourse