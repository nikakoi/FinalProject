import { useFetch } from '../hooks/useFetch'

export default function Movies() {
  const { data, loading, error } = useFetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error loading movies.</p>

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
