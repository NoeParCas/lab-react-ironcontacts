// import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json";
import {useState} from "react"

function App() {
// necesitamos crear un slice para obtener los 5 primeros elementos
const [ contact, setContacts] = useState(contacts.slice(5,10))

  const handleAddContact = () => {

    const randomPos = Math.floor(Math.random() * contacts.length)
    const randomContact = contacts[randomPos]

    setContacts([randomContact, ...contact])
  }

const handleSortPopularity = () => {
  //clonar el array 
  const contactsCopy = [...contacts]

  //ordenar por popularidad 
  contactsCopy.sort((elem1, elem2) => {
    return elem1.popularity > elem2.popularity ? -1 : 1
  })

  //actualizar el estado 
  setContacts(contactsCopy)
}


const handleSortName = () => {
  //clonar el array 
  const contactsCopy = [...contacts]

  //ordenar por popularidad 
  contactsCopy.sort((elem1, elem2) => {
    return elem1.name > elem2.name ? 1 : -1
  })

  //actualizar el estado 
  setContacts(contactsCopy)
}


const handleDelete = (positionContact) =>{
  const contactsCopy = [...contacts]
  //podríamos pasar el id y hacer un filter para remover el elemento de ese id
  contactsCopy.splice(positionContact, 1);

  setContacts(contactsCopy);
}

  return (
    <div className="App">
    <h1>IronContacts Lab</h1>
    <div className="Btn">
    <button onClick={handleAddContact}>Add Random Contact</button>
    <button onClick={handleSortPopularity}>Sort by popularity</button>
    <button onClick={handleSortName}>Sort by name</button>
    </div>

<table>
    <div className="Table">

      <thead>
      <tr> 
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar</th> 
      <th>Won Emmy</th> 
      <th>Actions</th> 
      </tr>
      </thead>

<tbody>

    { contact.map((eachContact, index) => {
      return (
      <tr key={eachContact.id}> 
      <td><img src={eachContact.pictureUrl} alt={eachContact.name} width="100px"/></td>
      <td>{eachContact.name}</td>
      <td>{eachContact.popularity}</td>
      <td>{eachContact.wonOscar && "🏆 "} </td>
      <td>{eachContact.wonEmmy && "🏆"}</td>
      <button onClick={ () => handleDelete(index)} >Delete</button>
      </tr>
 
      )
    })
    }
</tbody>
    </div>
      </table>
    </div>
)}

export default App;
