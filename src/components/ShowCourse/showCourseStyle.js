import styled from 'styled-components'

export const AppDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    margin-top: 20vh;
`

export const ShowCourses = styled.div`
    margin: 0;
    width: 50%;

    @media screen and (max-width: 768px) {
        margin: 0;
        width: 80%;
  }
`
export const CourseRow = styled.div`
    display: grid;
    grid-template-columns: 70% 15% 15%;
    grid-template-rows: 1fr;
    list-style: none;

    @media screen and (max-width: 500px) {
             grid-template-columns: 50% 15% 15%;
     }
    
`
export const P = styled.p`
    margin: 0;
    padding: 10px;
    background-color: rgb(244, 249, 255);
    color: rgb(233, 47, 112);
    font-size: 16px;
    border-top: 1px dashed rgb(233, 47, 112);
    grid-column: 1/2;
`
export const Button = styled.button`
    cursor: pointer;
    background-color: rgb(233, 47, 112);
    color: #fff;
    border: none;
    font-size: 15px;
    border-top: 1px dashed rgb(180, 206, 255);
    &:hover{
    background-color: rgb(235, 65, 125);
    }
    @media screen and (max-width: 500px) {
            font-size: 12px;
     }
`

export const Delete = styled(Button)`
    grid-column: 2/3;
`

export const Update = styled(Button)`
    grid-column: 3/4;
`

/* edit form */

export const Form = styled.form`
    display: grid;
    width: 100%;
    grid-template-columns: 70% 30%;
    grid-template-rows: 1fr;

    @media screen and (max-width: 500px) {
       grid-template-columns: 50% 30%;
    }

`

export const InputText = styled.input`
    padding: 10px;
    font-size: 16px;
    grid-column: 1/1/2/2;
    border: none;
    border-top: 1px dashed rgb(233, 47, 112);
    background-color: #fff;
`

export const InputSubmit = styled.input`
    grid-column: 2/3;
    cursor: pointer;
    background-color: rgb(54, 117, 235);
    color: #fff;
    border: none;
    font-size: 15px;
    border-top: 1px dashed #fff;
    &:hover{
        background-color: rgb(61, 123, 236);
    }
    @media screen and (max-width: 500px) {
            font-size: 12px;
    }
`

export const Perr = styled.p`
    margin: 0;
    padding: 10px;
    background-color: rgb(233, 47, 112);
    color: rgb(244, 249, 255);
    font-size: 16px;
    text-align: center;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 2px 5px #212121;
`
