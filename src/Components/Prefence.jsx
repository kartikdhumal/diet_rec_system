import React, { useState } from 'react';

function Preference() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
    const [age, setAge] = useState('');
    const [healthGoal, setHealthGoal] = useState('');
    const [gender, setGender] = useState('');
    const [dietaryPreference, setDietaryPreference] = useState('');
    const [bmr, setBmr] = useState('');
    const [allergies, setAllergies] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            age,
            height,
            weight,
            healthGoal,
            gender,
            dietaryPreference,
            bmr,
            allergies
        };
        console.log(userData);
    };

    return (
        <div className='w-full h-screen bg-sky-100 flex flex-col justify-center items-center'>
            <form className='p-8 rounded-lg shadow-2xl lg:w-96 sm:w-96 vsm:w-[90%]' onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor='age' className='block text-gray-700 font-semibold mb-2'>Age</label>
                    <input
                        type='number'
                        id='age'
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label htmlFor='healthGoal' className='block text-gray-700 font-semibold mb-2'>Health Goal</label>
                    <select
                        id='healthGoal'
                        value={healthGoal}
                        onChange={(e) => setHealthGoal(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                        required
                    >
                        <option value=''>Select Health Goal</option>
                        <option value='Weight Loss'>Weight Loss</option>
                        <option value='Muscle Gain'>Weight Gain</option>
                        <option value='Maintain Weight'>Maintain Weight</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label htmlFor='gender' className='block text-gray-700 font-semibold mb-2'>Gender</label>
                    <select
                        id='gender'
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                        required
                    >
                        <option value=''>Select Gender</option>
                        <option value='Male'>Male</option>
                        <option value='Female'>Female</option>
                        <option value='Other'>Other</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label htmlFor='dietaryPreference' className='block text-gray-700 font-semibold mb-2'>Dietary Preference</label>
                    <select
                        id='dietaryPreference'
                        value={dietaryPreference}
                        onChange={(e) => setDietaryPreference(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                        required
                    >
                        <option value=''>Select Dietary Preference</option>
                        <option value='Vegetarian'>Vegetarian</option>
                        <option value='Vegan'>Vegan</option>
                        <option value='Non-Vegetarian'>Non-Vegetarian</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label htmlFor='allergies' className='block text-gray-700 font-semibold mb-2'>Allergies</label>
                    <select
                        id='allergies'
                        value={allergies}
                        onChange={(e) => setAllergies(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                        required
                    >
                        <option value=''>Select Allergies</option>
                        <option value='Peanuts'>Dairy</option>
                        <option value='Dairy'>Eggs</option>
                        <option value='Gluten'>Fish</option>
                        <option value='Gluten'>Peanuts</option>
                    </select>
                </div>
                <button
                    type='submit'
                    className='w-full my-2 cursor-pointer flex justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-md px-4 py-2 font-bold text-center'
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Preference;
