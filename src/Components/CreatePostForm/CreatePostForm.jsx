import React, { useState } from 'react';
import "./CreatePostForm.css"
//take note, this allows for empty posts to be created, I have to find a solution for that later

const CreatePostForm = (props) => {

    const [individual, setIndividual] = useState('');
    const [post, setPost] = useState('');


    function handleSubmit(event) {
        event.preventDefault();
        let submittedPost = {
            individual: individual,
            post: post,
        };
        props.addNewPost(submittedPost)
        }




    return ( 
        <form className='post-box' onSubmit={handleSubmit}>
            <div className='post-field'>
                <div className='name-space'>
                    <label>Name</label>
                    <input className="name-area" value={individual} onChange={(event) => setIndividual(event.target.value)}></input>
                </div>
                <div className='post-space'>
                    <label>Post</label>
                    <input className="post-area" value={post} onChange={(event) => setPost(event.target.value)}></input>
                </div>
            </div>
            <div className='create-spacer'>
                <button type='submit'>Create</button>
            </div>
        </form>
    );
}

export default CreatePostForm;