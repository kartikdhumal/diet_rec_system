import React, { useState, useEffect } from "react";
import dishesData from "../utils/data.json";

function AllItems() {
    const [dishes, setDishes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterType, setFilterType] = useState("all");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulating data fetching from data.json
        setTimeout(() => {
            setDishes(dishesData);
            setLoading(false);
        }, 1000); // Simulating loading delay
    }, []);

    const filteredDishes = dishes.filter((dish) => {
        // Filtering based on search term and type
        const nameMatch = dish.name.toLowerCase().includes(searchTerm.toLowerCase());
        const typeMatch =
            filterType === "all" ||
            (filterType === "vegetarian" && dish.isVeg) ||
            (filterType === "non-vegetarian" && !dish.isVeg);
        return nameMatch && typeMatch;
    });

    if (loading) {
        return <p className="text-center mt-8">Loading...</p>;
    }

    return (
        <div className="container px-4 py-8 bg-sky-100 w-full">
            <div className="w-4xl">
                <div className="flex items-center space-x-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search dishes..."
                        className="border border-gray-300 px-4 font-bold py-2 w-full"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="border bg-white font-bold px-4 py-2 w-full"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="non-vegetarian">Non-Vegetarian</option>
                    </select>
                </div>

                {/* Display Dishes in Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredDishes.length > 0 ? (
                        filteredDishes.map((dish, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-xl font-bold">
                                    {dish.name} -{" "}
                                    <span className="text-gray-500">
                                        Calories: {dish.calories.amount} {dish.calories.unit}
                                    </span>
                                </h2>
                                <p
                                    className={`text-md font-bold ${dish.type === "Vegetarian" ? "text-green-700" : "text-red-700"}`}
                                >
                                    {dish.type}
                                </p>
                                <p>
                                    Carbohydrates: {dish.carbohydrates.amount} {dish.carbohydrates.unit}
                                </p>
                                <p>Proteins: {dish.proteins.amount} {dish.proteins.unit}</p>
                                <p>Fats: {dish.fats.amount} {dish.fats.unit}</p>
                                <p>Vitamins: A={dish.vitamins.A}, B={dish.vitamins.B}, C={dish.vitamins.C}</p>
                                <p>
                                    Minerals: Iron={dish.minerals.iron.amount} {dish.minerals.iron.unit}, Calcium={dish.minerals.calcium.amount} {dish.minerals.calcium.unit}, Potassium={dish.minerals.potassium.amount} {dish.minerals.potassium.unit}
                                </p>
                                <p>{dish.isVeg ? "Vegetarian" : "Non-Vegetarian"}</p>
                            </div>
                        ))
                    ) : (
                        <h1 className="text-center w-screen text-xl font-bold">No Data Found</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default AllItems;
