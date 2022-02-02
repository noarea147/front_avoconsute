import React, { createContext, useContext } from 'react'
import axios_factory, { METHOD_POST } from '../helpers/axios_factory'
import { GET_BLOGS, GET_BLOG_BY_ID } from '../helpers/Url_api_manger'
const BlogContext = createContext()
export function useBlogContext() {
    return useContext(BlogContext)
}
export default function BlogProvider({ children })
{
    async function getBlogs(data) {
        return await axios_factory({
            url: GET_BLOGS,
            method: METHOD_POST,
            data: data,
        })
    }
    async function getBlogsById(data) {
        return await axios_factory({
            url: GET_BLOG_BY_ID,
            method: METHOD_POST,
            data: data,
        })
    }
    const value = {
        getBlogs,
        getBlogsById
    }
    return (<BlogContext.Provider value={value}>
        {children}
      </BlogContext.Provider>)
    
}
