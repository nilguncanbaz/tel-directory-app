import React, { Component } from 'react'
import '../App.css'
import Contacts from './Contacts'

class App extends Component {
  state = {
    contacts: [
      {
        name: 'Denemea',
        number: '4567899'
      },
      {
        name: 'Denemeb',
        number: '234545'
      },
      {
        name: 'Denemec',
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
