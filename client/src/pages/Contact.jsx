import React from 'react';
import contact2 from "../assets/contact2.jpg";

const ContactPage = () => {
  return (
    <div className="h-screen overflow-hidden text-white relative py-16">
      {/* Background Image with Blur Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={contact2}
          alt="Background"
          className="w-full h-full object-cover filter blur-[7px]"
        />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto flex gap-8 justify-between px-5 h-[90vh] relative z-10 items-center">
        {/* Left Section */}
        <div className="flex-1 min-w-[300px] flex flex-col justify-center">
          <div className="text-lg mb-4">Contact Us</div>
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Get in Touch:
            <span className="bg-gradient-to-r from-[#ff6b6b] via-[#c471ed] to-[#705ef5] text-transparent bg-clip-text">
              {" "}We're Here to Answer Your Questions
            </span>
          </h1>

          <div className="flex flex-col gap-4 mt-6">
            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-lg max-w-[350px]">
              <div className="bg-white/10 w-9 h-9 rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="text-base">support@lorem.com</div>
            </div>

            <div className="flex items-center gap-4 bg-white/10 p-3 rounded-lg max-w-[350px]">
              <div className="bg-white/10 w-9 h-9 rounded flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="text-base">+91-1012023031</div>
            </div>
          </div>

          <div className="flex gap-5 mt-6 md:flex-row flex-col">
            <div className="max-w-[200px]">
              <h3 className="text-xl mb-2">Customer Support</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Our support team is available around the clock to help you with any queries
              </p>
            </div>

            <div className="max-w-[200px]">
              <h3 className="text-xl mb-2">Feedback and Suggestions</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                We value your important feedbacks and are continuously working towards improving ourselves to help you better.
              </p>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex-[0.8] min-w-[300px] max-w-[450px] bg-[rgba(23,24,25,0.5)] backdrop-blur-md p-6 rounded-xl flex flex-col self-center">
          <h2 className="text-3xl mb-1">Get in Touch</h2>
          <p className="text-gray-200 mb-5 text-sm">You can reach us anytime</p>

          <form>
            <div className="flex gap-4 mb-4 md:flex-row flex-col">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full py-3 px-4 rounded-full border-none bg-white/10 text-white mb-4"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full py-3 px-4 rounded-full border-none bg-white/10 text-white mb-4"
                />
              </div>
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full py-3 px-4 rounded-full border-none bg-white/10 text-white mb-4"
            />
            <input
              type="tel"
              placeholder="Phone no"
              className="w-full py-3 px-4 rounded-full border-none bg-white/10 text-white mb-4"
            />
            <textarea
              placeholder="Your Message"
              className="w-full py-3 px-4 rounded-xl border-none bg-white/10 text-white mb-4 min-h-[100px] max-h-[120px] resize-none"
            ></textarea>

            <button
              type="submit"
              className="bg-[#4169e1] text-white py-2.5 px-6 rounded-full border-none cursor-pointer float-right hover:bg-[#3151b2] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;