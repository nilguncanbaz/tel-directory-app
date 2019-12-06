import React from 'react'
import PropTypes from 'prop-types'
import List from './List'
import Form from './Form'

const Contacts = (props) => 

    <React.Fragment>
        <List contacts={props.contacts} />
        <br />
        <Form addContact={props.addContact} />

    </React.Fragment>

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContact: PropTypes.func
}

export default Contacts
