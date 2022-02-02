import react from 'react'

export default function contactus() {
    return (
        <>
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
