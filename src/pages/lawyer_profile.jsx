import React, { useContext, useEffect, useState } from 'react'
import { useLawyerContext } from '../context/lawyer_context'
import { useParams } from "react-router-dom";
import {Helmet} from "react-helmet";
export default function LawyerProfile() {
    const { getLawyerById } = useLawyerContext()
    const [lawyer, setLawyer] = useState({})
    const { id } = useParams()
    function dismissPopup() {
        document.getElementById('myModal').style.display = 'none';
    }
    function showPopup() {
        document.getElementById("myModal").style.display = "block";
    }
    useEffect(() => {
        async function fetchData() {
            let res = await getLawyerById({ id: id })
            setLawyer(res.data.lawyer)
        }
        fetchData()
    }, [])

    return (
        
        <div dir="rtl">
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
                <title>{`صفحة المحامي ${lawyer.nameInArabic}`}
                     | {` ${lawyer.stateInArabic}`}
                     - Avoconsulte
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
                <meta name="author" content="Avoconsulte" />
            </Helmet>
            <div id="breadcrumb" dir="rtl">
                <div class="container" dir="rtl">
                    <ul>
                        <li>
                            <a href="/">الصفحة الرئيسية</a>
                        </li>
                        <li><a href="/محامون">محامون</a></li>

                        <li>{lawyer.nameInArabic}</li>
                    </ul>
                    <br></br>
                </div>
            </div>
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
                                    <a class="btn_12 full-width" onClick={showPopup} >
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
                                <a class="btn_12 full-width" onClick={showPopup}>
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
                                        <strong>رقم الهاتف</strong>
                                    </center>
                                    <br></br>
                                    <center>
                                        <p class="">الهاتف : {lawyer.phoneNumber}</p>
                                    </center>
                                    {/* <br></br>
                                    <center>
                                        <p class="">الهاتف الجوال :</p>
                                    </center> */}
                                    <center>
                                        <div class="text-center close"onClick={dismissPopup}>
                                            <a class="btn_1 outline" >اغلاق</a>
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
