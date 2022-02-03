import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Home_post(props) {
    const navigate = useNavigate()
    let shortBody = ''
    if (props.blog.body)
        shortBody = props.blog.body.slice(
            0,
            props.blog.body.indexOf('</p>') + 4
        )
    function handleClick() {
        navigate(
            `/المجلة-القانونية/${props.blog.title.replace(/[!? ]/gi, '-')}/${
                props.blog.id
            }`
        )
    }
    return (
        <div class="col-lg-4 col-md-6 blogpointer" onClick={handleClick} >
            <div class="box_list home">
                <figure>
                    <img
                        src={'img/' + props.blog.image}
                        class="img-fluid"
                        alt={props.blog.title}
                    />
                    <div class="preview">
                        <span>اقرأ المزيد</span>
                    </div>
                </figure>
                <div class="wrapper">
                    <small></small>
                    <h3>{props.blog.title}</h3>
                    <p>
                        {' '}
                        <td
                            dangerouslySetInnerHTML={{
                                __html: shortBody,
                            }}
                        />
                    </p>
                </div>
            </div>
        </div>
    )
}
