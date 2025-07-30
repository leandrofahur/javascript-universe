import {useState, useEffect} from 'react'
import './App.css'

const Card = ({name, email, id}) => {
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

function App() {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setMonsters(data))
  }, [])

  console.log(monsters)

  return (
    <>     
      {monsters.map(({name, email, id}, index) => (
        <Card key={`${name}-${index}`} name={name} email={email} id={id} />
      ))}
    </>
  )
}

export default App
