import React, { useState, useEffect } from 'react'
import QuestionHome from '../shared/component/home_question'
import { useBlogContext } from '../context/blog_context'
import {Helmet} from "react-helmet";
export default function Question() {
    const { getQuestion } = useBlogContext()
    const [limit, setLimit] = useState(3)
    const [questionList, setQuestionList] = useState([])
	
    async function viewMore() {
        let res = await getQuestion({
            limit: limit + 3,
        })
        setLimit(limit + 3)
        setQuestionList(res.data.questions)
    }

    useEffect(() => {
        async function initQuestion() {
            let res = await getQuestion({
                limit: limit,
            })
            setQuestionList(res.data.questions)
        }
        initQuestion()
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
                    AvoConsulte ابحث واعثر على أفضل محام في تونس - 
                    استشارات قانونية
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
            <div id="breadcrumb">
                <div class="container">
                    <ul>
                        <li>استشارات قانونية</li>
                        <li>
                            <a href="/">الصفحة الرئيسية</a>
                        </li>
                    </ul>
                    <br></br>
                </div>
            </div>
            <div class="bg_color_1">
                <div class="container margin_120_95">
                    <div class="main_title">
                        <h1>استشارات قانونية من أفضل محامين في تونس</h1>
                        <p>
                            اطرح سؤالك مجانًا على المحامي أو راجع قائمة الأسئلة
                            وإجاباتها.
                        </p>
                    </div>
                    {/* <div class="container margin_120_95">
                        <div class="row add_bottom_30">
                            <div class="col-lg-8">
                                <div class="box_feat2">
                                    <h3>إستشر محامٍ الأن</h3>
                                    <p>
                                        استشارة قانونية من عند أفضل المحامين في
                                        تونس مع خصوصية تامة وإجابة موثوقة
                                    </p>
                                    <br></br>
                                    <p class="text-center">
                                        <a
                                            href="/استشارة-قانونية/"
                                            class="btn_1 medium"
                                        >
                                            إطرح سؤالا الأن
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="box_feat2">
                                    <h3>أخر السؤالات</h3>
                                    <div class="mySlides">
                                        <a href="">title</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div class="main_title">
                        <h2>أسئلة و أجوبة</h2>
                        <p>
                            اطرح سؤالك مجانًا الآن و راجع قائمة الأسئلة
                            وإجاباتها.
                        </p>
                    </div>
                    <div class="row" id="renderQuestionReponse">
                        {questionList.map((item, index) => {
                            return <QuestionHome question={item} />
                        })}
                    </div>
                    <center>
                        <p class="btn_1 medium" onClick={viewMore}>
                            تحميل المزيد
                        </p>
                    </center>{' '}
                </div>
            </div>
        </>
    )
}
