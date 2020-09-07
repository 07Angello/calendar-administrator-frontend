import React from 'react';
import './custom-style.css';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { toast } from 'react-toastify';
import { registerUser } from '../../actions/auth';

export const RegisterScreen = () =>{

    const dispatch = useDispatch();

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        name: 'Test',
        email: 'test1@email.com',
        password: '123456',
        password2: '123456'
    });

    const { name, email, password, password2 } = formRegisterValues;

    const registerNewUser = ( event ) => {
        event.preventDefault();

        if ( password !== password2 ) {
            return toast.warn( 'Password confirmation does not match.' );
        }

        dispatch( registerUser( name, email, password ) );
    }

    return (
        <div className="custom-container">
            <div className="col-md-4 custom-form">
                <div className="form-container">
                    <h3>Register</h3>
                    <form
                    onSubmit={ registerNewUser }
                    >
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                name="name"
                                value={ name }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={ email }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                                value={ password }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Confirm Password"
                                name="password2"
                                value={ password2 }
                                onChange={ handleRegisterInputChange }
                            /> 
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Register"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}