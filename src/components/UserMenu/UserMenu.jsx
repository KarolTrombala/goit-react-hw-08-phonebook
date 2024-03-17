import css from'./UserMenu.module.css';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

export const UserMenu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth()

    const handleLogout = () => dispatch(logOut())

    return (
        <div className={css.wrapper}>
            <p className="username">Welcome, {user?.name}</p>
            <button className={css.button} type="button" onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
};
