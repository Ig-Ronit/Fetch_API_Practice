import {useState,useEffect} from  "react";

const API = () =>{
    const [posts,setPosts ] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>res.json())
        .then((data)=>setPosts(data));
    },[])

    return(
        <div>
            <h1>Posts</h1>
            <h2>Showing {posts.slice(0, 10).length} posts</h2>

            {posts.slice(0,10).map((post , index)=>(

                <div key = {post.id}>
                    <h2>{post.title} </h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
export default API;