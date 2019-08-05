import React from 'react';

class TodoForm extends React.Component{
    constructor() {
        super();
        this.state = {
            item: ""
        };
    }

    handleChange = element => {
        this.setState({
            [element.target.name]:element.target.value
        });
    };

    render() {
        return(
            <form> 
                <input 
                type = 'text'
                value = {this.state.item}
                name = 'item'
                onChange = {this.handleChange}
                />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;