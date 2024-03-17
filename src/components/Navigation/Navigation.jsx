import './Navigation.module.css'

import { NavLink } from 'react-router-dom'

import { useAuth } from 'hooks/useAuth'

export const Navigation = () => {
    const { isLoggedIn } = useAuth()

    return (
        <nav>
            <NavLink className={css.link} to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink className={css.link} to="/contacts">
                    Contacts
                </NavLink>
            )}
        </nav>
    )
};
