import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/about-page">About</Link>
                </li>
                <li>
                    <Link to="/blog-page">Blog</Link>
                </li>
                <li>
                    <Link to="/single-blog-page">SingleBlog</Link>
                </li>
                <li>
                    <Link to="/Contact-page">Contact</Link>
                </li>
            </ul>
        </nav>
    )

}
export default NavigationBar;