import { useState } from "react"
import LikeButton from '../../Components/LikeButton/LikeButton'
import DislikeButton from '../../Components/DislikeButton/DislikeButton'
import "./Post.css"

const Post = (props) => {
    const [like, setLike] = useState('inactive');
    const [dislike, setDislike] = useState('inactive');



    return (
        <table className="structure indent">
            <tbody>
                <h3>{props.individual}</h3>
                <div>
                    <p>{props.post}</p>
                </div>
            </tbody>
            <tbody className="like-row">
                <LikeButton activity={like}  thumbsUp={setLike} thumbsDown={setDislike}/>
                <DislikeButton activity={dislike} thumbsDown={setDislike} thumbsUp={setLike} />
            </tbody>
        </table>
        
    )
}

export default Post;