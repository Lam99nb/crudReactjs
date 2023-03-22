import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { Link, useNavigate } from 'react-router-dom'

function Home() {

    const history = useNavigate();

    const handleDelete = (id) => {
        var index = Employees.map(function (e) {
            return e.id
        }
        ).indexOf(id)
        console.log(index)
        Employees.splice(index, 1);
        history('/')
    }

    const handleEdit = (id, name, age) => {
        localStorage.setItem("Name", name);
        localStorage.setItem("Age", age);

        localStorage.setItem("Id", id);

    }
    return (
        <React.Fragment>

            <div style={{ margin: "10rem" }}>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Employees && Employees.length > 0
                            ?
                            Employees.map((item) => {
                                return (
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.age}
                                        </td>
                                        <td>
                                            <Link to='/edit'>
                                                <Button onClick={() => handleEdit(item.id, item.name, item.age)}>EDIT</Button>
                                            </Link>
                                        </td>
                                        <td>
                                            <Button onClick={() => handleDelete(item.id)}>DELETE</Button>
                                        </td>
                                    </tr>
                                )
                            })
                            : 'no data available'
                        }
                    </tbody>


                </Table>
                <Link to='/create'>
                    <Button className="d-gird gap2" >CREATE</Button>
                </Link>
            </div>
        </React.Fragment>
    );
}

export default Home;
