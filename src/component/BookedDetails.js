import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
const BookedDetails = () => {
    const [user, setUser] = useState("");
      const { id } = useParams();
      useEffect(() => {
        loadUser();
      });
      const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data);
      }
    return (
        <div>
            <Navbar />
            <div className="container">
                <center>Booking Details</center>
                <table className="details-table">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Time</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{id}</td>
                            <td>{user.name}</td>
                            <td>{user.source}</td>
                            <td>{user.destination}</td>
                            <td>{user.time}</td>
                            <td>{user.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default BookedDetails;