// import React from 'react';
// import './faqpage.css'
// const FaqPage = () => {
//     return (
//         <div className='faq'>
//             <div className='questions'>
//                 <h2>Frequently Asked Questions</h2>
//                 <p>How to select photos</p>
//                 <p>How to download photos</p>
//                 <p>How to download videos</p>
//                 <p>How to request edits on videos</p>
//             </div>
//         </div>
//     );
// }

// export default FaqPage;


import React, { useState } from 'react';
import './faqpage.css';

const FaqPage = () => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        setSelectedQuestion(index === selectedQuestion ? null : index);
    };
    const faqData = [
        {
            question: "How to select photos?",
            answer: " i dont know"
        },
        {
            question: "How to download photos?",
            answer: " i dont know1"
        },
        {
            question: "How to download videos?",
            answer: " i dont know2"
        },
        {
            question: "How to request edits on videos?",
            answer: " i dont know3"
        },

    ]

    return (
        <div className='faq'>
            <div className='questions'>
                <h2>Frequently Asked Questions</h2>
                {faqData.map((question, index) => (
                    <div
                        key={index}
                        className={`question ${selectedQuestion === index ? 'active' : ''}`}
                        onClick={() => handleQuestionClick(index)}
                    >
                        <p>{question.question}</p>
                        <div className={`answer ${selectedQuestion === index ? 'show' : ''}`}>
                            <p>{question.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaqPage;