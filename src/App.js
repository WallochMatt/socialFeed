import CreatePostForm from './Components/CreatePostForm/CreatePostForm';
import PostList from './Components/PostList/PostList';
import { useState } from 'react';

function App() {

  const [entries, setEntries] = useState([{individual: 'Mr Test', post: "I sure like testing"}, {individual: 'Mr Test', post: "I sure like testing"}]) //refering to a collection of singular posts

  function createNewPost(post){
    let tempPost = [post, ...entries]
    setEntries(tempPost)
  }

  return (
    <div>
      <CreatePostForm attribute={createNewPost}/>
      <PostList instances={entries}/>
    </div>
  )
}

export default App;
