import React, { useContext, useEffect, useState } from 'react'
import { useLawyerContext } from '../context/lawyer_context'
import { useParams } from "react-router-dom";
export default function LawyerProfile() {
    const { getLawyerById } = useLawyerContext()
    const [lawyer, setLawyer] = useState({})
    const { id } = useParams()
    useEffect(() => {
        async function fetchData() {
            let res = await getLawyerById({ id: id })
            console.log(res)
            setLawyer(res.data.lawyer)
        }
        fetchData()
    }, [])

    return (
        <div dir="rtl">
            <div class="bg_color">
                <div class="container margin_detail">
                    <div class="row single-page">
                        <div class="col-xl-8 col-lg-7">
                            <div class="box_general">
                                <div class="main_info_wrapper">
                                    <div class="main_info clearfix">
                                        <div class="user_thumb" dir="rtl">
                                            <figure>
                                                <img
                                                    src="assets/images/avatar.png"
                                                    alt="NAME"
                                                />
                                            </figure>
                                        </div>
                                        <div class="user_desc">
                                            <img
                                                src="/assets/assets/images/check-mark.png"
                                                alt="verifier"
                                            />
                                            <span> {`صفحة المحامي ${lawyer.nameInArabic}`}</span>
                                            <p>{lawyer.addressInArabic}</p>
                                            <ul class="tags">
                                                <li>
                                                    <a href="/محامون/STATE/">
                                                        {lawyer.stateInArabic}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <h4>معلومات إضافية عن {lawyer.nameInArabic}</h4>
                                    <p>غير متوفره.</p>
                                    <br></br>
                                    <h5>ماهي افوكنسلت؟</h5>
                                    <p>
                                        افوكنسلت هي عبارة عن منصة مبتكرة تتيح لك
                                        العثور بسرعة على محامٍ الأقرب إليك
                                        وتحديد موعد عبر الإنترنت مجانًا.افوكنسلت
                                        يسمح لك بطرح أسئلتك عبر الإنترنت مباشرة
                                        على المحامين مع احترام شروط السرية.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5" id="sc">
                            <div class="box_booking">
                                <div class="head">
                                    <h3>هل تريد الإتصل ب NAME ؟</h3>
                                </div>
                                <div class="main">
                                    <a class="btn_12 full-width">
                                        انقر لعرض رقم الهاتف
                                    </a>
                                    <br></br>
                                    <div class="msg">
                                        <h4>
                                            <strong>هل أنت محامٍ ؟</strong>
                                            <br></br>
                                            <a href="https://avoconsulte.com/%D8%A7%D8%AA%D8%B5%D9%84-%D8%A8%D9%86%D8%A7/">
                                                {' '}
                                                هل تريد تصحيح معلومات أو أن تكون
                                                في المنصة ؟{' '}
                                            </a>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div id="myBtn2" class="btn_reserve_fixed">
                                <a class="btn_12 full-width">
                                    انقر لعرض رقم الهاتف
                                </a>
                            </div>
                            <div id="myModal" class="modal">
                                <div
                                    class="modal-content mobile_fixed popup_num"
                                    id="sidebar_fixed"
                                >
                                    <br></br>
                                    <center>
                                        <strong>أرقام الهاتف</strong>
                                    </center>
                                    <br></br>
                                    <center>
                                        <p class="">الهاتف القار :</p>
                                    </center>
                                    <br></br>
                                    <center>
                                        <p class="">الهاتف الجوال :</p>
                                    </center>
                                    <center>
                                        <div class="text-center close">
                                            <a class="btn_1 outline">اغلاق</a>
                                        </div>
                                    </center>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
