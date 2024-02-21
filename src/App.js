import './style.css';
import { useState } from 'react'
import Form from './components/Form'
import User from './components/User'

const API_BASE_URL = "https://api.github.com"

async function fetchResults(query){
  try {
    const response = await fetch(`${API_BASE_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e){
    throw new Error(e);
  }
}

function App() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  function onSeachChange(event){
    setQuery(event.target.value)
  }

  async function onSeachSubmit(event){
    event.preventDefault();
    const results = await fetchResults(query);
    setResults(results)
  }
  console.log(results)
  return (
    <div className="App">
      <main className="main">
        <h2> GitHub User Search </h2>
        <Form 
          onChange={onSeachChange}
          onSubmit={onSeachSubmit}
          value={query}
        />
        <h3>Results</h3>
        <div id="results">
          <div>
            {results.map((user) => (
              <User 
                key={user.login}
                repos_url={user.repos_url}
                following_url={user.following_url}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;