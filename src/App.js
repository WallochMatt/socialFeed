
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([{individual: 'Mr Test', post: "I sure like testing"}, {individual: 'Mr Test', post: "I sure like testing"}, {individual: 'Mr Test', post: "I sure like testing"}])


  function newPost(post){
    let tempPosts = [post, ...posts]
    setPosts(tempPosts)
  }

  return (
    <div>
      <CreatePostForm addNewPost={newPost}/>
      <PostList posts={posts}/>
    </div>
  )
}

export default App;

