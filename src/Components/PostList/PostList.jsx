import Post from '../PostSingle/Post';
import "./PostList.css"

const PostList = (props) => {


    return ( 
        <div className='width-lock'>
        {props.posts.map((entry) => {
            return (
                <div className='list-item'>
                    <Post individual={entry.individual} post={entry.post} />
                </div>
            );
    })}
        </div>
    );
}

export default PostList;
