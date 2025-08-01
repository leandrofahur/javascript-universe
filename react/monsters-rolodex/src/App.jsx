import {useState, useEffect} from 'react'
import CardList from './components/card-list/card-list.component'
import './App.css'

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
      <CardList monsters={monsters} />
    </>
  )
}

export default App
