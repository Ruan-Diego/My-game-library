games = Game.create([
  { 
    name: "Valorant",
    image_url: "https://i.pinimg.com/originals/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg",
    valor: 0
  },
  { 
    name: "Overwatch",
    image_url: "https://www.pngall.com/wp-content/uploads/15/Overwatch-2-Logo-PNG-Images.png",
    valor: 0
  },
  { 
    name: "Dave The Diver",
    image_url: "https://media.vgm.io/products/34/17943/17943-1730478578.png",
    valor: 45
  },
  { 
    name: "Baldur's Gate III",
    image_url: "https://cdn2.steamgriddb.com/logo/a9d4a0a256f5e6ae0452039e3493f22c.png",
    valor: 200
  },
  { 
    name: "Valorant",
    image_url: "https://i.pinimg.com/originals/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg",
    valor: 0
  },
  { 
    name: "Overwatch",
    image_url: "https://www.pngall.com/wp-content/uploads/15/Overwatch-2-Logo-PNG-Images.png",
    valor: 0
  },
  { 
    name: "Dave The Diver",
    image_url: "https://media.vgm.io/products/34/17943/17943-1730478578.png",
    valor: 45
  },
  { 
    name: "Baldur's Gate III",
    image_url: "https://cdn2.steamgriddb.com/logo/a9d4a0a256f5e6ae0452039e3493f22c.png",
    valor: 200
  },
  { 
    name: "Valorant",
    image_url: "https://i.pinimg.com/originals/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg",
    valor: 0
  },
  { 
    name: "Overwatch",
    image_url: "https://www.pngall.com/wp-content/uploads/15/Overwatch-2-Logo-PNG-Images.png",
    valor: 0
  },
  { 
    name: "Dave The Diver",
    image_url: "https://media.vgm.io/products/34/17943/17943-1730478578.png",
    valor: 45
  },
  { 
    name: "Baldur's Gate III",
    image_url: "https://cdn2.steamgriddb.com/logo/a9d4a0a256f5e6ae0452039e3493f22c.png",
    valor: 200
  },
  { 
    name: "Valorant",
    image_url: "https://i.pinimg.com/originals/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg",
    valor: 0
  },
  { 
    name: "Overwatch",
    image_url: "https://www.pngall.com/wp-content/uploads/15/Overwatch-2-Logo-PNG-Images.png",
    valor: 0
  },
  { 
    name: "Dave The Diver",
    image_url: "https://media.vgm.io/products/34/17943/17943-1730478578.png",
    valor: 45
  },
  { 
    name: "Baldur's Gate III",
    image_url: "https://cdn2.steamgriddb.com/logo/a9d4a0a256f5e6ae0452039e3493f22c.png",
    valor: 200
  },
  { 
    name: "Valorant",
    image_url: "https://i.pinimg.com/originals/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg",
    valor: 0
  },
  { 
    name: "Overwatch",
    image_url: "https://www.pngall.com/wp-content/uploads/15/Overwatch-2-Logo-PNG-Images.png",
    valor: 0
  },
  { 
    name: "Dave The Diver",
    image_url: "https://media.vgm.io/products/34/17943/17943-1730478578.png",
    valor: 45
  },
  { 
    name: "Baldur's Gate III",
    image_url: "https://cdn2.steamgriddb.com/logo/a9d4a0a256f5e6ae0452039e3493f22c.png",
    valor: 200
  },
  
])

reviews = Review.create([
  {
    title: 'Great Game!',
    description: 'Make a replay system now!!',
    score: 5,
    game: games.first
  },
  {
    title: 'What a horrible Game!',
    description: 'pls uninstall this boring thing',
    score: 2,
    game: games.first
  },
  {
    title: 'Great Game!',
    description: 'Come back lootboxes!',
    score: 5,
    game: games.second
  },
  {
    title: 'Great Game!',
    description: 'nerf widow',
    score: 5,
    game: games.second
  }
])