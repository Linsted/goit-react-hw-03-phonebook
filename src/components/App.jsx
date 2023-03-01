import React from "react"
import { Contacts } from "./Contacts/Contacts"
import { FilterContacts } from "./FilterContacts/FilterContacts"
import { PhonebookForm } from "./PhonebookForm/PhonebookForm";
import {Section} from "./App.styled"

export class App extends React.Component {

  

  state = {
    contacts: [],
    filter: '',
      
  }

  

  componentDidMount() {
    const parsedStorage = JSON.parse(localStorage.getItem("contactStorage"));
    if (parsedStorage !== null) {
      this.setState({contacts: parsedStorage})
    }
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contactStorage", JSON.stringify(this.state.contacts))
    }
  }

  addContact = (newState) => {

    this.state.contacts.some(contact => contact.name === newState.name) ? alert(`${newState.name} is in your list`) :
      this.setState(prevState => {
        return ({
          contacts: [...prevState.contacts, newState],
        })
      })
  };
  

  filterForm = (evt) => {this.setState({ filter: evt.target.value, })};
  
  
  deleteContact = (id) => { 
    this.setState((prevState) => {
      return ({
        contacts: prevState.contacts.filter(contact => contact.id !== id)
      })
    })
  }

  





  render () {
  
    const { addContact, filterForm, deleteContact } = this;
    const { filter, contacts } = this.state;

    const normalizedRequest = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedRequest));


  
    return (
      <Section>
        <h1>Phonebook</h1>
        < PhonebookForm onSubmit={addContact} />
        <h2>Contacts</h2>
        < FilterContacts
            onFilter={filterForm}
            filter={filter}/>
        < Contacts
          contacts={filteredContacts}
          onClick={deleteContact}
           />
      
      </Section>
  )}
};
