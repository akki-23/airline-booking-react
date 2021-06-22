import React, { useState } from 'react'
import "../App.css";
import Navbar from './Navbar';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";

const Dashboard = (props) => {
    const [validate, setValidate] = useState("fileds cannot be empty");
    const url = "http://localhost:3001/users";
    const [data, setData] = useState({
        name: "",
        source: "",
        destination: "",
        date: "",
        time: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validationCheck();
        if (errors === "false") {
            toast.error(validate, {
                position: 'top-center'
            });
        } else {
            axios.post(url, {
                name: data.name,
                source: data.source,
                destination: data.destination,
                date: data.date,
                time: data.time
            });
        props.history.push("/bookingdetails");
        }
    };
    const handleInput= e => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata);
    };
    const validationCheck = () => {
        if (data.destination === data.source) {
            setValidate("source and destination cannot be same");
            return "false"
        }
        if (data.name === "" && data.source === "" && data.destination === "" && data.date === "" && data.time === "") {
            setValidate("fields cannot be empty");
            return "false"
        }
    }
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <form className="container" >
                <label> Name:
                    <input id="name" type="text" onChange={(e) => handleInput(e)} value={data.name} />
                </label>
                <label>
                    From:
                    <select id="source" onChange={(e) => handleInput(e)} value={data.source}>
                        <option value="New Delhi">New delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </label>
                <label>To:
                    <select id="destination" onChange={(e) => handleInput(e)} value={data.destination}>
                        <option value="New Delhi">New delhi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </label>
                <label>
                    Date:
                    <input id="date" type="date" onChange={(e) => handleInput(e)} value={data.date} />
                </label>
                <label>
                    Time:
                    <input id="time" type="time" onChange={(e) => handleInput(e)} value={data.time} />
                </label>
                <button onClick={(e) => handleSubmit(e)}> BOOK </button>
                <ToastContainer />
            </form>
        </div >
    )
}

export default Dashboard;
