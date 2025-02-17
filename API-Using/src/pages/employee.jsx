import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


const baseapiurl="http://localhost:8080/rest/api/";

function Employee() {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get(baseapiurl + "employee-list")
        .then(response => {
            console.log("Gelen veri:", response.data);
            setEmployees(response.data);
        })
        .catch(error => console.error("Error fetching employees:", error));
    }, []);
    

    return (
        <div>
            <h1>Employee List</h1>
            <ul>
                {employees.map(employee => (
                    <li key={employee.employeeId}>
                        {employee.firstName} {employee.lastName} 
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Employee;
