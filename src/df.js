import React, { useState } from 'react';
import './DF.css';

const DiscussionForum = () => {
  const [questions, setQuestions] = useState([]);
  const [questionInput, setQuestionInput] = useState('');
  const [answerInputs, setAnswerInputs] = useState({});

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    if (questionInput.trim()) {
      setQuestions([...questions, { question: questionInput, answers: [] }]);
      setQuestionInput('');
    }
  };

  const handleAnswerSubmit = (e, index) => {
    e.preventDefault();
    const answerInput = answerInputs[index] || '';
    if (answerInput.trim()) {
      const newQuestions = [...questions];
      newQuestions[index].answers.push(answerInput);
      setQuestions(newQuestions);
      setAnswerInputs({ ...answerInputs, [index]: '' });
    }
  };

  return (
    <div className="forum-container">
      <h1>Student Discussion Forum</h1>
      <form onSubmit={handleQuestionSubmit} className="question-form">
        <input
          type="text"
          placeholder="Ask a question..."
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
          required
        />
        <button type="submit">Submit Question</button>
      </form>

      <div className="questions-list">
        {questions.map((item, index) => (
          <div key={index} className="question-item">
            <h2>{item.question}</h2>
            <form onSubmit={(e) => handleAnswerSubmit(e, index)} className="answer-form">
              <input
                type="text"
                placeholder="Type your answer..."
                value={answerInputs[index] || ''}
                onChange={(e) => setAnswerInputs({ ...answerInputs, [index]: e.target.value })}
              />
              <button type="submit">Submit Answer</button>
            </form>
            <div className="answers-list">
              {item.answers.map((answer, idx) => (
                <div key={idx} className="answer-item">
                  <p>{answer}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscussionForum;
