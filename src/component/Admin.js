import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";
import axios from 'axios';
import Navbar from './Navbar';

const Admin = () => {
    const url = "http://localhost:3001/users/"
    const [users, setUser] = useState([]);
    useEffect(() => {
        //console.log("Running...");
        loadUsers();

    }, []);

    const loadUsers = async () => {
        const result = await axios.get(url);
        setUser(result.data);
        //console.log(result);
    }
    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3001/users/${id}`);
    }
    return (
        <div className="">
            <Navbar/>
            <div class="container">
                <center>User Booking Details</center>
                <table className="details-table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Serial No.</th>
                            <th>Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Time</th>
                            <th>Date</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.source}</td>
                                <td>{user.destination}</td>
                                <td>{user.time}</td>
                                <td>{user.date}</td>
                                <td>
                                    <Link className="btn btn-primary mr-2" to={`users/edit/${user.id}`}>Edit</Link>
                                    <Link className="btn btn-danger" onClick={()=> deleteUser(user.id)}>Delete</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div >
    )
} 
 
export default Admin;