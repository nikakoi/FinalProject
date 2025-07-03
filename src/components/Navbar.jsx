import { Link } from 'react-router-dom'

export default function Navbar({ toggleTheme, theme }) {
  return (
    <nav>
      <h2>🎬 Movie SPA</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/about">About</Link>
      </div>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'}
      </button>
    </nav>
  )
}
