import React, { useContext, useEffect, useState } from 'react'
import { useBlogContext } from '../context/blog_context'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function SingleQuestion() {
    const { getQuestionById, getQuestion } = useBlogContext()
    const [limit, setLimit] = useState(3)
    const [questionList, setQuestionList] = useState([])
    const [question, setQuestion] = useState({})
    const { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            let res = await getQuestionById({ id: id })
            setQuestion(res.data.question)
        }
        async function initQuestion() {
            let res2 = await getQuestion({
                limit: limit,
            })
            setQuestionList(res2.data.questions)
        }
        fetchData()
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
                    {question.title ? question.title : 'الأسئلة الشائعة'}
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
                <div class="container">
                    <ul>
                        <li>
                            <a href="/"> الصفحة الرئيسية </a>
                        </li>
                        <li>
                            <a href="/استشارات-قانونية/">استشارات قانونية</a>
                        </li>
                        <li>{question.title}</li>
                    </ul>
                    <br></br>
                </div>
            </div>
            <div class="container margin_60" dir="rtl">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="bloglist singlepost">
                            <h1>{question.title}</h1>
                            <div class="postmeta"></div>
                            <div class="post-content">
                                <div class="singlebox">
                                    <div class="user-icon">
                                        <img
                                            src="/assets/img/User-avatar.png"
                                            width={20}
                                            alt=""
                                        />
                                        <strong>
                                            <p>مستخدم أفكونسلت</p>
                                        </strong>
                                    </div>

                                    <p>{question.content}</p>
                                </div>
                                <div class="avo-reponse">
                                    <h5>الإجابات المقترحة</h5>
                                </div>
                                {!question.answers
                                    ? null
                                    : question.answers.map((answer, index) => (
                                          <div class="singlebox">
                                              <div class="user-icon">
                                                  <img
                                                      src="/assets/img/User-avatar.png"
                                                      width={20}
                                                      alt=""
                                                  />
                                                  <strong>
                                                      {!answer.user
                                                          ? 'أفكونسلت'
                                                          : answer.user}
                                                  </strong>
                                              </div>
                                              <p>{answer.text || null}</p>
                                          </div>
                                      ))}
                            </div>
                        </div>
                    </div>
                    <aside class="col-lg-3" dir="rtl">
                        <div class="widget">
                            <div class="widget-title">
                                <h4>أحدث استشارة قانونية</h4>
                            </div>

                            <ul class="comments-list blogpointer">
                                {questionList.map((item, index) => (
                                    <li>
                                        <div class="alignleft">
                                            <a
                                                href={`/استشارات-قانونية/${item.title.replace(
                                                    /[^A-Z0-9]/gi,
                                                    '-'
                                                )}/${item.id}`}
                                            >
                                                <img
                                                    src="/assets/img/question-mark-icon-help-symbol-260nw-400447213.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <small></small>
                                        <a
                                            href={`/استشارات-قانونية/${item.title.replace(
                                                /[^A-Z0-9]/gi,
                                                '-'
                                            )}/${item.id}`}
                                        >
                                            <h3>{item.title}</h3>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}
