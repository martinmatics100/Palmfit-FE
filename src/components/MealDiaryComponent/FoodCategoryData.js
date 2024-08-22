import image1 from "../../Assets/mealPlansImage.png";

const FoodCategories = [
  {
    name: "Fruits",
    image: image1,
    foods: [
      // Citrus Fruits
      "Oranges",
      "Lemons",
      "Limes",
      "Grapefruits",
      // Berries
      "Strawberries",
      "Blueberries",
      "Raspberries",
      "Blackberries",
      // Stone Fruits
      "Peaches",
      "Plums",
      "Cherries",
      "Apricots",
      // Tropical Fruits
      "Bananas",
      "Pineapples",
      "Mangoes",
      "Papayas",
      // Pomes
      "Apples",
      "Pears",
      "Quinces",
      // Melons
      "Watermelons",
      "Cantaloupes",
      "Honeydew Melons",
      // Grapes
      "Grapes",
    ],
  },
  {
    name: "Vegetables",
    image: image1,
    foods: [
      // Leafy Greens
      "Spinach",
      "Kale",
      "Lettuce",
      "Arugula",
      "Swiss Chard",
      // Cruciferous Vegetables
      "Broccoli",
      "Cauliflower",
      "Cabbage",
      "Brussels Sprouts",
      // Root Vegetables
      "Carrots",
      "Beets",
      "Turnips",
      "Radishes",
      "Sweet Potatoes",
      // Tubers
      "Potatoes",
      "Yams",
      // Alliums
      "Onions",
      "Garlic",
      "Leeks",
      "Shallots",
      // Nightshades
      "Tomatoes",
      "Eggplants",
      "Bell Peppers",
      // Squashes and Gourds
      "Zucchini",
      "Pumpkin",
      "Butternut Squash",
      "Acorn Squash",
      // Legumes
      "Green Beans",
      "Peas",
      "Lentils",
      // Mushrooms
      "Button Mushrooms",
      "Portobello Mushrooms",
      "Shiitake Mushrooms",
      "Oyster Mushrooms",
    ],
  },
  {
    name: "Grains and Cereals",
    image: image1,
    foods: [
      // Whole Grains
      "Brown Rice",
      "Quinoa",
      "Oats",
      "Barley",
      "Bulgur",
      "Millet",
      // Refined Grains
      "White Rice",
      "White Bread",
      "Pasta",
      "Flour",
      // Cereals
      "Wheat",
      "Corn",
      "Rye",
      "Sorghum",
      "Spelt",
      "Amaranth",
      // Pseudocereals
      "Quinoa",
      "Buckwheat",
      "Chia",
    ],
  },
  {
    name: "Proteins",
    image: image1,
    foods: [
      // Meat
      "Beef",
      "Pork",
      "Lamb",
      "Goat",
      "Venison",
      // Poultry
      "Chicken",
      "Turkey",
      "Duck",
      "Goose",
      // Seafood
      "Salmon",
      "Tuna",
      "Cod",
      "Halibut",
      "Haddock",
      "Sardines",
      "Mackerel",
      "Shrimp",
      "Crab",
      "Lobster",
      "Clams",
      "Mussels",
      "Oysters",
      // Eggs
      "Chicken Eggs",
      "Duck Eggs",
      "Quail Eggs",
      // Dairy
      "Milk",
      "Cheddar",
      "Mozzarella",
      "Brie",
      "Feta",
      "Parmesan",
      "Greek Yogurt",
      "Regular Yogurt",
      "Butter",
      "Heavy Cream",
      // Legumes
      "Lentils",
      "Chickpeas",
      "Black Beans",
      "Kidney Beans",
      "Peas",
      // Nuts and Seeds
      "Almonds",
      "Walnuts",
      "Cashews",
      "Sunflower Seeds",
      "Pumpkin Seeds",
      // Soy Products
      "Tofu",
      "Tempeh",
      "Edamame",
      "Soy Milk",
      // Plant-based Proteins
      "Seitan",
      "Quorn",
      "Beyond Meat",
      "Impossible Foods",
    ],
  },
  {
    name: "Dairy and Dairy Alternatives",
    image: image1,
    foods: [
      // Milk
      "Cow's Milk",
      "Goat's Milk",
      "Sheep's Milk",
      // Cheese
      "Cheddar",
      "Mozzarella",
      "Brie",
      "Feta",
      "Parmesan",
      // Yogurt
      "Greek Yogurt",
      "Regular Yogurt",
      "Plant-based Yogurt (Almond, Soy, Coconut)",
      // Butter and Cream
      "Butter",
      "Heavy Cream",
      "Sour Cream",
      // Dairy Alternatives
      "Almond Milk",
      "Soy Milk",
      "Coconut Milk",
      "Oat Milk",
      "Cashew Milk",
    ],
  },
  {
    name: "Fats and Oils",
    image: image1,
    foods: [
      // Animal Fats
      "Butter",
      "Lard",
      "Tallow",
      // Plant Oils
      "Olive Oil",
      "Canola Oil",
      "Sunflower Oil",
      "Coconut Oil",
      "Palm Oil",
      // Nut and Seed Oils
      "Almond Oil",
      "Peanut Oil",
      "Sesame Oil",
      "Flaxseed Oil",
      // Margarine and Shortening
      "Margarine",
      "Shortening",
    ],
  },
  {
    name: "Legumes",
    image: image1,
    foods: [
      // Beans
      "Black Beans",
      "Kidney Beans",
      "Pinto Beans",
      "Navy Beans",
      // Lentils
      "Red Lentils",
      "Green Lentils",
      "Brown Lentils",
      // Peas
      "Green Peas",
      "Split Peas",
      "Black-eyed Peas",
      // Chickpeas
      "Garbanzo Beans",
      // Soybeans
      "Edamame",
      "Tofu",
      "Tempeh",
      "Miso",
    ],
  },
  {
    name: "Nuts and Seeds",
    image: image1,
    foods: [
      // Nuts
      "Almonds",
      "Walnuts",
      "Cashews",
      "Pecans",
      "Macadamia Nuts",
      "Pistachios",
      "Brazil Nuts",
      // Seeds
      "Sunflower Seeds",
      "Pumpkin Seeds",
      "Flaxseeds",
      "Chia Seeds",
      "Sesame Seeds",
      "Hemp Seeds",
      // Nut Butters
      "Peanut Butter",
      "Almond Butter",
      "Cashew Butter",
    ],
  },
  {
    name: "Seafood",
    image: image1,
    foods: [
      // Fish
      "Salmon",
      "Tuna",
      "Cod",
      "Halibut",
      "Haddock",
      "Sardines",
      "Mackerel",
      // Shellfish
      "Shrimp",
      "Crab",
      "Lobster",
      "Clams",
      "Mussels",
      "Oysters",
      // Other Seafood
      "Squid",
      "Octopus",
      "Seaweed",
      "Caviar",
    ],
  },
  {
    name: "Baked Goods",
    image: image1,
    foods: [
      // Breads
      "Whole Wheat Bread",
      "White Bread",
      "Rye Bread",
      "Sourdough",
      "Bagels",
      // Pastries
      "Croissants",
      "Danishes",
      "Doughnuts",
      "Muffins",
      // Cakes and Pies
      "Cheesecake",
      "Apple Pie",
      "Chocolate Cake",
      "Tarts",
      // Cookies and Biscuits
      "Chocolate Chip Cookies",
      "Shortbread",
      "Gingerbread",
      // Crackers
      "Saltines",
      "Ritz",
      "Whole Grain Crackers",
    ],
  },
  {
    name: "Beverages",
    image: "/images/beverages.jpg",
    foods: [
      // Water
      "Still Water",
      "Sparkling Water",
      "Mineral Water",
      // Juices
      "Orange Juice",
      "Apple Juice",
      "Grape Juice",
      "Vegetable Juice",
      // Teas
      "Black Tea",
      "Green Tea",
      "Herbal Tea",
      "Oolong Tea",
      "Chai",
      // Coffee
      "Espresso",
      "Latte",
      "Cappuccino",
      "Cold Brew",
      "Americano",
      // Soft Drinks
      "Sodas",
      "Lemonade",
      "Iced Tea",
      // Alcoholic Beverages
      "Beer",
      "Wine",
      "Whiskey",
      "Vodka",
      "Rum",
      "Tequila",
      // Plant-based Milks
      "Almond Milk",
      "Soy Milk",
      "Coconut Milk",
      "Oat Milk",
    ],
  },
  {
    name: "Sweets and Confectioneries",
    image: "/images/sweets-snacks.jpg",
    foods: [
      // Candies
      "Hard Candy",
      "Gummies",
      "Chocolate",
      "Licorice",
      // Chocolates
      "Dark Chocolate",
      "Milk Chocolate",
      "White Chocolate",
      "Truffles",
      // Ice Cream and Frozen Desserts
      "Ice Cream",
      "Sorbet",
      "Gelato",
      "Frozen Yogurt",
      // Jams and Jellies
      "Strawberry Jam",
      "Grape Jelly",
      "Marmalade",
    ],
  },
  {
    name: "Condiments and Sauces",
    image: "/images/condiments.jpg",
    foods: [
      // Dressings
      "Ranch",
      "Caesar",
      "Vinaigrette",
      "Thousand Island",
      // Sauces
      "Tomato Sauce",
      "Soy Sauce",
      "BBQ Sauce",
      "Hot Sauce",
      "Pesto",
      // Spreads
      "Mayonnaise",
      "Mustard",
      "Ketchup",
      "Hummus",
      "Nut Butters",
      // Pickles and Relishes
      "Dill Pickles",
      "Sweet Relish",
      "Kimchi",
      "Sauerkraut",
    ],
  },
  {
    name: "Herbs and Spices",
    image: "/images/herbs-spices.jpg",
    foods: [
      // Herbs
      "Basil",
      "Parsley",
      "Cilantro",
      "Thyme",
      "Rosemary",
      "Mint",
      "Dill",
      // Spices
      "Cinnamon",
      "Turmeric",
      "Black Pepper",
      "Cumin",
      "Paprika",
      "Nutmeg",
      "Cloves",
      // Seasoning Blends
      "Italian Seasoning",
      "Garam Masala",
      "Curry Powder",
      "Chili Powder",
    ],
  },
  {
    name: "Processed Foods",
    image: "/images/processed.jpg",
    foods: [
      // Canned Goods
      "Canned Beans",
      "Canned Vegetables",
      "Canned Soups",
      "Canned Fish",
      // Frozen Foods
      "Frozen Vegetables",
      "Frozen Meals",
      "Ice Cream",
      "Frozen Pizza",
      // Snack Foods
      "Potato Chips",
      "Tortilla Chips",
      "Popcorn",
      "Pretzels",
      "Crackers",
      // Packaged Meals
      "Instant Noodles",
      "Macaroni and Cheese",
      "TV Dinners",
    ],
  },
  {
    name: "Fermented Foods",
    image: "/images/fermented.jpg",
    foods: [
      // Dairy
      "Yogurt",
      "Kefir",
      "Cheese",
      // Vegetables
      "Sauerkraut",
      "Kimchi",
      "Pickles",
      // Beverages
      "Kombucha",
      "Fermented Teas",
      // Soy Products
      "Miso",
      "Tempeh",
      "Natto",
    ],
  },
  {
    name: "Alternative and Specialty Diet Foods",
    image: "/images/specialty.jpg",
    foods: [
      // Gluten-Free
      "Gluten-Free Bread",
      "Pasta",
      "Cereal",
      // Vegan
      "Tofu",
      "Tempeh",
      "Plant-based Meats",
      "Vegan Cheese",
      // Keto
      "Low-Carb Bread",
      "Almond Flour",
      "Coconut Flour",
      "MCT Oil",
      // Paleo
      "Grass-Fed Meats",
      "Almond Butter",
      "Sweet Potatoes",
      "Organic Vegetables",
    ],
  },
];

export default FoodCategories;
