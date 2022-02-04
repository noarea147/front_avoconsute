import React, { useContext, useEffect, useState } from 'react'
import { useBlogContext } from '../context/blog_context'
import { useParams } from "react-router-dom";
import formatDate from '../helpers/date_helper';
export default function SingleBlog() {
    const { getBlogsById, getBlogs } = useBlogContext()
    const [limit, setLimit] = useState(3)
    const [blogList, setBlogList] = useState([])
    const [blog, setBlog] = useState({})
    const { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            let res = await getBlogsById({ id: id })
            console.log(res)
            setBlog(res.data.blog)
            console.log(res.data.blogs);
        }
        async function initBlogs() {
            let res = await getBlogs({
                limit: limit,
            })
			console.log(res.data.blogs);

            setBlogList(res.data.blogs)
        }
        fetchData()
        initBlogs()
    }, [])
     
    let shortBody = blog.body
    return (
        <>
        			<div id="breadcrumb">
				<div class="container" dir="rtl">
                <ul>
						<li>
							<a href="/">
								الصفحة الرئيسية
							</a>
						</li>
						<li> <a href="/المجلة-القانونية/">
							المجلة القانونية</a></li>
						<li>{blog.title}</li>
					</ul>
                    <br></br>
				</div>
			</div>
            <div class="container margin_60" dir="rtl">
                <div class="row">
                    <div class="col-lg-9">
                        <div class="bloglist singlepost">
                            <p>
                                <img alt="" class="img-fluid" src={'img/' + blog.image} />
                                <br></br>
                            </p>
                            <h1>{blog.title}</h1>
                            <div class="postmeta">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="icon_folder-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <p>التاريخ : 
                                            <i class="icon_clock_alt"></i>{!blog.createdAt?null:" " + blog.createdAt.slice(0, 10)}
                                        </p>
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
                                    <p><td
                                        dangerouslySetInnerHTML={{
                                            __html: shortBody,
                                        }}
                                    /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="widget"></div>

                        <div class="widget" >
                            <div class="widget-title">
                                <h4>أحدث المقالات</h4>
                            </div>

                            <ul class="comments-list">
                            {blogList.map((item, index) => (
                              <li>
                              <div class="alignleft">
                                  <img src={'img/' + item.image} alt="" />
                              </div>
                              <div class="text-right">
                                  <a href={`/المجلة-القانونية/${item.title.replace(/[!? ]/ig, "-")}/${item.id}`}><h3>{item.title}</h3></a>
                              
                              <small>{!blog.createdAt?null:item.createdAt.slice(0, 10)}</small>
                              </div>
                          </li>
                          ))}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
