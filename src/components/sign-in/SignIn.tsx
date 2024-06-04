import React , { FormEvent, useState , useContext } from 'react';
import axios from 'axios';
import { TextField , Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { InputContainer , Form , SignUpButton , Link } from '../../styles/common/CommonStyles';
import { UserFormTypes } from '../../types/common/CommonTypes';
import { notify } from '../../helper/toastify/toastify';
import { AuthContext } from '../../context/AuthProvider';

const SignIn: React.FC = () => {
    const { auth , setAuth } = useContext(AuthContext);

    const [userForm , setUserForm] = useState< Omit<UserFormTypes , 'name'> >({
        email: '',
        password: '',
    })

    const singUp = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!Object.values(userForm).includes('')) {
            try {
                const response = await axios.post('https://api.escuelajs.co/api/v1/auth/login' , userForm);
                if ([200 , 201].includes(response.status)) {
                    setAuth({...userForm , accessToken: response.data?.access_token , refreshToken: response.data?.refresh_token});
                    setUserForm({
                        email: '',
                        password: '',
                    })
                }
            }
            catch (error: any) {
                notify(error?.message)
            }
        }
    }

    console.log(auth);

    return (
        <>
            <Form onSubmit={singUp}>
                <h2>Sign In</h2>
                <InputContainer>
                    <TextField label="email" variant="outlined" size='small' type='text' value={userForm.email}
                        onChange={event => setUserForm(prevUserForm => ({...prevUserForm , email: event.target.value}))}/>
                    <TextField label="password" variant="outlined" size='small' type='password' value={userForm.password}
                        onChange={event => setUserForm(prevUserForm => ({...prevUserForm , password: event.target.value}))}/>
                </InputContainer>  
                <SignUpButton as={Button} variant="contained" type='submit'>Sign Up</SignUpButton>
                <Link as={NavLink} to='/'>didn't signup? let's to register</Link>
            </Form>
        </>
    )
}

export default SignIn;
