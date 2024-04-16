import './NavBar.css';
import { Link } from 'react-router-dom';
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    function handleLogIn() {

    }

    return (
        <nav>
            <div className="navbar-left">
                <span className="app-name">Wander-Planner</span>
            </div>

            <div className="navbar-right">
                <Link to="/home">Home</Link>
                &nbsp;  &nbsp;
                {user ?
                    <>
                        <Link className='log' to="" onClick={handleLogOut}>Log Out</Link>
                        &nbsp;&nbsp;
                        <span>Welcome, {user.name}</span>
                        &nbsp;&nbsp;
                    </>
                    :
                    <Link className='log' to="/authpage" onClick={handleLogIn}>Login / Signup</Link>
                }
            </div>
        </nav>
    );
}
