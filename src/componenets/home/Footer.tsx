import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import apiInstance from "../utils/axios";
// import Logo from "../assets/logo.png";  // Import your logo image

const Footer: React.FC = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await apiInstance.post('news-letter', { email: email.toLowerCase() });

            if (response.status === 201) {
                setSuccessMessage("Thank you for subscribing!");
                setEmail("");
            } else {
                setErrorMessage("!Some thing went wrong");
            }
        } catch (error) {
            setErrorMessage("!Already Subscribed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="bg-blue-900 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {/* Contact Information */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Contact Us</h4>
                    <p className="mb-2">P.O.Box 350 – 20600, MARALAL, KENYA - Wamba town</p>
                    <p className="mb-2">Phone: +254718959781</p>
                    <p>Email: Catholicwambahospital@gmail.com</p>
                </div>

                {/* Useful Links */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li>
                            <Link onClick={handleScrollToTop} to="/" className="hover:text-gray-300 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link onClick={handleScrollToTop} to="/about-us" className="hover:text-gray-300 transition-colors">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" onClick={handleScrollToTop} className="hover:text-gray-300 transition-colors">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/doctors" onClick={handleScrollToTop} className="hover:text-gray-300 transition-colors">
                                Doctors
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" onClick={handleScrollToTop} className="hover:text-gray-300 transition-colors">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms" onClick={handleScrollToTop} className="hover:text-gray-300 transition-colors">
                                Terms
                            </Link>
                        </li>
                        <li>
                            <Link to="/faqs" onClick={handleScrollToTop} className="hover:text-gray-300 transition-colors">
                                FAQs
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" onClick={handleScrollToTop} className="hover:text-gray-300 transition-colors">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media & Newsletter */}
                <div>
                    <h4 className="text-lg font-bold mb-4">Follow Us</h4>
                    <div className="flex space-x-4 mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
                            <FaLinkedin />
                        </a>
                    </div>

                    {/* Newsletter Section */}
                    <h4 className="text-lg font-bold mb-2">Subscribe to our Newsletter</h4>
                    <form onSubmit={handleNewsletterSubmit}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="p-2 w-full rounded-lg text-blue-900"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white mt-2 p-2 w-full rounded-lg transition-all"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Subscribing..." : "Subscribe"}
                        </button>
                    </form>
                    {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
                </div>
            </div>

            {/* Logo & Back to Top Button */}
            <div className="text-center mt-4">
                <img
                    src='/logo.png'
                    alt="Site Logo"
                    className="mx-auto mb-4  w-20 "
                />
                <button
                    onClick={handleScrollToTop}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
                >
                    Back to Top
                </button>
            </div>

            {/* Footer Bottom */}
            <div className="bg-blue-800 py-4 mt-10">
                <div className="container mx-auto text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} Catholic Hospital Wamba. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
