//create a toast component
/* import React from 'react';
import { useStore } from '../../Context/Store';
import { setToast } from '../../Reducers/reducer';
import './toast.css';

const Toast = () => {
    const { state: { toast }, dispatch } = useStore();
    const { message, type } = toast;
    const closeToast = () => {
        dispatch(setToast({ message: '', type: '' }));
    };
    return (
        <div className={`toast ${type}`}>
            <div className="toast__message">{message}</div>
            <div className="toast__close" onClick={closeToast}>
                <i className="fas fa-times"></i>
            </div>
        </div>
    );
};

export default Toast; */