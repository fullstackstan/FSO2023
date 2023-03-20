import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event)=>{
    setNewName(event.target.value)
    console.log(event.target.value);
  }

  const handleSubmit = (event)=>{
    event.preventDefault()
    for (let i=0;i<persons.length;i++){
      if (persons[i].name===newName){
        alert(`${newName} is already in the phone book`)
        setNewName('')
        return
      }
    }
    const personObject = {
      name: newName,
    }
    setPersons(persons.concat(personObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person=>(
        <li>{person.name}</li>
      ))}
    </div>
  )
}

export default App
