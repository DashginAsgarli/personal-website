import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

function Contact() {
    const [showMessage, setShowMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 5000);
    };

    return (
        <section id="contact" className="bg-[#050505] py-20 md:py-32 px-[7%] md:px-[10%] border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-yellow-500/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">

                    <div className="w-full lg:w-1/2 space-y-6 md:space-y-8 text-center lg:text-left">
                        <div>
                            <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
                                READY TO <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">COLLABORATE?</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                            Have a big idea? Let’s bring it to life together. Drop me a message, and I’ll get back to you within 24 hours.
                        </p>

                        <div className="pt-4 md:pt-8">
                            <div className="group cursor-pointer inline-block lg:block">
                                <p className="text-gray-600 text-[9px] md:text-[0.6rem] uppercase tracking-[0.2em] font-bold mb-1">Direct Mail</p>
                                <a href="mailto:dashqinasgarli@gmail.com" className="text-white text-lg md:text-xl font-medium group-hover:text-yellow-500 transition-colors duration-300 flex items-center justify-center lg:justify-start gap-3">
                                    dashqinasgarli@gmail.com
                                    <HiOutlineArrowNarrowRight className="hidden md:block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                <div className="space-y-2 text-left">
                                    <label className="text-[9px] md:text-[0.6rem] text-gray-500 uppercase tracking-widest ml-1">Your Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-white/[0.02] border border-white/10 py-3 md:py-4 px-4 md:px-5 rounded-xl text-white text-sm outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all duration-300"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 text-left">
                                    <label className="text-[9px] md:text-[0.6rem] text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        className="w-full bg-white/[0.02] border border-white/10 py-3 md:py-4 px-4 md:px-5 rounded-xl text-white text-sm outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all duration-300"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2 text-left">
                                <label className="text-[9px] md:text-[0.6rem] text-gray-500 uppercase tracking-widest ml-1">Message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white/[0.02] border border-white/10 py-3 md:py-4 px-4 md:px-5 rounded-xl text-white text-sm outline-none focus:border-yellow-500/50 focus:bg-white/[0.05] transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="relative overflow-hidden group w-full bg-yellow-500 py-3.5 md:py-4 rounded-xl font-bold uppercase text-[10px] md:text-[0.7rem] tracking-[0.2em] text-black transition-all duration-300 hover:shadow-[0_10px_30px_rgba(234,179,8,0.3)] active:scale-[0.98]"
                            >
                                <span className="relative z-10">Send Inquiry</span>
                                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            </button>

                            {showMessage && (
                                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg animate-pulse">
                                    <p className="text-yellow-500 text-[10px] text-center font-bold uppercase tracking-widest"> ✓ Message sent successfully</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;