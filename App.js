import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './index.css';
import Grid from '@mui/material/Grid';
import { Button, Dropdown, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import { text } from "@fortawesome/fontawesome-svg-core";
import { Email } from "@mui/icons-material";



class controlledforms extends React.Component {
  constructor() {
    super()
    this.state = {
      FirstName: '',
      LastName: '',
      Email: '',
      Gender: '',
      Courses: 'React',
      error: {
        FirstName: "",
        LastName: "",
        Email: "",
        Gender: "",
      }
    }
  }

  handlesubmit = async (e) => {
    e.preventDefault();
    var errkey = Object.keys(this.state).filter((key) => {
      if (this.state[key] === "" && key != 'error') {
        return key;
      }
    })

    if (errkey.length >= 1) {
      alert('Please Fill All Fields')
    }
  };

  handleChange = async (e) => {
    var error = { ...this.state.error }
    if (e.target.value === "") {
      error[e.target.name] = `${e.target.name} Required`
    }
    else {
      error[e.target.name] = '';
    }
    await this.setState({ error, [e.target.name]: e.target.value })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handlesubmit}>
          <div>
            <label >First Name</label> &nbsp;
            <input type='text' name='FirstName' value={this.state.FirstName} onChange={(e) => this.handleChange(e)} ></input> <br />
            <span style={{ color: 'red' }}> {this.state.error.FirstName} </span>
          </div> <br></br>
          <div>
            <label >Last Name</label> &nbsp;
            <input type='text' name='LastName' value={this.state.LastName} onChange={(e) => this.handleChange(e)} ></input> <br />
            <span style={{ color: 'red' }}> {this.state.error.LastName} </span>
          </div> <br></br>
          <div>
            <label >E-mail</label> &nbsp;
            <input type='email' name='Email' value={this.state.Email} onChange={(e) => this.handleChange(e)} ></input> <br />
            <span style={{ color: 'red' }}> {this.state.error.Email} </span>
          </div> <br></br>
          <div>
            <label > Gender</label> &nbsp;
            <input type='radio'
              name="Gender"
              value='Female'
              onChange={(e) => this.handleChange(e)}
            />Female &nbsp;
            <input type='radio'
              name="Gender"
              value='Male'
              onChange={(e) => this.handleChange(e)}
            ></input>Male
          </div> <br></br>
          <div>
            <label >Courses</label>  &nbsp;
            <select value={this.state.Courses} onChange={(e) => this.handleChange(e)}>
              <option value='React'>React</option>
              <option value='Node Js'>Node Js</option>
              <option value='Mongo DB'>Mongo DB</option>
            </select>
          </div> <br></br>
          <div>
            <button type="submit">submit</button> &nbsp;
            <button type="button">Reset</button>
          </div> <br></br>
        </form>
      </>

    )
  }
}



export default controlledforms
