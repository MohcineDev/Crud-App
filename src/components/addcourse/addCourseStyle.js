import styled from 'styled-components'

export const Form = styled.form`
    width: 50%;

        @media screen and (max-width: 768px) {
            width: 80%;
        }
`

export const Input = styled.input`
    border: none;
    padding: 10px 20px;
    font-size: 14px;
`
export const InputText = styled(Input)`
    background-color: rgb(255, 245, 245);
    width: 70%;
    border-top-left-radius: 5px;
    box-sizing:border-box;  
        @media screen and (max-width: 500px) {
            width: 50%;
        }
`

export const InputSubmit = styled(Input)`
    cursor: pointer;
    background-color: rgb(54, 117, 235);
    color: #fff;
    width: 30%;
    border-top-right-radius: 5px;

        &:hover{
            background-color: rgb(61, 123, 236);
        }
` 