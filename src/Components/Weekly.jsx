import React from 'react';
import { useNavigate } from 'react-router-dom';

const weeklyData = {
  sunday: {
    breakfast: [
      { name: 'Oatmeal', calories: 150, protein: '5g', carbs: '27g', fats: '3g' },
      { name: 'Scrambled Eggs', calories: 200, protein: '12g', carbs: '2g', fats: '15g' }
    ],
    lunch: [
      { name: 'Grilled Chicken Salad', calories: 350, protein: '30g', carbs: '20g', fats: '15g' },
      { name: 'Lentil Soup', calories: 180, protein: '10g', carbs: '30g', fats: '4g' }
    ],
    dinner: [
      { name: 'Baked Salmon', calories: 400, protein: '35g', carbs: '0g', fats: '28g' },
      { name: 'Steamed Vegetables', calories: 100, protein: '3g', carbs: '18g', fats: '2g' }
    ]
  },
  monday: {
    breakfast: [
      { name: 'Pancakes', calories: 200, protein: '6g', carbs: '36g', fats: '4g' },
      { name: 'Fruit Smoothie', calories: 250, protein: '4g', carbs: '52g', fats: '1g' }
    ],
    lunch: [
      { name: 'Turkey Sandwich', calories: 300, protein: '20g', carbs: '35g', fats: '10g' },
      { name: 'Quinoa Salad', calories: 220, protein: '8g', carbs: '40g', fats: '5g' }
    ],
    dinner: [
      { name: 'Beef Stir Fry', calories: 450, protein: '40g', carbs: '30g', fats: '20g' },
      { name: 'Brown Rice', calories: 215, protein: '5g', carbs: '45g', fats: '2g' }
    ]
  },
  // Add similar data for other days
  tuesday: {
    breakfast: [
      { name: 'Greek Yogurt', calories: 120, protein: '10g', carbs: '8g', fats: '5g' },
      { name: 'Granola', calories: 100, protein: '3g', carbs: '20g', fats: '3g' }
    ],
    lunch: [
      { name: 'Chicken Caesar Salad', calories: 350, protein: '30g', carbs: '15g', fats: '18g' },
      { name: 'Tomato Soup', calories: 150, protein: '3g', carbs: '20g', fats: '5g' }
    ],
    dinner: [
      { name: 'Grilled Steak', calories: 500, protein: '45g', carbs: '0g', fats: '35g' },
      { name: 'Mashed Potatoes', calories: 250, protein: '4g', carbs: '45g', fats: '8g' }
    ]
  },
  // Continue adding data for the remaining days of the week
  wednesday: {
    breakfast: [
      { name: 'Smoothie Bowl', calories: 300, protein: '8g', carbs: '60g', fats: '6g' },
      { name: 'Avocado Toast', calories: 200, protein: '5g', carbs: '24g', fats: '12g' }
    ],
    lunch: [
      { name: 'Veggie Wrap', calories: 250, protein: '10g', carbs: '30g', fats: '10g' },
      { name: 'Chicken Noodle Soup', calories: 180, protein: '12g', carbs: '25g', fats: '5g' }
    ],
    dinner: [
      { name: 'Grilled Chicken', calories: 350, protein: '40g', carbs: '5g', fats: '15g' },
      { name: 'Quinoa', calories: 220, protein: '8g', carbs: '40g', fats: '5g' }
    ]
  },
  thursday: {
    breakfast: [
      { name: 'Bagel with Cream Cheese', calories: 300, protein: '10g', carbs: '50g', fats: '10g' },
      { name: 'Orange Juice', calories: 110, protein: '2g', carbs: '25g', fats: '0g' }
    ],
    lunch: [
      { name: 'Tuna Salad', calories: 350, protein: '30g', carbs: '10g', fats: '20g' },
      { name: 'Apple', calories: 80, protein: '0g', carbs: '22g', fats: '0g' }
    ],
    dinner: [
      { name: 'Spaghetti Bolognese', calories: 400, protein: '25g', carbs: '50g', fats: '12g' },
      { name: 'Garlic Bread', calories: 150, protein: '4g', carbs: '25g', fats: '5g' }
    ]
  },
  friday: {
    breakfast: [
      { name: 'Egg Muffins', calories: 200, protein: '15g', carbs: '5g', fats: '12g' },
      { name: 'Apple Slices', calories: 80, protein: '0g', carbs: '22g', fats: '0g' }
    ],
    lunch: [
      { name: 'Chicken Wrap', calories: 300, protein: '25g', carbs: '30g', fats: '10g' },
      { name: 'Fruit Salad', calories: 150, protein: '2g', carbs: '35g', fats: '1g' }
    ],
    dinner: [
      { name: 'Pork Chops', calories: 450, protein: '35g', carbs: '5g', fats: '30g' },
      { name: 'Steamed Broccoli', calories: 50, protein: '4g', carbs: '10g', fats: '0g' }
    ]
  },
  saturday: {
    breakfast: [
      { name: 'Waffles', calories: 250, protein: '6g', carbs: '42g', fats: '7g' },
      { name: 'Strawberries', calories: 50, protein: '1g', carbs: '12g', fats: '0g' }
    ],
    lunch: [
      { name: 'BLT Sandwich', calories: 350, protein: '15g', carbs: '40g', fats: '15g' },
      { name: 'Chips', calories: 200, protein: '2g', carbs: '24g', fats: '10g' }
    ],
    dinner: [
      { name: 'Grilled Shrimp', calories: 300, protein: '30g', carbs: '5g', fats: '15g' },
      { name: 'Caesar Salad', calories: 180, protein: '7g', carbs: '15g', fats: '12g' }
    ]
  }
};

function Weekly() {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    const daysOfWeek = [
        { name: 'Sunday', path: '/sunday', data: weeklyData.sunday },
        { name: 'Monday', path: '/monday', data: weeklyData.monday },
        { name: 'Tuesday', path: '/tuesday', data: weeklyData.tuesday },
        { name: 'Wednesday', path: '/wednesday', data: weeklyData.wednesday },
        { name: 'Thursday', path: '/thursday', data: weeklyData.thursday },
        { name: 'Friday', path: '/friday', data: weeklyData.friday },
        { name: 'Saturday', path: '/saturday', data: weeklyData.saturday }
    ];

    return (
        <div className="bg-sky-100 min-h-screen p-10">
            {daysOfWeek.map((day, index) => (
                <div key={index} className="mb-10 bg-white p-6 rounded-xl shadow-xl">
                    <h3 className="text-3xl font-bold text-center mb-6">{day.name}</h3>
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th className="py-2">Meal</th>
                                <th className="py-2">Name</th>
                                <th className="py-2">Calories</th>
                                <th className="py-2">Protein</th>
                                <th className="py-2">Carbs</th>
                                <th className="py-2">Fats</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['breakfast', 'lunch', 'dinner'].map((meal) => (
                                day.data && day.data[meal].map((item, i) => (
                                    <tr key={i} className="text-center border-t">
                                        {i === 0 && (
                                            <td rowSpan={day.data[meal].length} className="py-2 font-semibold">
                                                {meal.charAt(0).toUpperCase() + meal.slice(1)}
                                            </td>
                                        )}
                                        <td className="py-2">{item.name}</td>
                                        <td className="py-2">{item.calories}</td>
                                        <td className="py-2">{item.protein}</td>
                                        <td className="py-2">{item.carbs}</td>
                                        <td className="py-2">{item.fats}</td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default Weekly;
