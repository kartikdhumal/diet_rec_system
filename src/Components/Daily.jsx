import React from 'react';

const dailyData = {
  breakfast: [
    { name: 'Oatmeal', calories: 150, protein: '5g', carbs: '27g', fats: '3g' },
    { name: 'Fruit Salad', calories: 100, protein: '1g', carbs: '25g', fats: '0g' }
  ],
  lunch: [
    { name: 'Grilled Chicken Salad', calories: 350, protein: '30g', carbs: '20g', fats: '15g' },
    { name: 'Quinoa', calories: 220, protein: '8g', carbs: '39g', fats: '3.5g' }
  ],
  dinner: [
    { name: 'Baked Salmon', calories: 400, protein: '35g', carbs: '0g', fats: '28g' },
    { name: 'Steamed Vegetables', calories: 80, protein: '3g', carbs: '15g', fats: '0.5g' }
  ]
};

function Daily() {
  return (
    <div className="bg-sky-100 min-h-screen p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Breakfast</h2>
          <div className="space-y-4">
            {dailyData.breakfast.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>Calories: {item.calories}</p>
                <p>Protein: {item.protein}</p>
                <p>Carbs: {item.carbs}</p>
                <p>Fats: {item.fats}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Lunch</h2>
          <div className="space-y-4">
            {dailyData.lunch.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>Calories: {item.calories}</p>
                <p>Protein: {item.protein}</p>
                <p>Carbs: {item.carbs}</p>
                <p>Fats: {item.fats}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Dinner</h2>
          <div className="space-y-4">
            {dailyData.dinner.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p>Calories: {item.calories}</p>
                <p>Protein: {item.protein}</p>
                <p>Carbs: {item.carbs}</p>
                <p>Fats: {item.fats}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Daily;
