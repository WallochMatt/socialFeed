
import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import { useState } from 'react';

function App() {

  const [posts, setPosts] = useState([{individual: 'Mr Test', post: "I sure like testing"}, {individual: 'Mr Test', post: "I sure like testing"}, {individual: 'Mr Test', post: "I sure like testing"}])


  return (
    <div>
      <CreatePostForm addNewPost={setPosts}/>
      <PostList posts={posts}/>
    </div>
  )
}

export default App;

