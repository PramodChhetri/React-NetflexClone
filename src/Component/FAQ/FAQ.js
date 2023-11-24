import React, { useState } from 'react';
import './FAQ.css';

const FAQBox = ({ question, answer }) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [signChange, setSignChange] = useState(true);

  const toggleAnswerVisibility = () => {
    setIsAnswerVisible(!isAnswerVisible);
    setSignChange(!signChange);
  };

  return (
    <>
      <div className='FAQboxQuestion' onClick={toggleAnswerVisibility}>
        <span>{question}</span>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d={signChange ? "M12 4V20M4 12H20" : "M18 6L12 12M12 12L6 18M12 12L18 18M12 12L6 6"} stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>
      {isAnswerVisible && (
        <div className='FAQboxAnswer'>
          <span>{answer}</span>
        </div>
      )}
    </>
  );
};

const FAQ = () => (
  <section className='FAQ'>
    <h2>Frequently Asked Questions</h2>
    {[
      { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, documentaries, and more." },
      { question: "How much does Netflix cost?", answer: "Netflix offers different subscription plans with varying costs. You can visit the official website for the latest pricing details." },
      { question: "Where can I watch?", answer: "You can watch Netflix on various devices, including smart TVs, computers, tablets, and smartphones. The Netflix app is available for download on most platforms." },
      { question: "How do I cancel?", answer: "You can cancel your Netflix subscription at any time by logging into your account and following the cancellation instructions." },
      { question: "What can I watch in Netflix?", answer: "Netflix has a vast library of content, including movies, TV shows, documentaries, and original productions. The content available may vary by region." },
      { question: "Is Netflix good for kids?", answer: "Yes, Netflix offers a dedicated section for kids with a wide range of family-friendly content. Parents can set up parental controls to manage what their kids can watch." }
    ].map((faq, index) => (
      <FAQBox key={index} question={faq.question} answer={faq.answer} />
    ))}

    <span className='textLine'>Ready to watch? Enter your email to create or restart your membership.</span>
    <div className='getStarted'>
      <input type="text" placeholder='Email Address' />
      <button>Get Started</button>
    </div>
  </section>
);

export default FAQ;
