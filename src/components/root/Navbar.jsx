import React from 'react'
import { Link } from 'react-router-dom'


const pageLinks = [
    { id: 1, title: "Home", link: '/' },
    { id: 2, title: "Products", link: '/products' },
    { id: 3, title: "About Us", link: '/about' },
    { id: 4, title: "Contact", link: '/contact' },
]

const Navbar = () => {

    const isAuthentic = false;


    return (
        <div className=' shadow-lg'>
            <div className='w-11/12 mx-auto flex justify-between items-center  py-1'>

                {/* left side */}
                <div className='flex gap-8 items-center'>
                    {/* logo */}
                    <div>
                        <img alt='logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXqsxP285jUZV_-oU4uAb4XxXpkfyIUWvQOQ&s'
                            className='w-12'
                        />
                    </div>

                    {/* pages links */}

                    <nav>

                        <ul className='flex gap-4'>
                            {
                                pageLinks.map(link => {
                                    return <li key={link.id}>
                                        <Link className='p-2 hover:underline hover:underline-offset-2 rounded-lg' to={link.link}>{link.title}</Link>
                                    </li>
                                })
                            }


                        </ul>
                    </nav>
                </div>


                {/* right side */}
                <div >

                    {
                        isAuthentic && (
                            <div>profile</div>
                        )
                    }

                    {
                        !isAuthentic && (
                            <div className='flex gap-4'>
                                <Link className='p-2 hover:underline hover:underline-offset-2 rounded-lg' to={'/login'}>Login</Link>
                                <Link className='p-2 hover:underline hover:underline-offset-2 rounded-lg' to={'/signup'}>Signup</Link>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default Navbar