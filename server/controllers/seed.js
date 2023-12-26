const MongoDB = require("../utils/mongo");

const data = [
  {
    _id: "21a8536db2f54b6a8db796cc",
    title: "Astral Harmonics",
    artist: "Celestial Sounds",
    album: "Starlight Symphony",
    imageUrl: "https://picsum.photos/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
  },
  {
    _id: "8f4a2e71b7d44b8d8911c3d6",
    title: "Celestial Beats",
    artist: "Galactic Groove",
    album: "Cosmic Rhythms",
    imageUrl: "https://picsum.photos/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    _id: "6a59e8d5c1764d97bf8f0a9d",
    title: "Mystical Serenade",
    artist: "Enigmatic Ensemble",
    album: "Enchanted Echoes",
    imageUrl: "https://picsum.photos/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
  {
    _id: "cdafe5f5db24455b976a611b",
    title: "Rhythmic Odyssey",
    artist: "Pulsating Beats",
    album: "Drum Voyage",
    imageUrl: "https://picsum.photos/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
  },
  {
    _id: "65897e748acd783bb3b7ede0",
    title: "Song 1",
    artist: "Artist 1",
    album: "Album 1",
    imageUrl: "https://picsum.photos/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    _id: "d65cb2b2a8f54dddb5420847",
    title: "Sonic Dreamscapes",
    artist: "Aural Visionaries",
    album: "Harmonic Dreams",
    imageUrl: "https://picsum.photos/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
  },
  {
    _id: "e3a8bcfac74845f3a8f1125a",
    title: "Whispers in the Wind",
    artist: "Breeze Ensemble",
    album: "Nature's Lullaby",
    imageUrl: "https://picsum.photos/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
  },
  {
    _id: "bb92c59e3f314a7593a9b729",
    title: "Zen Melodies",
    artist: "Tranquility Ensemble",
    album: "Peaceful Harmonies",
    imageUrl: "https://picsum.photos/200",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
  },
];

// if there is no tracks in the database then seed data
const seedData = async () => {
  try {
    const coll = await MongoDB.getCollection("tracks");
    const result = await coll.find().toArray();
    if (result.length === 0) {
      await coll.insertMany(data);
      console.log("Data seeded successfully");
    }

    console.log("Data already exists");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  seedData,
};
