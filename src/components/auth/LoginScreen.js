import React from 'react';
import './custom-style.css';
import { useForm } from '../hooks/useForm';

export const LoginScreen = () => {


    const [ formLoginValues, handleLoginInputChange ] = useForm({
        email: 'test1@email.com',
        password: '123456'
    });

    const { email, password } = formLoginValues;

    const logIn = ( event ) => {
        event.preventDefault();

        console.log( formLoginValues );
    }

    return (
        <div className="custom-container">
            <div className="col-md-4 custom-form">
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
                    <a className="underlineHover">Register</a>
                </div>
            </div>
        </div>
    )
}
