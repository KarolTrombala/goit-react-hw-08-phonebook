import css from'./AppBar.module.css';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

export const AppBar = () => {
    const { isLoggedIn } = useAuth()

    return (
        <header className={css.header}>
            <Navigation />

            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
};
