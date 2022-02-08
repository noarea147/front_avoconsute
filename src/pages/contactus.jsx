import react from 'react'
import {Helmet} from "react-helmet";

export default function contactus() {
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
                    AvoConsulte ابحث واعثر على أفضل محام في تونس - اتصل بنا
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
                <div class="container margin_60_35">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div id="contact_info">
                                <ul>
                                    <li>
                                        <strong>اتصل</strong>
                                        <a href="mailto:contact@avoconsulte.com">
                                        Contact@avoconsulte.com
                                        </a>
                                        <br></br>
                                        <small>دائما مفتوح 24/7</small>
                                    </li>
                                    <li>
                                        <strong>الدعم التقني</strong>
                                        <a href="mailto:support@avoconsulte.com">
                                            Support@AvoConsulte.com
                                        </a>
                                        <small>دائما مفتوح 24/7</small>
                                    </li>
                                    <li>
                                        <strong>اسئلة عامة</strong>
                                        <a href="mailto:questions@avoconsulte.com">
                                            Questions@AvoConsulte.com
                                        </a>
                                        <br></br>
                                        <p>
                                            <small>دائما مفتوح 24/7</small>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class=" col-lg-8 col-md-8 ml-auto">
                            <div class="box_general">
                                <h3>اتصل بنا</h3>
                                <p></p>
                                <div>
                                    <div id="message-contact"></div>
                                    <form
                                        method="post"
                                        action=""
                                        id="contactform"
                                    >
                                        <div class="row">
                                            <div class="col-md-6 col-sm-6">
                                                <input
                                                    type="text"
                                                    placeholder="الإسم"
                                                    name="name"
                                                    class="form-control"
                                                />
                                            </div>
                                            <br></br>
                                            <div class="col-md-6 col-sm-6">
                                                <input
                                                    type="text"
                                                    placeholder="اللقب"
                                                    name="lastname"
                                                    class="form-control"
                                                />
                                            </div>
                                            <br></br>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 col-sm-6">
                                                <input
                                                    type="email"
                                                    placeholder="البريد الإلكتروني"
                                                    name="email"
                                                    class="form-control"
                                                />
                                            </div>
                                            <br></br>
                                            <div class="col-md-6 col-sm-6">
                                                <input
                                                    type="tel"
                                                    placeholder="الهاتف"
                                                    name="phone"
                                                    class="form-control"
                                                />
                                            </div>
                                            <br></br>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <input
                                                    type="text"
                                                    placeholder="الرسالة"
                                                    name="message"
                                                    class="form-control"
                                                />
                                            </div>
                                            <br></br>
                                        </div>
                                        <input
                                            type="submit"
                                            value="إرسال "
                                            name="submit"
                                            class="btn_1 add_top_20"
                                            id="submit-contact"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
