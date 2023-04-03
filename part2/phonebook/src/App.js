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
}) => {
  const [notification, setNotification] = useState(null);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
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
            setNotification({
              message: `Updated ${newName}`,
              type: "success",
            });
            setTimeout(() => {
              setNotification(null);
            }, 2000);
          })
          .catch((error) => {
            console.log(error.response.data.error);
            setNotification({
              message: error.response.data.error,
              type: "error",
            });
            setTimeout(() => {
              setNotification(null);
            }, 2000);
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      };
      personService
        .create(personObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
          setNewName("");
          setNewNumber("");
          setNotification({
            message: `Added ${newName}`,
            type: "success",
          });
          setTimeout(() => {
            setNotification(null);
          }, 2000);
        })
        .catch((error) => {
          console.log(error.response.data.error);
          setNotification({
            message: error.response.data.error,
            type: "error",
          });
          setTimeout(() => {
            setNotification(null);
          }, 2000);
        });
    }
  };

  return (
    <>
      {notification && (
        <div className={notification.type}>{notification.message}</div>
      )}
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



const Persons = ({ filteredPersons, setNewName, persons, setPersons, setShowAddedMessage, setShowDeletedMessage }) => {
  const handleDelButtonClick = (id, name) => {
    const confirmDelete = window.confirm(`Delete ${name}?`);
    if (confirmDelete) {
      personService.removeEntry(id).then((response) => {
        console.log(response);
        setPersons(persons.filter((person) => person.id !== id));
        setNewName(`Deleted ${name}`);
        setShowDeletedMessage(true);
        setTimeout(() => setShowDeletedMessage(false), 2000);
      });
    }
  };

  return (
    <>
      {filteredPersons.map((person) => (
        <li key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelButtonClick(person.id, person.name)}>
            del
          </button>
        </li>
      ))}
    </>
  );
};
;


const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [showAddedMessage,setShowAddedMessage] = useState('null')

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filterName={filterName} setFilterName={setFilterName} />

      <h3>Add a new</h3>

      <PersonForm
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        persons={persons}
        setPersons={setPersons}
      />

      <h3>Numbers</h3>

      <Persons filteredPersons={filteredPersons} setNewName={setNewName} persons={persons} setPersons={setPersons}/>
    </div>
  );
};

export default App;
