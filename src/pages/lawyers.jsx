import React, { useEffect, useState } from 'react'
import Lawyer from '../shared/component/lawyer'
import { useLawyerContext } from '../context/lawyer_context'
import { useParams } from "react-router-dom";
export default function Lawyers() {
    const { getLawyers } = useLawyerContext();
    const [limit, setLimit] = useState(10);
    const [lawerList, setLawerList] = useState([])
    const { state } = useParams()
    async function viewMore() {
        let res = await getLawyers({
            limit:limit+10,
        });
        setLimit(limit+10);
        setLawerList(res.data.lawyers);
    }
    
    useEffect(() => {
       async function initLawyers(){
            let res = await getLawyers({
                limit:limit,
            });
            setLawerList(res.data.lawyers);
        }
        initLawyers();
    }, [])

    return (
        <>
            <div>
                <div id="results"></div>
                <div class="container margin_120_95">
                    <div class="main_title_2">
                        <h1>
                             ارقام هواتف
                            <strong> محامين </strong>
                            في تونس  
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
                        <form method="POST" action="/محامون/">
                            <div class="row">
                                <div id="custom-search-input">
                                    <div class="search_bar_list">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="key"
                                            placeholder="بحث"
                                            value=""
                                            id="searchKey"
                                        />
                                    </div>
                                </div>
                                <div id="custom-search-input">
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
                                            <option value="التعقيب">
                                                التعقيب
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div id="custom-search-input">
                                    <div class="input-group">
                                        <select
                                            name="Gouvernorat"
                                            id="GouvernoratAr"
                                            class="search-drop-avo "
                                            required
                                        >
                                            <option value="" selected disabled>
                                                الولاية
                                            </option>
                                            {!state ? null : <option selected value={state}>{state}</option>}
                                            <option value="تونس">تونس</option>
                                            <option value="أريانة">
                                                أريانة
                                            </option>
                                            <option value="بن عروس">
                                                بن عروس
                                            </option>
                                            <option value="منوبة">منوبة</option>
                                            <option value="سوسة">سوسة</option>
                                            <option value="صفاقس">صفاقس</option>
                                            <option value="قابس">قابس</option>
                                            <option value="مدنين">مدنين</option>
                                            <option value="المهدية">
                                                المهدية
                                            </option>
                                            <option value="باجة">باجة</option>
                                            <option value="بنزرت">بنزرت</option>
                                            <option value="قفصة">قفصة</option>
                                            <option value="جندوبة">
                                                جندوبة
                                            </option>
                                            <option value="القيروان">
                                                القيروان
                                            </option>
                                            <option value="قصرين">قصرين</option>
                                            <option value="الكاف">الكاف</option>
                                            <option value="منستير">
                                                منستير
                                            </option>
                                            <option value="نابل">نابل</option>
                                            <option value="سيدي بوزيد">
                                                سيدي بوزيد
                                            </option>
                                            <option value="سليانة">
                                                سليانة
                                            </option>
                                            <option value="تطاوين">
                                                تطاوين
                                            </option>
                                            <option value="توزر">توزر</option>
                                            <option value="زغوان">زغوان</option>
                                            <option value="قبلي">قبلي</option>
                                        </select>
                                        <select
                                            name="delegation"
                                            id="DelegationAr"
                                            class="search-drop-avo"
                                        ></select>
                                        <input
                                            type="submit"
                                            class="btn_search in"
                                            value="بحث"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <center>
                <p class="btn_1 medium" onClick={viewMore}>تحميل المزيد</p>
            </center>
        </>
    )
}
