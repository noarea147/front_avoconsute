import React, { useEffect, useState } from 'react'
import Lawyer from '../shared/component/lawyer'
import { useLawyerContext } from '../context/lawyer_context'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
export default function Lawyers() {
    const navigate = useNavigate()
    const { getLawyers, getLawyersByFilter } = useLawyerContext()
    const [limit, setLimit] = useState(10)
    const [lawerList, setLawerList] = useState([])
    const params = useParams()
    const [state, setState] = useState(params.state)
    const [lawyerName, setlawyerName] = useState(params.LawyerName)

    async function viewMore() {
        let filter = {
            limit: limit,
            filters: [
                {
                    stateInArabic: state,
                },
                {
                    stateInFrench: state,
                },
            ],
        }
        if (lawyerName) {
            filter = {
                limit: limit,
                filters: [
                    {
                        stateInArabic: params.state,
                        nameInFrench: { $regex: `${params.name}` },
                    },
                    {
                        stateInArabic: params.state,
                        nameInArabic: { $regex: `${params.name}` },
                    },
                    {
                        stateInFrench: params.state,
                        nameInFrench: { $regex: `${params.name}` },
                    },
                    {
                        stateInFrench: params.state,
                        nameInArabic: { $regex: `${params.name}` },
                    },
                ],
            }
        }
        let res = await getLawyersByFilter(filter)

        setLimit(limit + 10)
        setLawerList(res.data.lawyers)
    }
    async function search() {
        let filter = {
            limit: limit,
            filters: [
                {
                    stateInArabic: state,
                },
                {
                    stateInFrench: state,
                },
            ],
        }
        if (lawyerName) {
            filter = {
                limit: limit,
                filters: [
                    {
                        stateInArabic: params.state,
                        nameInFrench: { $regex: `${params.name}` },
                    },
                    {
                        stateInArabic: params.state,
                        nameInArabic: { $regex: `${params.name}` },
                    },
                    {
                        stateInFrench: params.state,
                        nameInFrench: { $regex: `${params.name}` },
                    },
                    {
                        stateInFrench: params.state,
                        nameInArabic: { $regex: `${params.name}` },
                    },
                ],
            }
        }
        let res = await getLawyersByFilter(filter)
        setLawerList(res.data.lawyers)
        lawyerName
            ? navigate(`/محامون/${state}/${lawyerName}`)
            : navigate(`/محامون/${state}`)
    }

    useEffect(() => {
        async function allLawyers() {
            let res = await getLawyers({
                limit: limit,
            })
            setLawerList(res.data.lawyers)
        }
        async function byFilter() {
            let filter = {
                limit: limit,
                filters: [
                    {
                        stateInArabic: state,
                    },
                    {
                        stateInFrench: state,
                    },
                ],
            }
            if (
                params.name !== null &&
                params.name !== undefined &&
                params.name !== ''
            ) {
                filter = {
                    limit: limit,
                    filters: [
                        {
                            stateInArabic: params.state,
                            nameInFrench: { $regex: `${params.name}` },
                        },
                        {
                            stateInArabic: params.state,
                            nameInArabic: { $regex: `${params.name}` },
                        },
                        {
                            stateInFrench: params.state,
                            nameInFrench: { $regex: `${params.name}` },
                        },
                        {
                            stateInFrench: params.state,
                            nameInArabic: { $regex: `${params.name}` },
                        },
                    ],
                }
            }
            let res = await getLawyersByFilter(filter)
            setLawerList(res.data.lawyers)
        }
        params.state ? byFilter() : allLawyers()
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
                    AvoConsulte ابحث واعثر على أفضل محام في تونس - قائمة
                    المحامين {params.state ? params.state : 'بتونس'}
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
                        <li><a href="/محامون">محامون</a></li>
                        <li>{state}</li>
                    </ul>
                    <br></br>
                </div>
            </div>

            <div>

                <div class="container margin_120_95">
                    <div class="main_title_2">
                        <h1>
                            ارقام هواتف
                            <strong> محامين </strong>
                            في {state ? state : 'تونس'}
                        </h1>
                        <p>
                            ابحث على أفضل المحامين في تونس واحجز موعدك عبر
                            الإنترنت
                        </p>
                    </div>
                </div>
            </div>
            <div class="container">
                <div id="renderAvocat">
                    <div class="col-lg-8 col-sm-12">
                        {lawerList.map((item, index) => {
                            return <Lawyer lawyer={item} />
                        })}
                    </div>

                    <div class="col-lg-4 col-sm-12 in-form">
                        <div class="row">
                            <div id="custom-search-input">
                                <div class="search_bar_list">
                                    <input
                                        type="text"
                                        class="form-control"
                                        name="key"
                                        value={params.name}
                                        placeholder="بحث"
                                        id="searchKey"
                                        onChange={(e) => {
                                            setlawyerName(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            {/* <div id="custom-search-input">
                                <div class="input-group">
                                    <select
                                        name="tribunal"
                                        class="search-drop-avo  "
                                    >
                                        <option value="" selected disabled>
                                            المحكمة
                                        </option>
                                        <option value="الإبتدائية">
                                            الإبتدائية
                                        </option>
                                        <option value="الاستئناف">
                                            الاستئناف
                                        </option>
                                        <option value="التعقيب">التعقيب</option>
                                    </select>
                                </div>
                            </div> */}
                            <div id="custom-search-input">
                                <div class="input-group">
                                    <select
                                        name="Gouvernorat"
                                        id="GouvernoratAr"
                                        class="search-drop-avo "
                                        onChange={(e) => {
                                            setState(e.target.value)
                                        }}
                                        required
                                    >
                                        {/* <option value="" selected disabled>
                                            الولاية
                                        </option> */}
                                        {!state ? null : (
                                            <option selected value={state}>
                                                {state}
                                            </option>
                                        )}
                                        <option value="تونس">تونس</option>
                                        <option value="أريانة">أريانة</option>
                                        <option value="بن عروس">بن عروس</option>
                                        <option value="منوبة">منوبة</option>
                                        <option value="سوسة">سوسة</option>
                                        <option value="صفاقس">صفاقس</option>
                                        <option value="قابس">قابس</option>
                                        <option value="مدنين">مدنين</option>
                                        <option value="المهدية">المهدية</option>
                                        <option value="باجة">باجة</option>
                                        <option value="بنزرت">بنزرت</option>
                                        <option value="قفصة">قفصة</option>
                                        <option value="جندوبة">جندوبة</option>
                                        <option value="القيروان">
                                            القيروان
                                        </option>
                                        <option value="قصرين">قصرين</option>
                                        <option value="الكاف">الكاف</option>
                                        <option value="منستير">منستير</option>
                                        <option value="نابل">نابل</option>
                                        <option value="سيدي بوزيد">
                                            سيدي بوزيد
                                        </option>
                                        <option value="سليانة">سليانة</option>
                                        <option value="تطاوين">تطاوين</option>
                                        <option value="توزر">توزر</option>
                                        <option value="زغوان">زغوان</option>
                                        <option value="قبلي">قبلي</option>
                                    </select>
                                    {/* <select
                                        name="delegation"
                                        id="DelegationAr"
                                        class="search-drop-avo"
                                    ></select> */}
                                    <input
                                        type="submit"
                                        class="btn_search in"
                                        value="بحث"
                                        onClick={search}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <center>
                <p class="btn_1 medium" onClick={viewMore}>
                    تحميل المزيد
                </p>
            </center>
        </>
    )
}
