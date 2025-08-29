const images = import.meta.glob('../assets/images/**/*.{jpg,png}', { eager: true });
import martini from '../assets/images/martini.jpg'; // Importing the martini image directly
import negroni from '../assets/images/negroni.jpg'; // Importing the negroni spritz image directly
import spritz from '../assets/images/spritz.jpg'; // Importing the spritz image directly

// Related images for each cocktail
function getImagesForSlug(slug) {
  const matched = [];
  for (const path in images) {
    if (path.includes(slug)) {
      matched.push(images[path].default || images[path]);
    }
  }
  matched.sort((a, b) => a.localeCompare(b));
  return matched;
}

const cocktails = [
  {
    "slug": "mojito",
    "name": "Mojito",
    "category": "Classic",
    "glass": "Highball",
    "image": getImagesForSlug("mojito"),
    "tasteProfile": ["refreshing", "sweet", "minty"],
    "measurement": "oz",
    "ingredients": [
      { "name": "White Rum", "amount": 2 },
      { "name": "Fresh Lime Juice", "amount": 1 },
      { "name": "Simple Syrup", "amount": 0.5 },
      { "name": "Mint Leaves", "amount": 6 },
      { "name": "Soda Water", "amount": 2 }
    ],
    "instructions": "Muddle mint with syrup and lime juice. Add rum, ice, top with soda, stir gently.",
    "alcoholLevel": "medium",
    "introduction": "The Mojito is a classic Cuban cocktail that originated in Havana during the 16th century. Its name is believed to come from the Spanish word 'mojar,' meaning 'to wet.' Traditionally enjoyed in warm weather, the Mojito combines refreshing mint, lime, and rum, making it a favorite choice for summer gatherings and beachside relaxation.",
    "comment": "Fresh, vibrant, and a little bit zesty. You’re the friend who always brings the energy and keeps things lively.",
    "similarCocktails": ["caipirinha", "daiquiri", "southside"]
  },
  {
    "slug": "margarita",
    "name": "Margarita",
    "category": "Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("margarita"),
    "tasteProfile": ["citrusy", "tart", "salty"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Tequila", "amount": 2 },
      { "name": "Triple Sec", "amount": 1 },
      { "name": "Fresh Lime Juice", "amount": 1 }
    ],
    "instructions": "Shake ingredients with ice and strain into a salt-rimmed glass.",
    "alcoholLevel": "strong",
    "introduction": "The Margarita is a beloved Mexican cocktail that has become a staple in bars and restaurants worldwide. Its origins trace back to the 1930s, with various stories about its creation. The combination of tequila, lime juice, and orange liqueur creates a perfect balance of tartness and sweetness, often served with a salted rim for an extra kick.",
    "comment": "Bold, adventurous, and a little bit wild. You’re the person who’s always up for trying something new and exciting.",
    "similarCocktails": ["paloma", "daiquiri", "sidecar"]
  },
  {
    "slug": "paloma",
    "name": "Paloma",
    "category": "Classic",
    "glass": "Highball",
    "image": getImagesForSlug("paloma"),
    "tasteProfile": ["citrusy", "refreshing", "slightly bitter"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Tequila", "amount": 2 },
      { "name": "Fresh Grapefruit Juice", "amount": 2 },
      { "name": "Lime Juice", "amount": 0.5 },
      { "name": "Soda Water", "amount": 2 }
    ],
    "instructions": "Build in glass over ice, top with soda, garnish with grapefruit wedge.",
    "alcoholLevel": "medium",
    "introduction": "The Paloma is a popular Mexican cocktail that is often considered the country's national drink. Its origins are somewhat debated, but it is widely believed to have been created in the mid-20th century. The Paloma combines tequila with grapefruit soda or juice, resulting in a refreshing and slightly bitter cocktail that is perfect for warm weather.",
    "comment": "Light, refreshing, and a little bit bubbly. You’re the person who always brings a smile to everyone’s face.",
    "similarCocktails": ["margarita", "spritz", "americano"]
  },
  {
    "slug": "southside",
    "name": "Southside",
    "category": "Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("southside"),
    "tasteProfile": ["minty", "citrusy", "refreshing"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Gin", "amount": 2 },
      { "name": "Fresh Lime Juice", "amount": 1 },
      { "name": "Simple Syrup", "amount": 0.75 },
      { "name": "Mint Leaves", "amount": 6 }
    ],
    "instructions": "Muddle mint with syrup and lime juice. Add gin, ice, shake, strain into chilled glass.",
    "alcoholLevel": "medium",
    "introduction": "The Southside is a classic cocktail that dates back to the Prohibition era in the United States. It is believed to have originated in Chicago, where it was a popular choice among speakeasy patrons. The drink combines gin, fresh lime juice, simple syrup, and mint, resulting in a refreshing and invigorating cocktail that is perfect for warm weather.",
    "comment": "Cool, collected, and a little bit sophisticated. You’re the person who always knows how to keep things classy.",
    "similarCocktails": ["mojito", "caipirinha", "whiskey-sour"]
  },
  {
    "slug": "old-fashioned",
    "name": "Old Fashioned",
    "category": "Classic",
    "glass": "Rocks",
    "image": getImagesForSlug("old-fashioned"),
    "tasteProfile": ["boozy", "sweet", "bitter"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Bourbon or Rye Whiskey", "amount": 2 },
      { "name": "Simple Syrup", "amount": 0.25 },
      { "name": "Angostura Bitters", "amount": 2 }
    ],
    "instructions": "Stir with ice, strain into rocks glass over ice, garnish with orange twist.",
    "alcoholLevel": "strong",
    "introduction": "The Old Fashioned is one of the oldest known cocktails, dating back to the early 19th century. It was originally referred to as a 'whiskey cocktail' and has evolved over time. This timeless drink is characterized by its simplicity, featuring whiskey, bitters, sugar, and a twist of citrus, making it a favorite among cocktail enthusiasts.",
    "comment": "Classic, reliable, and a little bit sophisticated. You’re the person who always knows how to keep things classy.",
    "similarCocktails": ["manhattan", "sazerac", "boulevardier"]
  },
  {
    "slug": "sazerac",
    "name": "Sazerac",
    "category": "Classic",
    "glass": "Rocks",
    "image": getImagesForSlug("sazerac"),
    "tasteProfile": ["boozy", "herbal", "bitter"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Rye Whiskey", "amount": 2 },
      { "name": "Absinthe", "amount": 0.25 },
      { "name": "Simple Syrup", "amount": 0.25 },
      { "name": "Peychaud's Bitters", "amount": 3 }
    ],
    "instructions": "Rinse glass with absinthe. Stir other ingredients with ice, strain into glass, garnish with lemon twist.",
    "alcoholLevel": "strong",
    "introduction": "The Sazerac is a classic cocktail that originated in New Orleans in the mid-19th century. It is often considered one of the oldest cocktails in America. The drink is known for its unique preparation, which includes rinsing the glass with absinthe before adding rye whiskey, bitters, and sugar. The Sazerac's complex flavor profile and rich history make it a favorite among cocktail aficionados.",
    "comment": "Bold, sophisticated, and a little bit mysterious. You’re the person who knows how to make a statement without saying a word.",
    "similarCocktails": ["old-fashioned", "manhattan", "martinez"]
  },
  {
    "slug": "cosmopolitan",
    "name": "Cosmopolitan",
    "category": "Modern Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("cosmopolitan"),
    "tasteProfile": ["fruity", "citrusy", "refreshing"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Vodka", "amount": 1.5 },
      { "name": "Triple Sec", "amount": 1 },
      { "name": "Cranberry Juice", "amount": 0.5 },
      { "name": "Fresh Lime Juice", "amount": 0.5 }
    ],
    "instructions": "Shake with ice, strain into chilled glass, garnish with lime wheel.",
    "alcoholLevel": "medium",
    "introduction": "The Cosmopolitan, often simply called 'Cosmo,' gained immense popularity in the 1990s, particularly through its association with the TV show called Sex and the City. This stylish cocktail combines vodka, triple sec, cranberry juice, and lime juice, resulting in a vibrant pink drink that is both refreshing and sophisticated. Its fruity and citrusy flavors make it a favorite among those who enjoy modern cocktails.",
    "comment": "Chic, trendy, and always in the know. You’re the person who’s always ahead of the curve and knows how to make an entrance.",
    "similarCocktails": ["lemon-drop", "french-martini", "kamikaze"]
  },
  {
    "slug": "french-martini",
    "name": "French Martini",
    "category": "Modern Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("french-martini"),
    "tasteProfile": ["fruity", "sweet", "smooth"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Vodka", "amount": 2 },
      { "name": "Chambord", "amount": 0.5 },
      { "name": "Pineapple Juice", "amount": 2 }
    ],
    "instructions": "Shake with ice, strain into chilled glass, garnish with raspberry.",
    "alcoholLevel": "medium",
    "introduction": "The French Martini is a modern cocktail that emerged in the 1980s and quickly gained popularity for its elegant and fruity profile. It combines vodka, Chambord (a raspberry liqueur), and pineapple juice, resulting in a smooth and slightly sweet drink. The French Martini is often served in a chilled cocktail glass and garnished with a raspberry, making it a sophisticated choice for any occasion.",
    "comment": "Elegant, refined, and a little bit mysterious. You’re the person who knows how to make an impression without saying a word.",
    "similarCocktails": ["cosmopolitan", "kamikaze", "black-raspberry"]
  },
  {
    "slug": "kamikaze",
    "name": "Kamikaze",
    "category": "Modern Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("kamikaze"),
    "tasteProfile": ["citrusy", "sweet", "strong"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Vodka", "amount": 1.5 },
      { "name": "Triple Sec", "amount": 1 },
      { "name": "Fresh Lime Juice", "amount": 1 }
    ],
    "instructions": "Shake with ice, strain into chilled glass, garnish with lime wedge.",
    "alcoholLevel": "strong",
    "introduction": "The Kamikaze is a potent cocktail that originated in Japan and gained popularity in the 1970s. Its name, meaning 'divine wind,' reflects its strong and impactful nature. The drink combines vodka, triple sec, and fresh lime juice, resulting in a tangy and refreshing cocktail that packs a punch. The Kamikaze is often served in a chilled glass and garnished with a lime wedge, making it a favorite among those who enjoy bold flavors.",
    "comment": "Daring, bold, and a little bit wild. You’re the person who’s always up for a challenge and never backs down.",
    "similarCocktails": ["cosmopolitan", "french-martini", "lemon-drop"]
  },
  {
    "slug": "lemon-drop",
    "name": "Lemon Drop",
    "category": "Modern Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("lemon-drop"),
    "tasteProfile": ["citrusy", "sweet", "tart"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Vodka", "amount": 1.5 },
      { "name": "Triple Sec", "amount": 0.5 },
      { "name": "Fresh Lemon Juice", "amount": 1 },
      { "name": "Simple Syrup", "amount": 0.5 }
    ],
    "instructions": "Shake with ice, strain into sugar-rimmed glass, garnish with lemon twist.",
    "alcoholLevel": "medium",
    "introduction": "The Lemon Drop is a zesty and refreshing cocktail that has become a favorite among those who enjoy citrus flavors. It is believed to have originated in the 1970s and has since gained popularity for its bright and tangy profile. The drink combines vodka, triple sec, fresh lemon juice, and simple syrup, resulting in a perfect balance of sweet and sour. The Lemon Drop is often served in a sugar-rimmed glass and garnished with a lemon twist, making it a delightful choice for any occasion.",
    "comment": "Bright, cheerful, and a little bit tangy. You’re the person who always brings a smile to everyone’s face.",
    "similarCocktails": ["cosmopolitan", "kamikaze", "french-martini"]
  },
  {
    "slug": "black-raspberry",
    "name": "Black Raspberry Margarita",
    "category": "Modern Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("black-raspberry"),
    "tasteProfile": ["fruity", "sweet", "smooth"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Vodka", "amount": 1.5 },
      { "name": "Chambord", "amount": 0.5 },
      { "name": "Cranberry Juice", "amount": 1.5 },
      { "name": "Pineapple Juice", "amount": 1.5 }
    ],
    "instructions": "Shake with ice, strain into chilled glass, garnish with raspberry.",
    "alcoholLevel": "medium",
    "introduction": "The Black Raspberry cocktail is a delightful and fruity drink that combines the rich flavors of black raspberries with the smoothness of vodka. It is often made with Chambord, a black raspberry liqueur, along with cranberry and pineapple juices, resulting in a balanced and refreshing cocktail. The Black Raspberry is typically served in a chilled glass and garnished with a raspberry, making it a visually appealing and tasty choice for any occasion.",
    "comment": "Sweet, charming, and a little bit mysterious. You’re the person who knows how to make an impression without saying a word.",
    "similarCocktails": ["french-martini", "cosmopolitan", "kamikaze"]
  },
  {
    "slug": "boulevardier",
    "name": "Boulevardier",
    "category": "Classic",
    "glass": "Rocks",
    "image": getImagesForSlug("boulevardier"),
    "tasteProfile": ["bitter", "boozy", "sweet"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Bourbon or Rye Whiskey", "amount": 1.5 },
      { "name": "Campari", "amount": 1 },
      { "name": "Sweet Vermouth", "amount": 1 }
    ],
    "instructions": "Stir with ice, strain into rocks glass over ice, garnish with orange twist.",
    "alcoholLevel": "strong",
    "introduction": "The Boulevardier is a classic cocktail that dates back to the 1920s and is often considered a cousin to the Negroni. It combines bourbon or rye whiskey with Campari and sweet vermouth, resulting in a rich and complex flavor profile. The Boulevardier is typically served over ice in a rocks glass and garnished with an orange twist, making it a sophisticated choice for those who enjoy bold and bitter cocktails.",
    "comment": "Sophisticated, bold, and a little bit mysterious. You’re the person who knows how to make a statement without saying a word.",
    "similarCocktails": ["negroni", "manhattan", "old-fashioned"]
  },
  {
    "slug": "americano",
    "name": "Americano",
    "category": "Classic",
    "glass": "Highball",
    "image": getImagesForSlug("americano"),
    "tasteProfile": ["bitter", "refreshing", "citrusy"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Campari", "amount": 1.5 },
      { "name": "Sweet Vermouth", "amount": 1.5 },
      { "name": "Soda Water", "amount": 2 }
    ],
    "instructions": "Build in glass over ice, top with soda, garnish with orange slice.",
    "alcoholLevel": "light",
    "introduction": "The Americano is a classic Italian cocktail that dates back to the mid-19th century. It was originally known as the 'Milano-Torino' due to its ingredients, Campari from Milan and sweet vermouth from Turin. The Americano gained popularity in the United States during Prohibition when Americans traveling to Europe sought out this refreshing and low-alcohol drink. The addition of soda water makes it a light and effervescent choice, perfect for warm weather.",
    "comment": "Light, refreshing, and a little bit bubbly. You’re the person who always brings a smile to everyone’s face.",
    "similarCocktails": ["spritz", "negroni", "aperol-spritz"]
  },
  {
    "slug": "martinez",
    "name": "Martinez",
    "category": "Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("martinez"),
    "tasteProfile": ["sweet", "herbal", "boozy"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Gin", "amount": 1.5 },
      { "name": "Sweet Vermouth", "amount": 1.5 },
      { "name": "Maraschino Liqueur", "amount": 0.25 },
      { "name": "Orange Bitters", "amount": 2 }
    ],
    "instructions": "Stir with ice, strain into chilled glass, garnish with lemon twist.",
    "alcoholLevel": "strong",
    "introduction": "The Martinez is a classic cocktail that is often considered a precursor to the modern Martini. It dates back to the late 19th century and is believed to have originated in San Francisco. The drink combines gin, sweet vermouth, maraschino liqueur, and orange bitters, resulting in a complex and flavorful cocktail. The Martinez is typically served in a chilled cocktail glass and garnished with a lemon twist, making it a sophisticated choice for cocktail enthusiasts.",
    "comment": "Refined, elegant, and a little bit mysterious. You’re the person who knows how to make an impression without saying a word.",
    "similarCocktails": ["martini", "negroni", "manhattan"]
  },
  {
    "slug": "negroni",
    "name": "Negroni",
    "category": "Classic",
    "glass": "Rocks",
    "image": negroni,
    "tasteProfile": ["bitter", "herbal", "boozy"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Gin", "amount": 1 },
      { "name": "Campari", "amount": 1 },
      { "name": "Sweet Vermouth", "amount": 1 }
    ],
    "instructions": "Stir with ice, strain into rocks glass with ice, garnish with orange peel.",
    "alcoholLevel": "strong",
    "introduction": "The Negroni is a classic Italian cocktail that dates back to the early 20th century. It was created by Count Camillo Negroni, who requested a stronger version of his favorite drink, the Americano. The Negroni's equal parts gin, Campari, and sweet vermouth create a complex flavor profile that is both bitter and aromatic, making it a favorite among cocktail aficionados.",
    "comment": "Bold, sophisticated, and a little bit mysterious. You’re the person who knows how to make a statement without saying a word.",
    "similarCocktails": ["boulevardier", "americano", "martinez"]
  },
  {
    "slug": "daiquiri",
    "name": "Daiquiri",
    "category": "Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("daiquiri"),
    "tasteProfile": ["citrusy", "sweet", "refreshing"],
    "measurement": "oz",
    "ingredients": [
      { "name": "White Rum", "amount": 2 },
      { "name": "Fresh Lime Juice", "amount": 1 },
      { "name": "Simple Syrup", "amount": 0.75 }
    ],
    "instructions": "Shake with ice and strain into chilled glass.",
    "alcoholLevel": "medium",
    "introduction": "The Daiquiri is a classic Cuban cocktail that has been enjoyed since the late 19th century. Named after the Daiquiri Beach in Cuba, this cocktail is a simple yet delicious combination of rum, lime juice, and sugar. It can be served shaken or blended with ice, making it a versatile choice for any occasion.",
    "comment": "Light, refreshing, and a little bit tropical. You’re the person who always brings the vacation vibes wherever you go.",
    "similarCocktails": ["mojito", "caipirinha", "margarita"]
  },
  {
    "slug": "manhattan",
    "name": "Manhattan",
    "category": "Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("manhattan"),
    "tasteProfile": ["boozy", "sweet", "herbal"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Rye Whiskey", "amount": 2 },
      { "name": "Sweet Vermouth", "amount": 1 },
      { "name": "Angostura Bitters", "amount": 2 }
    ],
    "instructions": "Stir with ice, strain into glass, garnish with cherry.",
    "alcoholLevel": "strong",
    "introduction": "The Manhattan is a classic cocktail that originated in the late 1800s, named after the Manhattan Club in New York City. This sophisticated drink combines rye whiskey, sweet vermouth, and bitters, resulting in a rich and complex flavor profile. It is often garnished with a cherry or a twist of lemon peel, making it a timeless favorite among cocktail enthusiasts.",
    "comment": "Strong, confident, and a little bit old-school. You’re the person who knows how to make an impression and leave a lasting mark.",
    "similarCocktails": ["old-fashioned", "boulevardier", "rob-roy"]
  },
  {
    "slug": "rob-roy",
    "name": "Rob Roy",
    "category": "Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("rob-roy"),
    "tasteProfile": ["boozy", "sweet", "herbal"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Scotch Whisky", "amount": 2 },
      { "name": "Sweet Vermouth", "amount": 1 },
      { "name": "Angostura Bitters", "amount": 2 }
    ],
    "instructions": "Stir with ice, strain into glass, garnish with lemon twist or cherry.",
    "alcoholLevel": "strong",
    "introduction": "The Rob Roy is a classic cocktail that is essentially a Scotch whisky version of the Manhattan. It was created in the late 19th century and named after the Scottish folk hero Rob Roy MacGregor. The drink combines Scotch whisky, sweet vermouth, and bitters, resulting in a rich and flavorful cocktail that is perfect for those who appreciate the distinct taste of Scotch.",
    "comment": "Bold, refined, and a little bit adventurous. You’re the person who knows how to make a statement and isn’t afraid to stand out.",
    "similarCocktails": ["manhattan", "old-fashioned", "boulevardier"]
  },
  {
    "slug": "whiskey-sour",
    "name": "Whiskey Sour",
    "category": "Classic",
    "glass": "Rocks",
    "image": getImagesForSlug("whiskey-sour"),
    "tasteProfile": ["sour", "citrusy", "boozy"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Bourbon", "amount": 2 },
      { "name": "Fresh Lemon Juice", "amount": 0.75 },
      { "name": "Simple Syrup", "amount": 0.5 }
    ],
    "instructions": "Shake with ice, strain into glass over ice, garnish with lemon wheel.",
    "alcoholLevel": "medium",
    "introduction": "The Whiskey Sour is a classic cocktail that has been enjoyed since the 19th century. It combines the rich flavors of bourbon with the tartness of fresh lemon juice and a touch of sweetness from simple syrup. This drink is often served over ice and garnished with a lemon wheel or cherry, making it a refreshing choice for whiskey lovers.",
    "comment": "Bold, tangy, and never afraid to speak your mind. You call it “honesty,” others call it “roasting.”",
    "similarCocktails": ["pisco-sour", "sidecar", "amaretto-sour"]
  },
  {
    "slug": "pina-colada",
    "name": "Piña Colada",
    "category": "Tropical",
    "glass": "Hurricane",
    "image": getImagesForSlug("pina-colada"),
    "tasteProfile": ["sweet", "creamy", "tropical"],
    "measurement": "oz",
    "ingredients": [
      { "name": "White Rum", "amount": 2 },
      { "name": "Coconut Cream", "amount": 2 },
      { "name": "Pineapple Juice", "amount": 3 }
    ],
    "instructions": "Blend with ice until smooth, garnish with pineapple wedge.",
    "alcoholLevel": "medium",
    "introduction": "The Piña Colada is a quintessential tropical cocktail that originated in Puerto Rico. Its name translates to 'strained pineapple,' and it is known for its creamy texture and sweet, fruity flavor. Made with rum, coconut cream, and pineapple juice, this cocktail is often associated with beach vacations and island getaways.",
    "comment": "Sweet, tropical, and a little bit nutty. You bring the vacation vibes wherever you go.",
    "similarCocktails": ["blue-hawaiian", "painkiller", "bahama-mama"]
  },
  {
    "slug": "bloody-mary",
    "name": "Bloody Mary",
    "category": "Brunch",
    "glass": "Highball",
    "image": getImagesForSlug("bloody-mary"),
    "tasteProfile": ["savory", "spicy", "umami"],
    "measurement": "oz",
    "ingredients": [
      { "name": "Vodka", "amount": 2 },
      { "name": "Tomato Juice", "amount": 4 },
      { "name": "Lemon Juice", "amount": 0.5 },
      { "name": "Worcestershire Sauce", "amount": 0.25 },
      { "name": "Tabasco", "amount": 2 }
    ],
    "instructions": "Build in glass over ice, stir, garnish with celery stick.",
    "alcoholLevel": "medium",
    "introduction": "The Bloody Mary is a classic brunch cocktail known for its savory and spicy flavor profile. It is believed to have originated in the 1920s and has since become a staple in bars and restaurants worldwide. Made with vodka, tomato juice, and various seasonings, it is often garnished with celery, olives, or even bacon, making it a meal in a glass.",
    "comment": "Bold, spicy, and unapologetically complex. You’re the person who always keeps things interesting.",
    "similarCocktails": ["michelada", "red-snapper", "bullshot"]
  },
  {
    "slug": "espresso-martini",
    "name": "Espresso Martini",
    "category": "Cocktail",
    "glass": "Cocktail glass",
    "image": getImagesForSlug("espresso-martini"),
    "tasteProfile": ["bitter", "sweet"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Vodka", "amount": "1.5" },
      { "name": "Coffee Liqueur", "amount": "1" },
      { "name": "Espresso", "amount": "1" }
    ],
    "instructions": "Shake all ingredients with ice, strain into glass, garnish with coffee beans.",
    "introduction": "The Espresso Martini is a modern classic that combines the rich flavors of coffee with the smoothness of vodka. Created in the 1980s, it has gained popularity for its energizing qualities and sophisticated taste. The cocktail is typically served in a chilled martini glass and garnished with coffee beans, making it a perfect after-dinner drink.",
    "comment": "Energetic, bold, and a little bit edgy. You’re the life of the party and always ready to go.",
    "similarCocktails": ["black-russian", "white-russian", "irish-coffee"]
  },
  {
    "slug": "martini",
    "name": "Martini",
    "category": "Cocktail",
    "glass": "Cocktail glass",
    "image": martini,
    "tasteProfile": ["dry", "strong"],
    "measurement": "oz",
    "alcoholLevel": "high",
    "ingredients": [
      { "name": "Gin", "amount": "2.5" },
      { "name": "Dry Vermouth", "amount": "0.5" }
    ],
    "instructions": "Stir with ice, strain into chilled glass, garnish with olive or lemon twist.",
    "introduction": "The Martini is one of the most iconic cocktails in the world, known for its elegance and simplicity. Its origins date back to the late 19th century, and it has been popularized by countless films and literature. Traditionally made with gin and dry vermouth, it can also be prepared with vodka for a different flavor profile. The Martini is often served with an olive or a twist of lemon, making it a timeless choice for cocktail enthusiasts.",
    "comment": "Classic, sophisticated, and always in style. You know what you want and how to get it.",
    "similarCocktails": ["gibson", "vesper", "dirty-martini"]
  },
  {
    "slug": "gin-tonic",
    "name": "Gin and Tonic",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("gin-tonic"),
    "tasteProfile": ["bitter", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Gin", "amount": "2" },
      { "name": "Tonic Water", "amount": "Top up" }
    ],
    "instructions": "Pour gin over ice, top with tonic water, garnish with lime.",
    "introduction": "The Gin and Tonic is a classic cocktail that has been enjoyed for centuries. Its origins can be traced back to the British colonial era when gin was mixed with tonic water to make it more palatable. The bitterness of the tonic water complements the botanicals in gin, creating a refreshing and invigorating drink. It is often garnished with a slice of lime or lemon, making it a popular choice for warm weather.",
    "comment": "Crisp, refreshing, and a little bit bitter. You’re the person who always keeps things interesting.",
    "similarCocktails": ["vodka-tonic", "negroni", "tom-collins"]
  },
  {
    "slug": "tequila-sunrise",
    "name": "Tequila Sunrise",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("tequila-sunrise"),
    "tasteProfile": ["sweet", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Tequila", "amount": "2" },
      { "name": "Orange Juice", "amount": "4" },
      { "name": "Grenadine", "amount": "0.5" }
    ],
    "instructions": "Pour tequila and juice over ice, slowly add grenadine for gradient.",
    "introduction": "The Tequila Sunrise is a vibrant and visually stunning cocktail that has become a symbol of relaxation and tropical getaways. Its origins can be traced back to the 1930s, and it gained popularity in the 1970s. The drink features tequila, orange juice, and grenadine, creating a beautiful gradient effect reminiscent of a sunrise. It is often served over ice in a highball glass, making it a refreshing choice for warm weather.",
    "comment": "Bright, cheerful, and full of life. You’re the person who always brings the sunshine.",
    "similarCocktails": ["sex-on-the-beach", "mimosa", "mai-tai"]
  },
  {
    "slug": "caipirinha",
    "name": "Caipirinha",
    "category": "Cocktail",
    "glass": "Old-fashioned glass",
    "image": getImagesForSlug("caipirinha"),
    "tasteProfile": ["sweet", "sour", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Cachaça", "amount": "2" },
      { "name": "Lime", "amount": "1" },
      { "name": "Sugar", "amount": "2 tsp" }
    ],
    "instructions": "Muddle lime and sugar, add cachaça and ice, stir gently.",
    "introduction": "The Caipirinha is Brazil's national cocktail, known for its refreshing and zesty flavor. It is made with cachaça, a sugarcane spirit, muddled lime, and sugar. The drink is typically served over ice in an old-fashioned glass, making it a perfect choice for warm weather. Its origins date back to the 19th century, and it has become a symbol of Brazilian culture and hospitality.",
    "comment": "Lively, vibrant, and full of zest. You’re the person who knows how to have a good time.",
    "similarCocktails": ["mojito", "daiquiri", "pisco-sour"]
  },
  {
    "slug": "pisco-sour",
    "name": "Pisco Sour",
    "category": "Cocktail",
    "glass": "Old-fashioned glass",
    "image": getImagesForSlug("pisco-sour"),
    "tasteProfile": ["sour", "smooth"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Pisco", "amount": "2" },
      { "name": "Lime Juice", "amount": "1" },
      { "name": "Simple Syrup", "amount": "0.75" },
      { "name": "Egg White", "amount": "1" }
    ],
    "instructions": "Shake all ingredients without ice, then with ice, strain into glass.",
    "introduction": "The Pisco Sour is a traditional South American cocktail that originated in Peru and Chile. It is made with pisco, a grape brandy, combined with lime juice, simple syrup, and egg white for a frothy texture. The drink is typically served in an old-fashioned glass and garnished with a few drops of bitters. Its unique flavor profile and creamy texture make it a favorite among cocktail enthusiasts.",
    "comment": "Smooth, sophisticated, and a little bit mysterious. You’re the person who always keeps things interesting.",
    "similarCocktails": ["whiskey-sour", "daiquiri", "margarita"]
  },
  {
    "slug": "sex-on-the-beach",
    "name": "Sex on the Beach",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("sex-on-the-beach"),
    "tasteProfile": ["sweet", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "low",
    "ingredients": [
      { "name": "Vodka", "amount": "1.5" },
      { "name": "Peach Schnapps", "amount": "0.5" },
      { "name": "Orange Juice", "amount": "2" },
      { "name": "Cranberry Juice", "amount": "2" }
    ],
    "instructions": "Shake with ice, strain into glass with ice.",
    "introduction": "Sex on the Beach is a vibrant and fruity cocktail that became iconic in the 1980s during the boom of fun, colorful drinks. It combines vodka, peach schnapps, orange juice, and cranberry juice for a sweet, tropical flavor. Known for its playful name and refreshing taste, it’s a popular choice for summer parties and beachside lounging.",
    "comment": "Fun, flirty, and always up for a good time. You’re the person who brings the party wherever you go.",
    "similarCocktails": ["tequila-sunrise", "mai-tai", "pina-colada"]
  },
  {
    "slug": "mai-tai",
    "name": "Mai Tai",
    "category": "Cocktail",
    "glass": "Old-fashioned glass",
    "image": getImagesForSlug("mai-tai"),
    "tasteProfile": ["sweet", "fruity", "strong"],
    "measurement": "oz",
    "alcoholLevel": "high",
    "ingredients": [
      { "name": "White Rum", "amount": "1" },
      { "name": "Dark Rum", "amount": "1" },
      { "name": "Orange Curacao", "amount": "0.5" },
      { "name": "Lime Juice", "amount": "0.75" },
      { "name": "Orgeat Syrup", "amount": "0.5" }
    ],
    "instructions": "Shake all ingredients with ice, strain into glass over ice.",
    "introduction": "The Mai Tai is a classic tiki cocktail that originated in the 1940s. It is known for its tropical flavors and vibrant presentation. The combination of light and dark rum, orange curacao, lime juice, and orgeat syrup creates a complex and refreshing drink. Often garnished with mint leaves and a slice of pineapple, the Mai Tai is a favorite choice for those seeking a taste of the tropics.",
    "comment": "Exotic, adventurous, and a little bit mysterious. You’re the person who always keeps things exciting.",
    "similarCocktails": ["pina-colada", "sex-on-the-beach", "daiquiri"]
  },
  {
    "slug": "tom-collins",
    "name": "Tom Collins",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("tom-collins"),
    "tasteProfile": ["sour", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Gin", "amount": "2" },
      { "name": "Lemon Juice", "amount": "1" },
      { "name": "Simple Syrup", "amount": "0.5" },
      { "name": "Soda Water", "amount": "Top up" }
    ],
    "instructions": "Shake gin, lemon, and syrup with ice, strain into glass, top with soda.",
    "introduction": "The Tom Collins is a classic gin cocktail that dates back to the 19th century. It is known for its refreshing and citrusy flavor, making it a popular choice for warm weather. The drink combines gin, lemon juice, simple syrup, and soda water, resulting in a light and effervescent beverage. Often served in a tall glass with ice, the Tom Collins is a timeless favorite among cocktail enthusiasts.",
    "comment": "Bright, bubbly, and always up for a good time. You’re the person who brings the fun wherever you go.",
    "similarCocktails": ["gin-tonic", "vodka-collins", "gin-fizz"]
  },
  {
    "slug": "mint-julep",
    "name": "Mint Julep",
    "category": "Cocktail",
    "glass": "Julep cup",
    "image": getImagesForSlug("mint-julep"),
    "tasteProfile": ["sweet", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Bourbon", "amount": "2" },
      { "name": "Sugar", "amount": "1 tsp" },
      { "name": "Mint Leaves", "amount": "6" },
      { "name": "Water", "amount": "1 tsp" }
    ],
    "instructions": "Muddle sugar, mint, and water, add bourbon and crushed ice, stir.",
    "introduction": "The Mint Julep is a classic Southern cocktail that is synonymous with the Kentucky Derby. It is made with bourbon, fresh mint, sugar, and water, resulting in a refreshing and aromatic drink. Traditionally served in a silver or pewter cup, the Mint Julep is a symbol of hospitality and celebration in the American South.",
    "comment": "Cool, collected, and a little bit fancy. You’re the person who always knows how to make an entrance.",
    "similarCocktails": ["mojito", "caipirinha", "whiskey-sour"]
  },
  {
    "slug": "mimosa",
    "name": "Mimosa",
    "category": "Cocktail",
    "glass": "Champagne flute",
    "image": getImagesForSlug("mimosa"),
    "tasteProfile": ["light", "citrusy", "sparkling"],
    "measurement": "oz",
    "alcoholLevel": "low",
    "ingredients": [
      { "name": "Champagne", "amount": "3" },
      { "name": "Orange Juice", "amount": "3" }
    ],
    "instructions": "Pour chilled orange juice into a flute, top with champagne. Do not stir.",
    "introduction": "The Mimosa is a classic brunch cocktail that combines sparkling wine with fresh orange juice for a light and elegant drink. Popularized in the 1920s, it’s a symbol of daytime celebrations and is often served during weddings, holiday brunches, and morning gatherings.",
    "comment": "Bright, cheerful, and always in good spirits. You’re the person who brings the sunshine wherever you go.",
    "similarCocktails": ["bellini", "kir-royale", "french-75"]
  },
  {
    "slug": "long-island",
    "name": "Long Island",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("long-island"),
    "tasteProfile": ["strong", "citrusy", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "high",
    "ingredients": [
      { "name": "Vodka", "amount": "0.5" },
      { "name": "Gin", "amount": "0.5" },
      { "name": "White Rum", "amount": "0.5" },
      { "name": "Tequila", "amount": "0.5" },
      { "name": "Triple Sec", "amount": "0.5" },
      { "name": "Lemon Juice", "amount": "0.75" },
      { "name": "Simple Syrup", "amount": "0.5" },
      { "name": "Cola", "amount": "Top up" }
    ],
    "instructions": "Combine all spirits, lemon juice, and syrup in a shaker with ice. Shake, strain into a highball glass with ice, and top with cola. Garnish with lemon wedge.",
    "introduction": "Long Island is a legendary cocktail known for its potency and refreshing taste. Despite its name, it contains no tea—its dark color comes from a splash of cola. Originating in the 1970s, this drink combines five spirits, making it one of the strongest classic cocktails while remaining surprisingly smooth and balanced with citrus and sweetness.",
    "comment": "Bold, adventurous, and always ready to take on a challenge. You’re the person who lives life to the fullest.",
    "similarCocktails": ["blue-hawaiian", "bahama-mama", "vodka-tonic"]
  },
  {
    "slug": "vodka-collins",
    "name": "Vodka Collins",
    "category": "Cocktail",
    "glass": "Collins glass",
    "image": getImagesForSlug("vodka-collins"),
    "tasteProfile": ["citrusy", "refreshing", "light"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Vodka", "amount": "2" },
      { "name": "Lemon Juice", "amount": "1" },
      { "name": "Simple Syrup", "amount": "0.5" },
      { "name": "Soda Water", "amount": "Top up" }
    ],
    "instructions": "Shake vodka, lemon juice, and simple syrup with ice. Strain into a Collins glass over fresh ice and top with soda water. Garnish with a lemon slice and cherry.",
    "introduction": "A Vodka Collins is a refreshing twist on the classic Tom Collins, substituting vodka for gin. It's citrusy, fizzy, and perfect for hot summer days.",
    "comment": "Light, bubbly, and always up for a good time. You’re the person who brings the fun wherever you go.",
    "similarCocktails": ["tom-collins", "gin-fizz", "mojito"]
  },
  {
    "slug": "gin-fizz",
    "name": "Gin Fizz",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("gin-fizz"),
    "tasteProfile": ["light", "foamy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Gin", "amount": "2" },
      { "name": "Lemon Juice", "amount": "1" },
      { "name": "Simple Syrup", "amount": "0.75" },
      { "name": "Egg White", "amount": "Optional" },
      { "name": "Soda Water", "amount": "Top up" }
    ],
    "instructions": "Shake gin, lemon, syrup (and egg white if using) vigorously. Strain into glass and top with soda.",
    "introduction": "The Gin Fizz is a classic cocktail known for its light, frothy texture and refreshing citrus flavor. It dates back to the 19th century and is often enjoyed as a brunch or summer drink. The addition of egg white gives it a creamy mouthfeel, while the soda water adds a bubbly finish.",
    "comment": "Effervescent, lively, and always ready to brighten your day. You’re the person who lifts everyone’s spirits.",
    "similarCocktails": ["vodka-collins", "tom-collins", "whiskey-sour"]
  },
  {
    "slug": "sidecar",
    "name": "Sidecar",
    "category": "Cocktail",
    "glass": "Cocktail glass",
    "image": getImagesForSlug("sidecar"),
    "tasteProfile": ["citrusy", "balanced"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Cognac", "amount": "2" },
      { "name": "Triple Sec", "amount": "1" },
      { "name": "Lemon Juice", "amount": "0.75" }
    ],
    "instructions": "Shake all ingredients with ice and strain into a sugar-rimmed glass.",
    "introduction": "The Sidecar is a classic cocktail that dates back to World War I, believed to have originated in Paris or London. It combines cognac, orange liqueur, and lemon juice for a balanced and sophisticated drink. Often served in a sugar-rimmed glass, the Sidecar is a timeless favorite among cocktail enthusiasts.",
    "comment": "Sophisticated, balanced, and a little bit adventurous. You’re the person who always knows how to make an impression.",
    "similarCocktails": ["margarita", "daiquiri", "white-lady"]
  },
  {
    "slug": "amaretto-sour",
    "name": "Amaretto Sour",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("amaretto-sour"),
    "tasteProfile": ["sweet", "tangy", "nutty"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Amaretto", "amount": "1.5" },
      { "name": "Lemon Juice", "amount": "1" },
      { "name": "Simple Syrup", "amount": "0.5" },
      { "name": "Egg White", "amount": "Optional" }
    ],
    "instructions": "Shake all ingredients with ice and strain into a glass filled with ice. Garnish with a cherry and orange slice.",
    "introduction": "Amaretto Sour is a delightful cocktail known for its balance of sweet almond flavor and tangy citrus. Popular since the 1970s, it remains a crowd-pleaser with its smooth texture and aromatic garnish.",
    "comment": "Sweet, approachable, and a little bit nutty. You’re the person who’s always there with a smile and a kind word.",
    "similarCocktails": ["whiskey-sour", "godfather", "sidecar"]
  },
  {
    "slug": "painkiller",
    "name": "Painkiller",
    "category": "Tiki",
    "glass": "Hurricane glass",
    "image": getImagesForSlug("painkiller"),
    "tasteProfile": ["sweet", "creamy", "tropical"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Pusser's Rum", "amount": "2" },
      { "name": "Pineapple Juice", "amount": "4" },
      { "name": "Orange Juice", "amount": "1" },
      { "name": "Cream of Coconut", "amount": "1" }
    ],
    "instructions": "Shake all ingredients with ice, pour into a glass, and garnish with grated nutmeg and a pineapple wedge.",
    "introduction": "The Painkiller is a tropical cocktail born in the British Virgin Islands in the 1970s. With its creamy coconut and fruity flavors, it is a perfect vacation drink.",
    "comment": "Relaxed, easy-going, and always in a good mood. You’re the person who knows how to unwind and enjoy life.",
    "similarCocktails": ["piña-colada", "bahama-mama", "blue-hawaiian"]
  },
  {
    "slug": "blue-hawaiian",
    "name": "Blue Hawaiian",
    "category": "Tiki",
    "glass": "Hurricane glass",
    "image": getImagesForSlug("blue-hawaiian"),
    "tasteProfile": ["sweet", "tropical", "citrusy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Light Rum", "amount": "1" },
      { "name": "Blue Curaçao", "amount": "1" },
      { "name": "Pineapple Juice", "amount": "3" },
      { "name": "Cream of Coconut", "amount": "1" }
    ],
    "instructions": "Shake with ice and strain into a glass filled with crushed ice. Garnish with a pineapple wedge and cherry.",
    "introduction": "The Blue Hawaiian is a visually stunning cocktail thanks to its bright blue hue from Blue Curaçao. It’s a refreshing tropical drink perfect for beach vibes.",
    "comment": "Vibrant, fun-loving, and always the center of attention. You’re the person who lights up every room you enter.",
    "similarCocktails": ["bahama-mama", "painkiller", "piña-colada"]
  },
  {
    "slug": "bahama-mama",
    "name": "Bahama Mama",
    "category": "Tiki",
    "glass": "Hurricane glass",
    "image": getImagesForSlug("bahama-mama"),
    "tasteProfile": ["sweet", "tropical", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "high",
    "ingredients": [
      { "name": "Light Rum", "amount": "1" },
      { "name": "Dark Rum", "amount": "1" },
      { "name": "Coconut Rum", "amount": "0.5" },
      { "name": "Pineapple Juice", "amount": "2" },
      { "name": "Orange Juice", "amount": "2" },
      { "name": "Grenadine", "amount": "0.5" }
    ],
    "instructions": "Shake all ingredients with ice and pour into a glass. Garnish with a cherry and an orange slice.",
    "introduction": "The Bahama Mama is a tropical rum cocktail that bursts with fruity flavors, perfect for summer parties and beach getaways.",
    "comment": "Fun, lively, and always ready for an adventure. You’re the person who brings the party wherever you go.",
    "similarCocktails": ["painkiller", "mai-tai", "blue-hawaiian"]
  },
  {
    "slug": "michelada",
    "name": "Michelada",
    "category": "Beer Cocktail",
    "glass": "Pint glass",
    "image": getImagesForSlug("michelada"),
    "tasteProfile": ["spicy", "savory", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "low",
    "ingredients": [
      { "name": "Light Beer", "amount": "12" },
      { "name": "Lime Juice", "amount": "1" },
      { "name": "Hot Sauce", "amount": "Few dashes" },
      { "name": "Worcestershire Sauce", "amount": "Few dashes" },
      { "name": "Tomato Juice", "amount": "Optional" }
    ],
    "instructions": "Rim glass with salt, add lime juice, sauces, and beer. Stir gently and garnish with a lime wedge.",
    "introduction": "Michelada is a Mexican beer cocktail with a spicy, tangy kick. It’s the perfect hangover cure and a refreshing option for hot days.",
    "comment": "Bold, zesty, and a little bit spicy. You’re the person who always keeps things interesting.",
    "similarCocktails": ["bloody-mary", "red-snapper", "bullshot"]
  },
  {
    "slug": "red-snapper",
    "name": "Red Snapper",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("red-snapper"),
    "tasteProfile": ["savory", "spicy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Gin", "amount": "2" },
      { "name": "Tomato Juice", "amount": "4" },
      { "name": "Lemon Juice", "amount": "0.5" },
      { "name": "Worcestershire Sauce", "amount": "dash" },
      { "name": "Hot Sauce", "amount": "dash" }
    ],
    "instructions": "Combine all ingredients in a glass with ice, stir well, and garnish with a celery stick.",
    "introduction": "The Red Snapper is often considered the gin-based cousin of the Bloody Mary. Its savory and slightly spicy profile makes it a popular choice for brunch and those who enjoy bold, complex flavors.",
    "comment": "Savory, bold, and a little bit unconventional. You’re the person who marches to the beat of your own drum.",
    "similarCocktails": ["bloody-mary", "bullshot", "michelada"]
  },
  {
    "slug": "bullshot",
    "name": "Bullshot",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("bullshot"),
    "tasteProfile": ["savory", "umami"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Vodka", "amount": "2" },
      { "name": "Beef Broth", "amount": "4" },
      { "name": "Worcestershire Sauce", "amount": "dash" },
      { "name": "Lemon Juice", "amount": "0.5" }
    ],
    "instructions": "Shake ingredients with ice and strain into a glass over ice cubes. Garnish with a lemon twist.",
    "introduction": "The Bullshot is a savory cocktail that combines vodka with beef broth and seasoning for a hearty, umami-rich drink. It's an unusual but beloved choice among those who enjoy bold, unconventional flavors.",
    "comment": "Robust, hearty, and a little bit daring. You’re the person who’s always up for trying something new.",
    "similarCocktails": ["bloody-mary", "red-snapper", "michelada"]
  },
  {
    "slug": "black-russian",
    "name": "Black Russian",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("black-russian"),
    "tasteProfile": ["sweet", "strong"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": "Vodka", "amount": "2" },
      { "name": "Coffee Liqueur", "amount": "1" }
    ],
    "instructions": "Pour vodka and coffee liqueur over ice in a glass and stir gently.",
    "introduction": "The Black Russian is a simple yet powerful cocktail that blends vodka with coffee liqueur. Known for its deep, rich flavor, it's a favorite among coffee lovers and those who enjoy bold drinks.",
    "comment": "Strong, straightforward, and a little bit mysterious. You’re the person who knows what they want and isn’t afraid to go after it.",
    "similarCocktails": ["white-russian", "espresso-martini", "godfather"]
  },
  {
    "slug": "white-russian",
    "name": "White Russian",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("white-russian"),
    "tasteProfile": ["sweet", "creamy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Vodka", "amount": "2" },
      { "name": "Coffee Liqueur", "amount": "1" },
      { "name": "Cream", "amount": "1" }
    ],
    "instructions": "Build ingredients over ice in a glass, stir gently to combine.",
    "introduction": "The White Russian takes the boldness of a Black Russian and adds a creamy twist. This cocktail became a pop culture icon and remains a favorite for those who enjoy sweet, dessert-like drinks.",
    "comment": "Smooth, indulgent, and a little bit nostalgic. You’re the person who always knows how to make things better.",
    "similarCocktails": ["black-russian", "mudslide", "brandy-alexander"]
  },
  {
    "slug": "mudslide",
    "name": "Mudslide",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("mudslide"),
    "tasteProfile": ["sweet", "creamy", "chocolatey"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Vodka", "amount": "1" },
      { "name": "Coffee Liqueur", "amount": "1" },
      { "name": "Irish Cream Liqueur", "amount": "1" },
      { "name": "Cream", "amount": "1" }
    ],
    "instructions": "Shake all ingredients with ice and strain into a glass filled with ice. Garnish with chocolate syrup or shavings.",
    "introduction": "The Mudslide is a decadent cocktail that combines vodka, coffee liqueur, Irish cream, and cream for a rich, dessert-like drink. It's perfect for those who enjoy indulgent flavors and creamy textures.",
    "comment": "Decadent, indulgent, and a little bit over-the-top. You’re the person who knows how to treat yourself.",
    "similarCocktails": ["white-russian", "brandy-alexander", "irish-coffee"]
  },
  {
    "slug": "brandy-alexander",
    "name": "Brandy Alexander",
    "category": "Cocktail",
    "glass": "Cocktail glass",
    "image": getImagesForSlug("brandy-alexander"),
    "tasteProfile": ["sweet", "creamy", "chocolatey"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Brandy", "amount": "1.5" },
      { "name": "Dark Crème de Cacao", "amount": "1" },
      { "name": "Cream", "amount": "1" },
      { "name": "Nutmeg", "amount": "Garnish" }
    ],
    "instructions": "Shake all ingredients with ice and strain into a chilled cocktail glass. Garnish with a sprinkle of nutmeg.",
    "introduction": "The Brandy Alexander is a classic cocktail that dates back to the early 20th century. It combines brandy, dark crème de cacao, and cream for a rich, dessert-like drink. Often garnished with a sprinkle of nutmeg, the Brandy Alexander is a sophisticated choice for those who enjoy sweet and creamy cocktails.",
    "comment": "Elegant, refined, and a little bit indulgent. You’re the person who knows how to enjoy the finer things in life.",
    "similarCocktails": ["mudslide", "white-russian", "irish-coffee"]
  },
  {
    "slug": "irish-coffee",
    "name": "Irish Coffee",
    "category": "Hot Cocktail",
    "glass": "Irish coffee mug",
    "image": getImagesForSlug("irish-coffee"),
    "tasteProfile": ["sweet", "warming"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Irish Whiskey", "amount": "1.5" },
      { "name": "Hot Coffee", "amount": "4" },
      { "name": "Sugar", "amount": "1 tsp" },
      { "name": "Cream", "amount": "float" }
    ],
    "instructions": "Combine coffee, whiskey, and sugar in a mug. Stir well, then float cream on top.",
    "introduction": "Irish Coffee is a comforting blend of coffee, Irish whiskey, and cream. Perfect for chilly evenings, this drink is both warming and invigorating, offering a delightful balance of sweet and strong flavors.",
    "comment": "Cozy, comforting, and a little bit indulgent. You’re the person who always knows how to make you feel better.",
    "similarCocktails": ["spanish-coffee", "hot-toddy", "baileys-coffee"]
  },
  {
    "slug": "spanish-coffee",
    "name": "Spanish Coffee",
    "category": "Hot Cocktail",
    "glass": "Irish coffee mug",
    "image": getImagesForSlug("spanish-coffee"),
    "tasteProfile": ["sweet", "warming", "citrusy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Rum", "amount": "1" },
      { "name": "Coffee Liqueur", "amount": "1" },
      { "name": "Hot Coffee", "amount": "4" },
      { "name": "Sugar", "amount": "1 tsp" },
      { "name": "Whipped Cream", "amount": "Top" },
      { "name": "Lemon Peel", "amount": "Garnish" }
    ],
    "instructions": "Rim glass with sugar, combine rum, coffee liqueur, coffee, and sugar in mug. Stir well, top with whipped cream and garnish with lemon peel.",
    "introduction": "Spanish Coffee is a festive and flavorful cocktail that combines rum, coffee liqueur, and hot coffee. The sugared rim and whipped cream topping add a touch of indulgence, while the lemon peel garnish provides a hint of citrus brightness.",
    "comment": "Festive, flavorful, and a little bit indulgent. You’re the person who knows how to celebrate life.",
    "similarCocktails": ["irish-coffee", "hot-toddy", "baileys-coffee"]
  },
  {
    "slug": "hot-toddy",
    "name": "Hot Toddy",
    "category": "Hot Cocktail",
    "glass": "Mug",
    "image": getImagesForSlug("hot-toddy"),
    "tasteProfile": ["warming", "spiced"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Whiskey", "amount": "1.5" },
      { "name": "Honey", "amount": "1 tbsp" },
      { "name": "Lemon Juice", "amount": "0.5" },
      { "name": "Hot Water", "amount": "4" },
      { "name": "Cinnamon Stick", "amount": "Garnish" }
    ],
    "instructions": "Combine whiskey, honey, and lemon juice in a mug. Top with hot water and stir. Garnish with a cinnamon stick.",
    "introduction": "The Hot Toddy is a classic warm cocktail known for its soothing and comforting qualities. Made with whiskey, honey, lemon juice, and hot water, it’s often enjoyed during cold weather or as a remedy for colds.",
    "comment": "Soothing, comforting, and a little bit old-fashioned. You’re the person who knows how to take care of yourself and others.",
    "similarCocktails": ["irish-coffee", "spanish-coffee", "baileys-coffee"]
  },
  {
    "slug": "baileys-coffee",
    "name": "Baileys Coffee",
    "category": "Hot Cocktail",
    "glass": "Irish coffee mug",
    "image": getImagesForSlug("baileys-coffee"),
    "tasteProfile": ["sweet", "creamy", "warming"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Baileys Irish Cream", "amount": "1.5" },
      { "name": "Hot Coffee", "amount": "4" },
      { "name": "Whipped Cream", "amount": "Top" },
      { "name": "Chocolate Shavings", "amount": "Garnish" }
    ],
    "instructions": "Pour Baileys into a mug, top with hot coffee, stir gently. Top with whipped cream and garnish with chocolate shavings.",
    "introduction": "Baileys Coffee is a delightful combination of Baileys Irish Cream and hot coffee, topped with whipped cream for an indulgent treat. It’s perfect for cozy evenings and special occasions.",
    "comment": "Indulgent, cozy, and a little bit luxurious. You’re the person who knows how to treat yourself.",
    "similarCocktails": ["irish-coffee", "spanish-coffee", "hot-toddy"]
  },
  {
    "slug": "godfather",
    "name": "Godfather",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("godfather"),
    "tasteProfile": ["sweet", "nutty"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": "Scotch Whisky", "amount": "2" },
      { "name": "Amaretto", "amount": "1" }
    ],
    "instructions": "Pour Scotch and amaretto into a glass over ice, stir gently.",
    "introduction": "The Godfather cocktail combines smoky Scotch with sweet, nutty amaretto for a smooth and sophisticated drink. Its simple yet bold flavor has made it a classic choice for whiskey lovers.",
    "comment": "Strong, confident, and a little bit mysterious. You’re the person who commands respect and attention.",
    "similarCocktails": ["rusty-nail", "black-russian", "godmother"]
  },
  {
    "slug": "gibson",
    "name": "Gibson",
    "category": "Cocktail",
    "glass": "Martini glass",
    "image": getImagesForSlug("gibson"),
    "tasteProfile": ["dry", "savory"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": "Gin", "amount": "2.5" },
      { "name": "Dry Vermouth", "amount": "0.5" },
      { "name": "Pickled Onion", "amount": "1" }
    ],
    "instructions": "Stir gin and vermouth with ice, strain into a chilled martini glass, garnish with a pickled onion.",
    "introduction": "The Gibson is a classic martini variation distinguished by its pickled onion garnish. Elegant and dry, it has been a sophisticated choice for cocktail enthusiasts for decades.",
    "comment": "Refined, classic, and a little bit unconventional. You’re the person who always knows how to make an impression.",
    "similarCocktails": ["martini", "vesper", "dirty-martini"]
  },
  {
    "slug": "vesper",
    "name": "Vesper",
    "category": "Cocktail",
    "glass": "Martini glass",
    "image": getImagesForSlug("vesper"),
    "tasteProfile": ["strong", "bitter", "citrus"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": "Gin", "amount": "3" },
      { "name": "Vodka", "amount": "1" },
      { "name": "Lillet Blanc", "amount": "0.5" }
    ],
    "instructions": "Shake all ingredients with ice and strain into a chilled martini glass. Garnish with a lemon twist.",
    "introduction": "The Vesper was popularized by James Bond in 'Casino Royale'. A bold, potent mix of gin, vodka, and Lillet Blanc, it delivers a crisp, citrus-forward flavor.",
    "comment": "Bold, daring, and a little bit mysterious. You’re the person who’s always up for an adventure.",
    "similarCocktails": ["martini", "gibson", "dirty-martini"]
  },
  {
    "slug": "dirty-martini",
    "name": "Dirty Martini",
    "category": "Cocktail",
    "glass": "Martini glass",
    "image": getImagesForSlug("dirty-martini"),
    "tasteProfile": ["salty", "dry"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": "Gin", "amount": "2.5" },
      { "name": "Dry Vermouth", "amount": "0.5" },
      { "name": "Olive Brine", "amount": "0.5" },
      { "name": "Olive", "amount": "1" }
    ],
    "instructions": "Stir gin, vermouth, and olive brine with ice, strain into a chilled martini glass, garnish with an olive.",
    "introduction": "The Dirty Martini is a savory twist on the classic martini, incorporating olive brine for a salty, flavorful kick. It is a favorite among those who enjoy bold, distinctive cocktails.",
    "comment": "Edgy, sophisticated, and a little bit rebellious. You’re the person who always stands out in a crowd.",
    "similarCocktails": ["martini", "gibson", "vesper"]
  },
  {
    "slug": "vodka-tonic",
    "name": "Vodka Tonic",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("vodka-tonic"),
    "tasteProfile": ["refreshing", "bitter"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Vodka", "amount": "2" },
      { "name": "Tonic Water", "amount": "Top up" },
      { "name": "Lime Wedge", "amount": "1" }
    ],
    "instructions": "Pour vodka over ice, top with tonic water, and garnish with a lime wedge.",
    "introduction": "Vodka Tonic is a simple and refreshing cocktail, perfect for warm weather. Its clean, crisp taste and slight bitterness from the tonic make it a popular choice.",
    "comment": "Cool, laid-back, and always in style. You’re the person who knows how to keep things casual yet classy.",
    "similarCocktails": ["gin-tonic", "mojito", "caipirinha"]
  },
  {
    "slug": "bellini",
    "name": "Bellini",
    "category": "Cocktail",
    "glass": "Champagne flute",
    "image": getImagesForSlug("bellini"),
    "tasteProfile": ["sweet", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": "Prosecco", "amount": "3" },
      { "name": "Peach Puree", "amount": "1" }
    ],
    "instructions": "Pour peach puree into a flute and top with chilled prosecco. Stir gently.",
    "introduction": "The Bellini is a fruity, sparkling cocktail originating from Venice. Its refreshing sweetness and light effervescence make it ideal for brunch and celebratory occasions.",
    "comment": "Elegant, cheerful, and always in good spirits. You’re the person who brings a touch of class to any gathering.",
    "similarCocktails": ["mimosa", "kir-royale", "french-75"]
  },
  {
    "slug": "kir-royale",
    "name": "Kir Royale",
    "category": "Cocktail",
    "glass": "Champagne flute",
    "image": getImagesForSlug("kir-royale"),
    "tasteProfile": ["sweet", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": "Crème de Cassis", "amount": "0.5" },
      { "name": "Champagne", "amount": "3.5" }
    ],
    "instructions": "Pour crème de cassis into a flute and top with chilled champagne. Do not stir.",
    "introduction": "Kir Royale is a sophisticated cocktail that combines the sweetness of blackcurrant liqueur with the effervescence of champagne, making it a popular choice for celebrations.",
    "comment": "Chic, bubbly, and always ready to celebrate. You’re the person who knows how to make every moment special.",
    "similarCocktails": ["mimosa", "bellini", "french-75"]
  },
  {
    "slug": "bramble",
    "name": "Bramble",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("bramble"),
    "tasteProfile": ["sweet", "tart", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Gin", "amount": "2" },
      { "name": "Lemon Juice", "amount": "0.75" },
      { "name": "Simple Syrup", "amount": "0.5" },
      { "name": "Crème de Mûre", "amount": "0.5" }
    ],
    "instructions": "Shake gin, lemon juice, and syrup with ice. Strain into a glass with crushed ice and drizzle crème de mûre on top.",
    "introduction": "The Bramble is a modern classic cocktail that combines gin with tart lemon juice and sweet blackberry liqueur, creating a refreshing and visually appealing drink.",
    "comment": "Vibrant, creative, and a little bit wild. You’re the person who’s always up for trying something new and exciting.",
    "similarCocktails": ["gin-fizz", "whiskey-sour", "daiquiri"]
  },
  {
    "slug": "white-lady",
    "name": "White Lady",
    "category": "Cocktail",
    "glass": "Cocktail glass",
    "image": getImagesForSlug("white-lady"),
    "tasteProfile": ["citrusy", "smooth"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Gin", "amount": "2" },
      { "name": "Triple Sec", "amount": "0.75" },
      { "name": "Lemon Juice", "amount": "0.75" },
      { "name": "Egg White", "amount": "1" }
    ],
    "instructions": "Shake all ingredients without ice, then with ice, strain into a chilled glass.",
    "introduction": "The White Lady is a classic cocktail that combines gin, citrus, and a touch of sweetness from triple sec. Its smooth texture and refreshing taste make it a timeless favorite among cocktail enthusiasts.",
    "comment": "Elegant, refined, and a little bit mysterious. You’re the person who always leaves a lasting impression.",
    "similarCocktails": ["sidecar", "daiquiri", "margarita"]
  },
  {
    "slug": "french-75",
    "name": "French-75",
    "category": "Cocktail",
    "glass": "Champagne flute",
    "image": getImagesForSlug("french-75"),
    "tasteProfile": ["citrus", "bubbly", "strong"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": "Gin", "amount": "1" },
      { "name": "Lemon Juice", "amount": "0.5" },
      { "name": "Simple Syrup", "amount": "0.5" },
      { "name": "Champagne", "amount": "3" }
    ],
    "instructions": "Shake gin, lemon juice, and syrup with ice, strain into a flute, top with champagne.",
    "introduction": "The French-75 is a classic cocktail named after a powerful French field gun. Its blend of gin, lemon, and champagne creates a refreshing yet potent drink popular in cocktail bars.",
    "comment": "Sophisticated, lively, and always ready to celebrate. You’re the person who knows how to make every moment special.",
    "similarCocktails": ["bellini", "kir-royale", "mimosa"]
  },
  {
    "slug": "rusty-nail",
    "name": "Rusty Nail",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("rusty-nail"),
    "tasteProfile": ["strong", "sweet", "smoky"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": "Scotch Whisky", "amount": "1.5" },
      { "name": "Drambuie", "amount": "0.75" }
    ],
    "instructions": "Pour Scotch and Drambuie over ice in an old fashioned glass, stir gently.",
    "introduction": "The Rusty Nail is a classic cocktail originating from Scotland. Its smoky and sweet flavor profile comes from mixing Scotch whisky with Drambuie, making it a sophisticated evening drink.",
    "comment": "Bold, refined, and a little bit rugged. You’re the person who knows how to enjoy the finer things in life.",
    "similarCocktails": ["godfather", "black-russian", "manhattan"]
  },
  {
    "slug": "godmother",
    "name": "Godmother",
    "category": "Cocktail",
    "glass": "Old Fashioned glass",
    "image": getImagesForSlug("godmother"),
    "tasteProfile": ["sweet", "strong", "smooth"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Vodka", "amount": "1.5" },
      { "name": "Amaretto", "amount": "0.75" }
    ],
    "instructions": "Pour vodka and amaretto over ice in an old fashioned glass, stir gently.",
    "introduction": "The Godmother is a simple yet elegant cocktail. Its blend of vodka and amaretto gives a smooth and sweet taste, perfect for relaxed evenings or casual gatherings.",
    "comment": "Sweet, approachable, and a little bit charming. You’re the person who’s always there with a smile and a kind word.",
    "similarCocktails": ["amaretto-sour", "rusty-nail", "godfather"]
  },
  {
    "slug": "aperol-spritz",
    "name": "Aperol Spritz",
    "category": "Cocktail",
    "glass": "Wine glass",
    "image": getImagesForSlug("aperol-spritz"),
    "tasteProfile": ["bitter", "sweet", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "low",
    "ingredients": [
      { "name": "Aperol", "amount": "3" },
      { "name": "Prosecco", "amount": "3" },
    ],
    "instructions": "Fill a wine glass with ice, add Aperol and Prosecco, top with soda water, and garnish with an orange slice.",
    "introduction": "The Aperol Spritz is a vibrant and refreshing cocktail that has become a staple of Italian aperitivo culture. Its bright orange color and bittersweet flavor make it a perfect choice for warm weather gatherings or as a pre-dinner drink.",
    "comment": "Bright, cheerful, and always the life of the party. You’re the person who brings everyone together and keeps the good times rolling.",
    "similarCocktails": ["campari-spritz", "negroni-spritz", "spritz"]
  },
  {
    "slug": "limoncello-spritz",
    "name": "Limoncello Spritz",
    "category": "Cocktail",
    "glass": "Wine glass",
    "image": getImagesForSlug("limoncello-spritz"),
    "tasteProfile": ["citrusy", "sweet", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "low",
    "ingredients": [
      { "name": "Limoncello", "amount": "2" },
      { "name": "Prosecco", "amount": "3" },
      { "name": "Soda Water", "amount": "Top up" }
    ],
    "instructions": "Fill a wine glass with ice, add limoncello and prosecco, top with soda water, and garnish with a lemon slice.",
    "introduction": "The Limoncello Spritz is a delightful Italian cocktail that combines the zesty sweetness of limoncello with the effervescence of prosecco. It's a perfect drink for summer afternoons or as a refreshing aperitif before dinner.",
    "comment": "Fresh, lively, and a little bit zesty. You’re the person who always brings a burst of energy and positivity to any situation.",
    "similarCocktails": ["aperol-spritz", "campari-spritz", "spritz"]
  },
  {
    "slug": "campari-spritz",
    "name": "Campari Spritz",
    "category": "Cocktail",
    "glass": "Wine glass",
    "image": getImagesForSlug("campari-spritz"),
    "tasteProfile": ["bitter", "refreshing", "herbal"],
    "measurement": "oz",
    "alcoholLevel": "low",
    "ingredients": [
      { "name": "Campari", "amount": "3" },
      { "name": "Prosecco", "amount": "3" },
      { "name": "Soda Water", "amount": "Top up" }
    ],
    "instructions": "Fill a wine glass with ice, add Campari and prosecco, top with soda water, and garnish with an orange slice.",
    "introduction": "The Campari Spritz is a vibrant and refreshing cocktail that highlights the bitter and herbal notes of Campari, balanced by the sweetness of prosecco. It's a popular choice for aperitivo in Italy, perfect for sipping on warm evenings.",
    "comment": "Bold, sophisticated, and a little bit daring. You’re the person who’s not afraid to stand out and make a statement.",
    "similarCocktails": ["aperol-spritz", "negroni-spritz", "spritz"]
  },
  {
    "slug": "negroni-spritz",
    "name": "Negroni Spritz",
    "category": "Cocktail",
    "glass": "Wine glass",
    "image": getImagesForSlug("negroni-spritz"),
    "tasteProfile": ["bitter", "refreshing", "herbal"],
    "measurement": "oz",
    "alcoholLevel": "low",
    "ingredients": [
      { "name": "Campari", "amount": "1" },
      { "name": "Sweet Vermouth", "amount": "1" },
      { "name": "Gin", "amount": "1" },
      { "name": "Prosecco", "amount": "3" },
      { "name": "Soda Water", "amount": "Top up" }
    ],
    "instructions": "Fill a wine glass with ice, add Campari, sweet vermouth, and gin, top with prosecco and soda water, and garnish with an orange slice.",
    "introduction": "The Negroni Spritz is a refreshing twist on the classic Negroni, combining the bitter and herbal flavors of Campari, sweet vermouth, and gin with the effervescence of prosecco. It's a perfect aperitif for those who enjoy bold flavors in a lighter format.",
    "comment": "Complex, intriguing, and a little bit adventurous. You’re the person who loves to explore new flavors and experiences.",
    "similarCocktails": ["aperol-spritz", "campari-spritz", "spritz"]
  },
  {
    "slug": "spritz",
    "name": "Spritz",
    "category": "Cocktail",
    "glass": "Wine glass",
    "image": spritz,
    "tasteProfile": ["bitter", "refreshing", "herbal"],
    "measurement": "oz",
    "alcoholLevel": "low",
    "ingredients": [
      { "name": "Aperol", "amount": "3" },
      { "name": "Prosecco", "amount": "3" },
      { "name": "Soda Water", "amount": "Top up" }
    ],
    "instructions": "Fill a wine glass with ice, add Aperol and prosecco, top with soda water, and garnish with an orange slice.",
    "introduction": "The Spritz is a classic Italian cocktail that combines the bitter notes of Aperol with the sweetness of prosecco and the refreshing fizz of soda water. It's a staple of Italian aperitivo culture, perfect for sipping on warm afternoons.",
    "comment": "Vibrant, cheerful, and always ready to celebrate. You’re the person who brings everyone together and keeps the good times rolling.",
    "similarCocktails": ["aperol-spritz", "campari-spritz", "negroni-spritz"]
  },
  {
    "slug": "dark-and-stormy",
    "name": "Dark and Stormy",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("dark-and-stormy"),
    "tasteProfile": ["spicy", "refreshing", "gingery"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Dark Rum", "amount": "2" },
      { "name": "Ginger Beer", "amount": "Top up" },
      { "name": "Lime Juice", "amount": "0.5" }
    ],
    "instructions": "Fill a highball glass with ice, add dark rum, top with ginger beer, and squeeze in lime juice. Stir gently and garnish with a lime wedge.",
    "introduction": "The Dark and Stormy is a classic cocktail that combines the rich flavors of dark rum with the spicy kick of ginger beer. Originating from Bermuda, this drink is perfect for those who enjoy a refreshing yet robust beverage. Its simple ingredients and easy preparation make it a favorite for casual gatherings and beach parties.",
    "comment": "Bold, adventurous, and a little bit mysterious. You’re the person who loves to explore new places and try new things.",
    "similarCocktails": ["moscow-mule", "dark-rum-cocktail", "ginger-rum-fizz"]
  },
  {
    "slug": "moscow-mule",
    "name": "Moscow Mule",
    "category": "Cocktail",
    "glass": "Copper mug",
    "image": getImagesForSlug("moscow-mule"),
    "tasteProfile": ["spicy", "refreshing", "gingery"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Vodka", "amount": "2" },
      { "name": "Ginger Beer", "amount": "Top up" },
      { "name": "Lime Juice", "amount": "0.5" }
    ],
    "instructions": "Fill a copper mug with ice, add vodka, top with ginger beer, and squeeze in lime juice. Stir gently and garnish with a lime wedge.",
    "introduction": "The Moscow Mule is a refreshing cocktail that combines vodka with spicy ginger beer and a splash of lime juice. Served in a distinctive copper mug, it’s known for its crisp, invigorating taste and is a popular choice for summer gatherings.",
    "comment": "Cool, laid-back, and always in style. You’re the person who knows how to keep things casual yet classy.",
    "similarCocktails": ["dark-and-stormy", "ginger-rum-fizz", "vodka-tonic"]
  },
  {
    "slug": "dark-rum-cocktail",
    "name": "Dark Rum Cocktail",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("dark-rum-cocktail"),
    "tasteProfile": ["spicy", "rich", "smooth"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Dark Rum", "amount": "2" },
      { "name": "Lime Juice", "amount": "0.5" },
      { "name": "Simple Syrup", "amount": "0.5" },
      { "name": "Ginger Beer", "amount": "Top up" }
    ],
    "instructions": "Fill a highball glass with ice, add dark rum, lime juice, and simple syrup. Top with ginger beer and stir gently. Garnish with a lime wedge.",
    "introduction": "The Dark Rum Cocktail is a smooth and spicy drink that highlights the rich flavors of dark rum. With a hint of lime and the refreshing kick of ginger beer, it’s perfect for those who enjoy a robust yet balanced cocktail.",
    "comment": "Rich, smooth, and a little bit adventurous. You’re the person who enjoys the finer things in life and isn’t afraid to try new experiences.",
    "similarCocktails": ["dark-and-stormy", "ginger-rum-fizz", "moscow-mule"]
  },
  {
    "slug": "ginger-rum-fizz",
    "name": "Ginger Rum Fizz",
    "category": "Cocktail",
    "glass": "Highball glass",
    "image": getImagesForSlug("ginger-rum-fizz"),
    "tasteProfile": ["spicy", "refreshing", "gingery"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": "Dark Rum", "amount": "2" },
      { "name": "Ginger Beer", "amount": "Top up" },
      { "name": "Lime Juice", "amount": "0.5" }
    ],
    "instructions": "Fill a highball glass with ice, add dark rum, top with ginger beer, and squeeze in lime juice. Stir gently and garnish with a lime wedge.",
    "introduction": "The Ginger Rum Fizz is a delightful cocktail that combines the warmth of dark rum with the spicy kick of ginger beer. It’s a refreshing drink that’s perfect for any occasion, especially during warm weather.",
    "comment": "Spicy, lively, and a little bit adventurous. You’re the person who loves to explore new flavors and experiences.",
    "similarCocktails": ["dark-and-stormy", "moscow-mule", "dark-rum-cocktail"]
  }

]
export default cocktails;