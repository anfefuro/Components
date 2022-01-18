import React from 'react'
import { Link } from 'react-router-dom'

import useUser from '../Hooks/useUser'

export default function Header() {

    const {isLogged, logout} = useUser()

    const handleClick = e => {
        e.preventDefault()
        logout()
    }

    return (
        <header>
            { isLogged ? <Link to="#" onClick={handleClick}> LogOut </Link> : <Link to="/login"> LogIn </Link>}
        </header>
    )
}
