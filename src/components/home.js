import React, { Fragment } from "react";
import {Button, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from "./Employees";
import { Link, useNavigate } from "react-router-dom";

function Home() {

    let history = useNavigate();

    const handleDelete = (empId) => {
        const index = Employees.findIndex(emp => emp.id === empId)
        Employees.splice(index, 1);
        history('/');
    }

    const handleEdit = (id, name, age) => {
        localStorage.setItem('Id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Age', age);
    }

    return (
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover size="small">
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Age
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Employees && Employees.length > 0 ? Employees.map(emp => {
                                return (
                                    <tr>
                                        <td>
                                            {emp.name}
                                        </td>
                                        <td>
                                            {emp.age}
                                        </td>
                                        <td>
                                            <Link to={`/edit`}>
                                            <Button style={{marginRight: "1rem"}} onClick={() => handleEdit(emp.id, emp.name,emp.age)}>Edit</Button>
                                            </Link>
                                            <Button onClick={() => handleDelete(emp.id)}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            }) : "No data found"
                        }
                    </tbody>
                </Table>
                <br></br>
                <Link className="d-grid gap-2" to='/create'>
                    <Button size="lg">Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home
