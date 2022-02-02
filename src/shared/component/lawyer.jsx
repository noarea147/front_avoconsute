import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Lawyer(props) {
    const navigate = useNavigate()
    function handleClick() {
        navigate(`/محامي/${props.lawyer.nameInArabic.replace(/ /g, '-')}/${props.lawyer.id}`)
    }
    return (
        <div>
            <div class="strip_list" dir="rtl">
                <figure>
                    <img src="assets/images/avatar.png" alt="name" />
                </figure>

                <small>{props.lawyer.nameInFrench}</small>
                <span>
                    <a href="">{props.lawyer.nameInArabic}</a>
                </span>

                <ul>
                    <li>الولاية</li>
                    <li>
                        <p>
                            <a href="">{props.lawyer.stateInArabic}</a>
                        </p>
                    </li>
                    <li>
                        <a onClick={handleClick}>إحجز موعد</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
