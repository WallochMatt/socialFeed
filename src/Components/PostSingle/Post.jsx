import { useState } from "react"
import LikeButton from '../../Components/LikeButton/LikeButton'
import DislikeButton from '../../Components/DislikeButton/DislikeButton'
import "./Post.css"

const now = new Date();
let currentDay = now.getDate();
let currentMonth = now.getMonth() + 1;
let currentYear = now.getFullYear();

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
            <tbody className="date-like-row">
                <tr>
                    <p>Posted: {currentMonth}/{currentDay}/{currentYear}</p>
                </tr>
                <tr className="like-row">
                    <LikeButton activity={like}  thumbsUp={setLike} thumbsDown={setDislike}/>
                    <DislikeButton activity={dislike} thumbsDown={setDislike} thumbsUp={setLike} />
                </tr>
            </tbody>
        </table>
        
    )
}

export default Post;