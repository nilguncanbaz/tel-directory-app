import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Form extends Component {
    constructor() {
        super();
        this.onChange = this.onChange.bind(this)
    }
    state = {
        name: '',
        number: ''

    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    static propTypes = {
        addContact: PropTypes.func
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addContact({
            ...this.state
        })
        this.setState({
            name: '',
            number: ''
        })

    }
    render() {
        return (
            <div className="card ">
                <div className="card-header">
                    ADD
                </div>
                <div className="card-body">


                    <form onSubmit={this.onSubmit}>
                        <div className="input-group mb-3 ">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="name">Name </span>
                            </div>
                            <input className="form-control" name="name" id="name" aria-describedby="name" value={this.state.name} onChange={this.onChange}></input>

                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="number">Number </span>
                            </div>
                            <input className="form-control" name="number" id="number" aria-describedby="number" value={this.state.number} onChange={this.onChange}></input>

                        </div>
                        <button className="btn btn-dark float-right" >ADD</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
