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

  const calculateBMI = () => {
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      categorizeBMI(bmiValue);
    }
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
        label: 'BMI Category Thresholds',
        data: [18.5, 24.9, 29.9, 40],
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

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        max: 40,
        ticks: {
          stepSize: 5
        }
      },
    },
    plugins: {
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: bmi,
            xMax: bmi,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 2,
            label: {
              content: `Your BMI: ${bmi}`,
              enabled: true,
              position: 'start',
              backgroundColor: 'rgba(255, 99, 132, 0.8)',
              color: 'white',
              font: {
                weight: 'bold'
              }
            }
          }
        }
      }
    }
  };

  return (
    <div className='w-full h-screen bg-sky-100 flex flex-col justify-center items-center'>
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
      </form>
      {bmi && (
        <div className='w-full max-w-lg mt-8'>
          <Bar data={data} options={options} />
        </div>
      )}
    </div>
  );
}

export default BMI;
