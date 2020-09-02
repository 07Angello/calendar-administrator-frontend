import React from 'react';
import './custom-style.css';

export const LoginScreen = () => {
    return (
        <div className="custom-container">
            <div className="col-md-4 custom-form">
                <div className="img-container">
                    <img src={ require('../../assets/user.svg') } className='user-img' alt="User icon"/>
                </div>
                <div className="form-container">
                    <h3>Calendar Events</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" />
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
