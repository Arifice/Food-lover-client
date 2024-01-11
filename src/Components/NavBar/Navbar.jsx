import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/images/logo/logo.png'

const Navbar = () => {
    const link=<>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/services'}>Services</NavLink></li>
            <li><NavLink to={'/login'}>Login</NavLink></li>
            <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
        </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {link}
                    </ul> 
                </div>
               <Link><img className="h-16 w-16 " src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex">
                <Link to={'/services'} className="btn btn-warning">Food Lover</Link>
            </div>
        </div>
    );
};

export default Navbar;