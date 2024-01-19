import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import A from './components/A';
import B from './components/B';

function App() {

  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(reponse => reponse.json()) //json 형식으로 데이터 받기
    .then(posts => setPosts(posts)); // post 에 데이터가 들어가게 하기
  }, []);

  return (
    <div style={{padding: '1rem'}}>
      <input
        value={value}
        onChange = {e => setValue(e.target.value)}
      />
      <div style={{display:'flex'}}>
          <A message={value} posts={posts}/>
          <B message={value} posts={posts}/>
      </div>
     
   </div>
  );
}

export default App;
