import "./App.css";
import { useState } from "react";

const tempMusicData = [
  {
    id: 1,
    title: "eternal sunshine",
    artist: "Ariana Grande",
    genre: "Pop, R&B",
  },
  {
    id: 2,
    title: "we can't be friends",
    artist: "Ariana Grande",
    genre: "Pop, R&B",
  },
  {
    id: 3,
    title: "imperfect for you",
    artist: "Ariana Grande",
    genre: "Pop, R&B",
  },
  {
    id: 4,
    title: "Treacherous Doctor",
    artist: "Wallows",
    genre: "Alt/Indie",
  },
  {
    id: 5,
    title: "1980's Horror Film II",
    artist: "Wallows",
    genre: "Alt/Indie",
  },
  {
    id: 6,
    title: "love.",
    artist: "Wave to Earth",
    genre: "Alt/Rock",
  },
  {
    id: 7,
    title: "You're on Your Own, Kid",
    artist: "Taylor Swift",
    genre: "Pop",
  },
  {
    id: 8,
    title: "Labyrinth",
    artist: "Taylor Swift",
    genre: "Pop",
  },
  {
    id: 9,
    title: "MONTAGEM - PR FUNK",
    artist: "S3BZS, Mc Gw, Mc Menor Do Alvorada",
    genre: "Funk",
  },
  {
    id: 10,
    title: "Afterthought",
    artist: "Joji",
    genre: "Alt/Indie",
  },
  {
    id: 11,
    title: "Lahat Ng Bukas",
    artist: "Cup of Joe, Keannna Mag",
    genre: "OPM",
  },
  {
    id: 12,
    title: "Love Language",
    artist: "SZA",
    genre: "R&B",
  },
  {
    id: 13,
    title: "Good Days",
    artist: "SZA",
    genre: "R&B",
  },
  {
    id: 14,
    title: "Blinded",
    artist: "Fern.",
    genre: "Pop",
  },
  {
    id: 15,
    title: "Sinta",
    artist: "CLUBS",
    genre: "OPM",
  },
  {
    id: 16,
    title: "Sinta",
    artist: "Rob Deniel",
    genre: "OPM",
  },
  {
    id: 17,
    title: "Sinta,",
    artist: "Rhodessa",
    genre: "OPM",
  },
  {
    id: 18,
    title: "Estranghero",
    artist: "Cup of Joe",
    genre: "OPM",
  },
  {
    id: 19,
    title: "Espresso",
    artist: "Sabrina Carpenter",
    genre: "Pop",
  },
  {
    id: 20,
    title: "Ctrl + Esc",
    artist: "Project Orange",
    genre: "Alt/Indie",
  },
];

const tempPlaylist = [];

function App() {
  const [music, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const [query, setQuery] = useState("");

  const addToPlaylist = (music) => {
    const isDuplicate = playlist.some((song) => song.id === music.id);

    if (!isDuplicate) {
      setPlaylist([...playlist, music]);
    }
  };

  const removeFromPlaylist = (id) => {
    setPlaylist(playlist.filter((song) => song.id !== id));
  };

  const searchMusic = music.filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <NavBar setQuery={setQuery}>
        <NumberResult music={searchMusic} />
      </NavBar>
      <Search query={query} setQuery={setQuery} />
      <Main>
        <div className="music-container">
          <Box>
            <Music music={searchMusic} addToPlaylist={addToPlaylist} />
          </Box>
        </div>

        <div className="playlist-container">
          <Box>
            <Playlist
              playlist={playlist}
              removeFromPlaylist={removeFromPlaylist}
            />
          </Box>
        </div>
      </Main>
    </>
  );
}

function NavBar({ children, query, setQuery, searchMusic }) {
  return (
    <nav className="container">
      <Logo />
      <div className="nav-info">{children}</div>
    </nav>
  );
}

function Logo() {
  return <h1>Music App Logo</h1>;
}

function NumberResult({ music }) {
  return (
    <p className="found">
      Found <strong>{music.length}</strong> results
    </p>
  );
}

function Search({ query, setQuery }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Search Music.."
      value={query}
      onChange={(e) => setQuery(e.target.value)} // corrected the event to onChange
    />
  );
}

function Music({ music, addToPlaylist }) {
  return (
    <div className="music-list">
      <ul>
        {music.length > 0 && <h2>Music List</h2>}
        {music.map((song) => (
          <li key={song.id} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ marginRight: "10px" }}>
              <button
                style={{ alignItems: "center" }}
                onClick={() => addToPlaylist(song)}
              >
                ❤️
              </button>
            </div>
            <div style={{ marginRight: "10px" }}>
              {song.title} by {song.artist} ({song.genre})
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Box({ children }) {
  return <div className="container">{children}</div>;
}

function Playlist({ playlist, removeFromPlaylist }) {
  return (
    <div className="playlist">
      <h2 style={{ marginLeft: "10px" }}>Playlist</h2>
      <ul style={{ paddingLeft: "10px", listStyleType: "none" }}>
        {playlist.map((song) => (
          <li
            key={song.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <button
              style={{
                marginRight: "10px",
                fontSize: "16px",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => removeFromPlaylist(song.id)}
            >
              🗑
            </button>
            <div style={{ marginRight: "10px", fontSize: "16px" }}>
              {song.title} by {song.artist}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Main({ children }) {
  return <div className="container">{children}</div>;
}

export default App;
