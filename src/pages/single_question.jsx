import React, { useContext, useEffect, useState } from 'react'
import { useBlogContext } from '../context/blog_context'
import { useParams } from "react-router-dom";

export default function SingleQuestion() {

    const { getQuestionById } = useBlogContext()
    const [question, setQuestion] = useState({})
    const { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            let res = await getQuestionById({ id: id })
            console.log(res)
            setQuestion(res.data.question)
        }
        fetchData()
    }, [])
    return (
        <>
            <div id="breadcrumb" dir='rtl'>
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
                                    <p>{question.content}</p>
                                </div>
                                <div class="avo-reponse">
                                    <p>
                                        {' '}
                                        تمت الإجابة على هذا السؤال من قبل:{' '}
                                        <a href=""> lawyer</a>
                                    </p>
                                </div>
                                    {
                                    !question.answers ? null :question.answers.map((answer , index)=>
                                <div class="singlebox">
                                    <p>
                                    { answer.text ||null}
                                    </p>
                                </div>
                                    )}
                            </div>
                        </div>
                        
                    </div>
                    <aside class="col-lg-3" dir='rtl'>
                    <div class="widget">
                            <div class="widget-title">
                                <h4>أحدث استشارة قانونية</h4>
                            </div>

                            <ul class="comments-list">
                                <li href="">
                                    <div class="alignleft">
                                        <img src="/assets/img/question-mark-icon-help-symbol-260nw-400447213.jpg"
                                  alt="" />
                                    </div>
                                    <small></small>
                                    <h3>titre</h3>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    )
}
