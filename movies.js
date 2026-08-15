// Mercury Movies - movies.js
// Catalog only. Add playback URLs only for movies you have permission to distribute.

const movies = [
  // =========================
  // 2025 / NEW RELEASES
  // =========================
  {
    name: "A Minecraft Movie",
    year: 2025,
    genre: "Adventure",
    category: "New Releases",
    url: ""
  },
  {
    name: "Ad Vitam",
    year: 2025,
    genre: "Action",
    category: "New Releases",
    url: ""
  },
  {
    name: "Alarum",
    year: 2025,
    genre: "Action",
    category: "New Releases",
    url: ""
  },
  {
    name: "Back in Action",
    year: 2025,
    genre: "Action",
    category: "New Releases",
    url: ""
  },
  {
    name: "Ballerina",
    year: 2025,
    genre: "Action",
    category: "New Releases",
    url: ""
  },
  {
    name: "Bank of Dave 2: The Loan Ranger",
    year: 2025,
    genre: "Comedy",
    category: "New Releases",
    url: ""
  },
  {
    name: "Batman Ninja vs. Yakuza League",
    year: 2025,
    genre: "Animation",
    category: "New Releases",
    url: ""
  },
  {
    name: "Captain America: Brave New World",
    year: 2025,
    genre: "Action",
    category: "Marvel",
    url: ""
  },
  {
    name: "Den of Thieves 2: Pantera",
    year: 2025,
    genre: "Action",
    category: "New Releases",
    url: ""
  },
  {
    name: "Dog Man",
    year: 2025,
    genre: "Animation",
    category: "New Releases",
    url: ""
  },
  {
    name: "Henry Danger: The Movie",
    year: 2025,
    genre: "Adventure",
    category: "New Releases",
    url: ""
  },
  {
    name: "How to Train Your Dragon",
    year: 2025,
    genre: "Adventure",
    category: "New Releases",
    url: ""
  },
  {
    name: "Jurassic World Rebirth",
    year: 2025,
    genre: "Adventure",
    category: "New Releases",
    url: ""
  },
  {
    name: "Last Breath",
    year: 2025,
    genre: "Thriller",
    category: "New Releases",
    url: ""
  },
  {
    name: "M3GAN 2.0",
    year: 2025,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Mickey 17",
    year: 2025,
    genre: "Sci-Fi",
    category: "New Releases",
    url: ""
  },
  {
    name: "Novocaine",
    year: 2025,
    genre: "Action",
    category: "New Releases",
    url: ""
  },
  {
    name: "Plankton: The Movie",
    year: 2025,
    genre: "Animation",
    category: "New Releases",
    url: ""
  },
  {
    name: "Popeye the Slayer Man",
    year: 2025,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Snow White",
    year: 2025,
    genre: "Fantasy",
    category: "New Releases",
    url: ""
  },
  {
    name: "Star Trek: Section 31",
    year: 2025,
    genre: "Sci-Fi",
    category: "Star Trek",
    url: ""
  },
  {
    name: "Superman",
    year: 2025,
    genre: "Superhero",
    category: "DC",
    url: ""
  },
  {
    name: "The Electric State",
    year: 2025,
    genre: "Sci-Fi",
    category: "New Releases",
    url: ""
  },

  // =========================
  // DISNEY / PIXAR
  // =========================
  {
    name: "Cars",
    year: 2006,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Hercules",
    year: 1997,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Coco",
    year: 2017,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Encanto",
    year: 2021,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Finding Nemo",
    year: 2003,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Frozen II",
    year: 2019,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "The Incredibles",
    year: 2004,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "The Incredibles 2",
    year: 2018,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Inside Out",
    year: 2015,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Inside Out 2",
    year: 2024,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Maleficent",
    year: 2014,
    genre: "Fantasy",
    category: "Disney",
    url: ""
  },
  {
    name: "Moana",
    year: 2016,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Moana 2",
    year: 2024,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Monsters, Inc.",
    year: 2001,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Luca",
    year: 2021,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Peter Pan",
    year: 1953,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Tangled",
    year: 2010,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Ratatouille",
    year: 2007,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "The Good Dinosaur",
    year: 2015,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "The Princess and the Frog",
    year: 2009,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "The Lion King",
    year: 1994,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Toy Story",
    year: 1995,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Toy Story 2",
    year: 1999,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Toy Story 3",
    year: 2010,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Toy Story 4",
    year: 2019,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "WALL-E",
    year: 2008,
    genre: "Animation",
    category: "Pixar",
    url: ""
  },
  {
    name: "Zootopia",
    year: 2016,
    genre: "Animation",
    category: "Disney",
    url: ""
  },
  {
    name: "Home Alone",
    year: 1990,
    genre: "Comedy",
    category: "Family",
    url: ""
  },
  {
    name: "Home Alone 2",
    year: 1992,
    genre: "Comedy",
    category: "Family",
    url: ""
  },

  // =========================
  // MARVEL
  // =========================
  {
    name: "Iron Man",
    year: 2008,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Iron Man 2",
    year: 2010,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Iron Man 3",
    year: 2013,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "The Avengers",
    year: 2012,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Avengers: Age of Ultron",
    year: 2015,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Avengers: Infinity War",
    year: 2018,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Avengers: Endgame",
    year: 2019,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Ant-Man and the Wasp",
    year: 2018,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Black Panther",
    year: 2018,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Deadpool",
    year: 2016,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Deadpool 2",
    year: 2018,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Deadpool & Wolverine",
    year: 2024,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Doctor Strange",
    year: 2016,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Guardians of the Galaxy Vol. 3",
    year: 2023,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Shang-Chi and the Legend of the Ten Rings",
    year: 2021,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Thor: The Dark World",
    year: 2013,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Venom",
    year: 2018,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Venom: Let There Be Carnage",
    year: 2021,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },
  {
    name: "Venom: The Last Dance",
    year: 2024,
    genre: "Superhero",
    category: "Marvel",
    url: ""
  },

  // =========================
  // SPIDER-MAN
  // =========================
  {
    name: "Spider-Man",
    year: 2002,
    genre: "Superhero",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "Spider-Man 2",
    year: 2004,
    genre: "Superhero",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "Spider-Man 3",
    year: 2007,
    genre: "Superhero",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "The Amazing Spider-Man",
    year: 2012,
    genre: "Superhero",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "The Amazing Spider-Man 2",
    year: 2014,
    genre: "Superhero",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "Spider-Man: Homecoming",
    year: 2017,
    genre: "Superhero",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "Spider-Man: Far From Home",
    year: 2019,
    genre: "Superhero",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "Spider-Man: No Way Home",
    year: 2021,
    genre: "Superhero",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation",
    category: "Spider-Man",
    url: ""
  },
  {
    name: "Spider-Man: Across the Spider-Verse",
    year: 2023,
    genre: "Animation",
    category: "Spider-Man",
    url: ""
  },

  // =========================
  // STAR WARS
  // =========================
  {
    name: "Star Wars: The Phantom Menace",
    year: 1999,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Star Wars: Attack of the Clones",
    year: 2002,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Star Wars: Revenge of the Sith",
    year: 2005,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Star Wars: A New Hope",
    year: 1977,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Star Wars: The Empire Strikes Back",
    year: 1980,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Star Wars: The Force Awakens",
    year: 2015,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Star Wars: The Last Jedi",
    year: 2017,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Star Wars: The Rise of Skywalker",
    year: 2019,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Rogue One: A Star Wars Story",
    year: 2016,
    genre: "Sci-Fi",
    category: "Star Wars",
    url: ""
  },
  {
    name: "Star Wars: The Clone Wars",
    year: 2008,
    genre: "Animation",
    category: "Star Wars",
    url: ""
  },

  // =========================
  // GODZILLA
  // =========================
  {
    name: "Godzilla",
    year: 1984,
    genre: "Kaiju",
    category: "Godzilla",
    url: ""
  },
  {
    name: "Godzilla: Final Wars",
    year: 2004,
    genre: "Kaiju",
    category: "Godzilla",
    url: ""
  },
  {
    name: "Shin Godzilla",
    year: 2016,
    genre: "Kaiju",
    category: "Godzilla",
    url: ""
  },
  {
    name: "Godzilla: King of the Monsters",
    year: 2019,
    genre: "Kaiju",
    category: "Godzilla",
    url: ""
  },

  // =========================
  // HORROR
  // =========================
  {
    name: "Nosferatu",
    year: 1922,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "The Shining",
    year: 1980,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "It",
    year: 1990,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Scream",
    year: 1996,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Scream 2",
    year: 1997,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Scream 3",
    year: 2000,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Scream VI",
    year: 2023,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Friday the 13th",
    year: 1980,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Friday the 13th Part 2",
    year: 1981,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "A Nightmare on Elm Street",
    year: 1984,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Halloween II",
    year: 1981,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Halloween III: Season of the Witch",
    year: 1982,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Halloween H20",
    year: 1998,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Halloween",
    year: 2007,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Halloween",
    year: 2018,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Halloween Kills",
    year: 2021,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Halloween Ends",
    year: 2022,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "A Quiet Place",
    year: 2018,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "The Evil Dead",
    year: 1981,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Evil Dead II",
    year: 1987,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Army of Darkness",
    year: 1992,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Child's Play",
    year: 1988,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Child's Play 2",
    year: 1990,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Child's Play 3",
    year: 1991,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Bride of Chucky",
    year: 1998,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Seed of Chucky",
    year: 2004,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "The Purge",
    year: 2013,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "The Purge: Anarchy",
    year: 2014,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "The Forever Purge",
    year: 2021,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Gremlins",
    year: 1984,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Gremlins 2",
    year: 1990,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Jaws",
    year: 1975,
    genre: "Thriller",
    category: "Horror",
    url: ""
  },
  {
    name: "Jaws 2",
    year: 1978,
    genre: "Thriller",
    category: "Horror",
    url: ""
  },
  {
    name: "The Thing",
    year: 1982,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "The Conjuring",
    year: 2013,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "The Conjuring 2",
    year: 2016,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Insidious",
    year: 2010,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Paranormal Activity",
    year: 2007,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Saw",
    year: 2004,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Saw II",
    year: 2005,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Saw III",
    year: 2006,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Saw IV",
    year: 2007,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Saw V",
    year: 2008,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Saw VI",
    year: 2009,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Saw: The Final Chapter",
    year: 2010,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Jigsaw",
    year: 2017,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Spiral: From the Book of Saw",
    year: 2021,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Saw X",
    year: 2023,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Terrifier",
    year: 2016,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Terrifier 2",
    year: 2022,
    genre: "Horror",
    category: "Horror",
    url: ""
  },
  {
    name: "Terrifier 3",
    year: 2024,
    genre: "Horror",
    category: "Horror",
    url: ""
  },

  // =========================
  // JURASSIC PARK
  // =========================
  {
    name: "Jurassic Park",
    year: 1993,
    genre: "Adventure",
    category: "Jurassic Park",
    url: ""
  },
  {
    name: "The Lost World: Jurassic Park",
    year: 1997,
    genre: "Adventure",
    category: "Jurassic Park",
    url: ""
  },
  {
    name: "Jurassic Park III",
    year: 2001,
    genre: "Adventure",
    category: "Jurassic Park",
    url: ""
  },
  {
    name: "Jurassic World",
    year: 2015,
    genre: "Adventure",
    category: "Jurassic Park",
    url: ""
  },
  {
    name: "Jurassic World Dominion",
    year: 2022,
    genre: "Adventure",
    category: "Jurassic Park",
    url: ""
  },

  // =========================
  // TRANSFORMERS
  // =========================
  {
    name: "Transformers",
    year: 2007,
    genre: "Action",
    category: "Transformers",
    url: ""
  },
  {
    name: "Transformers: Revenge of the Fallen",
    year: 2009,
    genre: "Action",
    category: "Transformers",
    url: ""
  },
  {
    name: "Transformers: Dark of the Moon",
    year: 2011,
    genre: "Action",
    category: "Transformers",
    url: ""
  },
  {
    name: "Transformers: Age of Extinction",
    year: 2014,
    genre: "Action",
    category: "Transformers",
    url: ""
  },
  {
    name: "Transformers: The Last Knight",
    year: 2017,
    genre: "Action",
    category: "Transformers",
    url: ""
  },
  {
    name: "Transformers: Rise of the Beasts",
    year: 2023,
    genre: "Action",
    category: "Transformers",
    url: ""
  },
  {
    name: "Transformers One",
    year: 2024,
    genre: "Animation",
    category: "Transformers",
    url: ""
  },

  // =========================
  // KUNG FU PANDA
  // =========================
  {
    name: "Kung Fu Panda",
    year: 2008,
    genre: "Animation",
    category: "Kung Fu Panda",
    url: ""
  },
  {
    name: "Kung Fu Panda 2",
    year: 2011,
    genre: "Animation",
    category: "Kung Fu Panda",
    url: ""
  },
  {
    name: "Kung Fu Panda 3",
    year: 2016,
    genre: "Animation",
    category: "Kung Fu Panda",
    url: ""
  },
  {
    name: "Kung Fu Panda 4",
    year: 2024,
    genre: "Animation",
    category: "Kung Fu Panda",
    url: ""
  },

  // =========================
  // FAST & FURIOUS
  // =========================
  {
    name: "The Fast and the Furious",
    year: 2001,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },
  {
    name: "2 Fast 2 Furious",
    year: 2003,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },
  {
    name: "The Fast and the Furious: Tokyo Drift",
    year: 2006,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },
  {
    name: "Fast & Furious",
    year: 2009,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },
  {
    name: "Fast & Furious 6",
    year: 2013,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },
  {
    name: "Furious 7",
    year: 2015,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },
  {
    name: "The Fate of the Furious",
    year: 2017,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },
  {
    name: "Hobbs & Shaw",
    year: 2019,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },
  {
    name: "Fast X",
    year: 2023,
    genre: "Action",
    category: "Fast & Furious",
    url: ""
  },

  // =========================
  // GHOSTBUSTERS
  // =========================
  {
    name: "Ghostbusters",
    year: 1984,
    genre: "Comedy",
    category: "Ghostbusters",
    url: ""
  },
  {
    name: "Ghostbusters II",
    year: 1989,
    genre: "Comedy",
    category: "Ghostbusters",
    url: ""
  },
  {
    name: "Ghostbusters: Frozen Empire",
    year: 2024,
    genre: "Comedy",
    category: "Ghostbusters",
    url: ""
  },

  // =========================
  // TMNT
  // =========================
  {
    name: "Teenage Mutant Ninja Turtles III",
    year: 1993,
    genre: "Action",
    category: "TMNT",
    url: ""
  },
  {
    name: "TMNT",
    year: 2007,
    genre: "Animation",
    category: "TMNT",
    url: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles",
    year: 2014,
    genre: "Action",
    category: "TMNT",
    url: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles: Out of the Shadows",
    year: 2016,
    genre: "Action",
    category: "TMNT",
    url: ""
  },
  {
    name: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    year: 2023,
    genre: "Animation",
    category: "TMNT",
    url: ""
  },

  // =========================
  // HARRY POTTER
  // =========================
  {
    name: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    genre: "Fantasy",
    category: "Harry Potter",
    url: ""
  },
  {
    name: "Harry Potter and the Chamber of Secrets",
    year: 2002,
    genre: "Fantasy",
    category: "Harry Potter",
    url: ""
  },
  {
    name: "Harry Potter and the Prisoner of Azkaban",
    year: 2004,
    genre: "Fantasy",
    category: "Harry Potter",
    url: ""
  },
  {
    name: "Harry Potter and the Goblet of Fire",
    year: 2005,
    genre: "Fantasy",
    category: "Harry Potter",
    url: ""
  },
  {
    name: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    genre: "Fantasy",
    category: "Harry Potter",
    url: ""
  },
  {
    name: "Harry Potter and the Half-Blood Prince",
    year: 2009,
    genre: "Fantasy",
    category: "Harry Potter",
    url: ""
  },
  {
    name: "Harry Potter and the Deathly Hallows: Part 1",
    year: 2010,
    genre: "Fantasy",
    category: "Harry Potter",
    url: ""
  },
  {
    name: "Harry Potter and the Deathly Hallows: Part 2",
    year: 2011,
    genre: "Fantasy",
    category: "Harry Potter",
    url: ""
  },

  // =========================
  // JOHN WICK
  // =========================
  {
    name: "John Wick",
    year: 2014,
    genre: "Action",
    category: "John Wick",
    url: ""
  },
  {
    name: "John Wick: Chapter 2",
    year: 2017,
    genre: "Action",
    category: "John Wick",
    url: ""
  },
  {
    name: "John Wick: Chapter 3",
    year: 2019,
    genre: "Action",
    category: "John Wick",
    url: ""
  },
  {
    name: "John Wick: Chapter 4",
    year: 2023,
    genre: "Action",
    category: "John Wick",
    url: ""
  }
];

// Export for Mercury Movies
if (typeof module !== "undefined" && module.exports) {
  module.exports = movies;
}
