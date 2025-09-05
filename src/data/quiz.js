const quizQuestions = [
  {
    id: 1,
    question: { en: "How strong do you like your drink?", tr: "İçeceğiniz ne kadar ağır olsun isterdiniz?" },
    answers: [
      { label: { en: "Light", tr: "Hafif" }, nextId: 19 },
      { label: { en: "Medium", tr: "Orta" }, nextId: 19 },
      { label: { en: "Strong", tr: "Ağır" }, nextId: 2 }
    ]
  },
  {
    id: 2,
    question: { en: "Do you enjoy coffee flavor?", tr: "Kokteylinizde kahve aroması ister misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, nextId: 3 },
      { label: { en: "No", tr: "Hayır" }, nextId: 6 }
    ]
  },
  {
    id: 3,
    question: { en: "Hot or Iced?", tr: "Sıcak mı, soğuk mu?" },
    answers: [
      { label: { en: "Hot", tr: "Sıcak" }, result: "irish-coffee" },
      { label: { en: "Iced", tr: "Soğuk" }, nextId: 4 }
    ]
  },
  {
    id: 4,
    question: { en: "Do you usually take milk with your coffee?", tr: "Kahvenizde genellikle süt kullanır mısınız?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, result: "white-russian" },
      { label: { en: "No", tr: "Hayır" }, nextId: 5 }
    ]
  },
  {
    id: 5,
    question: { en: "Which one would you pick: Espresso Shot or Coffee Liquor?", tr: "Hangisini tercih edersiniz: Espresso Shot yoksa Coffee Likörü mü?" },
    answers: [
      { label: { en: "Espresso Shot", tr: "Espresso Shot" }, result: "espresso-martini" },
      { label: { en: "Coffee Liquor", tr: "Coffee Likörü" }, result: "black-russian" }
    ]
  },
  {
    id: 6,
    question: { en: "Would you like something really strong?", tr: "Gerçekten çok ağır bir şey ister misiniz?" },
    answers: [
      { label: { en: "Yes, I need something really strong", tr: "Evet, gerçekten çok ağır bir şey istiyorum" }, result: "long-island" },
      { label: { en: "No, strong is enough", tr: "Hayır, sadece ağır olması yeterli" }, nextId: 7 }
    ]
  },
  {
    id: 7,
    question: { en: "Pick your base liquor:", tr: "Baz alkolünüzü seçin:" },
    answers: [
      { label: { en: "Gin", tr: "Cin" }, nextId: 8 },
      { label: { en: "Whiskey", tr: "Viski" }, nextId: 12 },
      { label: { en: "Rum", tr: "Rom" }, nextId: 15 },
      { label: { en: "Vodka", tr: "Votka" }, nextId: 17 },
      { label: { en: "Tequila", tr: "Tekila" }, result: "margarita" },
      { label: { en: "Cognac", tr: "Konyak" }, result: "sidecar" }
    ]
  },
  {
    id: 8,
    question: { en: "Do you like pickled stuff?", tr: "Turşu gibi ekşi ve tuzlu şeyleri sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, nextId: 9 },
      { label: { en: "No", tr: "Hayır" }, nextId: 10 }
    ]
  },
  {
    id: 9,
    question: { en: "Which one would you prefer: Onions or Olives?", tr: "Hangisini tercih edersiniz: Soğan mı, Zeytin mi?" },
    answers: [
      { label: { en: "Onions", tr: "Soğan" }, result: "gibson" },
      { label: { en: "Olives", tr: "Zeytin" }, result: "dirty-martini" }
    ]
  },
  {
    id: 10,
    question: { en: "Would you like something sour or classic?", tr: "Ekşi mi yoksa daha klasik mi?" },
    answers: [
      { label: { en: "Sour", tr: "Ekşi" }, nextId: 11 },
      { label: { en: "Classic", tr: "Klasik" }, result: "martini" }
    ]
  },
  {
    id: 11,
    question: { en: "Do you prefer your cocktail to have a chill vibes or an aromatic flavor?", tr: "Kokteylinizin sakin mı yoksa aromatik bir tadı mı olsun isterdiniz?" },
    answers: [
      { label: { en: "Chill", tr: "Sakin" }, result: "vesper" },
      { label: { en: "Aromatic", tr: "Aromatik" }, result: "negroni" }
    ]
  },
  {
    id: 12,
    question: { en: "Do you prefer your cocktail to have a sweet & classic taste or an aromatic & unique flavor?", tr: "Kokteylinizin tatlı ve klasik mi yoksa aromatik ve özgün bir tadı mı olsun isterdiniz?" },
    answers: [
      { label: { en: "Sweet & classic", tr: "Tatlı & klasik" }, nextId: 13 },
      { label: { en: "Aromatic & unique", tr: "Aromatik & özgün" }, nextId: 14 }
    ]
  },
  {
    id: 13,
    question: { en: "Do you like the taste of the cinnamon and clove?", tr: "Tarçın ve karanfil tadını sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, result: "manhattan" },
      { label: { en: "No", tr: "Hayır" }, result: "old-fashioned" }
    ]
  },
  {
    id: 14,
    question: { en: "Which of these flavors do you prefer: honey, amaretto (almond), or mint?", tr: "Bu tatlardan hangisini tercih edersiniz: Bal, Amaretto (badem likörü) veya Nane?" },
    answers: [
      { label: { en: "Honey", tr: "Bal" }, result: "rusty-nail" },
      { label: { en: "Amaretto (almond liquor)", tr: "Amaretto (badem likörü)" }, result: "godfather" },
      { label: { en: "Mint", tr: "Nane" }, result: "mint-julep" }
    ]
  },
  {
    id: 15,
    question: { en: "Do you enjoy cocktails that are spicy or more sweet & sour?", tr: "Baharatlı mı yoksa tatlı&ekşi kokteylleri mi seversiniz?" },
    answers: [
      { label: { en: "Spicy", tr: "Baharatlı" }, nextId: 16 },
      { label: { en: "Sweet & sour", tr: "Tatlı & ekşi" }, result: "mai-tai" }
    ]
  },
  {
    id: 16,
    question: { en: "Do you like using simple syrup for sweetness in your drinks?", tr: "İçeceklerinize tat vermek için şurup kullanmayı sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, result: "dark-rum-cocktail" },
      { label: { en: "No", tr: "Hayır" }, result: "dark-and-stormy" }
    ]
  },
  {
    id: 17,
    question: { en: "Do you prefer your cocktail to lean more toward sweet flavors or sour flavors?", tr: "Kokteyliniz tatlı mı yoksa ekşi mi olsun isterdiniz?" },
    answers: [
      { label: { en: "Sweet", tr: "Tatlı" }, nextId: 18 },
      { label: { en: "Sour", tr: "Ekşi" }, result: "vodka-collins" }
    ]
  },
  {
    id: 18,
    question: { en: "Do you enjoy the taste of almond flavor in cocktails?", tr: "Badem tadını kokteyllerde sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, result: "godmother" },
      { label: { en: "No", tr: "Hayır" }, result: "cosmopolitan" }
    ]
  },
  {
    id: 19,
    question: { en: "Do you enjoy a savory taste in your cocktails?", tr: "Kokteyllerinizde tuzlu ve yoğun bir tat ister misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, nextId: 20 },
      { label: { en: "No", tr: "Hayır" }, nextId: 22 }
    ]
  },
  {
    id: 20,
    question: { en: "What would you prefer as the base of your liquor?", tr: "Baz alkol olarak neyi tercih edersiniz?" },
    answers: [
      { label: { en: "Beer", tr: "Bira" }, result: "michelada" },
      { label: { en: "Gin", tr: "Cin" }, result: "red-snapper" },
      { label: { en: "Vodka", tr: "Votka" }, nextId: 21 }
    ]
  },
  {
    id: 21,
    question: { en: "Do you like your drink to have a spicy kick?", tr: "İçeceğinizin acılı bir dokunuşu olmasını ister misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, result: "bloody-mary" },
      { label: { en: "No", tr: "Hayır" }, result: "bullshot" }
    ]
  },
  {
    id: 22,
    question: { en: "Would you prefer something fruity or more on the classic side?", tr: "Meyvemsi bir tat mı yoksa klasik bir tat mı tercih edersiniz?" },
    answers: [
      { label: { en: "Fruity", tr: "Meyvemsi" }, nextId: 23 },
      { label: { en: "Classic", tr: "Klasik" }, nextId: 31 }
    ]
  },
  {
    id: 23,
    question: { en: "Which one sounds most appealing to you: tropical, citrusy/sour, berries, peaches, or oranges?", tr: "Hangisi sizin için daha cazip: Tropikal, turunç/ekşi, böğürtlen, şeftali veya portakal?" },
    answers: [
      { label: { en: "Tropical", tr: "Tropikal" }, nextId: 24 },
      { label: { en: "Citrusy/Sour", tr: "Turunç/Ekşi" }, nextId: 27 },
      { label: { en: "Berries", tr: "Böğürtlen" }, nextId: 28 },
      { label: { en: "Peaches", tr: "Şeftali" }, nextId: 29 },
      { label: { en: "Oranges", tr: "Portakal" }, nextId: 30 }
    ]
  },
  {
    id: 24,
    question: { en: "Do you like creamy cocktails or not?", tr: "Kremalı kokteylleri sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, nextId: 25 },
      { label: { en: "No", tr: "Hayır" }, nextId: 26 }
    ]
  },
  {
    id: 25,
    question: { en: "If you had to choose, which flavor sounds better: pineapple or orange?", tr: "Seçmeniz gerekse, hangi tat daha iyi: Ananas mı yoksa Portakal mı?" },
    answers: [
      { label: { en: "Pineapple", tr: "Ananas" }, result: "pina-colada" },
      { label: { en: "Orange", tr: "Portakal" }, result: "painkiller" }
    ]
  },
  {
    id: 26,
    question: { en: "Which color would you like your cocktail to be: red or blue?", tr: "Kokteyliniz hangi renkte olsun isterdiniz: kırmızı mı yoksa mavi mi?" },
    answers: [
      { label: { en: "Red", tr: "Kırmızı" }, result: "bahama-mama" },
      { label: { en: "Blue", tr: "Mavi" }, result: "blue-hawaiian" }
    ]
  },
  {
    id: 27,
    question: { en: "What would you like as the main base of liquor?", tr: "Ana baz olarak hangi içkiyi tercih edersiniz?" },
    answers: [
      { label: { en: "Tequila", tr: "Tekila" }, result: "margarita" },
      { label: { en: "Rum", tr: "Rom" }, result: "daiquiri" },
      { label: { en: "Whiskey", tr: "Viski" }, result: "whiskey-sour" },
      { label: { en: "Pisco", tr: "Pisco" }, result: "pisco-sour" },
      { label: { en: "Gin", tr: "Cin" }, result: "white-lady" },
      { label: { en: "Cognac", tr: "Konyak" }, result: "sidecar" },
      { label: { en: "Vodka", tr: "Votka" }, result: "caipirinha" }
    ]
  },
  {
    id: 28,
    question: { en: "Do you enjoy cocktails with champagne?", tr: "Şampanyalı kokteylleri sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, result: "kir-royale" },
      { label: { en: "No", tr: "Hayır" }, result: "bramble" }
    ]
  },
  {
    id: 29,
    question: { en: "Would you prefer a long drink cocktail or something shorter?", tr: "Uzun bir içki mi yoksa kısa bir içki mi tercih edersiniz?" },
    answers: [
      { label: { en: "Longer to drink", tr: "Uzun" }, result: "sex-on-the-beach" },
      { label: { en: "Shorter to drink", tr: "Kısa" }, result: "bellini" }
    ]
  },
  {
    id: 30,
    question: { en: "Do you like cocktails that include champagne?", tr: "Şampanya içeren kokteylleri sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, result: "mimosa" },
      { label: { en: "No", tr: "Hayır" }, result: "tequila-sunrise" }
    ]
  },
  {
    id: 31,
    question: { en: "Which style of cocktail do you prefer: spritz, mint, ginger, tonic, or collins/fizz?", tr: "Hangi kokteyl tarzını tercih edersiniz: Spritz, Nane, Zencefil, Tonic veya Collins/Fizz?" },
    answers: [
      { label: { en: "Spritz", tr: "Spritz" }, nextId: 32 },
      { label: { en: "Mint", tr: "Nane" }, result: "mojito" },
      { label: { en: "Ginger", tr: "Zencefil" }, nextId: 34 },
      { label: { en: "Tonic", tr: "Tonic" }, nextId: 35 },
      { label: { en: "Collins/Fizz", tr: "Collins/Fizz" }, nextId: 36 }
    ]
  },
  {
    id: 32,
    question: { en: "Do you like grapefruit flavor in your drink?", tr: "İçeceğinizde greyfurt tadını sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, nextId: 33 },
      { label: { en: "No", tr: "Hayır" }, result: "spritz" }
    ]
  },
  {
    id: 33,
    question: { en: "Which one would you prefer: fruity, spicy, or intense flavors?", tr: "Hangisini tercih edersiniz: Meyvemsi, Baharatlı, Yoksa Yoğun tatlar?" },
    answers: [
      { label: { en: "Fruity", tr: "Meyvemsi" }, result: "aperol-spritz" },
      { label: { en: "Spicy", tr: "Baharatlı" }, result: "campari-spritz" },
      { label: { en: "Intense", tr: "Yoğun" }, result: "negroni-spritz" }
    ]
  },
  {
    id: 34,
    question: { en: "Which one sounds best: vodka, rum, or soda fizz?", tr: "Hangisi en iyi geliyor: Votka, Rom, yoksa Soda Fizz?" },
    answers: [
      { label: { en: "Vodka", tr: "Votka" }, result: "moscow-mule" },
      { label: { en: "Rum", tr: "Rom" }, result: "dark-and-stormy" },
      { label: { en: "Soda Fizz", tr: "Soda Fizz" }, result: "ginger-rum-fizz" }
    ]
  },
  {
    id: 35,
    question: { en: "Which do you like more: gin or vodka?", tr: "Hangisini daha çok seviyorsunuz: Cin mi yoksa Votka mı?" },
    answers: [
      { label: { en: "Gin", tr: "Cin" }, result: "gin-tonic" },
      { label: { en: "Vodka", tr: "Votka" }, result: "vodka-tonic" }
    ]
  },
  {
    id: 36,
    question: { en: "Do you like frothy cocktails with a foamy top?", tr: "Üzeri köpüklü kokteylleri sever misiniz?" },
    answers: [
      { label: { en: "Yes", tr: "Evet" }, result: "gin-fizz" },
      { label: { en: "No", tr: "Hayır" }, nextId: 37 }
    ]
  },
  {
    id: 37,
    question: { en: "Do you want your cocktail to feel chic or casual?", tr: "Kokteyliniz şık mı yoksa gündelik mi olsun isterdiniz?" },
    answers: [
      { label: { en: "Chic", tr: "Şık" }, result: "french-75" },
      { label: { en: "Casual", tr: "Gündelik" }, nextId: 38 }
    ]
  },
  {
    id: 38,
    question: { en: "If you had to pick one, vodka or gin?", tr: "Seçmek zorunda olsaydınız, votka mı yoksa cin mi?" },
    answers: [
      { label: { en: "Vodka", tr: "Votka" }, result: "vodka-collins" },
      { label: { en: "Gin", tr: "Cin" }, result: "gin-collins" }
    ]
  }
];

export default quizQuestions;