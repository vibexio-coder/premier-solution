/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { SendIcon } from "../../assets/icons/Icons";

const FindUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "+91 ",
        email: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",
    });

    // Notification state
    const [notification, setNotification] = useState({
        show: false,
        type: "", // "success" or "error"
        message: "",
        progress: 100,
    });

    // Progress bar animation
    useEffect(() => {
        if (!notification.show) return;

        const interval = setInterval(() => {
            setNotification(prev => {
                if (prev.progress <= 0) {
                    clearInterval(interval);
                    return { ...prev, show: false };
                }
                return { ...prev, progress: prev.progress - 1.67 }; // 3 seconds total
            });
        }, 50);

        return () => clearInterval(interval);
    }, [notification.show]);

    // Show notification function
    const showNotification = (type, message) => {
        setNotification({
            show: true,
            type,
            message,
            progress: 100,
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Phone number handling with +91 prefix
        if (name === "phone") {
            // Only allow digits and backspace for actual number entry
            // Keep +91 prefix always
            if (value.startsWith("+91 ")) {
                // Extract only the number part after +91 
                const numberPart = value.substring(4);
                // Allow only digits for the actual number
                const numbersOnly = numberPart.replace(/[^\d]/g, '');
                // Limit to 10 digits after +91
                const limitedNumbers = numbersOnly.slice(0, 10);
                setFormData({ ...formData, [name]: "+91 " + limitedNumbers });
            } else if (value.length < 4) {
                // If user tries to delete +91, restore it
                setFormData({ ...formData, [name]: "+91 " });
            } else {
                // If somehow prefix is missing, add it back
                setFormData({ ...formData, [name]: "+91 " + value.replace(/[^\d]/g, '').slice(0, 10) });
            }
        }
        // Name field - prevent numbers
        else if (name === "name") {
            // Allow only letters, spaces, and common name characters
            const lettersOnly = value.replace(/[^A-Za-z\s\-'.]/g, '');
            setFormData({ ...formData, [name]: lettersOnly });
        }
        // Email field - basic validation while typing
        else if (name === "email") {
            setFormData({ ...formData, [name]: value });
        }
        // Other fields
        else {
            setFormData({ ...formData, [name]: value });
        }

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validate = () => {
        const newErrors = {
            name: "",
            phone: "",
            email: "",
        };
        let isValid = true;

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            showNotification("error", "Name is required");
            isValid = false;
        } else if (/[0-9]/.test(formData.name)) {
            newErrors.name = "Name should not contain numbers";
            if (isValid) showNotification("error", "Name should not contain numbers");
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name should be at least 2 characters";
            if (isValid) showNotification("error", "Name should be at least 2 characters");
            isValid = false;
        }

        // Phone validation
        const phoneNumber = formData.phone.substring(4); 

        if (!phoneNumber.trim()) {
            newErrors.phone = "Phone number is required";
            if (isValid) showNotification("error", "Phone number is required");
            isValid = false;
        }
        else if (
            phoneNumber.length !== 10 ||
            !/^[6-9]\d{9}$/.test(phoneNumber)
        ) {
            newErrors.phone = "Enter a valid number (starts with 6, 7, 8, or 9)";
            if (isValid) showNotification(
                "error",
                "Enter a valid number"
            );
            isValid = false;
        }


        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
            if (isValid) showNotification("error", "Email is required");
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address (must contain @ and domain)";
            if (isValid) showNotification("error", "Enter a valid email address ");
            isValid = false;
        } else if (!formData.email.includes('@')) {
            newErrors.email = "Email must contain @ symbol";
            if (isValid) showNotification("error", "Email must contain @ symbol");
            isValid = false;
        } else {
            // Additional check for proper email format
            const parts = formData.email.split('@');
            if (parts.length !== 2 || !parts[0] || !parts[1] || !parts[1].includes('.')) {
                newErrors.email = "Enter a valid email address";
                if (isValid) showNotification("error", "Enter a valid email address");
                isValid = false;
            }
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        try {
            // Use formData instead of JSON for CORS compatibility
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("phone", formData.phone);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("service", formData.service || "");
            formDataToSend.append("message", formData.message || "");

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycby-wskqj7IIL00Q-ulSSMpQN4iOgBtAz-zZnq6W0n8Bd7CkGvUbG4-OgRJDngnhhE1Whw/exec",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: formDataToSend
                }
            );

            // Show success notification
            showNotification("success", "Message sent successfully! We'll contact you soon.");

            // Reset form but keep +91 in phone
            setFormData({
                name: "",
                phone: "+91 ",
                email: "",
                service: "",
                message: "",
            });
        } catch (err) {
            console.error("Submission error:", err);
            showNotification("error", "Failed to send message. Please try again.");
        }
    };

    // Handle phone field focus to prevent cursor movement before +91
    const handlePhoneFocus = (e) => {
        // Move cursor to end of input (after +91 prefix)
        const input = e.target;
        setTimeout(() => {
            input.setSelectionRange(input.value.length, input.value.length);
        }, 0);
    };

    // Handle phone field click to prevent editing prefix
    const handlePhoneClick = (e) => {
        const input = e.target;
        const cursorPos = input.selectionStart;

        // If user tries to click or select before position 4 (after "+91 "), move cursor to end
        if (cursorPos < 4) {
            setTimeout(() => {
                input.setSelectionRange(input.value.length, input.value.length);
            }, 0);
        }
    };

    return (
        <div className="bg-[#EDEDED] px-6 sm:px-10 lg:px-16 xl:px-[90px] pt-[28px] pb-16 relative">
            {/* Notification Container - Top Right Corner */}
            {notification.show && (
                <div className="fixed top-4 right-4 z-50 w-80 sm:w-96 animate-slide-in-right">
                    <div className={`rounded-lg shadow-lg overflow-hidden border ${notification.type === "success"
                        ? "bg-green-50 border-green-200"
                        : "bg-red-50 border-red-200"
                        }`}>
                        {/* Progress Bar */}
                        <div className="h-1 w-full bg-gray-100">
                            <div
                                className={`h-full transition-all duration-300 ${notification.type === "success"
                                    ? "bg-green-500"
                                    : "bg-red-500"
                                    }`}
                                style={{ width: `${notification.progress}%` }}
                            />
                        </div>

                        {/* Notification Content */}
                        <div className="p-4 flex items-start">
                            {/* Icon */}
                            <div className={`flex-shrink-0 w-6 h-6 mr-3 mt-0.5 ${notification.type === "success"
                                ? "text-green-600"
                                : "text-red-600"
                                }`}>
                                {notification.type === "success" ? (
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                ) : (
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </div>

                            {/* Message */}
                            <div className="flex-1">
                                <p className={`font-medium ${notification.type === "success"
                                    ? "text-green-800"
                                    : "text-red-800"
                                    }`}>
                                    {notification.type === "success" ? "Success!" : "Error!"}
                                </p>
                                <p className={`text-sm mt-0.5 ${notification.type === "success"
                                    ? "text-green-700"
                                    : "text-red-700"
                                    }`}>
                                    {notification.message}
                                </p>
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setNotification(prev => ({ ...prev, show: false }))}
                                className="ml-2 text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col-reverse lg:flex-row gap-12 items-start justify-between">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[#496C6B] space-grotesk font-bold text-[42px] leading-[66px] tracking-[0.03em] mb-6">
                        Find Us
                    </h2>

                    <div className="bg-[#496C6B] p-[27px] rounded-[16px] w-full max-w-[480px] mb-6">
                        <div className="w-full h-[368px] rounded-[12px] overflow-hidden bg-white">
                            <iframe
                                title="map"
                                src="https://maps.google.com/maps?q=No%2089-B%20Cauveri%20Street%20Odakkadu%20Tamil%20Nadu%20641602&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-10 lg:gap-0 xl:gap-10 text-[#1C4746]">
                        <div className="lg:max-w-[200px] xl:max-w-[320px]">
                            <p className="poppins font-semibold text-[16px] leading-[34px] tracking-[0.08em]">
                                No 89-B Cauveri Street,
                                <br className=" lg:hidden xl:block" />
                                Odaikadu,
                                <br />
                                Tirupur - 641 602
                            </p>
                        </div>

                        <div className="max-w-[220px]">
                            <p className="poppins font-semibold text-[16px] leading-[34px] tracking-[0.08em]">
                                No 30, Vasanth Nagar
                                <br />
                                2nd Street, Singanallur
                                <br />
                                Coimbatore - 641 005
                            </p>
                        </div>
                    </div>
                </div>

                {/* FORM */}
                <div className="w-full lg:w-1/2 flex justify-center -mt-40 md:-mt-32 lg:-mt-51">
                    <div className="bg-[#D5DCDC] w-full xl:w-[662px] sm:h-[836px] rounded-[20px] px-8 md:px-10 lg:px-[50px] xl:px-[72px] py-6 md:py-[57px] shadow-[0_0_11px_0_#00000066]">
                        <h3 className="text-[#496C6B] space-grotesk font-bold text-center lg:text-left text-[22px] md:text-[32px] leading-[66px] tracking-[0.03em] mb-6">
                            Send us a Message
                        </h3>

                        <form className="space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-[#496C6B] mb-[10px]">
                                    Name*
                                </label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full h-[42px] rounded-[30px] px-5 bg-white border-transparent
             focus:outline-none focus:ring-2 focus:ring-[#496C6B] focus:border-[#496C6B]"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1 ml-2">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[#496C6B] mb-[10px]">
                                    Phone*
                                </label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onFocus={handlePhoneFocus}
                                    onClick={handlePhoneClick}
                                    className="w-full h-[42px] rounded-[30px] px-5 bg-white border-transparent
             focus:outline-none focus:ring-2 focus:ring-[#496C6B] focus:border-[#496C6B]"
                                />
                                {errors.phone && (
                                    <p className="text-red-500 text-sm mt-1 ml-2">{errors.phone}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[#496C6B] mb-[10px]">
                                    Email*
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@domain.com"
                                    className="w-full h-[42px] rounded-[30px] px-5 bg-white border-transparent
             focus:outline-none focus:ring-2 focus:ring-[#496C6B] focus:border-[#496C6B]"
                                /> 
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1 ml-2">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-[#496C6B] mb-[10px]">
                                    Service Required
                                </label>
                                <input
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full h-[42px] rounded-[30px] px-5 bg-white border-transparent
             focus:outline-none focus:ring-2 focus:ring-[#496C6B] focus:border-[#496C6B]"
                                />
                            </div>

                            <div>
                                <label className="block text-[#496C6B] mb-[10px]">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full rounded-[30px] px-5 py-3 bg-white resize-none border-transparent
             focus:outline-none focus:ring-2 focus:ring-[#496C6B] focus:border-[#496C6B]"
                                />
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="bg-[#1C4746] text-white px-7 py-3 rounded-full flex items-center gap-4 cursor-pointer"
                                >
                                    <SendIcon />
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindUs;