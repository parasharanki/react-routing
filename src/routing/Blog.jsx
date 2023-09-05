import React from 'react'
import axios from 'axios'

function Blog() {
     const[posts,setPosts] = useState([]);
  useEffect(()=>{
    async function fetchApi(){
        const Response = await axios.get ("https://jsonplaceholder.typicode.com/posts");
        console.log(Response);
        setPosts(Response.data)
    }
fetchApi();
  },[])
 return (
    <>This is the blog page
       <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  )
}

export default Blog