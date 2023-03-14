import React from "react";
import {Link} from 'react-router-dom'

export default function Dashboard(){
    return <>
        <h1>Admin Dashboard</h1>
        <Link to="add-question">Add Question</Link>
    </>
}