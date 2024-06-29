import React from 'react';
import Preference from './Prefence';

function Profile() {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        password: '********',
        role: 'User',
    };

    return (
        <div className="bg-sky-100 h-full flex flex-col-reverse p-10  items-center justify-around">
            <Preference />
            <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>
                <div className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name - <span className=" p-3 rounded-lg text-green-600 shadow-inner text-xl font-bold ">
                            {user.name}
                        </span> </label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email - <span className=" p-3 rounded-lg text-green-600 shadow-inner text-xl font-bold ">
                            {user.email}
                        </span></label>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Role -  <span className=" p-3 rounded-lg text-green-600  shadow-inner text-xl font-bold ">
                            {user.role}
                        </span></label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
