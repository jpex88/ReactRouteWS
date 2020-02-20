import React, { Component } from 'react';
import { Form, FormControl } from 'react-bootstrap';

class Todopage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['Plugga React'],
            newTodo: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    static getDerivedStateFromError(error) {
        console.log(`Error log from getDerivedStateFromError: ${error}`);
        return { hasError: true };
    }
    
    componentDidCatch(error, info) {
        //logToExternalService(error, info) // this is allowed. 
            //Where logToExternalService may make an API call.
    }

    static getDerivedStateFromProps(props, state) { // returns new state, return null = no updates
        console.log("Derived state: ", props, state);
        return state;
    }

    componentDidMount() { // for network requests
        console.log("komponenten monterades");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) { // return a value or null. This is passed to componentDidUpdate
        console.log("Snapshot before update: ", prevProps, prevState);
        return "Hejhej"
    }

    componentDidUpdate(prevProps, prevState, snapshot) { // can contain logic and does not need a return
        console.log("komponenten uppdaterades: ", prevProps, prevState, snapshot);
    }

    /*state = {
        todos: ['Plugga React'],
        newTodo: ''
    }*/

    renderList(todo, index) {
        return(
            <li key={index} onClick={() => this.removeItem(index)}>{todo}</li>
        )
    }

    removeItem(index) {
        let newTodos = [...this.state.todos];
        newTodos.splice(index, 1);
        this.setState({ todos: newTodos });
    }

    handleChange(e) {
        this.setState({ newTodo: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let newTodos = [...this.state.todos];
        newTodos.push(this.state.newTodo);
        this.setState({ todos: newTodos});
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <ul>
                    {this.state.todos.map((todo, index) => { return this.renderList(todo, index) })}
                </ul>
                <input type='text' value={this.state.newTodo} onChange={this.handleChange} />
                <button type='submit'>Lägg till punkt</button>
            </Form>
        )
    }
}

export default Todopage;