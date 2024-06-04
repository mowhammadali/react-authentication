import styled from "styled-components";

export const Form = styled.form`
    width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #d4d4d4;
    border-radius: 12px;

    h2 {
        color: #0ea5e9;
        margin-bottom: 15px;
    }
`

export const InputContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
`

export const SignUpButton = styled.button`
    width: 100%;
    background-color: #0ea5e9 !important;

    &:hover {
        background-color: #0ea5e9 !important;
    }
`

export const Link = styled.a`
    text-decoration: none;
    display: inline-block;
    margin-top: 10px;
    color: #0ea5e9;
`