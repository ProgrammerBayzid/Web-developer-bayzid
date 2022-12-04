import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/Context'
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate()

    const handelLogOut = () => {
        logOut()
            .then(res => {
                navigate('/')
                toast.success('Successfully Logout')
            })

            .catch(err => { console.log(err); })
    }

    const menuItems = <>
        <li className='text-black'><Link to='/home'> Home</Link></li>
        <li className='text-black'><Link to='/about'> About</Link></li>
        <li className='text-black'><Link to='/project'> Projects</Link></li>
        <li className='text-black'><Link to='/skills'> Skills</Link></li>
        <li className='text-black'><Link to='/contuctus'> Contacts Us</Link></li>
        {user?.uid ?
            <div className='lg:flex items-center'>
                <li><Link to='/profile'>

                    {user?.photoURL ?
                        <img className='w-10 rounded-full' src={user.photoURL} />
                        :
                        <p className='text-black'>Profile</p>}

                </Link></li>
                <button className='text-black mr-3' onClick={handelLogOut}> Log Out</button>

            </div>
            :
            <>
                <li className='text-black'><Link to='/login'> Login</Link></li>
                <li className='text-black '><Link to='/singUp'> Sing Up</Link></li>
            </>}


    </>
    // 
    return (
        <div className='mb-5 mt-3 bg-base-100 shadow-xl sticky top-0 z-40'>

            <div className="navbar  flex flex justify-between rounded-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  ">
                            {menuItems}

                        </ul>
                    </div>
                    <Link to='/' className="text-black btn btn-ghost normal-case text-xl">Bayzid</Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal p-0  gap-2">
                        {menuItems}
                    </ul>
                </div>
                <label htmlFor="dashboard-dawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>

        </div>
    )
}

export default Header
