import React, { createContext, useContext } from 'react'
import axios_factory, { METHOD_POST } from '../helpers/axios_factory'
import { GET_LAWYER, GET_LAWYER_BY_ID, GET_LAWYER_BY_FILTES } from '../helpers/Url_api_manger'
const LawyerContext = createContext()
export function useLawyerContext() {
    return useContext(LawyerContext)
}
export default function LawyerProvider({ children }) {
    async function getLawyers(data) {
        return await axios_factory({
            url: GET_LAWYER,
            method: METHOD_POST,
            data: data,
        })
    }
    async function getLawyerById(data) {
        return await axios_factory({
            url: GET_LAWYER_BY_ID,
            method: METHOD_POST,
            data: data,
        })
    }
    async function getLawyersByFilter(data) {
        return await axios_factory({
            url: GET_LAWYER_BY_FILTES,
            method: METHOD_POST,
            data: data,
        })
    }
    const value = {
        getLawyers,
        getLawyerById,
        getLawyersByFilter

    }
    return (
        <LawyerContext.Provider value={value}>
            {children}
        </LawyerContext.Provider>
    )
}
