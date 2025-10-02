import { NavLink } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
import { use } from "react";
import Swal from "sweetalert2";
import { motion as Motion } from "motion/react"

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Log Out successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error=>{
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        {/* for applicant links, check roles as well */}
        {
            user && <>
            <li><NavLink to="/myApplications">My Applications</NavLink></li>
            </>
        }
        {/* for recruiter. check role as well */}
        {
            user && <>
            <li><NavLink to="/addJob">Add Job</NavLink></li>
            <li><NavLink to="/myPostedJobs">My Posted Jobs</NavLink></li>
            </>
        }
    

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Motion.a animate={{
                    color:['#F54927','#F5A627','#3CF527','#27F5D6','#278EF5','#3527F5','#AD27F5','#F527E7'],
                    transition:{duration:4, repeat:Infinity}
                }} className="btn btn-ghost text-xl">Career_Code</Motion.a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user ? <div className="flex items-center gap-1.5 font-semibold">
                        <p>{user.email}</p>
                        <button onClick={handleLogOut} className="btn btn-accent">Log Out</button>
                    </div> :
                        <><NavLink className="btn" to="/register">Register</NavLink>
                            <NavLink className="btn btn-info" to="/login">Log in</NavLink></>
                }
            </div>
        </div>
    );
};

export default Navbar;