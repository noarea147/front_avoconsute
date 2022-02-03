import React, { createContext, useContext } from 'react'
import axios_factory, { METHOD_POST } from '../helpers/axios_factory'
import { GET_QUESTIONS, GET_QUESTION_BY_ID } from '../helpers/Url_api_manger'
const QuestionContext = createContext()
export function useBlogContext() {
    return useContext(QuestionContext)
}
export default function QuestionProvider({ children })
{
    async function getQuestion(data) {
        return await axios_factory({
            url: GET_QUESTIONS,
            method: METHOD_POST,
            data: data,
        })
    }
    async function getQuestionById(data) {
        return await axios_factory({
            url: GET_QUESTION_BY_ID,
            method: METHOD_POST,
            data: data,
        })
    }
    const value = {
        getQuestion,
        getQuestionById
    }
    return (<QuestionContext.Provider value={value}>
        {children}
      </QuestionContext.Provider>)
    
}
