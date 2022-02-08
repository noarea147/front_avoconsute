import React, { createContext, useContext } from 'react'
import axios_factory, { METHOD_POST } from '../helpers/axios_factory'
import {
    GET_LAWYER_BY_FILTERS,
} from '../helpers/Url_api_manger'
const SearchContext = createContext()
export function useSearchContext() {
    return useContext(SearchContext)
}
export default function SearchProvider({ children }) {
    async function search(data) {
        return await axios_factory({
            url: GET_LAWYER_BY_FILTERS,
            method: METHOD_POST,
            data: data,
        })
    }
    const value = {
        search,
    }
    return (
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    )
}
