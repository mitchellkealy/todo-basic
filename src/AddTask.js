import React from 'react';

const AddTask = (props) => {

    return (

        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <form className="card">
                <h2 className="label-wrapper">
                    Add Task
                </h2>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    style={{margin: 10}}
                />
                <button type="submit" className="btn btn-primary" style={{margin: 10}}>
                    Add
                </button>
            </form>

        </div>

    );

};

export {AddTask};