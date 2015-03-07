var lists = (function(){

  //this way, data is encapsualated and made private - this is the client-side module
  //pattern through an IIFE

  var pubWords = {
    noun: ["Anchor", "Angel", "Apple", "Arrow", "Ball", "Bayonet", "Bear", "Bell", "Bicycle", "Boar", "Boot", "Bottle", "Bow", "Brick", "Bull", "Candle", "Cane", "Cat", "Chandelier", "Cheese", "Chip", "Clock", "Cock", "Cricket", "Cross", "Crow", "Cup", "Dog", "Dolphin", "Donkey", "Door", "Dragon", "Duck", "Eagle", "Feather", "Fella", "Fiddle", "Fife", "Flag", "Flute", "Frog", "Gauntlet", "Goat", "Goblet", "Goose", "Grape", "Gun", "Hare", "Harp", "Hart", "Hat", "Hawk", "Hen", "Horse", "Hound", "Key", "Lamb", "Lamp", "Lance", "Lyre", "Mill", "Mirror", "Moon", "Moose", "Nightingale", "Pen", "Plow", "Quill", "Rabbit", "Ram", "Raven", "Rooster", "Sardine", "Sceptre", "Scroll", "Shield", "Ship", "Staff", "Stag", "Stallion", "Star", "Stone", "Sun", "Swan", "Sword", "Violin", "Wagon"],
    famousPerson: ["Charles", "Chaucer", "Churchill", "David", "Diana", "Dickens", "Dumbledore", "Edward", "Elizabeth", "Faulkner", "George", "Grace", "Harry Potter", "Henry", "Hodor", "James", "Jane Austen", "Jon Snow", "Kate", "Leo", "Louise", "Mary", "Misifu", "Nelson", "Newton", "Philip", "Rylan", "Shakespeare", "Sherlock", "Snozza", "Twain", "Tywin", "Victoria", "William"],
    profession: ["Alchemist", "Archer", "Baker", "Banker", "Barber", "Barista", "Barrister", "Barrowboy", "Basketmaker", "Beggar", "Blacksmith", "Brewer", "Butcher", "Butler", "Candlemaker", "Captain", "Cooper", "Dame", "Doctor", "Duchess", "Duke", "Emperor", "Empress", "Factorygirl", "Farmer", "Fiddler", "Foreman", "Gardener", "Geezer", "Hatmaker", "Hunter", "Innkeep", "Jester", "Jockey", "Judge", "King", "Knight", "Lady", "Locksmith", "Lord", "Maiden", "Mermaid", "Millner", "Minister", "Pharmacist", "Physician", "Playwright", "Plowman", "Plumber", "Poet", "Postman", "Prince", "Princess", "Puppeteer", "Queen", "Sailor", "Schoolteacher", "Shoemaker", "Solicitor", "Tailor", "Toffeemaker", "Veterinarian", "Warden", "Writer"],
    number: ["Eight", "Eleven", "Fifteen", "Five", "Four", "Fourteen", "Nine", "Seven", "Six", "Ten", "Thirteen", "Three", "Twelve"],
    describer: ["Bent", "Black", "Cockney", "Copper", "Crooked", "Dancing", "English", "Famous", "Fighting", "Free", "Golden", "Green", "Jolly", "Laughing", "Metal", "Old", "Prancing", "Red", "Ruby", "Rusty", "Scottish", "Singing", "Sleepy", "Silver", "White", "Wild", "Wooden", "Yellow", "Young"],
    place: ["Abbey", "Arms", "Bridge", "Brook", "Canyon", "Castle", "Close", "Common", "Corner", "Cove", "Eves", "Farm", "Field", "Gate", "Garden", "Green", "Hall", "Hearth", "Haven", "Hollow", "House", "Market", "Hill", "Hotel", "Inn", "Island", "Mountain", "Oaks", "Palace", "Path", "Port", "River", "Room", "Spring", "Square", "Stable", "Tavern", "Theatre", "Valley", "Village", "Wharf", "Woods", "Yard"],
    city: ["Bath", "Bermondsey", "Bristol", "Brixton", "Cambridge", "Camden", "Canterbury", "Cardiff", "Chelsea", "Clapham", "Cockfosters", "Coventry", "Cumbria", "Dublin", "Edinburgh", "Essex", "Exmouth", "Glasgow", "Gloucester", "Hackney", "Islington", "Kensington", "Lancaster", "Leeds", "Liverpool", "London", "Manchester", "Mayfair", "Newcastle", "Norfolk", "Nottingham", "Oxford", "Plymouth", "Portsmouth", "Shoreditch", "Soho", "Surrey", "Sussex", "Tottenham", "Wales", "Wellington", "Wenlock", "Westminster", "Winchester", "Yorkshire"],
    formula: ["city", "city noun", "city place", "describer place", "describer profession", "famousPerson", "noun", "noun noun", "number noun", "number profession", "place", "profession", "profession city", "profession noun", "profession profession"]
  }

  return {
    random: function(list) {
              var index = Math.floor(Math.random() * pubWords[list].length);
              return pubWords[list][index];
            }
  }

}());
