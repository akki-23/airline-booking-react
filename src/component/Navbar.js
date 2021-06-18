import React from 'react';
import { useHistory } from "react-router-dom";


const Navbar = (props) => {
    let history = useHistory();
    const handleLogout = (e) =>{
        history.push("/");
    };
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div>
                <a className="navbar-brand" href="/"><i class="fas-fa-plane fa-2x"></i></a>
                <input classname="btn btn-primary btn-dark" type="submit" value="Logout" onClick={handleLogout}/>
            </div>
        </nav>

    )
}

export default Navbar;
