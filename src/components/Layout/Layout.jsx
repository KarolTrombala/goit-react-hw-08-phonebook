import css from './Layout.module.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';

export const Layout = () => {
    return (
        <div className={css.layout}>
            <AppBar />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </div>
    )
};
