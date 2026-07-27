import { useState } from "react";
import "../css/UserList.css";

function UserList(){
    const[users, setUsers] = useState([]);

    async function fetchUser(){
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
    }
    return (
    <>
        <h1>Users Information</h1>

        <button onClick={fetchUser}>Load Users</button>

        <div className="users">
            {users.map((user) => (
                <div className="user-card" key={user.id}>
                    <p><strong>Name:</strong> {user.name}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>City:</strong> {user.address.city}</p>
                </div>
            ))}
        </div>
    </>
);
}
export default UserList;