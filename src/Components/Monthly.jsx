import React, { useState } from 'react';

const months = [
  { name: 'January', path: '/january' },
  { name: 'February', path: '/february' },
  { name: 'March', path: '/march' },
  { name: 'April', path: '/april' },
  { name: 'May', path: '/may' },
  { name: 'June', path: '/june' },
  { name: 'July', path: '/july' },
  { name: 'August', path: '/august' },
  { name: 'September', path: '/september' },
  { name: 'October', path: '/october' },
  { name: 'November', path: '/november' },
  { name: 'December', path: '/december' },
];

const weeks = Array.from({ length: 4 }, (_, i) => `Week ${i + 1}`);


const weeklyMealsData = {
  'January': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'February': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'March': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'April': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'May': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'June': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'July': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'August': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'September': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'October': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'November': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },
  'December': {
    'Week 1': {
      'Sunday': 'Oatmeal for breakfast, Grilled Chicken Salad for lunch, Baked Salmon for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
    'Week 2': {
      'Sunday': 'Scrambled Eggs for breakfast, Lentil Soup for lunch, Steamed Vegetables for dinner',
      'Monday': 'Fruit Smoothie for breakfast, Quinoa Salad for lunch, Brown Rice for dinner',
      'Tuesday': 'Granola for breakfast, Tomato Soup for lunch, Mashed Potatoes for dinner',
      'Wednesday': 'Avocado Toast for breakfast, Chicken Noodle Soup for lunch, Quinoa for dinner',
    },
    'Week 3': {
      'Sunday': 'Waffles for breakfast, BLT Sandwich for lunch, Grilled Shrimp for dinner',
      'Monday': 'Egg Muffins for breakfast, Chicken Wrap for lunch, Pork Chops for dinner',
      'Tuesday': 'Bagel with Cream Cheese for breakfast, Tuna Salad for lunch, Spaghetti Bolognese for dinner',
      'Wednesday': 'Smoothie for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
    },
    'Week 4': {
      'Sunday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
      'Monday': 'Pancakes for breakfast, Turkey Sandwich for lunch, Beef Stir Fry for dinner',
      'Tuesday': 'Greek Yogurt for breakfast, Chicken Caesar Salad for lunch, Grilled Steak for dinner',
      'Wednesday': 'Smoothie Bowl for breakfast, Veggie Wrap for lunch, Grilled Chicken for dinner',
    },
  },

};

function Monthly() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleMonthChange = (event) => {
    const selectedMonth = event.target.value;
    setSelectedMonth(selectedMonth);
    setSelectedWeek(null);
  };

  const handleWeekSelect = (week) => {
    setSelectedWeek(week);
  };

  return (
    <div className="bg-sky-100 min-h-screen p-10">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl mb-8">
        <label htmlFor="months" className="block text-lg font-bold mb-2">
          Select a Month
        </label>
        <select
          id="months"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value="">Select a Month</option>
          {months.map((month, index) => (
            <option key={index} value={month.name}>
              {month.name}
            </option>
          ))}
        </select>
      </div>

      {selectedMonth && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeks.map((week, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-xl cursor-pointer ${selectedWeek === week ? 'border-2 border-blue-500' : ''
                }`}
              onClick={() => handleWeekSelect(week)}
            >
              <h3 className="text-xl font-bold mb-4">{selectedMonth} - {week}</h3>
              {selectedWeek === week && (
                <div>
                  {Object.keys(weeklyMealsData[selectedMonth][week]).map((day, idx) => (
                    <div key={idx} className="mb-2">
                      <h4 className="font-semibold">{day}</h4>
                      <p>{weeklyMealsData[selectedMonth][week][day]}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Monthly;
