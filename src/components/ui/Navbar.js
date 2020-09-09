import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';

export const Navbar = () => {

    const dispatch = useDispatch();

    const { name } = useSelector(state => state.auth);

    const logingOut = () => {
        dispatch( startLogout() );
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                { name }
            </span>

            <button
                className="btn btn-outline-danger"
                onClick={ logingOut }
            >
                <i className="fas fa-sign-out-alt"></i>
                <span>Logout</span>
            </button>
        </div>
    )
}