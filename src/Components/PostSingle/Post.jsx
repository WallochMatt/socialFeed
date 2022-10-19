import { useState } from "react"


const Post = (props) => {



    return (
        <div>
            <h3>{props.individual}</h3>
            <p>{props.post}</p>
        </div>
    )
}

export default Post;