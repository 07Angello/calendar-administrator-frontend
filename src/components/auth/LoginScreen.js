import React from 'react';
import './custom-style.css';

export const LoginScreen = () => {
    return (
        <div className="custom-container">
            <div className="row">
                <div className="col-md-6 custom-form">
                    <h3>Calendar Events</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="email" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="password" />
                        </div>
                        <div className="form-group">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}