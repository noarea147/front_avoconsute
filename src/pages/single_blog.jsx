import React, { useContext, useEffect, useState } from 'react'
import { useBlogContext } from '../context/blog_context'
import { useParams } from "react-router-dom";
export default function SingleBlog() {
        const { getBlogById } = useBlogContext()
    const [single_blog, setBlog] = useState({})
    const { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            let res = await getBlogById({ id: id })
            console.log(res)
            setBlog(res.data.blog)
        }
        fetchData()
    }, [])


    return (
        <>
            <div class="container margin_60">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="bloglist singlepost">
                            <p>
                                <img alt="" class="img-fluid" src="" />
                            </p>
                            <h1>title</h1>
                            <div class="postmeta">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="icon_folder-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="icon_clock_alt"></i>temps
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="icon_pencil-edit"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="post-content">
                                <div>
                                    <p>body</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="widget"></div>

                        <div class="widget">
                            <div class="widget-title">
                                <h4>أحدث المقالات</h4>
                            </div>

                            <ul class="comments-list">
                                <li>
                                    <div class="alignleft">
                                        <img src="" alt="" />
                                    </div>
                                    <small>temps</small>
                                    <h3>title</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
