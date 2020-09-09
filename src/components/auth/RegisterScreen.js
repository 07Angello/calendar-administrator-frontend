import React from 'react';
import './custom-style.css';
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { toast } from 'react-toastify';
import { registerUser } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

export const RegisterScreen = () =>{

    const dispatch = useDispatch();

    const history = useHistory();

    const [ formRegisterValues, handleRegisterInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formRegisterValues;

    const registerNewUser = ( event ) => {
        event.preventDefault();

        if ( password !== password2 ) {
            return toast.warn( 'Password confirmation does not match.' );
        }

        dispatch( registerUser( name, email, password ) );
    }

    const goLoginScreen = () => {
        history.push("/login");
    }

    return (
        <div className="custom-container">
            <div className="col-md-4 custom-form login-register-animation">
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
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={ email }
                                onChange={ handleRegisterInputChange }
                                required
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
                                required
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
                                required
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
                <div className="form-footer">
                    <a
                        className="underlineHover"
                        onClick={ goLoginScreen }
                    >Register</a>
                </div>
            </div>

            <h4 className="gabo">Angello Gámez</h4>
        </div>
    )
}