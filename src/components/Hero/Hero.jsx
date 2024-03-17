import './Hero.module.css';

import { NavLink } from 'react-router-dom';

export const Hero = () => {
    return (
        <>
            <NavLink className={css.hero} to="/register">
                PhoneMe!
            </NavLink>
        </>
    )
};