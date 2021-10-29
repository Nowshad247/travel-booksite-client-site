import React from 'react';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    return (
        <div className='container'>
            <h2>Profile</h2>
            <h2>{user?.displayName}</h2>
            <h2>{user?.email}</h2>

        </div>
    );
};

export default Profile;