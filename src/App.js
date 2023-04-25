import './App.css';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddTask } from "./AddTask";
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App(props) {
  return (
      <div className="">
        <div className="alert alert-primary alert-dismissible fade show" role="alert">
          Check out the new <strong>'Add Task'</strong> feature!
          <button type="button" className="close btn-primary" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <h1 className="app-title">Todo</h1>
        <div className="card">
        <div className="btn-group"><Button variant="primary">Hide Instructions</Button><Button variant="light">Advanced Features</Button></div>
        <div>
        <ul>
          <li>
            1. Create a task.
          </li>
          <li>
            2. When you've completed the task, mark the task as complete.
          </li>
        </ul>
        </div>
        </div>

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
                placeholder="e.g. Make Dinner"
            />
            <div><button type="submit" className="btn btn-primary" style={{margin: 10}}>
              Add
            </button><Button variant="light">Cancel</Button></div>
          </form>
        </div>

        <div className="filters btn-group stack-exception">
          <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show </span>
            <span className="btn btn-light">all</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span className="btn btn-light">Active</span>
            <span className="visually-hidden"> tasks</span>
          </button>
          <button type="button" className="btn toggle-btn" aria-pressed="false">
            <span className="visually-hidden">Show </span>
            <span className="btn btn-light">Completed</span>
            <span className="visually-hidden"> tasks</span>
          </button>
        </div>
        <h2 id="list-heading">3 tasks remaining</h2>
        <ul
            role="list"
            className="task-container"
            aria-labelledby="list-heading">
          <li className="card">
            <div className="c-cb">
              <input id="todo-0" type="checkbox" defaultChecked={true} />
              <label className="todo-label" htmlFor="todo-0">
                Eat
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-light">
                Edit <span className="visually-hidden">Eat</span>
              </button>

                <Popup trigger={<Button variant="light">Delete</Button>} position="right center">
                  <div>Are you sure you want to delete?</div>
                  <Button variant="outline-danger">Delete</Button><Button variant="light">Cancel</Button>
                </Popup>
                <span className="visually-hidden">Eat</span>

            </div>
          </li>
          <li className="card">
            <div className="">
              <input id="todo-1" type="checkbox" />
              <label className="todo-label" htmlFor="todo-1">
                Sleep
              </label>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-light">
                Edit <span className="visually-hidden">Sleep</span>
              </button>
              <button type="button" className="btn btn-light">
                Delete <span className="visually-hidden">Sleep</span>
              </button>
            </div>
          </li>
          <li className="card">
            <div className="c-cb">
              <input id="todo-2" type="checkbox" />
              <label className="todo-label" htmlFor="todo-2">
                Repeat
              </label>
            </div>
            <div className="btn btn-group">
              <button type="button" className="btn btn-light">
                Edit <span className="visually-hidden">Repeat</span>
              </button>
              <button type="button" className="btn btn-light">
                Delete <span className="visually-hidden">Repeat</span>
              </button>
            </div>
          </li>
        </ul>
        <div style={{paddingBottom: 50}}>
          <Button variant="white">Back to Top</Button>
        </div>
      </div>
  );
}

export default App;
