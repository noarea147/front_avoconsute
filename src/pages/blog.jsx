import React, { useState, useEffect } from 'react'
import Post from '../shared/component/post'
import { useBlogContext } from '../context/blog_context'
import {Helmet} from "react-helmet";
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
        <Helmet>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="description"
                    content="اعثر بسرعة على محامٍ بالقرب منك وحدد موعدًا مجانًا عبر الإنترنت ببضع نقرات - دليل المحامين التونسيين AvoConsulte.com"
                />
                <title>
                    AvoConsulte ابحث واعثر على أفضل محام في تونس - المجلة القانونية
                </title>
                <meta
                    name="keywords"
                    content="جدول المحامين بتونس, جدول المحامين, ارقام هواتف محامين في تونس, محامي, 
onat, onat tunisie, ordre des avocats, ordre national des avocats, الفرع الجهوي للمحامين بتونس ,المحاماة , ارقام هواتف محامين في تونس ,استشارات قانونية عقارية تونس , نور الدين بن عياد 
,استشارات قانونية في الطلاق تونس ,  avocats , avocat , Avocat Tunisie , Avocat En Tunisie ,
 Palais de justice Tunis , Avocat Tunisien ,Avocats Tunis ,ordre des avocats Tunisien ,Cabinet D'avocat,
محامون ، محامي ، محام تونسي ، محامي تونس ، محكمة تونس ، محامي تونسي ، محامون تونس 
، نقابة المحامين التونسية 
، ديوان دافو ,جدول المحامين بتونس, جدول المحامين, ارقام هواتف محامين في تونس, محامي,دليل المحامين التونسيين"
                />
                <meta
                    property="og:url"
                    content="https://www.avoconsulte.com/"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="ابحث واعثر على أفضل محام في تونس واحجز موعدك عبر الإنترنت - دليل المحامين التونسيين - دليل المحامين التونسيين"
                />
                <meta
                    property="og:image"
                    content="https://www.avoconsulte.com/img/avoconsulte_com_logo.png"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="avoconsulte.com" />
                <meta
                    property="twitter:url"
                    content="https://www.avoconsulte.com/"
                />
                <meta
                    name="twitter:title"
                    content="ابحث واعثر على أفضل محام في تونس واحجز موعدك عبر الإنترنت "
                />
                <meta
                    name="twitter:image"
                    content="https://www.avoconsulte.com/img/avoconsulte_com_logo.png"
                />
                <meta name="author" content="Avoconsulte" />{' '}
            </Helmet>
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
