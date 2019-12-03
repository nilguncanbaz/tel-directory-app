import React, { Component } from 'react'
import PropTypes from 'prop-types'

class List extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired
    }
    state = {
        filterText: ''
    }
    onChageFilterText = (e) => {
        this.setState({
            filterText: e.target.value
        })
    }
    render() {
        const filteredContacts = this.props.contacts.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        )
        return (
            <div className="list">
                <br />

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="filter">Filter by Name </span>
                    </div>
                    <input
                        name={"filter"}
                        id={"filter"}
                        value={this.state.filterText}
                        onChange={this.onChageFilterText}
                        className="form-control"
                        aria-describedby="filter"></input>

                </div>
                <br />
                <div className="card">
                    <div className="card-header">
                        Number List
                    </div>
                    <div className="card-body">
                        <ul>
                            {filteredContacts.map(contact =>
                                <li key={contact.number} >
                                    <span className={"name"}>{contact.name}</span>
                                    <span className={"float-right"}>{contact.number}</span>
                                </li>
                            )}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
export default List