import React, { useState } from 'react'
import "../App.css";
import Navbar from './Navbar';
import axios from 'axios';
const Dashboard = () => {
    const url = "http://localhost:3001/users";
    const [setInputext] = useState();
    const [data, setData] = useState({
        name: "",
        source: "",
        destination: "",
        date: "",
        time: "",
    });
    const onSubmit = e => {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            source: data.source,
            destination: data.destination,
            date: data.date,
            time: data.time
        })
            .then(res => {
                console.log(res.data);
            })
        setInputext('');
    };
    const onChange = e => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata);
        console.log(newdata);
    };
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <form className="container" onSubmit={(e) => onSubmit(e)}>
                <label> Name:
                    <input id="name" type="text" onChange={(e) => onChange(e)} value={data.name} />
                </label>
                <label>
                    From:
                    <select id="source" onChange={(e) => onChange(e)} value={data.source}>
                        <option value="New Delhi">New delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </label>
                <label>To:
                    <select id="destination" onChange={(e) => onChange(e)} value={data.destination}>
                        <option value="New Delhi">New delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </label>
                <label>
                    Date:
                    <input id="date" type="date" onChange={(e) => onChange(e)} value={data.date} />
                </label>
                <label>
                    Time:
                    <input id="time" type="time" onChange={(e) => onChange(e)} value={data.time} />
                </label>
                <input type="submit" value="Book" />
            </form>

        </div >
    )
}

export default Dashboard;
