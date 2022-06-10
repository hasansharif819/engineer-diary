import React from 'react';
import sharifHasan from '../../Image/sharifHasan.png';
import './About.css';

const About = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary'>About Me</h2>
            <div className="about">
            <img src={sharifHasan} alt="" />
            <h4> <span>Sharif Hasan</span> </h4>
            <p>Educational Background: B.Sc in CSE</p>
            <p title='IST'>Institute of Science and Technology</p>
            <br />
            <p>
                Hello!!!
                I'm <span>Sharif Hasan</span>.Studied at Bachelor of Science in Computer Science and Engineering. I was started my journy with programming hero team on New Year 2022.
                Here Learning process is very interesting also effective. After 4/ four months journey am feel me as a front-end developer with HTML, CSS, Bootstrap, Tailwind, Java Script, React, Firebase. Next goal is to learn MongoDB, Node.js as back-end developer.
                <h6>If anyone ask me to know about my goals or ambition, then I want to say, At present  I'm a web-developer with JS and React but want to be a <span>Data Analyst</span> Python is my first Love. </h6>
                When I was learning C and C++, at that time am fallen  love with Python. But without proper guideline, my dream couldn't came's true. Hope, it will done soon.
                <span>Thank Programming Hero. Thanks Jhankar vai</span>
                </p>
            </div>
        </div>
    );
};

export default About;