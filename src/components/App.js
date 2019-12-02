import React, { Component } from 'react'
import '../App.css'
import Contacts from './Contacts'

class App extends Component {
  state = {
    contacts: [
      {
        name: 'Nilgün',
        number: '456789909876'
      },
      {
        name: 'Nilay',
        number: '2345'
      },
      {
        name: 'Alperen',
        number: '34543356'
      }
    ]

  }
  addContact = (contact) => {
    const { contacts } = this.state
    contacts.push(contact)
    this.setState({
      contacts
    })

  }
  

  render() {


    return (
      <div className="container">
        <Contacts
          addContact={this.addContact}
          contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App
