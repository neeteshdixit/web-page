import { Link } from "react-router-dom";
import { userList } from "../data/users";

function User(){
    return (
        <>
            <div>
                 <h2>User List</h2>
                <ul>
                    {userList.map(user => (
                        <li key={user.id}>
                            <Link to={`/users/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default User;
