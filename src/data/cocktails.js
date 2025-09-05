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
      { "name": { "en": "White Rum", "tr": "Beyaz Rum" }, "amount": 2 },
      { "name": { "en": "Fresh Lime Juice", "tr": "Taze Lime Suyu" }, "amount": 1 },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": 0.5 },
      { "name": { "en": "Mint Leaves", "tr": "Nane Yaprakları" }, "amount": 6 },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": 2 }
    ],
    "alcoholLevel": "medium",
    "instructions": {
      en: "Muddle mint with syrup and lime juice. Add rum, ice, top with soda, stir gently.",
      tr: "Mint ile şurup ve limon suyu karıştırın. Rum, buz, soda ekleyin ve hafifçe karıştırın."
    },
    "introduction": {
      en: "The Mojito is a classic Cuban cocktail that originated in Havana during the 16th century. Its name is believed to come from the Spanish word 'mojar,' meaning 'to wet.' Traditionally enjoyed in warm weather, the Mojito combines refreshing mint, lime, and rum, making it a favorite choice for summer gatherings and beachside relaxation.",
      tr: "Mojito, 16. yüzyılda Havana'da ortaya çıkmıştır. İsim, İspanyolca 'mojar,' yani 'yağmura' kelimesinden gelmektedir. Sıcak havada geleneksel olarak tüketilir, Mojito, taze menteşi, limon suyu ve rumun birleşimiyle en sevilen seçeneklerden biridir."
    },
    "comment": {
      en: "Fresh, vibrant, and a little bit zesty. You’re the person who always brings the energy and keeps things lively.",
      tr: "Taze, canlı ve biraz tatlıçağlık. Enerjiyi ve canlılığı sürekli sağlayan kişi."
    },
    "similarCocktails": ["caipirinha", "daiquiri", "southside"]
  },
  {
    "slug": "margarita",
    "name": "Margarita",
    "category": "Sour",
    "glass": "Cocktail",
    "image": getImagesForSlug("margarita"),
    "tasteProfile": ["citrusy", "tart", "salty"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "Tequila", "tr": "Tekila" }, "amount": 2 },
      { "name": { "en": "Triple Sec", "tr": "Triple Sec" }, "amount": 1 },
      { "name": { "en": "Fresh Lime Juice", "tr": "Taze Lime Suyu" }, "amount": 1 }
    ],
    "alcoholLevel": "strong",
    "instructions": {
      en: "Shake ingredients with ice and strain into a salt-rimmed glass.",
      tr: "Malzemeleri buzla çalkalayın ve tuzlu kenarlı bardakta süzün."
    },
    "introduction": {
      en: "The Margarita is a beloved Mexican cocktail that has become a staple in bars and restaurants worldwide. Its origins trace back to the 1930s, with various stories about its creation. The combination of tequila, lime juice, and orange liqueur creates a perfect balance of tartness and sweetness, often served with a salted rim for an extra kick.",
      tr: "Margarita, dünyadaki en sevilen kokteyl biridir. 1930'lardan beri birçok farklı hikayesi vardır. Tequila, limon suyu ve portakal liqueürün birleşimi, tatlı ve ekşi bir denge sağlar, genellikle tuzlu kenarlı bardakta servis edilir."
    },
    "comment": {
      en: "Bold, adventurous, and a little bit wild. You’re the person who’s always up for trying something new and exciting.",
      tr: "Güçlü, macera dolu ve biraz yaratıcı. Yeni ve ilginç şeyleri denemek için her zaman hazırsın."
    },
    "similarCocktails": ["paloma", "daiquiri", "sidecar"]
  },
  {
    "slug": "paloma",
    "name": "Paloma",
    "category": "Highball",
    "glass": "Highball",
    "image": getImagesForSlug("paloma"),
    "tasteProfile": ["citrusy", "refreshing", "slightly bitter"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "Tequila", "tr": "Tekila" }, "amount": 2 },
      { "name": { "en": "Fresh Grapefruit Juice", "tr": "Taze Greyfurt Suyu" }, "amount": 2 },
      { "name": { "en": "Lime Juice", "tr": "Limon Suyu" }, "amount": 0.5 },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": 2 }
    ],
    "alcoholLevel": "medium",
    "instructions": {
      en: "Build in glass over ice, top with soda, garnish with grapefruit wedge.",
      tr: "Buzlu bardakta hazırlayın, soda ekleyin ve greyfurt dilimi ile servis edin."
    },
    "introduction": {
      en: "The Paloma is a popular Mexican cocktail that is often considered the country's national drink. Its origins are somewhat debated, but it is widely believed to have been created in the mid-20th century. The Paloma combines tequila with grapefruit soda or juice, resulting in a refreshing and slightly bitter cocktail that is perfect for warm weather.",
      tr: "Paloma, Meksika'nın ulusal içki olarak kabul edilen bir kokteyldir. İtibarının az olduğu fakat çoğunlukla 20. yüzyılda ortaya çıktığı söylenir. Paloma, tequila ile grapefruit soda veya meyve suyu birleştirilerek hazırlanır, bu da biraz tatlı ve biraz ekşi bir denge sağlar."
    },
    "comment": {
      en: "Light, refreshing, and a little bit bubbly. You’re the person who always brings a smile to everyone’s face.",
      tr: "Hafif, taze ve biraz kabarcıklı. Ortamda herkesin yüzüne gülmeyi sağlayan kişisin."
    },
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
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": 2 },
      { "name": { "en": "Fresh Lime Juice", "tr": "Taze Lime Suyu" }, "amount": 1 },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": 0.75 },
      { "name": { "en": "Mint Leaves", "tr": "Nane Yaprakları" }, "amount": 6 }
    ],
    "instructions": {
      en: "Muddle mint with syrup and lime juice. Add gin, ice, shake, strain into chilled glass.",
      tr: "Nane ile şurup ve limon suyu karıştırın. Gin, buz, çalkalayın ve soğuk bardakta süzün."
    },
    "alcoholLevel": "medium",
    "introduction": {
      en: "The Southside is a classic cocktail that dates back to the Prohibition era in the United States. It is believed to have originated in Chicago, where it was a popular choice among speakeasy patrons. The drink combines gin, fresh lime juice, simple syrup, and mint, resulting in a refreshing and invigorating cocktail that is perfect for warm weather.",
      tr: "Southside, ABD'deki Prohibition döneminde ortaya çıkmıştır. Chicago'da spiker odası müşterileri arasında popüler bir seçenektir. Gin, taze limon suyu, şeker şurubu ve nane birleştirilerek hazırlanır, bu da biraz tatlı ve biraz ekşi bir denge sağlar."
    },
    "comment": {
      en: "Cool, collected, and a little bit sophisticated. You’re the person who always knows how to keep things classy.",
      tr: "Soğuk, karışık ve biraz sofistike. Her zaman sınıflandırılmış şeyleri tutmak için bilen kişi."
    },
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
      { "name": { "en": "Bourbon or Rye Whiskey", "tr": "Bourbon veya Rye Whiskey" }, "amount": 2 },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": 0.25 },
      { "name": { "en": "Angostura Bitters", "tr": "Angostura Bitters" }, "amount": 2 }
    ],
    "instructions": {
      en: "Stir with ice, strain into rocks glass over ice, garnish with orange twist.",
      tr: "Buzla karıştırın, buzlu rocks bardakta süzün ve portakal dilimi ile servis edin."
    },
    "alcoholLevel": "strong",
    "introduction": {
      en: "The Old Fashioned is one of the oldest known cocktails, dating back to the early 19th century. It was originally referred to as a 'whiskey cocktail' and has evolved over time. This timeless drink is characterized by its simplicity, featuring whiskey, bitters, sugar, and a twist of citrus, making it a favorite among cocktail enthusiasts.",
      tr: "Old Fashioned, 19. yüzyıldan beri bilinen en eski kokteyldir. Orijinal olarak 'whiskey kokteyli' olarak adlandırılıyor ve zamanla evrim geçmiştir. Bu zamansız içki, whiskey, bitters, şeker ve limon dilimi ile karakterize edilir, bu da kokteyl hayranları arasında en sevilenlerden biridir."
    },
    "comment": {
      en: "Classic, reliable, and a little bit sophisticated. You’re the person who always knows how to keep things classy.",
      tr: "Klasik, güvenilir ve biraz sofistike. Her zaman klasik takılan kişisin."
    },
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
      { "name": { "en": "Rye Whiskey", "tr": "Rye Whiskey" }, "amount": 2 },
      { "name": { "en": "Absinthe", "tr": "Absinthe" }, "amount": 0.25 },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": 0.25 },
      { "name": { "en": "Peychaud's Bitters", "tr": "Peychaud's Bitters" }, "amount": 3 }
    ],
    "instructions": {
      en: "Rinse glass with absinthe. Stir other ingredients with ice, strain into glass, garnish with lemon twist.",
      tr: "Absinthe ile bardak temizleyin. Diğer malzemeleri buzla karıştırın, bardakta süzün ve limon dilimi ile servis edin."
    },
    "alcoholLevel": "strong",
    "introduction": {
      en: "The Sazerac is a classic cocktail that originated in New Orleans in the mid-19th century. It is often considered one of the oldest cocktails in America. The drink is known for its unique preparation, which includes rinsing the glass with absinthe before adding rye whiskey, bitters, and sugar. The Sazerac's complex flavor profile and rich history make it a favorite among cocktail aficionados.",
      tr: "Sazerac, 19. yüzyılda New Orleans'ta ortaya çıkmıştır. ABD'deki en eski kokteyl olarak kabul edilir. İçki, absinthe ile bardak temizlenerek rye whiskey, bitters ve şeker birleştirilerek hazırlanır. Sazerac'ın karmaşık tat profili ve zengin tarihi, kokteyl hayranları arasında en sevilenlerden biridir."
    },
    "comment": {
      en: "Bold, sophisticated, and a little bit mysterious. You’re the person who knows how to make a statement without saying a word.",
      tr: "Güçlü, sofistike ve biraz gizemli. Her zaman bir şey söylemeden bir ifade yapmayı bilen kişisin."
    },
    "similarCocktails": ["old-fashioned", "manhattan", "martinez"]
  },
  {
    "slug": "cosmopolitan",
    "name": "Cosmopolitan",
    "category": "Modern",
    "glass": "Cocktail",
    "image": getImagesForSlug("cosmopolitan"),
    "tasteProfile": ["fruity", "citrusy", "refreshing"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Vodka" }, "amount": 1.5 },
      { "name": { "en": "Triple Sec", "tr": "Triple Sec" }, "amount": 1 },
      { "name": { "en": "Cranberry Juice", "tr": "Kızılcık Suyu" }, "amount": 0.5 },
      { "name": { "en": "Fresh Lime Juice", "tr": "Taze Lime Suyu" }, "amount": 0.5 }
    ],
    "instructions": {
      en: "Shake with ice, strain into chilled glass, garnish with lime wheel.",
      tr: "Buzla çalkalayın, soğuk bardakta süzün ve limon dilimi ile servis edin."
    },
    "alcoholLevel": "medium",
    "introduction": {
      en: "The Cosmopolitan, often simply called 'Cosmo,' gained immense popularity in the 1990s, particularly through its association with the TV show called Sex and the City. This stylish cocktail combines vodka, triple sec, cranberry juice, and lime juice, resulting in a vibrant pink drink that is both refreshing and sophisticated. Its fruity and citrusy flavors make it a favorite among those who enjoy modern cocktails.",
      tr: "Cosmopolitan, genellikle 'Cosmo' olarak adlandırılır ve 1990'larda özellikle Sex and the City adlı TV dizisiyle popülerleşmiştir. Bu stylen içki, vodka, triple sec, kızılcık suyu ve limon suyu birleştirilerek hazırlanır, bu da biraz tatlı ve biraz sofistike bir içkiye sahiptir. Meyve ve limonlu tatları, modern kokteyl hayranları arasında en sevilenlerden biridir."
    },
    "comment": {
      en: "Chic, trendy, and always in the know. You’re the person who’s always ahead of the curve and knows how to make an entrance.",
      tr: "Sınıflandırılmış, trendy ve her zaman bilen kişi."
    },
    "similarCocktails": ["lemon-drop", "french-martini", "kamikaze"]
  },
  {
    "slug": "french-martini",
    "name": "French Martini",
    "category": "Modern",
    "glass": "Cocktail",
    "image": getImagesForSlug("french-martini"),
    "tasteProfile": ["fruity", "sweet", "smooth"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Vodka" }, "amount": 2 },
      { "name": { "en": "Chambord", "tr": "Chambord" }, "amount": 0.5 },
      { "name": { "en": "Pineapple Juice", "tr": "Ananas Suyu" }, "amount": 2 }
    ],
    "instructions": {
      en: "Shake with ice, strain into chilled glass, garnish with raspberry.",
      tr: "Buzla çalkalayın, soğuk bardakta süzün ve kırmızı portakal dilimi ile servis edin."
    },
    "alcoholLevel": "medium",
    "introduction": {
      en: "The French Martini is a modern cocktail that emerged in the 1980s and quickly gained popularity for its elegant and fruity profile. It combines vodka, Chambord (a raspberry liqueur), and pineapple juice, resulting in a smooth and slightly sweet drink. The French Martini is often served in a chilled cocktail glass and garnished with a raspberry, making it a sophisticated choice for any occasion.",
      tr: "French Martini, 1980'larda ortaya çıkmıştır ve elegant ve meyveli profiliyle popülerleşmiştir. Vodka, Chambord (kırmızı portakal likörü) ve ananas suyu birleştirilerek hazırlanır, bu da biraz tatlı ve biraz pürüzsüz bir içkiye sahiptir. French Martini, genellikle soğuk kokteyl bardakta servis edilir ve kırmızı portakal dilimi ile servis edilir, bu da biraz sofistike bir seçenektir."
    },
    "comment": {
      en: "Elegant, refined, and a little bit mysterious. You’re the person who knows how to make an impression without saying a word.",
      tr: "Elegan, rafine ve biraz gizemli. Her zaman bir şey söylemeden bir ifade yapmayı bilen kişisin."
    },
    "similarCocktails": ["cosmopolitan", "kamikaze", "black-raspberry"]
  },
  {
    "slug": "kamikaze",
    "name": "Kamikaze",
    "category": "Modern",
    "glass": "Cocktail",
    "image": getImagesForSlug("kamikaze"),
    "tasteProfile": ["citrusy", "sweet", "strong"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Vodka" }, "amount": 1.5 },
      { "name": { "en": "Triple Sec", "tr": "Triple Sec" }, "amount": 1 },
      { "name": { "en": "Fresh Lime Juice", "tr": "Taze Lime Suyu" }, "amount": 1 }
    ],
    "instructions": {
      en: "Shake with ice, strain into chilled glass, garnish with lime wedge.",
      tr: "Buzla çalkalayın, soğuk bardakta süzün ve limon dilimi ile servis edin."
    },
    "alcoholLevel": "strong",
    "introduction": {
      en: "The Kamikaze is a potent cocktail that originated in Japan and gained popularity in the 1970s. Its name, meaning 'divine wind,' reflects its strong and impactful nature. The drink combines vodka, triple sec, and fresh lime juice, resulting in a tangy and refreshing cocktail that packs a punch. The Kamikaze is often served in a chilled glass and garnished with a lime wedge, making it a favorite among those who enjoy bold flavors.",
      tr: "Kamikaze, Japonya'da ortaya çıkmıştır ve 1970'larda popülerleşmiştir. Adı, 'divin rüzgar' anlamına gelir ve güçlü ve etkili bir doğa hakkında bilgi verir. İçki, vodka, triple sec ve taze limon suyu birleştirilerek hazırlanır, bu da biraz tatlı ve biraz taze bir içkiye sahiptir. Kamikaze, genellikle soğuk bardakta servis edilir ve limon dilimi ile servis edilir, bu da biraz boldurlu tatları sevmekte olanlar arasında en sevilenlerden biridir."
    },
    "comment": {
      en: "Daring, bold, and a little bit wild. You’re the person who’s always up for a challenge and never backs down.",
      tr: "Güçlü, net ve biraz vahşi. Her zaman bir zorluğa karşılık veren ve savaşan kişisin."
    },
    "similarCocktails": ["cosmopolitan", "french-martini", "lemon-drop"]
  },
  {
    "slug": "lemon-drop",
    "name": "Lemon Drop",
    "category": "Sweet",
    "glass": "Cocktail",
    "image": getImagesForSlug("lemon-drop"),
    "tasteProfile": ["citrusy", "sweet", "tart"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Vodka" }, "amount": 1.5 },
      { "name": { "en": "Triple Sec", "tr": "Triple Sec" }, "amount": 0.5 },
      { "name": { "en": "Fresh Lemon Juice", "tr": "Taze Limon Suyu" }, "amount": 1 },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": 0.5 }
    ],
    "instructions": {
      en: "Shake with ice, strain into sugar-rimmed glass, garnish with lemon twist.",
      tr: "Buzla çalkalayın, şekerle dolu bardakta süzün ve limon dilimi ile servis edin."
    },
    "alcoholLevel": "medium",
    "introduction": {
      en: "The Lemon Drop is a zesty and refreshing cocktail that has become a favorite among those who enjoy citrus flavors. It is believed to have originated in the 1970s and has since gained popularity for its bright and tangy profile. The drink combines vodka, triple sec, fresh lemon juice, and simple syrup, resulting in a perfect balance of sweet and sour. The Lemon Drop is often served in a sugar-rimmed glass and garnished with a lemon twist, making it a delightful choice for any occasion.",
      tr: "Lemon Drop, limonlu tatları sevmekte olanlar arasında en sevilenlerden biridir. 1970'larda ortaya çıkmıştır ve parlak ve tatlı limonlu profiliyle popülerleşmiştir. İçki, vodka, triple sec, taze limon suyu ve şeker şurubu birleştirilerek hazırlanır, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir. Lemon Drop, genellikle şekerle dolu bardakta servis edilir ve limon dilimi ile servis edilir, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir."
    },
    "comment": {
      en: "Bright, cheerful, and a little bit tangy. You’re the person who always brings a smile to everyone’s face.",
      tr: "Parlak, eğlenceli ve biraz tatlı. Her zaman herkesin yüzüne gülüş getiren kişisin."
    },
    "similarCocktails": ["cosmopolitan", "kamikaze", "french-martini"]
  },
  {
    "slug": "black-raspberry",
    "name": "Black Raspberry Margarita",
    "category": "Sweet",
    "glass": "Cocktail",
    "image": getImagesForSlug("black-raspberry"),
    "tasteProfile": ["fruity", "sweet", "smooth"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Vodka" }, "amount": 1.5 },
      { "name": { "en": "Chambord", "tr": "Chambord" }, "amount": 0.5 },
      { "name": { "en": "Cranberry Juice", "tr": "Kızılcık Suyu" }, "amount": 1.5 },
      { "name": { "en": "Pineapple Juice", "tr": "Ananas Suyu" }, "amount": 1.5 }
    ],
    "instructions": {
      en: "Shake with ice, strain into chilled glass, garnish with raspberry.",
      tr: "Buzla çalkalayın, soğuk bardakta süzün ve kırmızı portakal dilimi ile servis edin."
    },
    "alcoholLevel": "medium",
    "introduction": {
      en: "The Black Raspberry cocktail is a delightful and fruity drink that combines the rich flavors of black raspberries with the smoothness of vodka. It is often made with Chambord, a black raspberry liqueur, along with cranberry and pineapple juices, resulting in a balanced and refreshing cocktail. The Black Raspberry is typically served in a chilled glass and garnished with a raspberry, making it a visually appealing and tasty choice for any occasion.",
      tr: "Black Raspberry kokteyli, kırmızı portakal dilimi ile servis edilir, bu da biraz tatlı ve biraz pürüzsüz bir içkiye sahiptir. Black Raspberry, genellikle soğuk bardakta servis edilir ve kırmızı portakal dilimi ile servis edilir, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir."
    },
    "comment": {
      en: "Sweet, charming, and a little bit mysterious. You’re the person who knows how to make an impression without saying a word.",
      tr: "Tatlı, güzel ve biraz gizemli. Her zaman bir şey söylemeden bir ifade yapmayı bilen kişisin."
    },
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
      { "name": { "en": "Bourbon or Rye Whiskey", "tr": "Bourbon veya Rye Whiskey" }, "amount": 1.5 },
      { "name": { "en": "Campari", "tr": "Campari" }, "amount": 1 },
      { "name": { "en": "Sweet Vermouth", "tr": "Tatlı Vermouth" }, "amount": 1 }
    ],
    "instructions": {
      en: "Stir with ice, strain into rocks glass over ice, garnish with orange twist.",
      tr: "Buzla karıştırın, buzlu rocks bardakta süzün ve portakal dilimi ile servis edin."
    },
    "alcoholLevel": "strong",
    "introduction": {
      en: "The Boulevardier is a classic cocktail that dates back to the 1920s and is often considered a cousin to the Negroni. It combines bourbon or rye whiskey with Campari and sweet vermouth, resulting in a rich and complex flavor profile. The Boulevardier is typically served over ice in a rocks glass and garnished with an orange twist, making it a sophisticated choice for those who enjoy bold and bitter cocktails.",
      tr: "Boulevardier, 1920'larda ortaya çıkmıştır ve genellikle Negroni'nin bir kuzenidir. Bourbon veya Rye Whiskey, Campari ve şekerli vermouth ile birleştirilerek hazırlanır, bu da zengin ve karmaşık tat profiliyle karakterize edilir. Boulevardier, genellikle buzlu rocks bardakta servis edilir ve portakal dilimi ile servis edilir, bu da bold ve tatlı kokteyl hayranları arasında en sevilenlerden biridir."
    },
    "comment": {
      en: "Sophisticated, bold, and a little bit mysterious. You’re the person who knows how to make a statement without saying a word.",
      tr: "Sofistike, bold ve biraz gizemli. Her zaman bir şey söylemeden bir ifade yapmayı bilen kişisin."
    },
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
      { "name": { "en": "Campari", "tr": "Campari" }, "amount": 1.5 },
      { "name": { "en": "Sweet Vermouth", "tr": "Tatlı Vermouth" }, "amount": 1.5 },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": 2 }
    ],
    "instructions": {
      en: "Build in glass over ice, top with soda, garnish with orange slice.",
      tr: "Buzlu bardakta süzün ve portakal dilimi ile servis edin."
    },
    "alcoholLevel": "light",
    "introduction": {
      en: "The Americano is a classic Italian cocktail that dates back to the mid-19th century. It was originally known as the 'Milano-Torino' due to its ingredients, Campari from Milan and sweet vermouth from Turin. The Americano gained popularity in the United States during Prohibition when Americans traveling to Europe sought out this refreshing and low-alcohol drink. The addition of soda water makes it a light and effervescent choice, perfect for warm weather.",
      tr: "Americano, 19. yüzyılda ortaya çıkmıştır ve genellikle Milano-Torino olarak adlandırılır. Campari ve şekerli vermouth birleştirilerek hazırlanır, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir. Americano, genellikle buzlu bardakta servis edilir ve portakal dilimi ile servis edilir, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir."
    },
    "comment": {
      en: "Light, refreshing, and a little bit bubbly. You’re the person who always brings a smile to everyone’s face.",
      tr: "Hafif, tatlı ve biraz gazlı. Her zaman herkesin yüzüne gülüş getiren kişisin."
    },
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
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": 1.5 },
      { "name": { "en": "Sweet Vermouth", "tr": "Tatlı Vermouth" }, "amount": 1.5 },
      { "name": { "en": "Maraschino Liqueur", "tr": "Maraschino Likör" }, "amount": 0.25 },
      { "name": { "en": "Orange Bitters", "tr": "Portakal Bitters" }, "amount": 2 }
    ],
    "instructions": {
      en: "Stir with ice, strain into chilled glass, garnish with lemon twist.",
      tr: "Buzla karıştırın, soğuk bardakta süzün ve limon dilimi ile servis edin."
    },
    "alcoholLevel": "strong",
    "introduction": {
      en: "The Martinez is a classic cocktail that is often considered a precursor to the modern Martini. It dates back to the late 19th century and is believed to have originated in San Francisco. The drink combines gin, sweet vermouth, maraschino liqueur, and orange bitters, resulting in a complex and flavorful cocktail. The Martinez is typically served in a chilled cocktail glass and garnished with a lemon twist, making it a sophisticated choice for cocktail enthusiasts.",
      tr: "Martinez, 19. yüzyılda ortaya çıkmıştır ve genellikle modern Martini'nin bir öncesi olarak kabul edilir. 19. yüzyılda ve San Francisco'ta ortaya çıkmıştır. İçki, gin, şekerli vermouth, maraschino likör ve portakal bitters ile birleştirilerek hazırlanır, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir. Martinez, genellikle soğuk kokteyl bardakta servis edilir ve limon dilimi ile servis edilir, bu da biraz sofistike bir seçenektir."
    },
    "comment": {
      en: "Refined, elegant, and a little bit mysterious. You’re the person who knows how to make an impression without saying a word.",
      tr: "Sınıflandırılmış, elegan ve biraz gizemli. Her zaman bir şey söylemeden bir ifade yapmayı bilen kişisin."
    },
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
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": 1 },
      { "name": { "en": "Campari", "tr": "Campari" }, "amount": 1 },
      { "name": { "en": "Sweet Vermouth", "tr": "Tatlı Vermouth" }, "amount": 1 }
    ],
    "instructions": {
      en: "Stir with ice, strain into rocks glass with ice, garnish with orange peel.",
      tr: "Buzla karıştırın, buzlu rocks bardakta süzün ve portakal dilimi ile servis edin."
    },
    "alcoholLevel": "strong",
    "introduction": {
      en: "The Negroni is a classic Italian cocktail that dates back to the early 20th century. It was created by Count Camillo Negroni, who requested a stronger version of his favorite drink, the Americano. The Negroni's equal parts gin, Campari, and sweet vermouth create a complex flavor profile that is both bitter and aromatic, making it a favorite among cocktail aficionados.",
      tr: "Negroni, 20. yüzyılda ortaya çıkmıştır ve genellikle Americano'nun bir öncesi olarak kabul edilir. Count Camillo Negroni tarafından oluşturulmuştur ve daha güçlü bir versiyonu için Americano'nu istedi. Negroni'nin eşit miktarda gin, Campari ve şekerli vermouth ile birleştirilerek hazırlanır, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir. Negroni, genellikle buzlu rocks bardakta servis edilir ve portakal dilimi ile servis edilir, bu da biraz boldurlu ve sofistike bir seçenektir."
    },
    "comment": {
      en: "Bold, sophisticated, and a little bit mysterious. You’re the person who knows how to make a statement without saying a word.",
      tr: "Bold, sofistike ve biraz gizemli. Her zaman bir şey söylemeden bir ifade yapmayı bilen kişisin."
    },
    "similarCocktails": ["boulevardier", "americano", "martinez"]
  },
  {
    "slug": "daiquiri",
    "name": "Daiquiri",
    "category": "Sour",
    "glass": "Cocktail",
    "image": getImagesForSlug("daiquiri"),
    "tasteProfile": ["citrusy", "sweet", "refreshing"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "White Rum", "tr": "Beyaz Rum" }, "amount": 2 },
      { "name": { "en": "Fresh Lime Juice", "tr": "Taze Lime Suyu" }, "amount": 1 },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": 0.75 }
    ],
    "instructions": {
      en: "Shake with ice and strain into chilled glass.",
      tr: "Buzla çalkalayın ve soğuk bardakta süzün."
    },
    "alcoholLevel": "medium",
    "introduction": {
      en: "The Daiquiri is a classic Cuban cocktail that has been enjoyed since the late 19th century. Named after the Daiquiri Beach in Cuba, this cocktail is a simple yet delicious combination of rum, lime juice, and sugar. It can be served shaken or blended with ice, making it a versatile choice for any occasion.",
      tr: "Daiquiri, 19. yüzyılda ortaya çıkmıştır ve genellikle Daiquiri Beach'te adlandırılır. İçki, rum, limon suyu ve şeker birleşimiyle hazırlanır, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir. Daiquiri, genellikle soğuk bardakta servis edilir ve limon dilimi ile servis edilir, bu da biraz tatlı ve biraz tatlı bir içkiye sahiptir."
    },
    "comment": {
      en: "Light, refreshing, and a little bit tropical. You’re the person who always brings the vacation vibes wherever you go.",
      tr: "Hafif, tatlı ve biraz tropikal. Her zaman tatil havasını getiren kişisin."
    },
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
      { "name": { "en": "Rye Whiskey", "tr": "Rye Whiskey" }, "amount": 2 },
      { "name": { "en": "Sweet Vermouth", "tr": "Tatlı Vermouth" }, "amount": 1 },
      { "name": { "en": "Angostura Bitters", "tr": "Angostura Bitters" }, "amount": 2 }
    ],
    "instructions": {
      en: "Stir with ice, strain into glass, garnish with cherry.",
      tr: "Buzla karıştırın, bardakta süzün ve kiraz ile servis edin."
    },
    "alcoholLevel": "strong",
    "introduction": {
      en: "The Manhattan is a classic cocktail that originated in the late 1800s, named after the Manhattan Club in New York City. This sophisticated drink combines rye whiskey, sweet vermouth, and bitters, resulting in a rich and complex flavor profile. It is often garnished with a cherry or a twist of lemon peel, making it a timeless favorite among cocktail enthusiasts.",
      tr: "Manhattan, 1800'larda ortaya çıkmıştır ve genellikle Manhattan Club'ta adlandırılır. İçki, rye whiskey, şekerli vermouth ve bitters ile birleştirilerek hazırlanır, bu da zengin ve karmaşık tat profiliyle karakterize edilir. Manhattan, genellikle bardakta servis edilir ve kiraz ile servis edilir, bu da biraz boldurlu ve sofistike bir seçenektir."
    },
    "comment": {
      en: "Strong, confident, and a little bit old-school. You’re the person who knows how to make an impression and leave a lasting mark.",
      tr: "Güçlü, kendini savunan ve biraz eski şekilde. Her zaman bir ifade yapmayı bilen ve bir şeylerin kalıcı bir işareti bırakan kişisin."
    },
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
      { "name": { "en": "Scotch Whisky", "tr": "Scotch Whisky" }, "amount": 2 },
      { "name": { "en": "Sweet Vermouth", "tr": "Tatlı Vermouth" }, "amount": 1 },
      { "name": { "en": "Angostura Bitters", "tr": "Angostura Bitters" }, "amount": 2 }
    ],
    "instructions": {
      en: "Stir with ice, strain into glass, garnish with lemon twist or cherry.",
      tr: "Buzla karıştırın, bardakta süzün ve limon dilimi ile servis edin."
    },
    "alcoholLevel": "strong",
    "introduction": {
      en: "The Rob Roy is a classic cocktail that is essentially a Scotch whisky version of the Manhattan. It was created in the late 19th century and named after the Scottish folk hero Rob Roy MacGregor. The drink combines Scotch whisky, sweet vermouth, and bitters, resulting in a rich and flavorful cocktail that is perfect for those who appreciate the distinct taste of Scotch.",
      tr: "Rob Roy, 19. yüzyılda ortaya çıkmıştır ve genellikle Manhattan'ın bir kuzenidir. 19. yüzyılda ve Rob Roy MacGregor'a adlandırılır. İçki, Scotch whisky, şekerli vermouth ve bitters ile birleştirilerek hazırlanır, bu da zengin ve tatlı bir içkiye sahiptir. Rob Roy, genellikle bardakta servis edilir ve limon dilimi ile servis edilir, bu da biraz boldurlu ve sofistike bir seçenektir."
    },
    "comment": {
      en: "Bold, refined, and a little bit adventurous. You’re the person who knows how to make a statement and isn’t afraid to stand out.",
      tr: "Bold, sofistike ve biraz macera. Her zaman bir ifade yapmayı bilen ve kendini savunan kişisin."
    },
    "similarCocktails": ["manhattan", "old-fashioned", "boulevardier"]
  },
  {
    "slug": "whiskey-sour",
    "name": "Whiskey Sour",
    "category": "Sour",
    "glass": "Rocks",
    "image": getImagesForSlug("whiskey-sour"),
    "tasteProfile": ["sour", "citrusy", "boozy"],
    "measurement": "oz",
    "ingredients": [
      { "name": { "en": "Bourbon", "tr": "Bourbon" }, "amount": 2 },
      { "name": { "en": "Fresh Lemon Juice", "tr": "Taze Limon Suyu" }, "amount": 0.75 },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": 0.5 }
    ],
    "instructions": {
      "en": "Shake with ice, strain into glass over ice, garnish with lemon wheel.",
      "tr": "Buzla çalkalayın, bardakta süzün ve limon dilimiyle süsleyin."
    },
    "alcoholLevel": "medium",
    "introduction": {
      "en": "The Whiskey Sour is a classic cocktail that has been enjoyed since the 19th century. It combines the rich flavors of bourbon with the tartness of fresh lemon juice and a touch of sweetness from simple syrup. This drink is often served over ice and garnished with a lemon wheel or cherry, making it a refreshing choice for whiskey lovers.",
      "tr": "Whiskey Sour, 19. yüzyıldan beri sevilen klasik bir kokteyldir. Bourbon’un zengin aroması, taze limon suyunun ekşiliği ve şeker şurubunun tatlılığıyla birleşir. Genellikle buz üzerinde servis edilir ve limon dilimi veya kirazla süslenir; viski sevenler için ferahlatıcı bir tercihtir."
    },
    "comment": {
      "en": "Bold, tangy, and never afraid to speak your mind. You call it “honesty,” others call it “roasting.”",
      "tr": "Cesur, ekşi ve düşüncelerini söylemekten asla çekinmeyen birisin. Sen buna 'dürüstlük' diyorsun, başkaları 'laf sokma'."
    },
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
      { "name": { "en": "White Rum", "tr": "Beyaz Rom" }, "amount": 2 },
      { "name": { "en": "Coconut Cream", "tr": "Hindistan Cevizi Kreması" }, "amount": 2 },
      { "name": { "en": "Pineapple Juice", "tr": "Ananas Suyu" }, "amount": 3 }
    ],
    "instructions": {
      "en": "Blend with ice until smooth, garnish with pineapple wedge.",
      "tr": "Buz ile blenderda pürüzsüz olana kadar karıştırın, ananas dilimiyle süsleyin."
    },
    "alcoholLevel": "medium",
    "introduction": {
      "en": "The Piña Colada is a quintessential tropical cocktail that originated in Puerto Rico. Its name translates to 'strained pineapple,' and it is known for its creamy texture and sweet, fruity flavor. Made with rum, coconut cream, and pineapple juice, this cocktail is often associated with beach vacations and island getaways.",
      "tr": "Piña Colada, Porto Riko kökenli klasik bir tropikal kokteyldir. İsmi 'süzülmüş ananas' anlamına gelir. Rom, hindistan cevizi kreması ve ananas suyuyla yapılır. Tatlı, meyvemsi ve kremamsı yapısıyla genellikle tatil ve sahil keyfiyle özdeşleştirilir."
    },
    "comment": {
      "en": "Sweet, tropical, and a little bit nutty. You bring the vacation vibes wherever you go.",
      "tr": "Tatlı, tropikal ve biraz çılgınsın. Gittiğin her yere tatil havası götürüyorsun."
    },
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
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": 2 },
      { "name": { "en": "Tomato Juice", "tr": "Domates Suyu" }, "amount": 4 },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": 0.5 },
      { "name": { "en": "Worcestershire Sauce", "tr": "Worcestershire Sosu" }, "amount": 0.25 },
      { "name": { "en": "Tabasco", "tr": "Tabasco" }, "amount": 2 }
    ],
    "instructions": {
      "en": "Build in glass over ice, stir, garnish with celery stick.",
      "tr": "Buz dolu bardakta malzemeleri ekleyin, karıştırın ve kereviz sapı ile süsleyin."
    },
    "alcoholLevel": "medium",
    "introduction": {
      "en": "The Bloody Mary is a classic brunch cocktail known for its savory and spicy flavor profile. It is believed to have originated in the 1920s and has since become a staple in bars and restaurants worldwide. Made with vodka, tomato juice, and various seasonings, it is often garnished with celery, olives, or even bacon, making it a meal in a glass.",
      "tr": "Bloody Mary, tuzlu ve baharatlı aromasıyla bilinen klasik bir brunch kokteylidir. 1920’lerde ortaya çıktığı düşünülür ve dünya çapında barların vazgeçilmezi olmuştur. Votka, domates suyu ve çeşitli soslarla yapılır. Genellikle kereviz, zeytin veya hatta pastırmayla süslenerek servis edilir, adeta bardakta bir öğündür."
    },
    "comment": {
      "en": "Bold, spicy, and unapologetically complex. You’re the person who always keeps things interesting.",
      "tr": "Cesur, baharatlı ve karmaşık bir kişiliksin. Etrafında hayat hiç sıkıcı olmaz."
    },
    "similarCocktails": ["michelada", "red-snapper", "bullshot"]
  },
  {
    "slug": "espresso-martini",
    "name": "Espresso Martini",
    "category": "Coffee",
    "glass": "Cocktail",
    "image": getImagesForSlug("espresso-martini"),
    "tasteProfile": ["bitter", "sweet"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": 1.5 },
      { "name": { "en": "Coffee Liqueur", "tr": "Kahve Likörü" }, "amount": 1 },
      { "name": { "en": "Espresso", "tr": "Espresso" }, "amount": 1 }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice, strain into glass, garnish with coffee beans.",
      "tr": "Tüm malzemeleri buzla çalkalayın, süzerek bardağa aktarın ve kahve çekirdekleriyle süsleyin."
    },
    "introduction": {
      "en": "The Espresso Martini is a modern classic that combines the rich flavors of coffee with the smoothness of vodka. Created in the 1980s, it has gained popularity for its energizing qualities and sophisticated taste. The cocktail is typically served in a chilled martini glass and garnished with coffee beans, making it a perfect after-dinner drink.",
      "tr": "Espresso Martini, kahvenin yoğun aromasını votkanın yumuşaklığıyla birleştiren modern bir klasiktir. 1980’lerde yaratılmıştır ve enerjik yapısı ile sofistike tadı sayesinde popülerlik kazanmıştır. Genellikle soğutulmuş martini bardağında, kahve çekirdekleriyle süslenerek servis edilir; yemek sonrası için mükemmeldir."
    },
    "comment": {
      "en": "Energetic, bold, and a little bit edgy. You’re the life of the party and always ready to go.",
      "tr": "Enerjik, cesur ve biraz da sıra dışısın. Partinin ruhu sensin ve her zaman hazırsın."
    },
    "similarCocktails": ["black-russian", "white-russian", "irish-coffee"]
  },
  {
    "slug": "martini",
    "name": "Martini",
    "category": "Classic",
    "glass": "Cocktail",
    "image": martini,
    "tasteProfile": ["dry", "strong"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": 2.5 },
      { "name": { "en": "Dry Vermouth", "tr": "Sek Vermouth" }, "amount": 0.5 }
    ],
    "instructions": {
      "en": "Stir with ice, strain into chilled glass, garnish with olive or lemon twist.",
      "tr": "Buzla karıştırın, soğutulmuş bardağa süzün ve zeytin veya limon kabuğu ile süsleyin."
    },
    "introduction": {
      "en": "The Martini is one of the most iconic cocktails in the world, known for its elegance and simplicity. Its origins date back to the late 19th century, and it has been popularized by countless films and literature. Traditionally made with gin and dry vermouth, it can also be prepared with vodka for a different flavor profile. The Martini is often served with an olive or a twist of lemon, making it a timeless choice for cocktail enthusiasts.",
      "tr": "Martini, şıklığı ve sadeliğiyle dünyanın en ikonik kokteyllerinden biridir. Kökeni 19. yüzyıla dayanır ve filmlerle, edebiyatla popülerleşmiştir. Geleneksel olarak cin ve sek vermouth ile yapılır, ancak farklı bir tat için votkayla da hazırlanabilir. Genellikle zeytin veya limon kabuğu ile servis edilir; zamansız bir klasiktir."
    },
    "comment": {
      "en": "Classic, sophisticated, and always in style. You know what you want and how to get it.",
      "tr": "Klasik, sofistike ve her zaman tarz sahibisin. Ne istediğini biliyor ve nasıl alacağını çok iyi biliyorsun."
    },
    "similarCocktails": ["gibson", "vesper", "dirty-martini"]
  },
  {
    "slug": "gin-tonic",
    "name": "Gin and Tonic",
    "category": "Highball",
    "glass": "Highball",
    "image": getImagesForSlug("gin-tonic"),
    "tasteProfile": ["bitter", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "2" },
      { "name": { "en": "Tonic Water", "tr": "Tonik" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Pour gin over ice, top with tonic water, garnish with lime.",
      "tr": "Buzu bardağa alın, cin ekleyin, tonikle tamamlayın, lime ile süsleyin."
    },
    "introduction": {
      "en": "The Gin and Tonic is a classic cocktail that has been enjoyed for centuries. Its origins can be traced back to the British colonial era when gin was mixed with tonic water to make it more palatable. The bitterness of the tonic water complements the botanicals in gin, creating a refreshing and invigorating drink. It is often garnished with a slice of lime or lemon, making it a popular choice for warm weather.",
      "tr": "Gin Tonic, yüzyıllardır keyifle tüketilen klasik bir kokteyldir. Kökenleri, cinin tonikle karıştırılarak daha içilebilir hale getirildiği Britanya sömürge dönemine uzanır. Tonikin acılığı, cinin bitkisel notalarıyla birleşerek ferahlatıcı bir içim sağlar. Genellikle lime veya limon dilimiyle süslenir ve sıcak havalarda tercih edilir."
    },
    "comment": {
      "en": "Crisp, refreshing, and a little bit bitter. You’re the person who always keeps things interesting.",
      "tr": "Ferahlatıcı, keskin ve biraz acı. Her zaman ortamı ilginç kılan kişisin."
    },
    "similarCocktails": ["vodka-tonic", "negroni", "tom-collins"]
  },
  {
    "slug": "tequila-sunrise",
    "name": "Tequila Sunrise",
    "category": "Highball",
    "glass": "Highball",
    "image": getImagesForSlug("tequila-sunrise"),
    "tasteProfile": ["sweet", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Tequila", "tr": "Tekila" }, "amount": "2" },
      { "name": { "en": "Orange Juice", "tr": "Portakal Suyu" }, "amount": "4" },
      { "name": { "en": "Grenadine", "tr": "Grenadin" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Pour tequila and juice over ice, slowly add grenadine for gradient.",
      "tr": "Buz üzerine tekila ve portakal suyunu dökün, ardından grenadini yavaşça ekleyin."
    },
    "introduction": {
      "en": "The Tequila Sunrise is a vibrant and visually stunning cocktail that has become a symbol of relaxation and tropical getaways. Its origins can be traced back to the 1930s, and it gained popularity in the 1970s. The drink features tequila, orange juice, and grenadine, creating a beautiful gradient effect reminiscent of a sunrise. It is often served over ice in a highball glass, making it a refreshing choice for warm weather.",
      "tr": "Tequila Sunrise, tropik kaçamakların ve rahatlamanın simgesi haline gelmiş, görsel olarak büyüleyici bir kokteyldir. 1930’lara dayanan kökeni, 1970’lerde popülerlik kazanmıştır. Tekila, portakal suyu ve grenadin ile yapılır; gün doğumunu andıran renk geçişiyle dikkat çeker. Yüksek bardakta buzla servis edilir ve sıcak havalar için ferahlatıcı bir tercihtir."
    },
    "comment": {
      "en": "Bright, cheerful, and full of life. You’re the person who always brings the sunshine.",
      "tr": "Parlak, neşeli ve yaşam dolu. Ortama her zaman güneş ışığını getiren kişisin."
    },
    "similarCocktails": ["sex-on-the-beach", "mimosa", "mai-tai"]
  },
  {
    "slug": "caipirinha",
    "name": "Caipirinha",
    "category": "Highball",
    "glass": "Old-fashioned",
    "image": getImagesForSlug("caipirinha"),
    "tasteProfile": ["sweet", "sour", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Cachaça", "tr": "Cachaça" }, "amount": "2" },
      { "name": { "en": "Lime", "tr": "Lime" }, "amount": "1" },
      { "name": { "en": "Sugar", "tr": "Şeker" }, "amount": "2 tsp" }
    ],
    "instructions": {
      "en": "Muddle lime and sugar, add cachaça and ice, stir gently.",
      "tr": "Lime ve şekeri ezin, cachaça ve buz ekleyin, nazikçe karıştırın."
    },
    "introduction": {
      "en": "The Caipirinha is Brazil's national cocktail, known for its refreshing and zesty flavor. It is made with cachaça, a sugarcane spirit, muddled lime, and sugar. The drink is typically served over ice in an old-fashioned glass, making it a perfect choice for warm weather. Its origins date back to the 19th century, and it has become a symbol of Brazilian culture and hospitality.",
      "tr": "Caipirinha, Brezilya’nın ulusal kokteylidir ve ferahlatıcı, ekşi tadıyla bilinir. Şeker kamışından üretilen cachaça, lime ve şeker ile yapılır. Genellikle buzlu olarak old-fashioned bardakta servis edilir. 19. yüzyıla dayanan kökeniyle Brezilya kültürünün ve misafirperverliğinin bir simgesidir."
    },
    "comment": {
      "en": "Lively, vibrant, and full of zest. You’re the person who knows how to have a good time.",
      "tr": "Canlı, enerjik ve neşeli. Nasıl eğleneceğini bilen kişisin."
    },
    "similarCocktails": ["mojito", "daiquiri", "pisco-sour"]
  },
  {
    "slug": "pisco-sour",
    "name": "Pisco Sour",
    "category": "Sour",
    "glass": "Old-fashioned",
    "image": getImagesForSlug("pisco-sour"),
    "tasteProfile": ["sour", "smooth"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Pisco", "tr": "Pisco" }, "amount": "2" },
      { "name": { "en": "Lime Juice", "tr": "Lime Suyu" }, "amount": "1" },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": "0.75" },
      { "name": { "en": "Egg White", "tr": "Yumurta Beyazı" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Shake all ingredients without ice, then with ice, strain into glass.",
      "tr": "Tüm malzemeleri önce buzsuz, sonra buzla çalkalayın, bardağa süzün."
    },
    "introduction": {
      "en": "The Pisco Sour is a traditional South American cocktail that originated in Peru and Chile. It is made with pisco, a grape brandy, combined with lime juice, simple syrup, and egg white for a frothy texture. The drink is typically served in an old-fashioned glass and garnished with a few drops of bitters. Its unique flavor profile and creamy texture make it a favorite among cocktail enthusiasts.",
      "tr": "Pisco Sour, Güney Amerika kökenli geleneksel bir kokteyldir ve Peru ile Şili’de ortaya çıkmıştır. Pisco (üzüm brendisi), lime suyu, şeker şurubu ve yumurta beyazı ile yapılır. Köpüklü yapısı ve özgün aromasıyla kokteyl meraklılarının favorisidir."
    },
    "comment": {
      "en": "Smooth, sophisticated, and a little bit mysterious. You’re the person who always keeps things interesting.",
      "tr": "Yumuşak, sofistike ve biraz gizemli. Ortamı her zaman ilginç tutan kişisin."
    },
    "similarCocktails": ["whiskey-sour", "daiquiri", "margarita"]
  },
  {
    "slug": "sex-on-the-beach",
    "name": "Sex on the Beach",
    "category": "Sweet",
    "glass": "Highball",
    "image": getImagesForSlug("sex-on-the-beach"),
    "tasteProfile": ["sweet", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Vodka" }, "amount": "1.5" },
      { "name": { "en": "Peach Schnapps", "tr": "Şeftali Likörü" }, "amount": "0.5" },
      { "name": { "en": "Orange Juice", "tr": "Portakal Suyu" }, "amount": "2" },
      { "name": { "en": "Cranberry Juice", "tr": "Yaban Mersini Suyu" }, "amount": "2" }
    ],
    "instructions": {
      "en": "Shake with ice, strain into glass with ice.",
      "tr": "Buzla çalkalayın, buzlu bardağa süzün."
    },
    "introduction": {
      "en": "Sex on the Beach is a vibrant and fruity cocktail that became iconic in the 1980s during the boom of fun, colorful drinks. It combines vodka, peach schnapps, orange juice, and cranberry juice for a sweet, tropical flavor. Known for its playful name and refreshing taste, it’s a popular choice for summer parties and beachside lounging.",
      "tr": "Sex on the Beach, 1980’lerde popülerleşmiş, eğlenceli ve renkli içeceklerin sembolü olmuş tropikal bir kokteyldir. İçeriğinde votka, şeftali likörü, portakal ve yaban mersini suyu bulunur. Eğlenceli ismi ve ferahlatıcı tadıyla yaz partilerinde ve sahil kenarında sıkça tercih edilir."
    },
    "comment": {
      "en": "Fun, flirty, and always up for a good time. You’re the person who brings the party wherever you go.",
      "tr": "Eğlenceli, flörtöz ve her zaman keyifli. Partiyi nereye gidersen götüren kişisin."
    },
    "similarCocktails": ["tequila-sunrise", "mai-tai", "pina-colada"]
  },
  {
    "slug": "mai-tai",
    "name": "Mai Tai",
    "category": "Tiki",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("mai-tai"),
    "tasteProfile": ["sweet", "fruity", "strong"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "White Rum", "tr": "Beyaz Rom" }, "amount": "1" },
      { "name": { "en": "Dark Rum", "tr": "Koyu Rom" }, "amount": "1" },
      { "name": { "en": "Orange Curacao", "tr": "Portakal Curaçao" }, "amount": "0.5" },
      { "name": { "en": "Lime Juice", "tr": "Lime Suyu" }, "amount": "0.75" },
      { "name": { "en": "Orgeat Syrup", "tr": "Orgeat Şurubu" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice, strain into glass over ice.",
      "tr": "Tüm malzemeleri buzla çalkalayın, buzlu bardağa süzün."
    },
    "introduction": {
      "en": "The Mai Tai is a classic tiki cocktail that originated in the 1940s. It is known for its tropical flavors and vibrant presentation. The combination of light and dark rum, orange curacao, lime juice, and orgeat syrup creates a complex and refreshing drink. Often garnished with mint leaves and a slice of pineapple, the Mai Tai is a favorite choice for those seeking a taste of the tropics.",
      "tr": "Mai Tai, 1940’larda ortaya çıkmış klasik bir tiki kokteylidir. Tropikal aromaları ve canlı sunumuyla bilinir. Açık ve koyu rom, portakal curaçao, lime suyu ve orgeat şurubu birleşerek kompleks ve ferahlatıcı bir içim sağlar. Genellikle nane yaprakları ve ananas dilimiyle süslenir, tropik tat arayanların favorisidir."
    },
    "comment": {
      "en": "Exotic, adventurous, and a little bit mysterious. You’re the person who always keeps things exciting.",
      "tr": "Egzotik, maceracı ve biraz gizemli. Ortamı her zaman heyecanlı tutan kişisin."
    },
    "similarCocktails": ["pina-colada", "sex-on-the-beach", "daiquiri"]
  },
  {
    "slug": "tom-collins",
    "name": "Tom Collins",
    "category": "Classic",
    "glass": "Highball",
    "image": getImagesForSlug("tom-collins"),
    "tasteProfile": ["sour", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "2" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "1" },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": "0.5" },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Shake gin, lemon, and syrup with ice, strain into glass, top with soda.",
      "tr": "Cin, limon suyu ve şurubu buzla çalkalayın, bardağa süzün ve soda ekleyin."
    },
    "introduction": {
      "en": "The Tom Collins is a classic gin cocktail that dates back to the 19th century. It is known for its refreshing and citrusy flavor, making it a popular choice for warm weather. The drink combines gin, lemon juice, simple syrup, and soda water, resulting in a light and effervescent beverage. Often served in a tall glass with ice, the Tom Collins is a timeless favorite among cocktail enthusiasts.",
      "tr": "Tom Collins, 19. yüzyıla dayanan klasik bir cin kokteylidir. Ferahlatıcı ve narenciye aromasıyla bilinir, özellikle sıcak havalarda tercih edilir. Cin, limon suyu, şeker şurubu ve sodanın birleşimiyle hafif ve köpüklü bir içim sunar. Uzun bardakta buzla servis edilir ve zamansız bir klasiktir."
    },
    "comment": {
      "en": "Bright, bubbly, and always up for a good time. You’re the person who brings the fun wherever you go.",
      "tr": "Canlı, neşeli ve her zaman eğlenceye hazır. Eğlenceyi gittiğin her yere taşıyan kişisin."
    },
    "similarCocktails": ["gin-tonic", "vodka-collins", "gin-fizz"]
  },
  {
    "slug": "mint-julep",
    "name": "Mint Julep",
    "category": "Classic",
    "glass": "Julep Cup",
    "image": getImagesForSlug("mint-julep"),
    "tasteProfile": ["sweet", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Bourbon", "tr": "Bourbon" }, "amount": "2" },
      { "name": { "en": "Sugar", "tr": "Şeker" }, "amount": "1 tsp" },
      { "name": { "en": "Mint Leaves", "tr": "Nane Yaprakları" }, "amount": "6" },
      { "name": { "en": "Water", "tr": "Su" }, "amount": "1 tsp" }
    ],
    "instructions": {
      "en": "Muddle sugar, mint, and water, add bourbon and crushed ice, stir.",
      "tr": "Şeker, nane ve suyu ezin; bourbon ve kırık buz ekleyin, karıştırın."
    },
    "introduction": {
      "en": "The Mint Julep is a classic Southern cocktail that is synonymous with the Kentucky Derby. It is made with bourbon, fresh mint, sugar, and water, resulting in a refreshing and aromatic drink. Traditionally served in a silver or pewter cup, the Mint Julep is a symbol of hospitality and celebration in the American South.",
      "tr": "Mint Julep, Kentucky Derby ile özdeşleşmiş klasik bir Güney kokteylidir. Bourbon, taze nane, şeker ve su ile hazırlanır, ferahlatıcı ve aromatik bir içim sunar. Geleneksel olarak gümüş veya kalay kapta servis edilir ve Güney misafirperverliğinin simgesidir."
    },
    "comment": {
      "en": "Cool, collected, and a little bit fancy. You’re the person who always knows how to make an entrance.",
      "tr": "Sakin, kendinden emin ve biraz da şık. Ortaya nasıl çıkacağını iyi bilen kişisin."
    },
    "similarCocktails": ["mojito", "caipirinha", "whiskey-sour"]
  },
  {
    "slug": "mimosa",
    "name": "Mimosa",
    "category": "Brunch",
    "glass": "Champagne Flute",
    "image": getImagesForSlug("mimosa"),
    "tasteProfile": ["light", "citrusy", "sparkling"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Champagne", "tr": "Şampanya" }, "amount": "3" },
      { "name": { "en": "Orange Juice", "tr": "Portakal Suyu" }, "amount": "3" }
    ],
    "instructions": {
      "en": "Pour chilled orange juice into a flute, top with champagne. Do not stir.",
      "tr": "Soğutulmuş portakal suyunu kadehe dökün, şampanya ekleyin. Karıştırmayın."
    },
    "introduction": {
      "en": "The Mimosa is a classic brunch cocktail that combines sparkling wine with fresh orange juice for a light and elegant drink. Popularized in the 1920s, it’s a symbol of daytime celebrations and is often served during weddings, holiday brunches, and morning gatherings.",
      "tr": "Mimosa, taze portakal suyu ile köpüklü şarabın birleşimiyle hazırlanan klasik bir brunch kokteylidir. 1920’lerde popülerleşmiş, gündüz kutlamalarının simgesi olmuştur. Düğünlerde, tatil brunchlarında ve sabah buluşmalarında sıkça servis edilir."
    },
    "comment": {
      "en": "Bright, cheerful, and always in good spirits. You’re the person who brings the sunshine wherever you go.",
      "tr": "Parlak, neşeli ve her zaman keyifli. Ortama her zaman güneşi getiren kişisin."
    },
    "similarCocktails": ["bellini", "kir-royale", "french-75"]
  },
  {
    "slug": "long-island",
    "name": "Long Island",
    "category": "Highball",
    "glass": "Highball",
    "image": getImagesForSlug("long-island"),
    "tasteProfile": ["strong", "citrusy", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Vodka" }, "amount": "0.5" },
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "0.5" },
      { "name": { "en": "White Rum", "tr": "Beyaz Rom" }, "amount": "0.5" },
      { "name": { "en": "Tequila", "tr": "Tekila" }, "amount": "0.5" },
      { "name": { "en": "Triple Sec", "tr": "Triple Sec" }, "amount": "0.5" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "0.75" },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": "0.5" },
      { "name": { "en": "Cola", "tr": "Kola" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Combine all spirits, lemon juice, and syrup in a shaker with ice. Shake, strain into a highball glass with ice, and top with cola. Garnish with lemon wedge.",
      "tr": "Tüm içkileri, limon suyunu ve şurubu buzla birlikte shaker’a alın. Çalkalayın, buz dolu bardağa süzün ve kola ekleyin. Limon dilimiyle süsleyin."
    },
    "introduction": {
      "en": "Long Island is a legendary cocktail known for its potency and refreshing taste. Despite its name, it contains no tea—its dark color comes from a splash of cola. Originating in the 1970s, this drink combines five spirits, making it one of the strongest classic cocktails while remaining surprisingly smooth and balanced with citrus and sweetness.",
      "tr": "Long Island, güçlü yapısı ve ferahlatıcı tadıyla efsaneleşmiş bir kokteyldir. Adına rağmen çay içermez; rengini koladan alır. 1970’lerde ortaya çıkmıştır ve beş farklı içkinin birleşimiyle hazırlanır. En güçlü klasik kokteyllerden biridir ama narenciye ve şeker dengesi sayesinde yumuşak ve dengeli kalır."
    },
    "comment": {
      "en": "Bold, adventurous, and always ready to take on a challenge. You’re the person who lives life to the fullest.",
      "tr": "Cesur, maceraperest ve her zaman meydan okumaya hazır. Hayatı dolu dolu yaşayan kişisin."
    },
    "similarCocktails": ["blue-hawaiian", "bahama-mama", "vodka-tonic"]
  },
  {
    "slug": "vodka-collins",
    "name": "Vodka Collins",
    "category": "Classic",
    "glass": "Collins",
    "image": getImagesForSlug("vodka-collins"),
    "tasteProfile": ["citrusy", "refreshing", "light"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "2" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "1" },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": "0.5" },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Shake vodka, lemon juice, and simple syrup with ice. Strain into a Collins glass over fresh ice and top with soda water. Garnish with a lemon slice and cherry.",
      "tr": "Votka, limon suyu ve şeker şurubunu buzla çalkalayın. Taze buzlu Collins bardağına süzün ve soda ekleyin. Limon dilimi ve kiraz ile süsleyin."
    },
    "introduction": {
      "en": "A Vodka Collins is a refreshing twist on the classic Tom Collins, substituting vodka for gin. It's citrusy, fizzy, and perfect for hot summer days.",
      "tr": "Vodka Collins, klasik Tom Collins’in votkalı versiyonudur. Narenciye aromalı, köpüklü ve sıcak yaz günleri için idealdir."
    },
    "comment": {
      "en": "Light, bubbly, and always up for a good time. You’re the person who brings the fun wherever you go.",
      "tr": "Hafif, neşeli ve her zaman eğlenceye hazır. Eğlenceyi gittiğin her yere taşıyan kişisin."
    },
    "similarCocktails": ["tom-collins", "gin-fizz", "mojito"]
  },
  {
    "slug": "gin-fizz",
    "name": "Gin Fizz",
    "category": "Highball",
    "glass": "Highball",
    "image": getImagesForSlug("gin-fizz"),
    "tasteProfile": ["light", "foamy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "2" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "1" },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": "0.75" },
      { "name": { "en": "Egg White", "tr": "Yumurta Beyazı" }, "amount": "Optional" },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Shake gin, lemon, syrup (and egg white if using) vigorously. Strain into glass and top with soda.",
      "tr": "Cin, limon, şurubu (ve kullanıyorsanız yumurta beyazını) iyice çalkalayın. Bardağa süzün ve soda ekleyin."
    },
    "introduction": {
      "en": "The Gin Fizz is a classic cocktail known for its light, frothy texture and refreshing citrus flavor. It dates back to the 19th century and is often enjoyed as a brunch or summer drink. The addition of egg white gives it a creamy mouthfeel, while the soda water adds a bubbly finish.",
      "tr": "Gin Fizz, hafif ve köpüklü yapısıyla bilinen klasik bir kokteyldir. 19. yüzyıla uzanan geçmişi vardır ve genellikle brunch veya yaz içeceği olarak tercih edilir. Yumurta beyazı kremsi bir dokunuş sağlarken soda ferahlatıcı bir bitiş katar."
    },
    "comment": {
      "en": "Effervescent, lively, and always ready to brighten your day. You’re the person who lifts everyone’s spirits.",
      "tr": "Köpüklü, canlı ve her zaman günü aydınlatmaya hazır. Moralleri yükselten kişisin."
    },
    "similarCocktails": ["vodka-collins", "tom-collins", "whiskey-sour"]
  },
  {
    "slug": "sidecar",
    "name": "Sidecar",
    "category": "Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("sidecar"),
    "tasteProfile": ["citrusy", "balanced"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Cognac", "tr": "Konyak" }, "amount": "2" },
      { "name": { "en": "Triple Sec", "tr": "Triple Sec" }, "amount": "1" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "0.75" }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice and strain into a sugar-rimmed glass.",
      "tr": "Tüm malzemeleri buzla çalkalayın, şeker kaplı bardağa süzün."
    },
    "introduction": {
      "en": "The Sidecar is a classic cocktail that dates back to World War I, believed to have originated in Paris or London. It combines cognac, orange liqueur, and lemon juice for a balanced and sophisticated drink. Often served in a sugar-rimmed glass, the Sidecar is a timeless favorite among cocktail enthusiasts.",
      "tr": "Sidecar, I. Dünya Savaşı’na dayanan klasik bir kokteyldir; Paris veya Londra’da ortaya çıktığı düşünülür. Konyak, portakal likörü ve limon suyunun birleşimiyle dengeli ve sofistike bir içim sunar. Şeker kaplı bardakta servis edilmesiyle ünlüdür."
    },
    "comment": {
      "en": "Sophisticated, balanced, and a little bit adventurous. You’re the person who always knows how to make an impression.",
      "tr": "Sofistike, dengeli ve biraz da maceracı. Etki bırakmayı iyi bilen kişisin."
    },
    "similarCocktails": ["margarita", "daiquiri", "white-lady"]
  },
  {
    "slug": "amaretto-sour",
    "name": "Amaretto Sour",
    "category": "Sour",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("amaretto-sour"),
    "tasteProfile": ["sweet", "tangy", "nutty"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Amaretto", "tr": "Amaretto" }, "amount": "1.5" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "1" },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": "0.5" },
      { "name": { "en": "Egg White", "tr": "Yumurta Beyazı" }, "amount": "Optional" }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice and strain into a glass filled with ice. Garnish with a cherry and orange slice.",
      "tr": "Tüm malzemeleri buzla çalkalayın, buz dolu bardağa süzün. Kiraz ve portakal dilimiyle süsleyin."
    },
    "introduction": {
      "en": "Amaretto Sour is a delightful cocktail known for its balance of sweet almond flavor and tangy citrus. Popular since the 1970s, it remains a crowd-pleaser with its smooth texture and aromatic garnish.",
      "tr": "Amaretto Sour, tatlı badem aroması ile ekşi narenciyenin dengesiyle bilinen keyifli bir kokteyldir. 1970’lerden beri popülerdir, yumuşak dokusu ve aromatik süslemeleriyle beğeni toplar."
    },
    "comment": {
      "en": "Sweet, approachable, and a little bit nutty. You’re the person who’s always there with a smile and a kind word.",
      "tr": "Tatlı, samimi ve biraz da çılgın. Her zaman güler yüzlü ve nazik olan kişisin."
    },
    "similarCocktails": ["whiskey-sour", "godfather", "sidecar"]
  },
  {
    "slug": "painkiller",
    "name": "Painkiller",
    "category": "Tiki",
    "glass": "Hurricane",
    "image": getImagesForSlug("painkiller"),
    "tasteProfile": ["sweet", "creamy", "tropical"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Pusser's Rum", "tr": "Pusser's Rom" }, "amount": "2" },
      { "name": { "en": "Pineapple Juice", "tr": "Ananas Suyu" }, "amount": "4" },
      { "name": { "en": "Orange Juice", "tr": "Portakal Suyu" }, "amount": "1" },
      { "name": { "en": "Cream of Coconut", "tr": "Hindistan Cevizi Kreması" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice, pour into a glass, and garnish with grated nutmeg and a pineapple wedge.",
      "tr": "Tüm malzemeleri buzla çalkalayın, bardağa dökün. Rendelenmiş muskat ve ananas dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Painkiller is a tropical cocktail born in the British Virgin Islands in the 1970s. With its creamy coconut and fruity flavors, it is a perfect vacation drink.",
      "tr": "Painkiller, 1970’lerde Britanya Virjin Adaları’nda ortaya çıkan tropikal bir kokteyldir. Kremsi hindistan cevizi ve meyvemsi aromalarıyla tatil için mükemmel bir tercihtir."
    },
    "comment": {
      "en": "Relaxed, easy-going, and always in a good mood. You’re the person who knows how to unwind and enjoy life.",
      "tr": "Rahat, keyifli ve her zaman neşeli. Hayatın tadını çıkarmayı bilen kişisin."
    },
    "similarCocktails": ["pina-colada", "bahama-mama", "blue-hawaiian"]
  },
  {
    "slug": "blue-hawaiian",
    "name": "Blue Hawaiian",
    "category": "Tiki",
    "glass": "Hurricane",
    "image": getImagesForSlug("blue-hawaiian"),
    "tasteProfile": ["sweet", "tropical", "citrusy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Light Rum", "tr": "Hafif Rom" }, "amount": "1" },
      { "name": { "en": "Blue Curaçao", "tr": "Blue Curaçao" }, "amount": "1" },
      { "name": { "en": "Pineapple Juice", "tr": "Ananas Suyu" }, "amount": "3" },
      { "name": { "en": "Cream of Coconut", "tr": "Hindistan Cevizi Kreması" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Shake with ice and strain into a glass filled with crushed ice. Garnish with a pineapple wedge and cherry.",
      "tr": "Buzla çalkalayın, kırılmış buz dolu bardağa süzün. Ananas dilimi ve kiraz ile süsleyin."
    },
    "introduction": {
      "en": "The Blue Hawaiian is a visually stunning cocktail thanks to its bright blue hue from Blue Curaçao. It’s a refreshing tropical drink perfect for beach vibes.",
      "tr": "Blue Hawaiian, Curaçao’dan gelen parlak mavi rengiyle görsel olarak büyüleyici bir kokteyldir. Ferahlatıcı tropikal tadıyla plaj havası için idealdir."
    },
    "comment": {
      "en": "Vibrant, fun-loving, and always the center of attention. You’re the person who lights up every room you enter.",
      "tr": "Canlı, eğlenceli ve her zaman ilgi odağı. Girdiğin her ortamı aydınlatan kişisin."
    },
    "similarCocktails": ["bahama-mama", "painkiller", "pina-colada"]
  },
  {
    "slug": "bahama-mama",
    "name": "Bahama Mama",
    "category": "Tiki",
    "glass": "Hurricane",
    "image": getImagesForSlug("bahama-mama"),
    "tasteProfile": ["sweet", "tropical", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Light Rum", "tr": "Hafif Rom" }, "amount": "1" },
      { "name": { "en": "Dark Rum", "tr": "Koyu Rom" }, "amount": "1" },
      { "name": { "en": "Coconut Rum", "tr": "Hindistan Cevizi Romu" }, "amount": "0.5" },
      { "name": { "en": "Pineapple Juice", "tr": "Ananas Suyu" }, "amount": "2" },
      { "name": { "en": "Orange Juice", "tr": "Portakal Suyu" }, "amount": "2" },
      { "name": { "en": "Grenadine", "tr": "Grenadine" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice and pour into a glass. Garnish with a cherry and an orange slice.",
      "tr": "Tüm malzemeleri buzla çalkalayın, bardağa dökün. Kiraz ve portakal dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Bahama Mama is a tropical rum cocktail that bursts with fruity flavors, perfect for summer parties and beach getaways.",
      "tr": "Bahama Mama, meyve aromalarıyla dolu tropikal bir rom kokteylidir. Yaz partileri ve plaj tatilleri için mükemmeldir."
    },
    "comment": {
      "en": "Fun, lively, and always ready for an adventure. You’re the person who brings the party wherever you go.",
      "tr": "Eğlenceli, canlı ve her zaman maceraya hazır. Partiyi gittiğin her yere taşıyan kişisin."
    },
    "similarCocktails": ["painkiller", "mai-tai", "blue-hawaiian"]
  },
  {
    "slug": "michelada",
    "name": "Michelada",
    "category": "Beer Cocktail",
    "glass": "Pint",
    "image": getImagesForSlug("michelada"),
    "tasteProfile": ["spicy", "savory", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Light Beer", "tr": "Hafif Bira" }, "amount": "12" },
      { "name": { "en": "Lime Juice", "tr": "Limon Suyu" }, "amount": "1" },
      { "name": { "en": "Hot Sauce", "tr": "Acı Sos" }, "amount": "Few dashes" },
      { "name": { "en": "Worcestershire Sauce", "tr": "Worcestershire Sosu" }, "amount": "Few dashes" },
      { "name": { "en": "Tomato Juice", "tr": "Domates Suyu" }, "amount": "Optional" }
    ],
    "instructions": {
      "en": "Rim glass with salt, add lime juice, sauces, and beer. Stir gently and garnish with a lime wedge.",
      "tr": "Bardağın kenarını tuzlayın, limon suyu, soslar ve birayı ekleyin. Hafifçe karıştırın ve limon dilimiyle süsleyin."
    },
    "introduction": {
      "en": "Michelada is a Mexican beer cocktail with a spicy, tangy kick. It’s the perfect hangover cure and a refreshing option for hot days.",
      "tr": "Michelada, acı ve ekşi dokunuşuyla öne çıkan Meksika bira kokteylidir. Hem sıcak günlerde ferahlatıcı hem de harika bir akşamdan kalma ilacıdır."
    },
    "comment": {
      "en": "Bold, zesty, and a little bit spicy. You’re the person who always keeps things interesting.",
      "tr": "Cesur, keskin ve biraz da baharatlı. Ortamı her zaman ilginç tutan kişisin."
    },
    "similarCocktails": ["bloody-mary", "red-snapper", "bullshot"]
  },
  {
    "slug": "red-snapper",
    "name": "Red Snapper",
    "category": "Brunch",
    "glass": "Highball",
    "image": getImagesForSlug("red-snapper"),
    "tasteProfile": ["savory", "spicy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "2" },
      { "name": { "en": "Tomato Juice", "tr": "Domates Suyu" }, "amount": "4" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "0.5" },
      { "name": { "en": "Worcestershire Sauce", "tr": "Worcestershire Sosu" }, "amount": "Dash" },
      { "name": { "en": "Hot Sauce", "tr": "Acı Sos" }, "amount": "Dash" }
    ],
    "instructions": {
      "en": "Combine all ingredients in a glass with ice, stir well, and garnish with a celery stick.",
      "tr": "Tüm malzemeleri buzla birlikte bardağa ekleyin, iyice karıştırın. Kereviz sapı ile süsleyin."
    },
    "introduction": {
      "en": "The Red Snapper is often considered the gin-based cousin of the Bloody Mary. Its savory and slightly spicy profile makes it a popular choice for brunch and those who enjoy bold, complex flavors.",
      "tr": "Red Snapper, çoğunlukla Bloody Mary’nin cinli kuzeni olarak bilinir. Tuzlu ve hafif baharatlı profiliyle brunch için ve güçlü tatları sevenler arasında popülerdir."
    },
    "comment": {
      "en": "Savory, bold, and a little bit unconventional. You’re the person who marches to the beat of your own drum.",
      "tr": "Tuzlu, cesur ve biraz da sıra dışı. Kendi ritminde yürüyen kişisin."
    },
    "similarCocktails": ["bloody-mary", "bullshot", "michelada"]
  },
  {
    "slug": "bullshot",
    "name": "Bullshot",
    "category": "Classic",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("bullshot"),
    "tasteProfile": ["savory", "umami"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "2" },
      { "name": { "en": "Beef Broth", "tr": "Et Suyu" }, "amount": "4" },
      { "name": { "en": "Worcestershire Sauce", "tr": "Worcestershire Sosu" }, "amount": "Dash" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Shake ingredients with ice and strain into a glass over ice cubes. Garnish with a lemon twist.",
      "tr": "Malzemeleri buzla çalkalayın, buz dolu bardağa süzün. Limon kabuğu bükmesiyle süsleyin."
    },
    "introduction": {
      "en": "The Bullshot is a savory cocktail that combines vodka with beef broth and seasoning for a hearty, umami-rich drink. It's an unusual but beloved choice among those who enjoy bold, unconventional flavors.",
      "tr": "Bullshot, votka, et suyu ve baharatların birleşimiyle hazırlanan tuzlu bir kokteyldir. Alışılmadık ama güçlü tatları sevenler arasında sevilen bir tercihtir."
    },
    "comment": {
      "en": "Robust, hearty, and a little bit daring. You’re the person who’s always up for trying something new.",
      "tr": "Güçlü, doyurucu ve biraz da cesur. Her zaman yeni şeyler denemeye hazır kişisin."
    },
    "similarCocktails": ["bloody-mary", "red-snapper", "michelada"]
  },
  {
    "slug": "black-russian",
    "name": "Black Russian",
    "category": "Coffee",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("black-russian"),
    "tasteProfile": ["sweet", "strong"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "2" },
      { "name": { "en": "Coffee Liqueur", "tr": "Kahve Likörü" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Pour vodka and coffee liqueur over ice in a glass and stir gently.",
      "tr": "Votka ve kahve likörünü bardağa buz üzerine dökün ve hafifçe karıştırın."
    },
    "introduction": {
      "en": "The Black Russian is a simple yet powerful cocktail that blends vodka with coffee liqueur. Known for its deep, rich flavor, it's a favorite among coffee lovers and those who enjoy bold drinks.",
      "tr": "Black Russian, votka ile kahve likörünün birleşiminden oluşan basit ama güçlü bir kokteyldir. Yoğun ve zengin tadıyla kahve severler ve güçlü içkilerden hoşlananlar arasında popülerdir."
    },
    "comment": {
      "en": "Strong, straightforward, and a little bit mysterious. You’re the person who knows what they want and isn’t afraid to go after it.",
      "tr": "Güçlü, net ve biraz da gizemli. Ne istediğini bilen ve peşinden gitmekten korkmayan bir kişisin."
    },
    "similarCocktails": ["white-russian", "espresso-martini", "godfather"]
  },
  {
    "slug": "white-russian",
    "name": "White Russian",
    "category": "Coffee",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("white-russian"),
    "tasteProfile": ["sweet", "creamy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "2" },
      { "name": { "en": "Coffee Liqueur", "tr": "Kahve Likörü" }, "amount": "1" },
      { "name": { "en": "Cream", "tr": "Krema" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Build ingredients over ice in a glass, stir gently to combine.",
      "tr": "Malzemeleri bardağa buz üzerine ekleyin, hafifçe karıştırın."
    },
    "introduction": {
      "en": "The White Russian takes the boldness of a Black Russian and adds a creamy twist. This cocktail became a pop culture icon and remains a favorite for those who enjoy sweet, dessert-like drinks.",
      "tr": "White Russian, Black Russian’ın güçlü yapısına kremsi bir dokunuş katar. Popüler kültürün simgelerinden biri haline gelen bu kokteyl, tatlı ve tatlımsı içeceklerden hoşlananların favorisidir."
    },
    "comment": {
      "en": "Smooth, indulgent, and a little bit nostalgic. You’re the person who always knows how to make things better.",
      "tr": "Pürüzsüz, keyifli ve biraz da nostaljik. Her şeyi daha güzel hale getirmeyi bilen bir kişisin."
    },
    "similarCocktails": ["black-russian", "mudslide", "brandy-alexander"]
  },
  {
    "slug": "mudslide",
    "name": "Mudslide",
    "category": "Coffee",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("mudslide"),
    "tasteProfile": ["sweet", "creamy", "chocolatey"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "1" },
      { "name": { "en": "Coffee Liqueur", "tr": "Kahve Likörü" }, "amount": "1" },
      { "name": { "en": "Irish Cream Liqueur", "tr": "İrlanda Kreması Likörü" }, "amount": "1" },
      { "name": { "en": "Cream", "tr": "Krema" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice and strain into a glass filled with ice. Garnish with chocolate syrup or shavings.",
      "tr": "Tüm malzemeleri buzla çalkalayın ve buz dolu bardağa süzün. Çikolata şurubu veya rendelenmiş çikolata ile süsleyin."
    },
    "introduction": {
      "en": "The Mudslide is a decadent cocktail that combines vodka, coffee liqueur, Irish cream, and cream for a rich, dessert-like drink. It's perfect for those who enjoy indulgent flavors and creamy textures.",
      "tr": "Mudslide, votka, kahve likörü, İrlanda kreması likörü ve krema ile hazırlanan, tatlımsı ve zengin bir kokteyldir. Tatlı ve kremsi dokuları sevenler için mükemmel bir tercihtir."
    },
    "comment": {
      "en": "Decadent, indulgent, and a little bit over-the-top. You’re the person who knows how to treat yourself.",
      "tr": "Gösterişli, keyif düşkünü ve biraz da abartılı. Kendini şımartmayı bilen bir kişisin."
    },
    "similarCocktails": ["white-russian", "brandy-alexander", "irish-coffee"]
  },
  {
    "slug": "brandy-alexander",
    "name": "Brandy Alexander",
    "category": "Sweet",
    "glass": "Cocktail",
    "image": getImagesForSlug("brandy-alexander"),
    "tasteProfile": ["sweet", "creamy", "chocolatey"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Brandy", "tr": "Brendi" }, "amount": "1.5" },
      { "name": { "en": "Dark Crème de Cacao", "tr": "Dark Crème de Cacao" }, "amount": "1" },
      { "name": { "en": "Cream", "tr": "Krema" }, "amount": "1" },
      { "name": { "en": "Nutmeg", "tr": "Muskat" }, "amount": "Garnish" }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice and strain into a chilled cocktail glass. Garnish with a sprinkle of nutmeg.",
      "tr": "Tüm malzemeleri buzla çalkalayın ve soğutulmuş kokteyl bardağına süzün. Üzerine biraz muskat serpin."
    },
    "introduction": {
      "en": "The Brandy Alexander is a classic cocktail that dates back to the early 20th century. It combines brandy, dark crème de cacao, and cream for a rich, dessert-like drink. Often garnished with a sprinkle of nutmeg, the Brandy Alexander is a sophisticated choice for those who enjoy sweet and creamy cocktails.",
      "tr": "Brandy Alexander, 20. yüzyılın başlarına uzanan klasik bir kokteyldir. Brendi, dark crème de cacao ve krema ile hazırlanan bu zengin içki genellikle muskat serpilerek servis edilir. Tatlı ve kremsi kokteylleri sevenler için sofistike bir tercihtir."
    },
    "comment": {
      "en": "Elegant, refined, and a little bit indulgent. You’re the person who knows how to enjoy the finer things in life.",
      "tr": "Zarif, seçkin ve biraz da keyif düşkünü. Hayatın güzel şeylerinden nasıl keyif alacağını bilen bir kişisin."
    },
    "similarCocktails": ["mudslide", "white-russian", "irish-coffee"]
  },
  {
    "slug": "irish-coffee",
    "name": "Irish Coffee",
    "category": "Hot Cocktail",
    "glass": "Irish Coffee Mug",
    "image": getImagesForSlug("irish-coffee"),
    "tasteProfile": ["sweet", "warming"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Irish Whiskey", "tr": "İrlanda Viskisi" }, "amount": "1.5" },
      { "name": { "en": "Hot Coffee", "tr": "Sıcak Kahve" }, "amount": "4" },
      { "name": { "en": "Sugar", "tr": "Şeker" }, "amount": "1 tsp" },
      { "name": { "en": "Cream", "tr": "Krema" }, "amount": "Float" }
    ],
    "instructions": {
      "en": "Combine coffee, whiskey, and sugar in a mug. Stir well, then float cream on top.",
      "tr": "Kahve, viski ve şekeri bir kupada karıştırın. İyice karıştırdıktan sonra üzerine kremayı dikkatlice ekleyin."
    },
    "introduction": {
      "en": "Irish Coffee is a comforting blend of coffee, Irish whiskey, and cream. Perfect for chilly evenings, this drink is both warming and invigorating, offering a delightful balance of sweet and strong flavors.",
      "tr": "Irish Coffee, kahve, İrlanda viskisi ve kremanın birleşiminden oluşan rahatlatıcı bir içecektir. Soğuk akşamlar için mükemmel olan bu içki hem ısıtır hem de canlandırır, tatlı ve güçlü tatların hoş bir dengesini sunar."
    },
    "comment": {
      "en": "Cozy, comforting, and a little bit indulgent. You’re the person who always knows how to make you feel better.",
      "tr": "Samimi, rahatlatıcı ve biraz da keyif düşkünü. Her zaman seni iyi hissettirmeyi bilen bir kişisin."
    },
    "similarCocktails": ["spanish-coffee", "hot-toddy", "baileys-coffee"]
  },
  {
    "slug": "spanish-coffee",
    "name": "Spanish Coffee",
    "category": "Hot Cocktail",
    "glass": "Irish Coffee Mug",
    "image": getImagesForSlug("spanish-coffee"),
    "tasteProfile": ["sweet", "warming", "citrusy"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Rum", "tr": "Rom" }, "amount": "1" },
      { "name": { "en": "Coffee Liqueur", "tr": "Kahve Likörü" }, "amount": "1" },
      { "name": { "en": "Hot Coffee", "tr": "Sıcak Kahve" }, "amount": "4" },
      { "name": { "en": "Sugar", "tr": "Şeker" }, "amount": "1 tsp" },
      { "name": { "en": "Whipped Cream", "tr": "Çırpılmış Krema" }, "amount": "Top" },
      { "name": { "en": "Lemon Peel", "tr": "Limon Kabuğu" }, "amount": "Garnish" }
    ],
    "instructions": {
      "en": "Rim glass with sugar, combine rum, coffee liqueur, coffee, and sugar in mug. Stir well, top with whipped cream and garnish with lemon peel.",
      "tr": "Bardağın kenarını şekerle kaplayın, kupaya rom, kahve likörü, kahve ve şekeri ekleyin. İyice karıştırın, üzerine çırpılmış krema ekleyin ve limon kabuğu ile süsleyin."
    },
    "introduction": {
      "en": "Spanish Coffee is a festive and flavorful cocktail that combines rum, coffee liqueur, and hot coffee. The sugared rim and whipped cream topping add a touch of indulgence, while the lemon peel garnish provides a hint of citrus brightness.",
      "tr": "Spanish Coffee, rom, kahve likörü ve sıcak kahvenin birleşiminden oluşan lezzetli ve eğlenceli bir kokteyldir. Şeker kaplı bardak kenarı ve krema dokunuşu keyif katar, limon kabuğu ise ferah bir narenciye aroması ekler."
    },
    "comment": {
      "en": "Festive, flavorful, and a little bit indulgent. You’re the person who knows how to celebrate life.",
      "tr": "Eğlenceli, lezzetli ve biraz da keyif düşkünü. Hayatı kutlamayı bilen bir kişisin."
    },
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
      { "name": { "en": "Whiskey", "tr": "Viski" }, "amount": "1.5" },
      { "name": { "en": "Honey", "tr": "Bal" }, "amount": "1 tbsp" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "0.5" },
      { "name": { "en": "Hot Water", "tr": "Sıcak Su" }, "amount": "4" },
      { "name": { "en": "Cinnamon Stick", "tr": "Tarçın Çubuğu" }, "amount": "Garnish" }
    ],
    "instructions": {
      "en": "Combine whiskey, honey, and lemon juice in a mug. Top with hot water and stir. Garnish with a cinnamon stick.",
      "tr": "Viski, bal ve limon suyunu bir kupada karıştırın. Üzerine sıcak su ekleyip karıştırın. Tarçın çubuğu ile süsleyin."
    },
    "introduction": {
      "en": "The Hot Toddy is a classic warm cocktail known for its soothing and comforting qualities. Made with whiskey, honey, lemon juice, and hot water, it’s often enjoyed during cold weather or as a remedy for colds.",
      "tr": "Hot Toddy, rahatlatıcı ve şifalı özellikleriyle bilinen klasik bir sıcak kokteyldir. Viski, bal, limon suyu ve sıcak su ile hazırlanır; soğuk havalarda veya soğuk algınlığına karşı sıkça tercih edilir."
    },
    "comment": {
      "en": "Soothing, comforting, and a little bit old-fashioned. You’re the person who knows how to take care of yourself and others.",
      "tr": "Rahatlatıcı, huzur verici ve biraz da eski moda. Hem kendine hem başkalarına nasıl bakacağını bilen bir kişisin."
    },
    "similarCocktails": ["irish-coffee", "spanish-coffee", "baileys-coffee"]
  },
  {
    "slug": "baileys-coffee",
    "name": "Baileys Coffee",
    "category": "Hot Cocktail",
    "glass": "Irish Coffee Mug",
    "image": getImagesForSlug("baileys-coffee"),
    "tasteProfile": ["sweet", "creamy", "warming"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Baileys Irish Cream", "tr": "Baileys Irish Cream" }, "amount": "1.5" },
      { "name": { "en": "Hot Coffee", "tr": "Sıcak Kahve" }, "amount": "4" },
      { "name": { "en": "Whipped Cream", "tr": "Çırpılmış Krema" }, "amount": "Top" },
      { "name": { "en": "Chocolate Shavings", "tr": "Çikolata Rendesi" }, "amount": "Garnish" }
    ],
    "instructions": {
      "en": "Pour Baileys into a mug, top with hot coffee, stir gently. Top with whipped cream and garnish with chocolate shavings.",
      "tr": "Baileys’i kupaya dökün, üzerine sıcak kahve ekleyin ve hafifçe karıştırın. Çırpılmış krema ve rendelenmiş çikolata ile süsleyin."
    },
    "introduction": {
      "en": "Baileys Coffee is a delightful combination of Baileys Irish Cream and hot coffee, topped with whipped cream for an indulgent treat. It’s perfect for cozy evenings and special occasions.",
      "tr": "Baileys Coffee, Baileys Irish Cream ve sıcak kahvenin keyifli birleşimidir. Üzerine eklenen çırpılmış krema ile lezzetli ve keyifli bir içecek haline gelir. Samimi akşamlar ve özel günler için mükemmeldir."
    },
    "comment": {
      "en": "Indulgent, cozy, and a little bit luxurious. You’re the person who knows how to treat yourself.",
      "tr": "Keyifli, samimi ve biraz da lüks. Kendini şımartmayı bilen bir kişisin."
    },
    "similarCocktails": ["irish-coffee", "spanish-coffee", "hot-toddy"]
  },
  {
    "slug": "godfather",
    "name": "Godfather",
    "category": "Classic",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("godfather"),
    "tasteProfile": ["sweet", "nutty"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Scotch Whisky", "tr": "Scotch Whisky" }, "amount": "2" },
      { "name": { "en": "Amaretto", "tr": "Amaretto" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Pour Scotch and amaretto into a glass over ice, stir gently.",
      "tr": "Scotch ve Amaretto’yu bir bardağa buz üzerine dökün, hafifçe karıştırın."
    },
    "introduction": {
      "en": "The Godfather cocktail combines smoky Scotch with sweet, nutty amaretto for a smooth and sophisticated drink. Its simple yet bold flavor has made it a classic choice for whiskey lovers.",
      "tr": "Godfather kokteyli, dumanlı Scotch whisky ile tatlı ve fındıksı aromalı Amaretto’yu birleştirir. Hem basit hem de güçlü lezzetiyle viski severlerin klasik tercihlerinden biridir."
    },
    "comment": {
      "en": "Strong, confident, and a little bit mysterious. You’re the person who commands respect and attention.",
      "tr": "Güçlü, kendine güvenen ve biraz da gizemli. Saygı ve dikkat uyandıran bir kişisin."
    },
    "similarCocktails": ["rusty-nail", "black-russian", "godmother"]
  },
  {
    "slug": "gibson",
    "name": "Gibson",
    "category": "Classic",
    "glass": "Martini",
    "image": getImagesForSlug("gibson"),
    "tasteProfile": ["dry", "savory"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "2.5" },
      { "name": { "en": "Dry Vermouth", "tr": "Sek Vermut" }, "amount": "0.5" },
      { "name": { "en": "Pickled Onion", "tr": "Soğan Turşusu" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Stir gin and vermouth with ice, strain into a chilled martini glass, garnish with a pickled onion.",
      "tr": "Cin ve sek vermutu buzla karıştırın, soğutulmuş martini bardağına süzün ve turşu soğan ile süsleyin."
    },
    "introduction": {
      "en": "The Gibson is a classic martini variation distinguished by its pickled onion garnish. Elegant and dry, it has been a sophisticated choice for cocktail enthusiasts for decades.",
      "tr": "Gibson, soğan turşusu süslemesiyle öne çıkan klasik bir martini varyasyonudur. Zarif ve sek tadıyla onlarca yıldır kokteyl severlerin sofistike tercihleri arasında yer alır."
    },
    "comment": {
      "en": "Refined, classic, and a little bit unconventional. You’re the person who always knows how to make an impression.",
      "tr": "Zarif, klasik ama biraz da alışılmadık. Her zaman nasıl izlenim bırakacağını bilen bir kişisin."
    },
    "similarCocktails": ["martini", "vesper", "dirty-martini"]
  },
  {
    "slug": "vesper",
    "name": "Vesper",
    "category": "Classic",
    "glass": "Martini",
    "image": getImagesForSlug("vesper"),
    "tasteProfile": ["strong", "bitter", "citrusy"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "3" },
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "1" },
      { "name": { "en": "Lillet Blanc", "tr": "Lillet Blanc" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Shake all ingredients with ice and strain into a chilled martini glass. Garnish with a lemon twist.",
      "tr": "Tüm malzemeleri buzla çalkalayın ve soğutulmuş martini bardağına süzün. Limon kabuğu bükmesi ile süsleyin."
    },
    "introduction": {
      "en": "The Vesper was popularized by James Bond in 'Casino Royale'. A bold, potent mix of gin, vodka, and Lillet Blanc, it delivers a crisp, citrus-forward flavor.",
      "tr": "Vesper, James Bond’un *Casino Royale* filminde popülerleşmiştir. Cin, votka ve Lillet Blanc’ın güçlü karışımıyla hazırlanır ve ferah, narenciyeli bir tat sunar."
    },
    "comment": {
      "en": "Bold, daring, and a little bit mysterious. You’re the person who’s always up for an adventure.",
      "tr": "Cesur, gözü pek ve biraz da gizemli. Her zaman maceraya hazır bir kişisin."
    },
    "similarCocktails": ["martini", "gibson", "dirty-martini"]
  },
  {
    "slug": "dirty-martini",
    "name": "Dirty Martini",
    "category": "Classic",
    "glass": "Martini",
    "image": getImagesForSlug("dirty-martini"),
    "tasteProfile": ["salty", "dry"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "2.5" },
      { "name": { "en": "Dry Vermouth", "tr": "Sek Vermut" }, "amount": "0.5" },
      { "name": { "en": "Olive Brine", "tr": "Zeytin Suyu" }, "amount": "0.5" },
      { "name": { "en": "Olive", "tr": "Zeytin" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Stir gin, vermouth, and olive brine with ice, strain into a chilled martini glass, garnish with an olive.",
      "tr": "Cin, vermut ve zeytin suyunu buzla karıştırın, soğutulmuş martini bardağına süzün ve zeytinle süsleyin."
    },
    "introduction": {
      "en": "The Dirty Martini is a savory twist on the classic martini, incorporating olive brine for a salty, flavorful kick. It is a favorite among those who enjoy bold, distinctive cocktails.",
      "tr": "Dirty Martini, klasik martinin tuzlu bir yorumudur; zeytin suyu eklenerek güçlü ve karakteristik bir tat kazanır. Cesur kokteyllerden hoşlananların favorisidir."
    },
    "comment": {
      "en": "Edgy, sophisticated, and a little bit rebellious. You’re the person who always stands out in a crowd.",
      "tr": "Keskin, sofistike ve biraz asi. Kalabalıkta daima dikkat çekersin."
    },
    "similarCocktails": ["martini", "gibson", "vesper"]
  },
  {
    "slug": "vodka-tonic",
    "name": "Vodka Tonic",
    "category": "Highball",
    "glass": "Highball",
    "image": getImagesForSlug("vodka-tonic"),
    "tasteProfile": ["refreshing", "bitter"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "2" },
      { "name": { "en": "Tonic Water", "tr": "Tonik" }, "amount": "Top up" },
      { "name": { "en": "Lime Wedge", "tr": "Limon Dilimi" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Pour vodka over ice, top with tonic water, and garnish with a lime wedge.",
      "tr": "Votkayı buzun üzerine dökün, tonikle tamamlayın ve limon dilimiyle süsleyin."
    },
    "introduction": {
      "en": "Vodka Tonic is a simple and refreshing cocktail, perfect for warm weather. Its clean, crisp taste and slight bitterness from the tonic make it a popular choice.",
      "tr": "Vodka Tonic, sıcak havalar için ideal, basit ve ferahlatıcı bir kokteyldir. Temiz ve keskin tadı, tonikten gelen hafif acılığıyla oldukça popülerdir."
    },
    "comment": {
      "en": "Cool, laid-back, and always in style. You’re the person who knows how to keep things casual yet classy.",
      "tr": "Rahat, havalı ve daima şık. Sen, işleri sade ama zarif tutmayı bilen kişisin."
    },
    "similarCocktails": ["gin-tonic", "mojito", "caipirinha"]
  },
  {
    "slug": "bellini",
    "name": "Bellini",
    "category": "Spritz",
    "glass": "Champagne Flute",
    "image": getImagesForSlug("bellini"),
    "tasteProfile": ["sweet", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Prosecco", "tr": "Prosecco" }, "amount": "3" },
      { "name": { "en": "Peach Puree", "tr": "Şeftali Püresi" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Pour peach puree into a flute and top with chilled prosecco. Stir gently.",
      "tr": "Şeftali püresini kadehe dökün, soğutulmuş prosecco ile tamamlayın. Hafifçe karıştırın."
    },
    "introduction": {
      "en": "The Bellini is a fruity, sparkling cocktail originating from Venice. Its refreshing sweetness and light effervescence make it ideal for brunch and celebratory occasions.",
      "tr": "Bellini, Venedik kökenli meyveli ve köpüklü bir kokteyldir. Ferahlatıcı tatlılığı ve hafif köpürmesi, onu brunch ve kutlamalar için mükemmel kılar."
    },
    "comment": {
      "en": "Elegant, cheerful, and always in good spirits. You’re the person who brings a touch of class to any gathering.",
      "tr": "Zarif, neşeli ve daima pozitif. Sen her ortama sınıf katan kişisin."
    },
    "similarCocktails": ["mimosa", "kir-royale", "french-75"]
  },
  {
    "slug": "kir-royale",
    "name": "Kir Royale",
    "category": "Spritz",
    "glass": "Champagne Flute",
    "image": getImagesForSlug("kir-royale"),
    "tasteProfile": ["sweet", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Crème de Cassis", "tr": "Crème de Cassis" }, "amount": "0.5" },
      { "name": { "en": "Champagne", "tr": "Şampanya" }, "amount": "3.5" }
    ],
    "instructions": {
      "en": "Pour crème de cassis into a flute and top with chilled champagne. Do not stir.",
      "tr": "Crème de Cassis'i kadehe dökün, soğutulmuş şampanya ile tamamlayın. Karıştırmayın."
    },
    "introduction": {
      "en": "Kir Royale is a sophisticated cocktail that combines the sweetness of blackcurrant liqueur with the effervescence of champagne, making it a popular choice for celebrations.",
      "tr": "Kir Royale, siyah frenk üzümü likörünün tatlılığını şampanyanın köpüklülüğüyle birleştiren sofistike bir kokteyldir. Kutlamalar için popüler bir seçimdir."
    },
    "comment": {
      "en": "Chic, bubbly, and always ready to celebrate. You’re the person who knows how to make every moment special.",
      "tr": "Şık, köpüklü ve her zaman kutlamaya hazır. Sen her anı özel kılmayı bilen kişisin."
    },
    "similarCocktails": ["mimosa", "bellini", "french-75"]
  },
  {
    "slug": "bramble",
    "name": "Bramble",
    "category": "Modern",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("bramble"),
    "tasteProfile": ["sweet", "tart", "fruity"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "2" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "0.75" },
      { "name": { "en": "Simple Syrup", "tr": "Basit Şurup" }, "amount": "0.5" },
      { "name": { "en": "Crème de Mûre", "tr": "Crème de Mûre" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Shake gin, lemon juice, and syrup with ice. Strain into a glass with crushed ice and drizzle crème de mûre on top.",
      "tr": "Cin, limon suyu ve şurubu buzla çalkalayın. Ezilmiş buz dolu bardağa süzün ve üzerine Crème de Mûre gezdirin."
    },
    "introduction": {
      "en": "The Bramble is a modern classic cocktail that combines gin with tart lemon juice and sweet blackberry liqueur, creating a refreshing and visually appealing drink.",
      "tr": "Bramble, cinin ekşi limon suyu ve tatlı böğürtlen likörüyle birleştiği modern bir klasik kokteyldir. Ferahlatıcı ve görsel olarak etkileyicidir."
    },
    "comment": {
      "en": "Vibrant, creative, and a little bit wild. You’re the person who’s always up for trying something new and exciting.",
      "tr": "Canlı, yaratıcı ve biraz da çılgın. Sen daima yeni ve heyecan verici şeyler denemeye hazırsın."
    },
    "similarCocktails": ["gin-fizz", "whiskey-sour", "daiquiri"]
  },
  {
    "slug": "white-lady",
    "name": "White Lady",
    "category": "Classic",
    "glass": "Cocktail",
    "image": getImagesForSlug("white-lady"),
    "tasteProfile": ["citrusy", "smooth"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "2" },
      { "name": { "en": "Triple Sec", "tr": "Triple Sec" }, "amount": "0.75" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "0.75" },
      { "name": { "en": "Egg White", "tr": "Yumurta Beyazı" }, "amount": "1" }
    ],
    "instructions": {
      "en": "Shake all ingredients without ice, then with ice, strain into a chilled glass.",
      "tr": "Tüm malzemeleri önce buzsuz, sonra buzla çalkalayın, soğutulmuş bardağa süzün."
    },
    "introduction": {
      "en": "The White Lady is a classic cocktail that combines gin, citrus, and a touch of sweetness from triple sec. Its smooth texture and refreshing taste make it a timeless favorite among cocktail enthusiasts.",
      "tr": "White Lady, cin, narenciye ve triple sec’ten gelen hafif tatlılığın birleşimiyle hazırlanan klasik bir kokteyldir. Pürüzsüz dokusu ve ferahlatıcı tadıyla kokteyl tutkunlarının zamansız favorisidir."
    },
    "comment": {
      "en": "Elegant, refined, and a little bit mysterious. You’re the person who always leaves a lasting impression.",
      "tr": "Zarif, rafine ve biraz da gizemli. Daima kalıcı bir iz bırakan kişisin."
    },
    "similarCocktails": ["sidecar", "daiquiri", "margarita"]
  },
  {
    "slug": "french-75",
    "name": "French-75",
    "category": "Spritz",
    "glass": "Champagne Flute",
    "image": getImagesForSlug("french-75"),
    "tasteProfile": ["citrusy", "bubbly", "strong"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "1" },
      { "name": { "en": "Lemon Juice", "tr": "Limon Suyu" }, "amount": "0.5" },
      { "name": { "en": "Simple Syrup", "tr": "Basit Şurup" }, "amount": "0.5" },
      { "name": { "en": "Champagne", "tr": "Şampanya" }, "amount": "3" }
    ],
    "instructions": {
      "en": "Shake gin, lemon juice, and syrup with ice, strain into a flute, top with champagne.",
      "tr": "Cin, limon suyu ve şurubu buzla çalkalayın, kadehe süzün, şampanya ile tamamlayın."
    },
    "introduction": {
      "en": "The French-75 is a classic cocktail named after a powerful French field gun. Its blend of gin, lemon, and champagne creates a refreshing yet potent drink popular in cocktail bars.",
      "tr": "French-75, güçlü bir Fransız topunun adını taşıyan klasik bir kokteyldir. Cin, limon ve şampanyanın birleşimiyle ferahlatıcı ama güçlü bir içki ortaya çıkarır."
    },
    "comment": {
      "en": "Sophisticated, lively, and always ready to celebrate. You’re the person who knows how to make every moment special.",
      "tr": "Sofistike, canlı ve her zaman kutlamaya hazır. Sen her anı özel kılmayı bilen kişisin."
    },
    "similarCocktails": ["bellini", "kir-royale", "mimosa"]
  },
  {
    "slug": "rusty-nail",
    "name": "Rusty Nail",
    "category": "Classic",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("rusty-nail"),
    "tasteProfile": ["strong", "sweet", "smoky"],
    "measurement": "oz",
    "alcoholLevel": "strong",
    "ingredients": [
      { "name": { "en": "Scotch Whisky", "tr": "İskoç Viskisi" }, "amount": "1.5" },
      { "name": { "en": "Drambuie", "tr": "Drambuie" }, "amount": "0.75" }
    ],
    "instructions": {
      "en": "Pour Scotch and Drambuie over ice in an old fashioned glass, stir gently.",
      "tr": "İskoç viskisi ve Drambuie’yi buz üzerine old-fashioned bardağa dökün, hafifçe karıştırın."
    },
    "introduction": {
      "en": "The Rusty Nail is a classic cocktail originating from Scotland. Its smoky and sweet flavor profile comes from mixing Scotch whisky with Drambuie, making it a sophisticated evening drink.",
      "tr": "Rusty Nail, İskoçya kökenli klasik bir kokteyldir. İskoç viskisi ile Drambuie’nin birleşiminden gelen isli ve tatlı profiliyle sofistike bir akşam içkisidir."
    },
    "comment": {
      "en": "Bold, refined, and a little bit rugged. You’re the person who knows how to enjoy the finer things in life.",
      "tr": "Cesur, rafine ve biraz da sert. Hayatın güzel şeylerini nasıl tadını çıkaracağını bilen kişisin."
    },
    "similarCocktails": ["godfather", "black-russian", "manhattan"]
  },
  {
    "slug": "godmother",
    "name": "Godmother",
    "category": "Classic",
    "glass": "Old-Fashioned",
    "image": getImagesForSlug("godmother"),
    "tasteProfile": ["sweet", "strong", "smooth"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "1.5" },
      { "name": { "en": "Amaretto", "tr": "Amaretto" }, "amount": "0.75" }
    ],
    "instructions": {
      "en": "Pour vodka and amaretto over ice in an old fashioned glass, stir gently.",
      "tr": "Votka ve Amaretto’yu buz üzerine old-fashioned bardağa dökün, hafifçe karıştırın."
    },
    "introduction": {
      "en": "The Godmother is a simple yet elegant cocktail. Its blend of vodka and amaretto gives a smooth and sweet taste, perfect for relaxed evenings or casual gatherings.",
      "tr": "Godmother, basit ama zarif bir kokteyldir. Votka ve Amaretto’nun birleşimiyle yumuşak ve tatlı bir tat sunar; rahat akşamlar veya samimi buluşmalar için idealdir."
    },
    "comment": {
      "en": "Sweet, approachable, and a little bit charming. You’re the person who’s always there with a smile and a kind word.",
      "tr": "Tatlı, samimi ve biraz da çekici. Sen daima gülümsemesi ve sıcak sözleriyle orada olan kişisin."
    },
    "similarCocktails": ["amaretto-sour", "rusty-nail", "godfather"]
  },
  {
    "slug": "aperol-spritz",
    "name": "Aperol Spritz",
    "category": "Spritz",
    "glass": "Wine Glass",
    "image": getImagesForSlug("aperol-spritz"),
    "tasteProfile": ["bitter", "sweet", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Aperol", "tr": "Aperol" }, "amount": "3" },
      { "name": { "en": "Prosecco", "tr": "Prosecco" }, "amount": "3" }
    ],
    "instructions": {
      "en": "Fill a wine glass with ice, add Aperol and Prosecco, top with soda water, and garnish with an orange slice.",
      "tr": "Bir şarap bardağını buzla doldurun, Aperol ve Prosecco ekleyin, soda ile tamamlayın ve portakal dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Aperol Spritz is a vibrant and refreshing cocktail that has become a staple of Italian aperitivo culture. Its bright orange color and bittersweet flavor make it a perfect choice for warm weather gatherings or as a pre-dinner drink.",
      "tr": "Aperol Spritz, İtalyan aperitivo kültürünün vazgeçilmezlerinden canlı ve ferahlatıcı bir kokteyldir. Parlak turuncu rengi ve tatlı-acı aromasıyla sıcak havalarda buluşmalar veya yemek öncesi içkiler için idealdir."
    },
    "comment": {
      "en": "Bright, cheerful, and always the life of the party. You’re the person who brings everyone together and keeps the good times rolling.",
      "tr": "Canlı, neşeli ve partinin ruhu. Sen herkesi bir araya getiren ve eğlenceyi sürdürensın."
    },
    "similarCocktails": ["campari-spritz", "negroni-spritz", "spritz"]
  },
  {
    "slug": "limoncello-spritz",
    "name": "Limoncello Spritz",
    "category": "Spritz",
    "glass": "Wine Glass",
    "image": getImagesForSlug("limoncello-spritz"),
    "tasteProfile": ["citrusy", "sweet", "refreshing"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Limoncello", "tr": "Limoncello" }, "amount": "2" },
      { "name": { "en": "Prosecco", "tr": "Prosecco" }, "amount": "3" },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Fill a wine glass with ice, add limoncello and prosecco, top with soda water, and garnish with a lemon slice.",
      "tr": "Bir şarap bardağını buzla doldurun, limoncello ve prosecco ekleyin, soda ile tamamlayın ve limon dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Limoncello Spritz is a delightful Italian cocktail that combines the zesty sweetness of limoncello with the effervescence of prosecco. It's a perfect drink for summer afternoons or as a refreshing aperitif before dinner.",
      "tr": "Limoncello Spritz, limoncellonun ferah tatlılığını prosecco’nun köpüklülüğüyle birleştiren keyifli bir İtalyan kokteylidir. Yaz öğleden sonraları veya yemek öncesi ferahlatıcı bir aperitif için mükemmeldir."
    },
    "comment": {
      "en": "Fresh, lively, and a little bit zesty. You’re the person who always brings a burst of energy and positivity to any situation.",
      "tr": "Taze, canlı ve biraz da enerjik. Her ortama pozitiflik ve enerji getiren kişisin."
    },
    "similarCocktails": ["aperol-spritz", "campari-spritz", "spritz"]
  },
  {
    "slug": "campari-spritz",
    "name": "Campari Spritz",
    "category": "Spritz",
    "glass": "Wine Glass",
    "image": getImagesForSlug("campari-spritz"),
    "tasteProfile": ["bitter", "refreshing", "herbal"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Campari", "tr": "Campari" }, "amount": "3" },
      { "name": { "en": "Prosecco", "tr": "Prosecco" }, "amount": "3" },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Fill a wine glass with ice, add Campari and prosecco, top with soda water, and garnish with an orange slice.",
      "tr": "Bir şarap bardağını buzla doldurun, Campari ve prosecco ekleyin, soda ile tamamlayın ve portakal dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Campari Spritz is a vibrant and refreshing cocktail that highlights the bitter and herbal notes of Campari, balanced by the sweetness of prosecco. It's a popular choice for aperitivo in Italy, perfect for sipping on warm evenings.",
      "tr": "Campari Spritz, Campari’nin acı ve bitkisel notalarını prosecco’nun tatlılığıyla dengeleyen canlı ve ferahlatıcı bir kokteyldir. İtalya’da aperitivo için popüler bir seçimdir, sıcak akşamlarda yudumlamak için idealdir."
    },
    "comment": {
      "en": "Bold, sophisticated, and a little bit daring. You’re the person who’s not afraid to stand out and make a statement.",
      "tr": "Cesur, sofistike ve biraz da iddialı. Öne çıkmaktan ve fark yaratmaktan korkmayan kişisin."
    },
    "similarCocktails": ["aperol-spritz", "negroni-spritz", "spritz"]
  },
  {
    "slug": "negroni-spritz",
    "name": "Negroni Spritz",
    "category": "Spritz",
    "glass": "Wine Glass",
    "image": getImagesForSlug("negroni-spritz"),
    "tasteProfile": ["bitter", "refreshing", "herbal"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Campari", "tr": "Campari" }, "amount": "1" },
      { "name": { "en": "Sweet Vermouth", "tr": "Tatlı Vermut" }, "amount": "1" },
      { "name": { "en": "Gin", "tr": "Cin" }, "amount": "1" },
      { "name": { "en": "Prosecco", "tr": "Prosecco" }, "amount": "3" },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Fill a wine glass with ice, add Campari, sweet vermouth, and gin, top with prosecco and soda water, and garnish with an orange slice.",
      "tr": "Bir şarap bardağını buzla doldurun, Campari, tatlı vermut ve cin ekleyin, prosecco ve soda ile tamamlayın, portakal dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Negroni Spritz is a refreshing twist on the classic Negroni, combining the bitter and herbal flavors of Campari, sweet vermouth, and gin with the effervescence of prosecco. It's a perfect aperitif for those who enjoy bold flavors in a lighter format.",
      "tr": "Negroni Spritz, klasik Negroni’nin ferahlatıcı bir yorumudur. Campari, tatlı vermut ve cinin acı-bitkisel aromalarını prosecco’nun köpüklülüğüyle birleştirir. Daha hafif formda güçlü tatlardan hoşlananlar için mükemmel bir aperitiftir."
    },
    "comment": {
      "en": "Complex, intriguing, and a little bit adventurous. You’re the person who loves to explore new flavors and experiences.",
      "tr": "Karmaşık, ilgi çekici ve biraz da maceracı. Yeni tatları ve deneyimleri keşfetmeyi seven kişisin."
    },
    "similarCocktails": ["aperol-spritz", "campari-spritz", "spritz"]
  },
  {
    "slug": "spritz",
    "name": "Spritz",
    "category": "Spritz",
    "glass": "Wine Glass",
    "image": spritz,
    "tasteProfile": ["bitter", "refreshing", "herbal"],
    "measurement": "oz",
    "alcoholLevel": "light",
    "ingredients": [
      { "name": { "en": "Aperol", "tr": "Aperol" }, "amount": "3" },
      { "name": { "en": "Prosecco", "tr": "Prosecco" }, "amount": "3" },
      { "name": { "en": "Soda Water", "tr": "Soda" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Fill a wine glass with ice, add Aperol and prosecco, top with soda water, and garnish with an orange slice.",
      "tr": "Bir şarap bardağını buzla doldurun, Aperol ve prosecco ekleyin, soda ile tamamlayın ve portakal dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Spritz is a classic Italian cocktail that combines the bitter notes of Aperol with the sweetness of prosecco and the refreshing fizz of soda water. It's a staple of Italian aperitivo culture, perfect for sipping on warm afternoons.",
      "tr": "Spritz, Aperol’un acı notalarını prosecco’nun tatlılığı ve sodanın ferahlığıyla birleştiren klasik bir İtalyan kokteylidir. İtalyan aperitivo kültürünün vazgeçilmezidir, sıcak öğleden sonralarında yudumlamak için idealdir."
    },
    "comment": {
      "en": "Vibrant, cheerful, and always ready to celebrate. You’re the person who brings everyone together and keeps the good times rolling.",
      "tr": "Canlı, neşeli ve her zaman kutlamaya hazır. Sen herkesi bir araya getiren ve eğlenceyi sürdüren kişisin."
    },
    "similarCocktails": ["aperol-spritz", "campari-spritz", "negroni-spritz"]
  },
  {
    "slug": "dark-and-stormy",
    "name": "Dark and Stormy",
    "category": "Highball",
    "glass": "Highball",
    "image": getImagesForSlug("dark-and-stormy"),
    "tasteProfile": ["spicy", "refreshing", "gingery"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Dark Rum", "tr": "Koyu Rom" }, "amount": "2" },
      { "name": { "en": "Ginger Beer", "tr": "Zencefilli Bira" }, "amount": "Top up" },
      { "name": { "en": "Lime Juice", "tr": "Misket Limonu Suyu" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Fill a highball glass with ice, add dark rum, top with ginger beer, and squeeze in lime juice. Stir gently and garnish with a lime wedge.",
      "tr": "Bir highball bardağını buzla doldurun, koyu rom ekleyin, zencefilli bira ile tamamlayın ve misket limonu suyu sıkın. Hafifçe karıştırın ve limon dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Dark and Stormy is a classic cocktail that combines the rich flavors of dark rum with the spicy kick of ginger beer. Originating from Bermuda, this drink is perfect for those who enjoy a refreshing yet robust beverage. Its simple ingredients and easy preparation make it a favorite for casual gatherings and beach parties.",
      "tr": "Dark and Stormy, koyu romun zengin aromalarını zencefilli biranın baharatlı dokunuşuyla birleştiren klasik bir kokteyldir. Bermuda kökenli bu içki, ferahlatıcı ama güçlü tatlardan hoşlananlar için idealdir. Basit malzemeleri ve kolay hazırlanışıyla samimi buluşmalar ve plaj partileri için favoridir."
    },
    "comment": {
      "en": "Bold, adventurous, and a little bit mysterious. You’re the person who loves to explore new places and try new things.",
      "tr": "Cesur, maceracı ve biraz da gizemli. Yeni yerler keşfetmeyi ve yeni şeyler denemeyi seven kişisin."
    },
    "similarCocktails": ["moscow-mule", "dark-rum-cocktail", "ginger-rum-fizz"]
  },
  {
    "slug": "moscow-mule",
    "name": "Moscow Mule",
    "category": "Highball",
    "glass": "Copper Mug",
    "image": getImagesForSlug("moscow-mule"),
    "tasteProfile": ["spicy", "refreshing", "gingery"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Vodka", "tr": "Votka" }, "amount": "2" },
      { "name": { "en": "Ginger Beer", "tr": "Zencefilli Bira" }, "amount": "Top up" },
      { "name": { "en": "Lime Juice", "tr": "Misket Limonu Suyu" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Fill a copper mug with ice, add vodka, top with ginger beer, and squeeze in lime juice. Stir gently and garnish with a lime wedge.",
      "tr": "Bakır kupayı buzla doldurun, votka ekleyin, zencefilli bira ile tamamlayın ve misket limonu suyu sıkın. Hafifçe karıştırın ve limon dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Moscow Mule is a refreshing cocktail that combines vodka with spicy ginger beer and a splash of lime juice. Served in a distinctive copper mug, it’s known for its crisp, invigorating taste and is a popular choice for summer gatherings.",
      "tr": "Moscow Mule, votkayı baharatlı zencefilli bira ve misket limonu suyu ile birleştiren ferahlatıcı bir kokteyldir. Kendine özgü bakır kupada servis edilir ve canlandırıcı tadıyla yaz buluşmalarında popülerdir."
    },
    "comment": {
      "en": "Cool, laid-back, and always in style. You’re the person who knows how to keep things casual yet classy.",
      "tr": "Havalı, rahat ve her zaman stil sahibi. Sen işleri sade ama şık tutmayı bilen kişisin."
    },
    "similarCocktails": ["dark-and-stormy", "ginger-rum-fizz", "vodka-tonic"]
  },
  {
    "slug": "dark-rum-cocktail",
    "name": "Dark Rum Cocktail",
    "category": "Tiki",
    "glass": "Highball",
    "image": getImagesForSlug("dark-rum-cocktail"),
    "tasteProfile": ["spicy", "rich", "smooth"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Dark Rum", "tr": "Koyu Rom" }, "amount": "2" },
      { "name": { "en": "Lime Juice", "tr": "Misket Limonu Suyu" }, "amount": "0.5" },
      { "name": { "en": "Simple Syrup", "tr": "Şeker Şurubu" }, "amount": "0.5" },
      { "name": { "en": "Ginger Beer", "tr": "Zencefilli Bira" }, "amount": "Top up" }
    ],
    "instructions": {
      "en": "Fill a highball glass with ice, add dark rum, lime juice, and simple syrup. Top with ginger beer and stir gently. Garnish with a lime wedge.",
      "tr": "Bir highball bardağını buzla doldurun, koyu rom, misket limonu suyu ve şeker şurubu ekleyin. Zencefilli bira ile tamamlayın, hafifçe karıştırın ve limon dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Dark Rum Cocktail is a smooth and spicy drink that highlights the rich flavors of dark rum. With a hint of lime and the refreshing kick of ginger beer, it’s perfect for those who enjoy a robust yet balanced cocktail.",
      "tr": "Dark Rum Cocktail, koyu romun zengin aromalarını öne çıkaran yumuşak ve baharatlı bir içkidir. Misket limonu dokunuşu ve zencefilli biranın ferahlığı ile dengeli ama güçlü tatlardan hoşlananlar için idealdir."
    },
    "comment": {
      "en": "Rich, smooth, and a little bit adventurous. You’re the person who enjoys the finer things in life and isn’t afraid to try new experiences.",
      "tr": "Zengin, pürüzsüz ve biraz da maceracı. Hayattaki güzel şeylerden zevk alan ve yeni deneyimlerden korkmayan kişisin."
    },
    "similarCocktails": ["dark-and-stormy", "ginger-rum-fizz", "moscow-mule"]
  },
  {
    "slug": "ginger-rum-fizz",
    "name": "Ginger Rum Fizz",
    "category": "Highball",
    "glass": "Highball",
    "image": getImagesForSlug("ginger-rum-fizz"),
    "tasteProfile": ["spicy", "refreshing", "gingery"],
    "measurement": "oz",
    "alcoholLevel": "medium",
    "ingredients": [
      { "name": { "en": "Dark Rum", "tr": "Koyu Rom" }, "amount": "2" },
      { "name": { "en": "Ginger Beer", "tr": "Zencefilli Bira" }, "amount": "Top up" },
      { "name": { "en": "Lime Juice", "tr": "Misket Limonu Suyu" }, "amount": "0.5" }
    ],
    "instructions": {
      "en": "Fill a highball glass with ice, add dark rum, top with ginger beer, and squeeze in lime juice. Stir gently and garnish with a lime wedge.",
      "tr": "Bir highball bardağını buzla doldurun, koyu rom ekleyin, zencefilli bira ile tamamlayın ve misket limonu suyu sıkın. Hafifçe karıştırın ve limon dilimiyle süsleyin."
    },
    "introduction": {
      "en": "The Ginger Rum Fizz is a delightful cocktail that combines the warmth of dark rum with the spicy kick of ginger beer. It’s a refreshing drink that’s perfect for any occasion, especially during warm weather.",
      "tr": "Ginger Rum Fizz, koyu romun sıcaklığını zencefilli biranın baharatlı dokunuşuyla birleştiren keyifli bir kokteyldir. Özellikle sıcak havalarda her ortam için ferahlatıcı bir seçenektir."
    },
    "comment": {
      "en": "Spicy, lively, and a little bit adventurous. You’re the person who loves to explore new flavors and experiences.",
      "tr": "Baharatlı, canlı ve biraz da maceracı. Yeni tatları ve deneyimleri keşfetmeyi seven kişisin."
    },
    "similarCocktails": ["dark-and-stormy", "moscow-mule", "dark-rum-cocktail"]
  }
]
export default cocktails;