import React from 'react'
import {Form, InputText, InputSubmit} from './addCourseStyle'


function AddCourse(props) {

    const handleSubmit = (e) => {
        e.preventDefault()
        let value = e.target.children[0].value

        if (value.trim() !== '') {
            props.add(value)
            e.target.children[0].value = ''
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <InputText type="text" id="course-name" placeholder="couse name..." />
            <InputSubmit type="submit" value="Add" />
        </Form>
    )
}

export default AddCourse