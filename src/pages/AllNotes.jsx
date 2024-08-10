import { useEffect, useState } from "react";


function AllNotes () {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        .then((res) => res.json())
        .then((data) => {
            setPost(data);
        })
    },[])
    return(
        <div>
            <h1 className="posthd">All Notes</h1>
            {posts?.map((post) => (
                <li key={post.id}>
                    <span>{post.title}</span>
                    <button>Go to Link</button>
                </li>
            ))}
        </div>
    )
}

export default AllNotes;