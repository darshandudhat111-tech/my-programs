import { useContext } from "react";
import { usercontect } from "../App";
import "../css/Faculty.css";

function Faculty(){
    const users = useContext(usercontect);
    return(
        <>
        <div className="faculty-container">
        {users.map((item, index) => (
            <div className="faculty-card" key={index}>
            <img src={item.image} alt={item.name} />

            <div className="faculty-details">
                <p><span>Name :</span> {item.name}</p>
                <p><span>Phone :</span> {item.phone}</p>
                <p><span>Email :</span> {item.email}</p>
                <p><span>Address :</span> {item.address}</p>
            </div>
            </div>
        ))}
        </div>
        </>
    )
}
export default Faculty;