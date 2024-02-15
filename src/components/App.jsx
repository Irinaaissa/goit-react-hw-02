import './App.css'
import { useState, useEffect } from 'react';



import { Description } from './Description/Description';
 import Options from './Options/Options';
// import { Feedback } from "./Feedback/";
  import {Notification} from './Notification/Notification';
// 
const App = () => {
  const initialState = { good: 0, neutral: 0, bad: 0 };  
  
  
  const [feedback, setFeedback] = useState(() => {
   
      const storedFeedback = window.localStorage.getItem('feedback');
    
    if (storedFeedback  !== null) {
      return JSON.parse(storedFeedback);      
    }
    
    return initialState;
  });


 
  useEffect(() => {   
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  
  const updateFeedback = (feedbackType) => {    
    setFeedback((prevFeedback) => ({...prevFeedback, [feedbackType]: prevFeedback[feedbackType] + 1,}));        
  };

   
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    
  const positiveFeedback = Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100) + "%";
  
  
    const resetFeedback = () => {
    setFeedback(initialState);    
  };  

  const Feedback = ({ feedback, totalFeedback, positiveFeedback }) => {
  

    return (
      
      <ul >     
        <li >Good: {feedback.good}</li>
        <li >Neutral: {feedback.neutral}</li>
        <li >Bad: {feedback.bad}</li>
        <li >Total: {totalFeedback}</li>
        <li >Positive: {positiveFeedback}</li>
      </ul>
    )
  };
  
  return (
    <>

      <Description />
      
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback } />      
      {totalFeedback? (<Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />) : (<Notification />) } 
    </>
  )
}

export default App
