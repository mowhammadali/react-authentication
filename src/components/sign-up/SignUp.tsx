import axios from 'axios';
import { TextField , Button } from '@mui/material';
import React, { FormEvent, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { InputContainer , Form , SignUpButton , Link } from '../../styles/common/CommonStyles';
import { UserFormTypes } from '../../types/common/CommonTypes';
import { notify } from '../../helper/toastify/toastify';

const SignUp: React.FC = () => {
    const [userForm , setUserForm] = useState<UserFormTypes>({
        name: '',
        email: '',
        password: '',
    })

    const register = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!Object.values(userForm).includes('')) {
            const data = {
                ...userForm,
                avatar: "https://picsum.photos/800",
            }

            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/users/' , data);
                if ([200 , 201].includes(response.status)) loginAfterRegister(response.data)
            }
            catch (error: any) {
                notify(error.message);
            }
        }
    }

    const loginAfterRegister = async (userData: {email: string , password: string}) => {
        const data = {
            email: userData.email,
            password: userData.password,
        }

        try {
            const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login' , data);
            console.log(response);
        }
        catch (error: any) {
            notify(error.message);
        }
    }

    return (
            <Form onSubmit={register}>
                <h2>Sign Up</h2>
                <InputContainer>
                    <TextField label="name" variant="outlined" size='small' type='text' value={userForm.name}
                        onChange={event => setUserForm(prevUserForm => ({...prevUserForm , name: event.target.value}))}/>
                    <TextField label="email" variant="outlined" size='small' type='text' value={userForm.email}
                        onChange={event => setUserForm(prevUserForm => ({...prevUserForm , email: event.target.value}))}/>
                    <TextField label="password" variant="outlined" size='small' type='password' value={userForm.password}
                        onChange={event => setUserForm(prevUserForm => ({...prevUserForm , password: event.target.value}))}/>
                </InputContainer>  
                <SignUpButton as={Button} variant="contained" type='submit'>Sign Up</SignUpButton>
                <Link as={NavLink} to='/signin'>have account? let's signin</Link>
            </Form>
    )
}

export default SignUp;
