import { useState } from "react"
import LikeButton from '../../Components/LikeButton/LikeButton'
import DislikeButton from '../../Components/DislikeButton/DislikeButton'

const Post = (props) => {
    const [like, setLike] = useState('inactive');
    const [dislike, setDislike] = useState('inactive');



    return (
        <div>
            <h3>{props.individual}</h3>
            <p>{props.post}</p>
            <LikeButton  className='button' activity={like}  thumbsUp={setLike} thumbsDown={setDislike}/>
            <DislikeButton activity={dislike} thumbsDown={setDislike} thumbsUp={setLike} />
        </div>
        
    )
}

export default Post;