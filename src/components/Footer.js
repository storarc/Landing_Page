// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
                {/* Contact Information */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                    <p className="text-sm">Phone: +91 70171 14378</p>
                    <p className="text-sm">Email: info@storarc.network</p>
                </div>

                {/* Navigation Links */}
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold mb-2">Quick Links</h2>
                    <ul className="space-y-1">
                        <li><a href="#about" className="hover:underline">About Us</a></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-lg font-bold mb-2">Follow Us</h2>
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i> Facebook
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-twitter"></i> Twitter
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <p className="text-sm">&copy; {new Date().getFullYear()} CompanyName. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
