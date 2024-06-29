import React, { useState, useEffect } from 'react';
import foodData from '../utils/data.json';

function FoodPreference() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        setFoods(foodData);
    }, []);

    return (
        <div className="container mx-auto py-8 px-8 bg-sky-100">
            <h1 className="text-3xl font-bold mb-8 text-center">Food Preferences as per your information</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {foods.map((food, index) => (
                    <div key={index} className="rounded-lg shadow-md p-6 bg-white">
                        <div className="mb-4">
                            <h2 className="text-xl font-bold mb-2">{food.name}</h2>
                            <p className="text-gray-500">{food.calories.amount}  {food.calories.unit}</p>
                        </div>
                        <p className="text-gray-700 mb-2">
                            <span className="text-lg font-bold">{food.type}</span>
                        </p>
                        <div className="flex justify-between mb-4">
                            <div className="flex flex-col">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Carbohydrates:</span> {food.carbohydrates.amount} {food.carbohydrates.unit}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Proteins:</span> {food.proteins.amount} {food.proteins.unit}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Fats:</span> {food.fats.amount} {food.fats.unit}
                                </p>
                            </div>
                            <div className="flex flex-col ml-4">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Vitamins A:</span> {food.vitamins.A} mg
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Vitamins B:</span> {food.vitamins.B} mg
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Vitamins C:</span> {food.vitamins.C} mg
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Minerals Potassium:</span> {food.minerals.potassium.amount} {food.minerals.potassium.unit}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Minerals Calcium:</span> {food.minerals.calcium.amount} {food.minerals.calcium.unit}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Minerals Iron:</span> {food.minerals.iron.amount} {food.minerals.iron.unit}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FoodPreference;
