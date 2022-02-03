import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function HomeQuestion(props) {
    const navigate = useNavigate()
    let shortContent = ''
    if (props.question.content) shortContent = props.question.content.slice(0, 200)
    function handleClick() {
        navigate(
            `/استشارات-قانونية/${props.question.title.replace(/[^A-Z0-9]/ig, "-")}/${
                props.question.id
            }`
        )
    }
    return (
        <div onClick={handleClick} class="col-md-4 blogpointer">
            <div class="about-review">
                <div class="rating">
                   <h4>{props.question.title}</h4>
                </div>

                <p>
                    {
                        <td
                            dangerouslySetInnerHTML={{
                                __html: shortContent,
                            }}
                        />
                    }
                </p>
            </div>
        </div>
    )
}
