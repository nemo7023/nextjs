import SectionTitle from '../components/section-title'
import Widget from '../components/widget'
import React, { useState, useEffect } from "react";
import axios from "axios";


function Index() {
 const [users, setUsers] = useState([]);
 
 const fetchUsers = async () => {
   
     const response = await axios.get(
       'https://jsonplaceholder.typicode.com/users'
     );
     setUsers(response.data);
 };

 useEffect(() => {
   fetchUsers();
 }, []);

 return (
    <>
    <Widget>
        <ul>
            {users.map(user => 
            <li key={user.id}>
                {user.username} {user.email} {user.address.street}
            </li>
            )}
        </ul>
    </Widget>

    <Widget>
        <ul>
            {users.map(user => 
            <li key={user.id}>
                {user.name} {user.phone} {user.address.city}
            </li>
            )}
        </ul>
    </Widget>
    </>
   
 
 );
}
export default Index;