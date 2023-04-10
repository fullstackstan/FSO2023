import { useState, useEffect } from "react";
import personService from "./services/persons";
import './index.css'

const Filter = ({ filterName, setFilterName }) => {
  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      filter shown with:{" "}
      <input value={filterName} onChange={handleFilterChange} />
    </div>
  );
};

const PersonForm = ({
  setPersons,
  persons,
  newName,
  newNumber,
  setNewName,
  setNewNumber,
  setErrorMessage,
  setAddedMessage
}) => {
  const handleNameChange = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);
    if (existingPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already in the phone book. Replace the old number with the new one?`
      );
      if (confirmUpdate) {
        
        const updatedPerson = { ...existingPerson, number: newNumber };
        personService
          .update(existingPerson.id, updatedPerson)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : response.data
              )
            );
            setNewName("");
            setNewNumber("");
            setAddedMessage(
              `${existingPerson.name}'s phone number has been updated`
            )
            setTimeout(() => {
              setAddedMessage(null)
            }, 5000)
          })
          .catch((error) => {
            setErrorMessage(
              `'${existingPerson.name}' cannot be updated because they have already been removed from the server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            }, 5000)
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      personService.create(personObject).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setNewNumber("");
        setAddedMessage(
          `'${personObject.name}' was added to the phonebook`
        )
        setTimeout(() => {
          setAddedMessage(null)
        }, 5000)
      });
    }
  };
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

const Persons = ({ filteredPersons,setNewName,persons,setPersons,setErrorMessage }) => {
  const handleDelButtonClick = (id) => {
    const personToDelete = persons.find((person) => person.id === id);
    const confirmDelete = window.confirm(`Delete ${personToDelete.name}?`);
    if (confirmDelete) {
      personService.removeEntry(id).then((response) => {
        console.log(response);
        setPersons(persons.filter((person) => person.id !== id));
      })
      .catch((error) => {
        setErrorMessage(
          `'${personToDelete.name}' cannot be deleted because they have already been removed from the server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  };
  
  return (
    <>
      {filteredPersons.map((person) => (
        <li key={person.id} className='note'>
          {person.name} {person.number}
          <button onClick={()=>handleDelButtonClick(person.id)}>del</button>
          
        </li>
        
      ))}
      
    </>
  );
};

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}
const AddedNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='added'>
      {message}
    </div>
  )
}

const Footer = () => {
  const footerStyle = {
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  }
  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science, University of Helsinki 2022</em>
    </div>
  )
}

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState(null)
  const [addedMessage, setAddedMessage] = useState(null)

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  useEffect(() => {
    console.log("use effect");
    personService.getAll().then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <ErrorNotification message={errorMessage} />
      <AddedNotification message={addedMessage} />

      <Filter filterName={filterName} setFilterName={setFilterName} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
        setErrorMessage={setErrorMessage}
        setAddedMessage={setAddedMessage}
      />

      <h3>Numbers</h3>

      <Persons 
      filteredPersons={filteredPersons} 
      setNewName={setNewName} 
      persons={persons} 
      setPersons={setPersons}
      setErrorMessage={setErrorMessage}
      />
      <Footer />
    </div>

  );
};

export default App;
