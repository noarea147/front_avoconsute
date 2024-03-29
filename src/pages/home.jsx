import React, { useState, useEffect } from 'react'
import PostHome from '../shared/component/home_post'
import QuestionHome from '../shared/component/home_question'
import { useBlogContext } from '../context/blog_context'
import { useSearchContext } from '../context/search_context'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { url_lawyers } from '../helpers/Url_string_manager'

export default function Home() {
    const navigate = useNavigate()
    const { getBlogs, getQuestion } = useBlogContext()
    const { search } = useSearchContext()
    const [limit, setLimit] = useState(3)
    const [blogList, setBlogList] = useState([])
    const [questionList, setQuestionList] = useState([])
    const [state, setState] = useState()
    const [name, setName] = useState()

    function handlerSearch() {
        name
            ? navigate(`/محامون/${state}/${name}`)
            : navigate(`/محامون/${state}`)
    }

    // async function searchWithMultipleParams() {
    //     const { data } = await search({
    //         filters: [
    //             {
    //                 stateInArabic: state,
    //             },
    //             {
    //                 nameInArabic: name,
    //                 stateInArabic: state,
    //             },

    //             {
    //                 nameInFrench: name,
    //                 stateInArabic: state,
    //             },
    //         ],
    //     })
    //     setHomeLawyerList(data)
    // }
    useEffect(() => {
        async function initBlogs() {
            let res = await getBlogs({
                limit: limit,
            })

            setBlogList(res.data.blogs)
        }
        async function initQuestion() {
            let res2 = await getQuestion({
                limit: limit,
            })
            setQuestionList(res2.data.questions)
        }
        initQuestion()
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
                    AvoConsulte ابحث واعثر على أفضل محام في تونس - قائمة
                    المحامين بتونس
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
            <div dir="rtl">
                <div class="hero_home version_3">
                    <div class="content">
                        <h1>ابحث عن محام بالقرب منك</h1>
                        <p class="fadeInUp animated">
                            ابحث واعثر على محام في تونس واحجز موعدك عبر الإنترنت
                        </p>
                        {/* <form > */}
                        <div id="custom-search-input">
                            <div class="input-group">
                                <select
                                    name="Gouvernorat"
                                    id="GouvernoratAr"
                                    class="search-drop"
                                    // value={optionsState}
                                    onChange={(e) => {
                                        setState(e.target.value)
                                    }}
                                    required
                                >
                                    <option value="">اختر الولاية </option>
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
                                    <option value="القيروان">القيروان</option>
                                    <option value="القصرين">القصرين</option>
                                    <option value="الكاف">الكاف</option>
                                    <option value="المنستير">المنستير</option>
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
                                        class="search-drop"
                                    ></select> */}

                                {/* <select name="Tribunal" class="search-drop">
                                        <option value="">المحكمة</option>
                                        <option value="الإبتدائية">
                                            الإبتدائية
                                        </option>
                                        <option value="الاستئناف">
                                            الاستئناف
                                        </option>
                                        <option value="التعقيب">التعقيب</option>
                                    </select> */}
                                <input
                                    name="key"
                                    type="text"
                                    class="search-bar input-group"
                                    onChange={(e) => {
                                        setName(e.target.value)
                                    }}
                                    placeholder=" إسم المحامي"
                                />
                                <input
                                    type="submit"
                                    class="btn_search"
                                    value="بحث"
                                    onClick={handlerSearch}
                                />
                            </div>
                        </div>
                        {/* </form> */}
                    </div>
                </div>
                {/* <div id="app_section">
                    <div class="container">
                        <div class="row justify-content-around">
                            <div class="col-md-6 text-right">
                                <small>AvoBusiness</small>
                                <h3>
                                    هل أنت
                                    <strong> محامٍ </strong>
                                    مهتم بالتكنولوجيا ؟
                                </h3>
                                <p class="lead">
                                    أفوكنسلت هي خدمة إدارة مكتب محاماة شاملة
                                    تعمل على تحسين مؤسستك وتوفر لك الوقت. مع
                                    أفوكنسلت, هي خدمة كاملة لإدارة الكابينة ،
                                    فأنت تشارك توافرك في الوقت الفعلي مع عملائك
                                    وفقًا للمعايير الخاصة بك ، مع الحفاظ على
                                    التحكم في جدول أعمالك القانوني ، مما يحسن
                                    مؤسستك ويوفر لك الوقت أفوكنسلت يتيح لك
                                    التواصل مباشرة مع العملاء والإجابة على
                                    أسئلتهم.
                                    <br></br>انشئ حساباً الآن
                                </p>
                                <div
                                    class="app_buttons"
                                    data-wow-offset="100"
                                >
                                    <a
                                        href="/avo/business/login"
                                        class="fadeIn"
                                    >
                                        <button class="btn_11">
                                            دخول لحسابك
                                        </button>
                                    </a>
                                    <a href="/سجل-كمحامي/" class="fadeIn">
                                        <button class="btn_12">
                                            انشئ حساباً الآن
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <p>
                                    <img
                                        src="img/banner-section.png"
                                        alt=""
                                        class="img-fluid"
                                        width="500"
                                        height="433"
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="bg_color">
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
                                        <a href="">body</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div class="container margin_120_95">
                        <div class="main_title">
                            <h2>
                                كيف تجد<strong>محام</strong>
                            </h2>
                            <p>
                                أفوكنسلت هي عبارة عن منصة سريعة وسهلة لأخذ موعد
                                مع محام متاح بالقرب منك من دليل المحامين لتلبية
                                احتياجاتك
                            </p>
                        </div>
                        <div class="row add_bottom_30">
                            <div class="col-lg-4">
                                <div class="box_feat" id="icon_1">
                                    <h3>ابحث عن محامي</h3>
                                    <p>
                                        أدخل تخصص المحامي الذي تبحث عنه ومدينتك:
                                        تعرض لك هذه المنصة قائمة المحامين
                                        المتوفرين من حولك
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="box_feat" id="icon_2">
                                    <h3>انظر الملف الشخصي</h3>
                                    <p>
                                        أنت تختار المحامي وتؤكد عبر الهاتف أو
                                        الرسالة على منصتنا.اختر إجراء استشارة
                                        حول ساعات الاستشارة المجانية للمحامين
                                        القريبين منك.
                                    </p>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="box_feat" id="icon_3">
                                    <h3>خذ معلومات الاتصال الخاصة به</h3>
                                    <p>
                                        إذا قمت بتحديد موعد ، فستتلقى على الفور
                                        بريدًا إلكترونيًا على العنوان الذي قدمته
                                        ، يؤكد أيضًا أن المحامي قد استلم موعدك.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p class="text-center">
                            <a href="/محامون/" class="btn_1 medium">
                                رؤية جميع المحامين
                            </a>
                        </p>
                    </div>
                </div>
                <div class="bg_color">
                    <div class="container margin_120_95">
                        <div class="main_title">
                            <h2>
                                المجلة
                                <strong>قانونية</strong>
                            </h2>
                            <p>
                                المجلة القانونية لمنصتنا تحتوي على معلومات مفيدة
                                وجميع الأخبار
                            </p>
                        </div>
                        <div class="row">
                            {blogList !== null
                                ? blogList.map((item, index) => {
                                      return <PostHome blog={item} />
                                  })
                                : null}
                        </div>
                        <p class="text-center add_top_30">
                            <a href="/المجلة-القانونية/" class="btn_1 medium">
                                عرض كل المقالات
                            </a>
                        </p>
                    </div>
                </div>
                <div class="bg_color">
                    <div class="container margin_120_95">
                        <div class="main_title">
                            <h2>استشارات قانونية</h2>
                            <p>
                                اطرح سؤالك على المحام و راجع قائمة الأسئلة
                                وإجاباتها.
                            </p>
                        </div>
                        <div class="row">
                            {questionList.map((item, index) => {
                                return <QuestionHome question={item} />
                            })}
                        </div>
                        <p class="text-center add_top_30">
                            <a href="/استشارات-قانونية/" class="btn_1 medium">
                                مشاهدة جميع الأسئلة والأجوبة
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
