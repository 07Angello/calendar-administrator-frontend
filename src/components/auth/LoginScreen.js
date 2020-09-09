import React from 'react';
import './custom-style.css';
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin } from '../../actions/auth';
import { useHistory } from 'react-router-dom';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const history = useHistory();

    const [ formLoginValues, handleLoginInputChange ] = useForm({
        email: '',
        password: ''
    });

    const { email, password } = formLoginValues;

    const logIn = ( event ) => {
        event.preventDefault();

        dispatch( startLogin( email, password) );
    }

    const goRegisterScreen = () => {
        history.push('/register');
    }

    return (
        <div className="custom-container">
            <div className="col-md-4 custom-form login-register-animation">
                <div className="img-container">
                    <img src={ require('../../assets/user.svg') } className='user-img' alt="User icon"/>
                </div>
                <div className="form-container">
                    <h3>Calendar Events</h3>
                    <form
                        onSubmit={ logIn }
                    >
                        <div className="form-group">
                            <input 
                                type="email"
                                className="form-control"
                                placeholder="Email"
                                name="email"
                                value={ email }
                                onChange={ handleLoginInputChange }
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
                                onChange={ handleLoginInputChange }
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
                <div className="form-footer">
                    <a
                        className="underlineHover"
                        onClick={ goRegisterScreen }
                    >Register</a>
                </div>
            </div>

            <h4 className="gabo">Angello Gámez</h4>
        </div>
    )
}
