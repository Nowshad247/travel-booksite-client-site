import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>Profile</h2>
                    <img src={user.photoURL} alt="" />
                    <h2>{user?.displayName}</h2>
                    <h2>{user?.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default Profile;