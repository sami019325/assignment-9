import eyeSVG from './eye-solid.svg'
import React, { createElement, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './Quiz.css'
const Quiz = () => {

    const quiz = useLoaderData()
    console.log(quiz.data.questions);
    const questions = quiz.data.questions;
    return (
        <div>
            <div className='Quiz_Ques_header_Container'>
                <div className='Quiz_Question_Header'>
                    <img src={quiz.data.logo} alt="" />
                    <h1>{quiz.data.name} Quiz</h1>
                </div>
                <div>
                    <h4> Right answer 10 from 20</h4>
                </div>
            </div>
            <div className='quiz_Question_box'>
                {
                    questions.map(q => {
                        const question = q.question
                        const onlyQuestionFist = question.slice(3, -4)
                        const correctAns = q.correctAnswer
                        const ShowANS = (id) => {
                            document.getElementById('Ans' + id).innerHTML = `Ans is ${correctAns} `
                        }
                        const IsAnsTrue = (ans, id) => {
                            console.log('sami:', id, ans, correctAns,)
                            if (ans === correctAns) {
                                document.getElementById(id).style.background = 'aquamarine'
                            }
                            else {
                                document.getElementById(id).style.background = 'rgb(252, 160, 144)'

                            }
                        }
                        return (
                            <div className='question_Box' id={q.id}>
                                <div className='question_Heading'>
                                    <h3>{onlyQuestionFist}</h3>
                                    <img className='eyeSvg' src={eyeSVG} onClick={() => ShowANS(q.id)} alt="" />
                                </div>
                                <div className='answer'>
                                    <small id={`Ans${q.id}`}>Answer is hidden </small>
                                </div>
                                <div className={`option`}>
                                    <button onClick={() => IsAnsTrue(q.options[0], q.id)}>{q.options[0]}</button>
                                    <button onClick={() => IsAnsTrue(q.options[1], q.id)}>{q.options[1]}</button>
                                    <button onClick={() => IsAnsTrue(q.options[2], q.id)}>{q.options[2]}</button>
                                    <button onClick={() => IsAnsTrue(q.options[3], q.id)}>{q.options[3]}</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};


export default Quiz;