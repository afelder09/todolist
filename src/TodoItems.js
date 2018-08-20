import React, { Component } from "react" ;
import FlipMove from "react-flip-move";
import "./TodoItems.css";

class TodoItems extends Component {
    constructor(props) {
        super(props);

        this.createTasks = this.createTasks.bind(this);
    }

    createTasks(item) {
        return <li key={item.key}>{item.text}<button onClick={() => this.delete(item.key)} className="deleteButton">X</button></li>
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.createTasks);

        return (
            <ol className="theList">
                <FlipMove duration={250} easing="ease-out">
                    {listItems}
                </FlipMove>
            </ol>
        );
    }
};

export default TodoItems;