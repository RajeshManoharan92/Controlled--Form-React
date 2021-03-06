import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import './index.css';
import Grid from '@mui/material/Grid';
import { Table, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import RadioGroup from '@mui/material/RadioGroup';



class controlledforms extends React.Component {
  constructor() {
    super()
    this.state = {
      result: [],
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
      var error = { ...this.state.error }
      var rr = errkey.filter((key) => {
        error[key] = `${key} Required`;
      })
      this.setState({ error })
      return;
    }

    var data = await {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Gender: this.state.Gender,
      Courses: this.state.Courses,
    }

    var result = [...this.state.result];
    result.push(data);
    this.setState({
      result, FirstName: "",
      LastName: "",
      Email: "",
    })

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
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar >
                <span className="Box">Controlled Form</span>
              </Toolbar>
            </AppBar>
          </Box>
        </div> <br></br>
        <form onSubmit={this.handlesubmit}>
          <div>
            <label >First Name</label> &nbsp;
            <span className='input1'>
              <TextField type='text' name='FirstName' label="FirstName" variant="standard"
                value={this.state.FirstName} onChange={(e) => this.handleChange(e)} ></TextField> <br />
            </span>

            <span style={{ color: 'red' }}> {this.state.error.FirstName} </span>
          </div> <br></br>
          <div>
            <label >Last Name</label> &nbsp;
            <span className='input2'>
              <TextField type='text' name='LastName' label="LastName" variant="standard"
                value={this.state.LastName} onChange={(e) => this.handleChange(e)} ></TextField> <br />
            </span>

            <span style={{ color: 'red' }}> {this.state.error.LastName} </span>
          </div> <br></br>
          <div>
            <label >E-mail</label> &nbsp;
            <span className='input3'>
              <TextField type='email' name='Email' label="Email" variant="standard"
                value={this.state.Email} onChange={(e) => this.handleChange(e)} ></TextField> <br />
            </span>

            <span style={{ color: 'red' }}> {this.state.error.Email} </span>
          </div> <br></br>
          <div>
            <label > Gender</label> &nbsp;
            <span className="gender" >
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel className="gender" name="Gender"
                    value='Female'
                    onChange={(e) => this.handleChange(e)} control={<Radio />} label="Female" />
                  <FormControlLabel name="Gender"
                    value='Male'
                    onChange={(e) => this.handleChange(e)} control={<Radio />} label="Male" />
                </RadioGroup>
              </FormControl> <br></br>
              <span style={{ color: 'red' }}> {this.state.error.Gender} </span>
            </span> <br></br>
            <label >Courses</label>  &nbsp;
            <div className='select' style={{ display: 'inline-block' }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Form.Select aria-label="Default select example" name='Courses'
                    value={this.state.Courses}
                    onChange={(e) => this.handleChange(e)}
                    className='courses'>
                    <option value="React">React</option>
                    <option value="Node Js">Node Js</option>
                    <option value="Mongo DB">Mongo DB</option>
                  </Form.Select>
                </Grid>
              </Grid>
            </div>
          </div> <br></br>
          <div className='Submitbutton'>
            <Button type="submit" variant="contained" >submit</Button> &nbsp;
          </div>
        </form>

        <div className="grid">
          <Grid container spacing={2}>
            <Grid xs={8}>
              <Table striped bordered hover variant="primary" border='1'>
                <thead>
                  <tr>
                    <td> First Name </td>
                    <td> Last Name </td>
                    <td> Email </td>
                    <td> Gender </td>
                    <td> Courses </td>
                  </tr>
                </thead>
                <tbody>
                  {this.state.result.map((row) => (
                    <tr>
                      <td> {row.FirstName} </td>
                      <td> {row.LastName} </td>
                      <td> {row.Email} </td>
                      <td> {row.Gender} </td>
                      <td> {row.Courses} </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
}

export default controlledforms
