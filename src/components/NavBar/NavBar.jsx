import {Link} from 'react-router-dom';
import * as userService from "../../utilities/users-service";

export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    console.log(user.name);
    return(
        <nav>
            <Link to="/orders">sumtin</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">suntin suntin</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp;
            <Link to=""
                onClick={handleLogOut}
            >Log Out</Link>
        </nav>
    );
}