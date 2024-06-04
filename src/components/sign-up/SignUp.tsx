import { TextField , Button } from '@mui/material';
import styled from 'styled-components';
import axios from 'axios';
import { FormEvent, useState } from 'react';

const Form = styled.form`
    width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #d4d4d4;
    border-radius: 12px;
`

const InputContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
`

const A = styled.button`
    width: 100%;
    background-color: #0ea5e9;

    &:hover {
        background-color: #0ea5e9;
    }
`

type UserFormTypes  = {
    name: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const [userForm , setUserForm] = useState<UserFormTypes>({
        name: '',
        email: '',
        password: '',
    })

    const singUp = async (e: FormEvent) => {
        e.preventDefault();

        
        if (!Object.values(userForm).includes('')) {
            const data = {
                ...userForm,
                avatar: "https://picsum.photos/800",
            }

            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/users/' , data);
                console.log(response);
            }
            catch (error) {
                console.log(error)
            }
        }
    }

    return (
            <Form onSubmit={singUp}>
                <InputContainer>
                    <TextField label="name" variant="outlined" size='small' type='text'
                        onChange={event => setUserForm(prevUserForm => ({...prevUserForm , name: event.target.value}))}/>
                    <TextField label="email" variant="outlined" size='small' type='text'
                        onChange={event => setUserForm(prevUserForm => ({...prevUserForm , email: event.target.value}))}/>
                    <TextField label="password" variant="outlined" size='small' type='password' 
                        onChange={event => setUserForm(prevUserForm => ({...prevUserForm , password: event.target.value}))}/>
                </InputContainer>  
                <A as={Button} variant="contained" type='submit'>Contained</A>
            </Form>
    )
}

export default SignUp;
