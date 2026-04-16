import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import testimonialBg from "../../assets/images/testimonials.webp";

const testimonials = [
    {
        text: "Outstanding service in handling our income tax appeals. Their detailed documentation and representation before authorities was exceptional.",
        name: "Priya Shankar",
        role: "Business Owner, Coimbatore",
    },
    {
        text: "Very professional team. They helped us streamline our entire compliance process without any hassle.",
        name: "Arun Kumar",
        role: "Startup Founder, Chennai",
    },
    {
        text: "We highly recommend their services. They offer quick, reliable support and are very proactive in their approach.",
        name: "Sneha Reddy",
        role: "Entrepreneur, Hyderabad",
    },
    {
        text: "They handled everything smoothly from start to finish. It's been a great experience working with them.",
        name: "Rahul Mehta",
        role: "CA, Bangalore",
    },
    {
        text: "Top-notch service and a very responsive team. They always ensure our deadlines are confidently met.",
        name: "Karthik Raj",
        role: "Business Owner, Madurai",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center py-[50px] sm:py-[80px] md:py-[100px] bg-white">
            <h1 className="text-[#496C6B] font-bold text-[22px] sm:text-[28px] md:text-[32px] lg:text-[40px] text-center mb-[25px] sm:mb-[30px] md:mb-[40px] px-4">
                What Our Clients Say
            </h1>

            {/* Main container - no borders, pure background image */}
            <div className="relative w-full max-w-[320px] xs:max-w-[400px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[633px] mx-auto">
                
                {/* Background image container */}
                <div className="relative w-full" style={{ aspectRatio: "633/395" }}>
                    <img
                        src={testimonialBg}
                        alt="Testimonials Layout"
                        className="w-full h-full object-contain"
                    />

                    {/* Content overlay - perfectly aligned with image sections */}
                    <div className="absolute inset-0 flex flex-col">
                        
                        {/* Top text area - matches light section of background */}
                        <div className="flex-[0.65] sm:flex-[0.6] flex items-center justify-center px-4 sm:px-6 md:px-8 pt-2 sm:pt-4 md:pt-6">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={index}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="text-[#1A3836] font-medium text-[11px] xs:text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] leading-[1.4] sm:leading-[1.45] md:leading-[1.5] text-center px-2 mt-6 sm:mt-10 md:mt-16 lg:mt-20 xl:mt-24"
                                    style={{ fontFamily: "'Poppins', sans-serif" }}
                                >
                                    "{testimonials[index].text}"
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Bottom text area - matches dark green section of background */}
                        <div className="flex-[0.35] flex flex-col items-center justify-center pb-3 sm:pb-4 md:pb-5 mt-6 sm:mt-10 md:mt-16 lg:mt-20 xl:mt-24">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                                    className="text-center w-full"
                                >
                                    <h3 className="text-white font-bold text-[11px] xs:text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] px-3 ">
                                        {testimonials[index].name}
                                    </h3>
                                    <p className="text-white/80 text-[8px] xs:text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] uppercase tracking-wide px-3 mt-0.5 sm:mt-1">
                                        {testimonials[index].role}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Progress dots */}
                            <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`transition-all duration-300 rounded-full ${
                                            index === i 
                                                ? "w-5 sm:w-6 md:w-7 h-1 sm:h-1.5 bg-white" 
                                                : "w-1.5 sm:w-2 h-1 sm:h-1.5 bg-white/40 hover:bg-white/70"
                                        }`}
                                        aria-label={`Go to testimonial ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;