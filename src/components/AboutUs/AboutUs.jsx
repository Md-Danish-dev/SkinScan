// AboutUs.js
import React from 'react';
import Navbar from '../HomePage/Navbar';
import Footer from '../Footer/Footer';

const AboutUs = () => {
    return (
        <section className=" dark:bg-gray-900 text-white mt-16 pt-4">
            <Navbar />
            <div className="max-w-4xl mx-auto px-6 my-3">
                <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
                <p className="text-lg text-center mb-8">
                    We are a dedicated team of four individuals passionate about leveraging technology to enhance skin health. 
                    Our mission is to provide accurate predictions of skin diseases through the analysis of skin photos, empowering users to take proactive steps in their skincare.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Meet the Team</h3>
                <ul className="space-y-4 mb-8">
                    <li className="bg-yellow-700 shadow-md p-4 rounded">
                        <strong>Md Danish </strong>:
                        <br />
                        <p>Md Danish is a second-year Mechanical Engineering student at IIT Roorkee with a strong interest in software development. They are passionate about integrating technology with engineering principles and enjoy working on coding projects in their free time. As part of our team, Md Danish brings valuable skills and fresh perspectives to our skin disease prediction project.</p>
                    </li>
                    <li className="bg-yellow-700 shadow-md p-4 rounded">
                        <strong>Deepak Bhagat </strong>: 
                        <p>Md Danish is a second-year Mechanical Engineering student at IIT Roorkee with a strong interest in software development. They are passionate about integrating technology with engineering principles and enjoy working on coding projects in their free time. As part of our team, Md Danish brings valuable skills and fresh perspectives to our skin disease prediction project.</p>
                    </li>
                    <li className="bg-yellow-700 shadow-md p-4 rounded">
                        <strong>Rayyan Khan</strong>: 
                        <p>Rayyan is a mechanical engineering undergraduate with a strong passion for web development, data science, and algorithms. He contributed to the front-end development of this project.</p>
                    </li>
                    <li className="bg-yellow-700 shadow-md p-4 rounded">
                        <strong>Aakash</strong>: 
                        <p>Md Danish is a second-year Mechanical Engineering student at IIT Roorkee with a strong interest in software development. They are passionate about integrating technology with engineering principles and enjoy working on coding projects in their free time. As part of our team, Md Danish brings valuable skills and fresh perspectives to our skin disease prediction project.</p>
                    </li>
                </ul>

                <h3 className="text-2xl font-semibold mb-4">Our Inspiration</h3>
                <p className="text-lg mb-8">
                    Our journey began when we realized the increasing number of skin-related health issues in our community. 
                    After witnessing friends and family struggle with skin conditions, we wanted to create a solution that offers quick and accessible insights into skin health.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Vision and Goals</h3>
                <p className="text-lg mb-8">
                    Our vision is to develop a user-friendly platform that not only predicts skin diseases but also educates users about skin care practices. 
                    We aim to collaborate with healthcare professionals to ensure the accuracy of our predictions and provide users with reliable information.
                </p>

                <h3 className="text-2xl font-semibold mb-4">Join Us!</h3>
                <p className="text-lg">
                    We invite you to explore our platform, share your thoughts, and join us on our mission to promote skin health. 
                    Your feedback is invaluable as we continue to enhance our technology and services.
                </p>
            </div>
            <Footer />
        </section>
    );
};

export default AboutUs;
