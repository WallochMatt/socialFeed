//import AddPost from './Components/PostSingle/Post'
import PostList from './Components/PostList/PostList';
import { useState } from 'react';

function App() {

  const [entries, setEntries] = useState([{name: 'Mr Test', post: "I sure like testing"}, {name: 'Mr Test', post: "I sure like testing"}]) //refering to a collection of singular posts

  return (
    <div>
      <PostList instances={entries}/>
    </div>
  )
}

export default App;
