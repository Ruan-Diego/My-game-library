games = Game.create([
  { 
    name: "Valorant",
    image_url: "https://i.pinimg.com/originals/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg"
  }, 
  { 
    name: "Southwest",
    image_url: "https://open-flights.s3.amazonaws.com/Southwest-Airlines.png"
  },
  { 
    name: "Delta",
    image_url: "https://open-flights.s3.amazonaws.com/Delta.png" 
  }, 
  { 
    name: "Alaska Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/Alaska-Airlines.png" 
  }, 
  { 
    name: "JetBlue",
    image_url: "https://open-flights.s3.amazonaws.com/JetBlue.png" 
  }, 
  { 
    name: "American Airlines",
    image_url: "https://open-flights.s3.amazonaws.com/American-Airlines.png" 
  }
])

reviews = Review.create([
  {
    title: 'Great Game!',
    description: 'Make a replay system now!!',
    score: 4,
    game: games.first
  },
  {
    title: 'What a horrible Game!',
    description: 'pls uninstall this boring thing',
    score: 1,
    game: games.first
  }
])