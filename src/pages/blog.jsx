import React, { useState, useEffect } from 'react'
import Post from '../shared/component/post'
import { useBlogContext } from '../context/blog_context'
export default function Blog() {
    const { getBlogs } = useBlogContext()
    const [limit, setLimit] = useState(3)
    const [blogList, setBlogList] = useState([])
    async function viewMore() {
        let res = await getBlogs({
            limit: limit + 3,
        })
        setLimit(limit + 3)
        setBlogList(res.data.blogs)
    }

    useEffect(() => {
        async function initBlogs() {
            let res = await getBlogs({
                limit: limit,
            })
            console.log(res.data.blogs)

            setBlogList(res.data.blogs)
        }
        initBlogs()
    }, [])

    return (
        <>
            <div id="breadcrumb" dir="rtl">
                <div class="container" dir="rtl">
                    <ul>
                        <li>
                            <a href="/">الصفحة الرئيسية</a>
                        </li>
                        <li>المجلة القانونية</li>
                    </ul>
                    <br></br>
                </div>
            </div>
            <div class="container" dir="rtl">
                <div class="main_title">
					<br></br>
					<br></br>
                    <h1>
                        المجلة<strong>القانونية</strong>
                    </h1>
                    <h2>
                        تحتوي المجلة القانونية لمنصة المحامي على معلومات مفيدة
                        وجميع الأخبار الحالية
                    </h2>
                </div>

                <div class="row  ">
                    {blogList !== null
                        ? blogList.map((item, index) => {
                              return <Post blog={item} />
                          })
                        : null}
                </div>
                <center>
                    <p class="btn_1 medium" onClick={viewMore}>
                        تحميل المزيد
                    </p>
                </center>
				<br></br>
                {/* <aside class="col-lg-3">
                    <div class="widget"></div>

                    <div class="widget">
                        <div class="widget-title" dir="rtl">
                            <h4>أحدث المقالات</h4>
                        </div>

                        <ul class="comments-list">
                            <li>
                                <div class="alignleft" dir="rtl">
                                    <a href="">
                                        <img src="" alt="" />
                                    </a>
                                </div>
                                <small>temps</small>
                                <h3>
                                    <a href="" title="">
                                        title
                                    </a>
                                </h3>
                            </li>
                        </ul>
                    </div>
                </aside> */}
            </div>
        </>
    )
}
