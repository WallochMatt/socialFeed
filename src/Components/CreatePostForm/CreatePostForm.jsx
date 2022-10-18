import React, { useState } from 'react';

//take note, this allows for empty posts to be created, I have to find a solution for that later

const CreatePostForm = (props) => {

    const [individual, setIndividual] = useState('');
    const [post, setPost] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            individual: individual,
            post: post,
        };
        props.attribute(newPost)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input value={individual} onChange={(event) => setIndividual(event.target.value)}></input>
            </div>
            <div>
                <label>Post</label>
                <input value={post} onChange={(event) => setPost(event.target.value)}></input>
            </div>
            <div>
                <button type='submit'>Create</button>
            </div>
        </form>
    );
}

export default CreatePostForm;