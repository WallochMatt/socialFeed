import Post from '../PostSingle/Post';


const PostList = (props) => {


    return ( 
        <table>
        {props.posts.map((entry) => {
            return (
                <tr>
                    <Post individual={entry.individual} post={entry.post} />
                </tr>
            );
    })}
        </table>
    );
}

export default PostList;
