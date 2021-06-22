import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import Navbar from './Navbar';


const BookedDetails = () => {
    const url = "http://localhost:3001/users/"
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get(url);
        setUser(result.data);
    }
    console.log()
    return (
        <div>
            <Navbar />
            <div className="container">
                <center>Booking Details</center>
                <table className="details-table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.source}</td>
                            <td>{user.destination}</td>
                            <td>{user.time}</td>
                            <td>{user.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BookedDetails;