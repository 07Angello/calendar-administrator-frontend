import React from 'react';
import './custom-style.css';

export const RegisterScreen = () =>{
    return (
        <div className="custom-container">
            <div className="col-md-4 custom-form">
                <div className="form-container">
                    <h3>Register</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}