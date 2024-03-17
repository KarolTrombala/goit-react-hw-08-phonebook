import './Register.module.css'

import { Helmet } from 'react-helmet'

import { RegisterForm } from 'components/RegisterForm/RegisterForm'

const Register = () => (
    <div className={css.register}>
        <Helmet>
            <title>Register</title>
        </Helmet>
        <RegisterForm />
    </div>
)
export default Register
