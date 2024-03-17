import css from './Login.module.css';
import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';

const Login = () => (
    <div className={css.login}>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <LoginForm />
    </div>
);

export default Login
