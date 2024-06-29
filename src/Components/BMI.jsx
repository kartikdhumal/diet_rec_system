import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function BMI() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
    const [age, setAge] = useState('');
    const [healthGoal, setHealthGoal] = useState([]);
    const [gender, setGender] = useState('');
    const [dietaryPreference, setDietaryPreference] = useState([]);
    const [bmr, setBmr] = useState('');
    const [allergies, setAllergies] = useState([]);

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
            categorizeBMI(bmiValue);
        }

    };

    const handleCheckboxChange = (setter, value) => {
        setter(prev =>
            prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
        );
    };

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

    const categorizeBMI = (bmi) => {
        if (bmi < 18.5) {
            setCategory('Underweight');
        } else if (bmi >= 18.5 && bmi < 24.9) {
            setCategory('Normal weight');
        } else if (bmi >= 25 && bmi < 29.9) {
            setCategory('Overweight');
        } else {
            setCategory('Obesity');
        }
    };

    const data = {
        labels: ['Underweight', 'Normal weight', 'Overweight', 'Obesity'],
        datasets: [
            {
                label: 'BMI Category',
                data: [18.5, 24.9, 29.9, 40], // Category thresholds
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className='w-full h-full bg-sky-100 flex flex-col justify-center items-center'>
            <form className='p-8 rounded-lg shadow-2xl lg:w-96 sm:w-96 vsm:w-[90%]' onSubmit={(e) => e.preventDefault()}>
                <div className='mb-4'>
                    <label htmlFor='weight' className='block text-gray-700 font-semibold mb-2'>Weight (kg)</label>
                    <input
                        type='number'
                        id='weight'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor='height' className='block text-gray-700 font-semibold mb-2'>Height (cm)</label>
                    <input
                        type='number'
                        id='height'
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500'
                    />
                </div>
                <button
                    type='button'
                    onClick={calculateBMI}
                    className='w-full my-2 cursor-pointer flex justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-md px-4 py-2 font-bold text-center'
                >
                    Calculate BMI
                </button>
                {bmi && (
                    <div className='mt-4 p-4 bg-green-300 rounded-md shadow-md'>
                        <p className='text-gray-700 font-bold mb-2'>Your BMI:</p>
                        <p className='text-gray-700'>{bmi}</p>
                        <p className='text-gray-700 font-bold mb-2 mt-4'>Category:</p>
                        <p className='text-gray-700'>{category}</p>
                    </div>

                )}
                <div className='mb-4'>
                    <div className='mb-4 '>
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
                    <label htmlFor='healthGoal' className='block text-gray-700 font-semibold mb-2'>Health Goal</label>
                    <div className='flex flex-wrap'>
                        {['Weight Loss', 'Muscle Gain', 'Maintain Weight'].map((goal) => (
                            <div key={goal} className='mr-2'>
                                <input
                                    type='checkbox'
                                    id={goal}
                                    checked={healthGoal.includes(goal)}
                                    onChange={() => handleCheckboxChange(setHealthGoal, goal)}
                                    className='mr-1'
                                />
                                <label htmlFor={goal} className='text-gray-700'>{goal}</label>
                            </div>
                        ))}
                    </div>
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
                    <div className='flex flex-wrap'>
                        {['Vegetarian', 'Vegan', 'Non-Vegetarian'].map((diet) => (
                            <div key={diet} className='mr-2'>
                                <input
                                    type='checkbox'
                                    id={diet}
                                    checked={dietaryPreference.includes(diet)}
                                    onChange={() => handleCheckboxChange(setDietaryPreference, diet)}
                                    className='mr-1'
                                />
                                <label htmlFor={diet} className='text-gray-700'>{diet}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='mb-4'>
                    <label htmlFor='allergies' className='block text-gray-700 font-semibold mb-2'>Allergies</label>
                    <div className='flex flex-wrap'>
                        {['Peanuts', 'Dairy', 'Gluten'].map((allergy) => (
                            <div key={allergy} className='mr-2'>
                                <input
                                    type='checkbox'
                                    id={allergy}
                                    checked={allergies.includes(allergy)}
                                    onChange={() => handleCheckboxChange(setAllergies, allergy)}
                                    className='mr-1'
                                />
                                <label htmlFor={allergy} className='text-gray-700'>{allergy}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    onClick={handleSubmit}
                    type='submit'
                    className='w-full my-2 cursor-pointer flex justify-center items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-md px-4 py-2 font-bold text-center'
                >
                    Submit
                </button>
            </form>
            {bmi && (
                <div className='w-full max-w-lg mt-8'>
                    <Bar
                        data={data}
                        options={{
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    max: 40,
                                },
                            },
                            plugins: {
                                annotation: {
                                    annotations: {
                                        line1: {
                                            type: 'line',
                                            yMin: bmi,
                                            yMax: bmi,
                                            borderColor: 'rgb(255, 99, 132)',
                                            borderWidth: 2,
                                            label: {
                                                content: `Your BMI: ${bmi}`,
                                                enabled: true,
                                                position: 'end',
                                            },
                                        },
                                    },
                                },
                            },
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default BMI;
