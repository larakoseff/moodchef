const recipeData = [
  {
    id: "10716",
    title: "Fluffy Pancakes with Berries",
    description:
      " To make fluffy pancakes with berries, whisk together 1 1/2 cups all-purpose flour, 3 tablespoons sugar, 1 tablespoon baking powder, and 1/4 teaspoon salt in one bowl. In another bowl, whisk 1 1/4 cups milk, 1 large egg, 3 tablespoons melted butter, and 1 teaspoon vanilla extract. Combine the wet and dry ingredients until just mixed. Cook 1/4 cup batter per pancake on a buttered skillet until bubbles form, then flip and cook until golden. Serve with fresh berries and maple syrup or honey. Enjoy your delicious breakfast!",
    diet: [1],
    image:
      "https://www.culinaryhill.com/wp-content/uploads/2023/09/Blueberry-Pancakes-Culinary-Hill-1200x800-1.jpg",
    emotions: [1, 2],
    meal: [1],
  },
  {
    id: "5675",
    title: "Vegan Banana Pancakes",
    description:
      "To make vegan banana pancakes, mix 1 cup all-purpose flour, 1 tablespoon sugar (optional), 2 tablespoons baking powder, and 1/8 teaspoon salt in a bowl. In another bowl, combine 1 cup almond milk, 2 tablespoons vegetable oil, 1 teaspoon vanilla extract, and 1 mashed ripe banana. Pour the wet mixture into the dry ingredients and stir until just combined, keeping some lumps. Heat a non-stick skillet over medium heat, lightly greasing if needed, and cook 1/4 cup of batter per pancake until bubbles form and edges set, about 2-3 minutes per side. Serve with toppings like fresh fruit, maple syrup, coconut yogurt, or chopped nuts. Enjoy your delightful breakfast!",
    image:
      "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2019/01/vegan-banana-pancakes-stack.jpg",
    diet: [2, 3],
    emotions: [1, 2],
    meal: [1],
  },
  {
    id: "5279",
    title: "Mango Avocado Quinoa Salad",
    description:
      "To make a Mango Avocado Quinoa Salad for a happy lunch, cook 1 cup of quinoa in 2 cups of water or vegetable broth until fluffy. In a large bowl, combine the cooked quinoa with 1 diced ripe mango, 1 diced ripe avocado, 1/2 cup halved cherry tomatoes, 1/4 cup finely chopped red onion, and 1/4 cup chopped fresh cilantro. Make a dressing by whisking together the juice of 1 lime, 2 tablespoons extra virgin olive oil, salt, and pepper. Pour the dressing over the salad and toss gently to coat everything. Optionally, add 1/4 cup of toasted almonds or pumpkin seeds for crunch. Serve and enjoy this vibrant and nutritious salad!",
    image:
      "https://dishingouthealth.com/wp-content/uploads/2020/05/QuinoaSaladFinal2.jpg",
    diet: [1, 2, 3],
    emotions: [1, 2],
    meal: [2],
  },
  {
    id: "10539",
    title: "Vegetarian Chickpea Curry",
    description:
      "To make a Vegetarian Chickpea Curry for supper, sauté onion and garlic, then add diced bell pepper and zucchini. Stir in curry powder, turmeric, diced tomatoes, coconut milk, and drained chickpeas, simmering until flavors meld. Season with salt and pepper, garnish with cilantro, and serve over rice or with naan bread. Enjoy this comforting and flavorful dish!",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/12/Coconut-Chickpea-Curry-5-crop.jpg",
    diet: [1, 2, 3],
    emotions: [1, 2],
    meal: [4],
  },
  {
    id: "9177",
    title: "Mediterranean Hummus Platter",
    description:
      "To make a Mediterranean Hummus Platter, arrange 1 cup of hummus, cherry tomatoes, cucumber slices, Kalamata olives, and crumbled feta cheese on a serving platter. Whisk together a dressing of extra virgin olive oil, lemon juice, chopped parsley, salt, and pepper, then drizzle it over the vegetables and cheese. Serve with pita bread or crackers for dipping. This flavorful and customizable vegetarian snack is sure to make you happy!",
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2019/12/mezze-platter-11.jpg",
    diet: [1, 3],
    emotions: [1, 2],
    meal: [3],
  },

  {
    id: "9178",
    title: "Vegan Mediterranean Mezze Platter",
    description:
      "To make a Vegan Mediterranean Mezze Platter, arrange 1 cup of hummus, cherry tomatoes, cucumber slices, and Kalamata olives on a serving platter. Whisk together a dressing of extra virgin olive oil, lemon juice, chopped parsley, salt, and pepper, then drizzle it over the vegetables. Serve with pita bread or whole-grain crackers for dipping. This flavorful and vegan-friendly snack is easy to prepare and perfect for sharing or enjoying solo!",
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2019/12/mezze-platter-11.jpg",
    diet: [1, 2, 3],
    emotions: [1, 2],
    meal: [3],
  },

  {
    id: "9179",
    title: "Vanilla Chai Oatmeal",
    description:
      "To make Vanilla Chai Oatmeal for a calming breakfast, simmer 1 cup rolled oats with 2 cups water or milk along with ground cinnamon, ginger, cardamom, nutmeg, cloves, vanilla extract, and a pinch of salt until creamy. Sweeten with your choice of sweetener and serve with optional toppings like sliced almonds, dried cranberries, or fresh berries. Enjoy this comforting and aromatic oatmeal for a soothing start to your day!",
    image:
      "https://wholefully.com/wp-content/uploads/2020/02/chai-latte-overnight-oats-cinnamon-sticks.jpg",
    diet: [1, 3],
    emotions: [3],
    meal: [1],
  },

  {
    id: "8179",
    title: "Vegan Buddha Bowl ",
    description:
      "To make a Vegan Buddha Bowl for a calming meal when feeling angry, roast diced sweet potato and broccoli with olive oil, salt, and pepper in a preheated oven. Cook quinoa or brown rice separately. Sauté chickpeas until golden in a skillet. Whisk tahini, lemon juice, minced garlic, water, salt, and pepper for the dressing. Assemble bowls with quinoa/rice, roasted vegetables, sautéed chickpeas, and drizzle with tahini dressing. Garnish with herbs and sesame seeds if desired. This nourishing bowl offers a balance of flavors and nutrients, ideal for calming the mind and body.",
    image:
      "https://minimalistbaker.com/wp-content/uploads/2015/04/30-minute-CHICKPEA-Sweet-Potato-BUDDHA-Bowls-A-complete-meal-packed-with-protein-fiber-and-healthy-fats-with-a-STELLAR-Tahini-Lemon-Maple-Sauce-vegan-glutenfree-healthy.jpg",
    diet: [1, 2, 3],
    emotions: [3],
    meal: [1, 2],
  },

  {
    id: "2179",
    title: "Vegan Lentil Shepherd's Pie",
    description:
      "To make Vegan Lentil Shepherd's Pie for a comforting supper when feeling angry, cook lentils in vegetable broth until tender. Sauté onion, carrots, celery, garlic, thyme, rosemary, salt, and pepper until vegetables are tender. Combine cooked lentils, tomato paste, and soy sauce in the skillet, then add frozen peas. Spread this mixture in a baking dish and top with mashed potatoes. Bake until potatoes are golden. Garnish with parsley if desired. This hearty and nourishing dish provides comfort and grounding, ideal for calming emotions.",
    image:
      "https://runningonrealfood.com/wp-content/uploads/2020/12/Vegan-Lentil-Shepherds-Pie-Recipe-1-2.jpg",
    diet: [1, 2, 3],
    emotions: [3],
    meal: [2, 4],
  },
];

export default recipeData;
