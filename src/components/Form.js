import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Form extends Component {
    constructor() {
        super();
       // this.onChange = this.onChange.bind(this)
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
    onSubmit = (event) => {
        event.preventDefault();
        const { name, number } = this.state;

        this.props.addContact({
            name,
            number
        })
        this.setState({
            name: '',
            number: ''
        })

    }
    render() {
        const{name, number} = this.state;
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
                            <input className="form-control" name="name" id="name" aria-describedby="name" value={name} onChange={this.onChange}/>

                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="number">Number </span>
                            </div>
                            <input className="form-control" name="number" id="number" aria-describedby="number" value={number} onChange={this.onChange}/>

                        </div>
                        <button className="btn btn-dark float-right" >ADD</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form
