import css from './Home.module.css';
import React from 'react';
import { Hero } from 'components/Hero/Hero';

const Home = () => (
    <div className={css.container}>
        <h1 className={css.title}>
            <p>My Phonebook</p>
        </h1>
        <Hero />
    </div>
);

export default Home
