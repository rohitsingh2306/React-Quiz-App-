import React,{useState} from "react"

export default function App(){
  const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

  const [currentquestion,setquestion] = useState(0)
  const [showScore,setScore] = useState(false)
  const [score,setRealScore] = useState(0)

  const changequestion =(isCorrect)=>{
    if(isCorrect===true){
      const ans = score+1
      setRealScore(ans)
    }
    const nextquestion = currentquestion + 1
    if(nextquestion<questions.length){
    setquestion(nextquestion)
    }else{
      setScore(true)
    }
    
  }

  return (
    <div className="app">
      {
        showScore ? (<div className="score-section">You scored {score} out of {questions.length}</div>)
        : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentquestion+1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentquestion].questionText}</div>
            </div>
            <div className='answer-section'>
						{
              questions[currentquestion].answerOptions.map((answerOption)=>
              <button onClick={()=>changequestion(answerOption.isCorrect)}>{answerOption.answerText}</button>)
            }
					</div>
          </>
        )
      }
    </div>
  )
}