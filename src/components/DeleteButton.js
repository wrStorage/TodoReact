import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

function DeleteButton(props) {
    const deleteItem = (event) => {
        const index = props.findIndex(event.target.name);
        
        let newList = props.todoList.slice();
        newList.splice(index, 1);
        props.update(newList);
    }

    return(
        <div className="listButton">
            <button onClick={deleteItem} name={props.listItem.id} title="Delete List Item">X</button>
        </div>
    );
}

DeleteButton.propTypes = {
    update: PropTypes.func.isRequired,
    findIndex: PropTypes.func.isRequired,
    listItem: PropTypes.object.isRequired,
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default DeleteButton;