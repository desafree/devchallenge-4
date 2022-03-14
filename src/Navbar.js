import { NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <NavLink to="/" className={({isActive})=>((isActive)? 'active' : 'inactive')}>
                All
            </NavLink>
            <NavLink to="/active" className={({isActive})=>((isActive)? 'active' : 'inactive')}>
                Active
            </NavLink>
            <NavLink to="/completed" className={({isActive})=>((isActive)? 'active' : 'inactive')}>
                Completed
            </NavLink>
        </div>
     );
}
 
export default Navbar;