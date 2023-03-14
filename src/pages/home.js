import React from "react";
import {Link} from 'react-router-dom'

export default function Home() {
    return <>
        <Link to="/admin-login">Admin Login</Link>
        <Link to="/student-login">Student Login</Link>
    </>;
}
