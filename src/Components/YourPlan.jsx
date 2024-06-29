import React from 'react';
import { useNavigate } from 'react-router-dom';

function YourPlan() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    return (
        <div className="bg-sky-100 min-h-screen flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-10">
                <div
                    className="cursor-pointer bg-white p-10 rounded-xl shadow-xl hover:bg-sky-200 transition-all duration-500 transform hover:scale-105"
                    onClick={() => navigateTo('/daily')}
                >
                    <h3 className="text-2xl font-bold text-center">Daily</h3>
                </div>
                <div
                    className="cursor-pointer bg-white p-10 rounded-xl shadow-xl hover:bg-sky-200 transition-all duration-500 transform hover:scale-105"
                    onClick={() => navigateTo('/weekly')}
                >
                    <h3 className="text-2xl font-bold text-center">Weekly</h3>
                </div>
                <div
                    className="cursor-pointer bg-white p-10 rounded-xl shadow-xl hover:bg-sky-200 transition-all duration-500 transform hover:scale-105"
                    onClick={() => navigateTo('/monthly')}
                >
                    <h3 className="text-2xl font-bold text-center">Monthly</h3>
                </div>
            </div>
        </div>
    );
}

export default YourPlan;
