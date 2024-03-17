import './Home.module.css'

import React from 'react'

import { Hero } from 'components/Hero/Hero'

const Home = () => (
    <div className={css.container}>
        <h1 className={css.title}>
            Start your own phonebook with <p>PhoneMe!</p>
        </h1>
        <Hero />
    </div>
);
export default Home
