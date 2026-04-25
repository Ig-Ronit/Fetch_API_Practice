import {useState,useEffect} from  "react";

const API = () =>{
    const [posts,setPosts ] = useState([]);
    const [loading, setLoading ] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            if(!res.ok){
                throw new Error("Failed to Load Posts...!")
            }
            return res.json()
        })
        .then((data)=>{
            setPosts(data)
            setLoading(false);
        })
        .catch((err)=>{
            setError(err.message);
            setLoading(false);
        });
    },[])

    if(loading) return <h1> Fetching Posts....</h1>;
    if(error) return <h1>Error : {error}</h1>;

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