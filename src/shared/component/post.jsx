import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Post(props) {
    const navigate = useNavigate()
    let shortBody = ''
    if (props.blog.body)
        shortBody = props.blog.body.slice(
            0,
            props.blog.body.indexOf('</p>') + 4
        )
    function handleClick() {
        navigate(`/المجلة-القانونية/${props.blog.title.replace(/[^A-Z0-9]/ig, "-")}/${props.blog.id}`)
    }
    return (
        <div class="col-lg-9">
            <div id="renderBlog">
                <article class="blog">
                    <div class="row no-gutters">
                        <div class="col-lg-7">
                            <figure>
                                <a onClick={handleClick}>
                                <img src={'img/' + props.blog.image} alt="" />
                                </a>
                            </figure>
                        </div>
                        <div class="col-lg-5">
                            <div class="post_info" onClick={handleClick}>
                                <small>{props.blog.created_at}</small>
                                <h3>
                                    <a onClick={handleClick} title="">
                                        {props.blog.title}
                                    </a>
                                </h3>

                                <div>
                                    <td
                                        dangerouslySetInnerHTML={{
                                            __html: shortBody,
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}
