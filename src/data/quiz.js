const quizQuestions = [
    {
        id: 1,
        question: "How strong do you like your drink?",
        answers: [
            { text: "Light", nextId: 19 },
            { text: "Medium", nextId: 19 },
            { text: "Strong", nextId: 2 }
        ]
    },
    {
        id: 2,
        question: "Do you enjoy coffee flavor?",
        answers: [
            { text: "Yes", nextId: 3 },
            { text: "No", nextId: 6 }
        ]
    },
    {
        id: 3,
        question: "Hot or Iced?",
        answers: [
            { text: "Hot", result: "irish-coffee" },
            { text: "Iced", nextId: 4 }
        ]
    },
    {
        id: 4,
        question: "Do you usually take milk with your coffee?",
        answers: [
            { text: "Yes", result: "white-russian" },
            { text: "No", nextId: 5 }
        ]
    },
    {
        id: 5,
        question: "Which one would you pick: Espresso Shot or Coffee Liquor?",
        answers: [
            { text: "Espresso Shot", result: "espresso-martini" },
            { text: "Coffee Liquor", result: "black-russian" }
        ]
    },
    {
        id: 6,
        question: "Would you like something really strong?",
        answers: [
            { text: "Yes", result: "long-island" },
            { text: "No", nextId: 7 }
        ]
    },
    {
        id: 7,
        question: "Pick your base liquor:",
        answers: [
            { text: "Gin", nextId: 8 },
            { text: "Whiskey", nextId: 12 },
            { text: "Rum", nextId: 15 },
            { text: "Vodka", nextId: 17 },
            { text: "Tequila", result: "margarita" },
            { text: "Cognac", result: "sidecar" }
        ]
    },
    {
        id: 8,
        question: "Do you like pickled stuff?",
        answers: [
            { text: "Yes", nextId: 9 },
            { text: "No", nextId: 10 }
        ]
    },
    {
        id: 9,
        question: "Which one would you prefer: Onions or Olives?",
        answers: [
            { text: "Onions", result: "gibson" },
            { text: "Olives", result: "dirty-martini" }
        ]
    },
    {
        id: 10,
        question: "Would you like something sour or classic?",
        answers: [
            { text: "Sour", nextId: 11 },
            { text: "Classic", result: "martini" }
        ]
    },
    {
        id: 11,
        question: "Do you prefer your cocktail to have a chill vibes or an aromatic flavor?",
        answers: [
            { label: "Chill", result: "vesper" },
            { label: "Aromatic", result: "negroni" }
        ]
    },
    {
        id: 12,
        question: "Do you prefer your cocktail to have a sweet & classic taste or an aromatic & unique flavor?",
        answers: [
            { label: "Sweet & classic", nextId: 13 },
            { label: "Aromatic & unique", nextId: 14 }
        ]
    },
    {
        id: 13,
        question: "Do you like the taste of the cinnamon and clove?",
        answers: [
            { label: "Yes", result: "manhattan" },
            { label: "No", result: "old-fashioned" }
        ]
    },
    {
        id: 14,
        question: "Which of these flavors do you prefer: honey, amaretto (almond), or mint?",
        answers: [
            { label: "Honey", result: "rusty-nail" },
            { label: "Amaretto (almond liquor)", result: "godfather" },
            { label: "Mint", result: "mint-julep" }
        ]
    },
    {
        id: 15,
        question: "Do you enjoy cocktails that are spicy or more sweet & sour?",
        answers: [
            { label: "Spicy", nextId: 16 },
            { label: "Sweet & sour", result: "mai-tai" }
        ]
    },
    {
        id: 16,
        question: "Do you like using simple syrup for sweetness in your drinks?",
        answers: [
            { label: "Yes", result: "dark-rum-cocktail" },
            { label: "No", result: "dark-and-stormy" }
        ]
    },
    {
        id: 17,
        question: "Do you prefer your cocktail to lean more toward sweet flavors or sour flavors?",
        answers: [
            { label: "Sweet", nextId: 18 },
            { label: "Sour", result: "vodka-collins" }
        ]
    },
    {
        id: 18,
        question: "Do you enjoy the taste of almond flavor in cocktails?",
        answers: [
            { label: "Yes", result: "godmother" },
            { label: "No", result: "cosmopolitan" }
        ]
    },
    {
        id: 19,
        question: "Do you enjoy a savory taste in your cocktails?",
        answers: [
            { label: "Yes", nextId: 20 },
            { label: "No", nextId: 22 },
        ],
    },
    {
        id: 20,
        question: "What would you prefer as the base of your liquor?",
        answers: [
            { label: "Beer", result: "michelada" },
            { label: "Gin", result: "red-snapper" },
            { label: "Vodka", nextId: 21 },
        ],
    },
    {
        id: 21,
        question: "Do you like your drink to have a spicy kick?",
        answers: [
            { label: "Yes", result: "bloody-mary" },
            { label: "No", result: "bullshot" },
        ],
    },
    {
        id: 22,
        question: "Would you prefer something fruity or more on the classic side?",
        answers: [
            { label: "Fruity", nextId: 23 },
            { label: "Classic", nextId: 31 },
        ],
    },
    {
        id: 23,
        question: "Which one sounds most appealing to you: tropical, citrusy/sour, berries, peaches, or oranges?",
        answers: [
            { label: "Tropical", nextId: 24 },
            { label: "Citrusy/Sour", nextId: 27 },
            { label: "Berries", nextId: 28 },
            { label: "Peaches", nextId: 29 },
            { label: "Oranges", nextId: 30 },
        ],
    },
    {
        id: 24,
        question: "Do you like creamy cocktails or not?",
        answers: [
            { label: "Yes", nextId: 25 },
            { label: "No", nextId: 26 },
        ],
    },
    {
        id: 25,
        question: "If you had to choose, which flavor sounds better: pineapple or orange?",
        answers: [
            { label: "Pineapple", result: "pina-colada" },
            { label: "Orange", result: "painkiller" },
        ],
    },
    {
        id: 26,
        question: "Which color would you like your cocktail to be: red or blue?",
        answers: [
            { label: "Red", result: "bahama-mama" },
            { label: "Blue", result: "blue-hawaiian" },
        ],
    },
    {
        id: 27,
        question: "What would you like as the main base of liquor?",
        answers: [
            { label: "Tequila", result: "margarita" },
            { label: "Rum", result: "daiquiri" },
            { label: "Whiskey", result: "whiskey-sour" },
            { label: "Pisco", result: "pisco-sour" },
            { label: "Gin", result: "white-lady" },
            { label: "Cognac", result: "sidecar" },
            { label: "Vodka", result: "caipirinha" }
        ],
    },
    {
        id: 28,
        question: "Do you enjoy cocktails with champagne?",
        answers: [
            { label: "Yes", result: "kir-royale" },
            { label: "No", result: "bramble" },
        ],
    },
    {
        id: 29,
        question: "Would you prefer a long drink cocktail or something shorter?",
        answers: [
            { label: "Longer to drink", result: "sex-on-the-beach" },
            { label: "Shorter to drink", result: "bellini" },
        ],
    },
    {
        id: 30,
        question: "Do you like cocktails that include champagne?",
        answers: [
            { label: "Yes", result: "mimosa" },
            { label: "No", result: "tequila-sunrise" },
        ],
    },
    {
        id: 31,
        question: "Which style of cocktail do you prefer: spritz, mint, ginger, tonic, or collins/fizz?",
        answers: [
            { label: "Spritz", nextId: 32 },
            { label: "Mint", result: "mojito" },
            { label: "Ginger", nextId: 34 },
            { label: "Tonic", nextId: 35 },
            { label: "Collins/Fizz", nextId: 36 },
        ],
    },
    {
        id: 32,
        question: "Do you like grapefruit flavor in your drink?",
        answers: [
            { label: "Yes", nextId: 33 },
            { label: "No", result: "spritz" },
        ],
    },
    {
        id: 33,
        question: "Which one would you prefer: fruity, spicy, or intense flavors?",
        answers: [
            { label: "Fruity", result: "aperol-spritz" },
            { label: "Spicy", result: "campari-spritz" },
            { label: "Intense", result: "negroni-spritz" },
        ],
    },
    {
        id: 34,
        question: "Which one sounds best: vodka, rum, or soda fizz?",
        answers: [
            { label: "Vodka", result: "moscow-mule" },
            { label: "Rum", result: "dark-and-stormy" },
            { label: "Soda Fizz", result: "ginger-rum-fizz" },
        ],
    },
    {
        id: 35,
        question: "Which do you like more: gin or vodka?",
        answers: [
            { label: "Gin", result: "gin-tonic" },
            { label: "Vodka", result: "vodka-tonic" },
        ],
    },
    {
        id: 36,
        question: "Do you like frothy cocktails with a foamy top?",
        answers: [
            { label: "Yes", result: "gin-fizz" },
            { label: "No", nextId: 37 },
        ],
    },
    {
        id: 37,
        question: "Do you want your cocktail to feel chic or casual?",
        answers: [
            { label: "Chic", result: "french-75" },
            { label: "Casual", nextId: 38 },
        ],
    },
    {
        id: 38,
        question: "If you had to pick one, vodka or gin?",
        answers: [
            { label: "Vodka", result: "vodka-collins" },
            { label: "Gin", result: "gin-collins" },
        ],
    }

];

export default quizQuestions;