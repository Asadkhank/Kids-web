import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Do you provide gift wrapping for toys?",
      answer: "Yes, we offer gift wrapping as an additional service for all toys.",
    },
    {
      question: "Can I wash my Kidu toys?",
      answer: "Most Kidu toys are washable. Please check the care label for details.",
    },
    {
      question: "Are Kidu toys safe for babies and children?",
      answer: "All our toys meet international safety standards and are safe for children.",
    },
    {
      question: "Have more questions about our toys?",
      answer: "Feel free to contact our support team for any additional queries.",
    },
  ];

  return (
    <div className="bg-pink-100 p-10 rounded-xl shadow-lg max-w-7xl mx-auto mt-10">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-pink-900">
        Frequently Asked Questions About Product
      </h2>
      <p className="text-center text-gray-700 mb-8 text-lg">
        Please read our frequently asked questions to find out more.
      </p>
      <div>
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-400 py-6 cursor-pointer"
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {faq.question}
              </h3>
              <span
                className={`text-3xl font-bold transition-transform duration-300 ${
                  activeIndex === index ? "transform rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-800 mt-4 text-lg">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
