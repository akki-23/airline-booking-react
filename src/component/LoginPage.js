import axios from 'axios';
import React, { useState } from 'react';


const LoginPage = (props) => {
    const username = useFormInput('');
    const password = useFormInput('');
    const [loading, setLoading] = useState(false);
    const handleLogin = async (e) => {
        setLoading(true);
        axios.get('http://localhost:3001/users/', { withCredentials:true})
            .then(response => {
                if(username.value === "admin" && password.value ==="admin"){
                    props.history.push('/admin');
                }
                else if(username.value === 'akshay' && password.value === 'akshay123'){
                    props.history.push('/dashboard');
                }
                else{
                    props.history.push("/")
                }
            }).catch(error => {
                setLoading(false);
            });
    }
    return (
        <div className="container">
            <h1>LOGIN</h1>
            <input type="text" {...username} placeholder="Username"/>
            <input type="password" {...password} placeholder="Password"/>
            <input type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
        </div>
    );
}
const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange
    }
}
export default LoginPage;