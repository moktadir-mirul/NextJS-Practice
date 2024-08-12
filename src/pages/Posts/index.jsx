import AddPost from "@/Components/AddPosts";
import Link from "next/link";
// import { useState } from "react";





export default function PostTitles({posts}) {

//     const [posts, setPosts] = useState([]);

// fetch('http://localhost:4000/posts')
// .then(() => {
//     fetch('http://localhost:3000/api/postApi')
// })
// .then((res) => res.json())
// .then((data) => setPosts(data))

    return(
        <div>
            <h1 className="posthd">All Posts</h1>
            <h2 style={{textAlign: 'center', fontFamily: 'sans-serif', fontSize: '25px', fontWeight:'600', margin: '20px', padding: '15px'}}>
                {posts?.map((post) => (
                    <li key={post.id}>
                        <span><Link href={`/Posts/${post.id}`}>{post.title}</Link></span>
                    </li>
                ))}
            </h2>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:4000/posts');
    const posts = await res.json();
    return {
        props: {posts}
    }
}