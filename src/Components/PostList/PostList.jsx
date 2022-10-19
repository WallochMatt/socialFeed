import Post from '../PostSingle/Post';
import React, { useState } from 'react';



const PostList = (props) => {


    //const [entries, set, {individual: 'Mr Test', post: "I sure like testing"}]) //refering to a collection of singular posts


//     function createNewPost(entry){
//         let tempPost = [entry, ...entries]
//         setEntries(tempPost)
// }


    return ( 
        <table>
        <tc>
        {props.posts.map((entry) => { //change .instances
            return (
                <tr>
                    <Post individual={entry.individual} post={entry.post} />
                </tr>
            );
    })}
        </tc>
        </table>
    );
}

export default PostList;
