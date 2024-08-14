import { revalidatePath, revalidateTag } from "next/cache";
import Link from "next/link";

export async function revalidTask(){
    revalidateTag('AllPost')
}

export default async function PostsTitle() {
    const res = await fetch('http://localhost:4000/posts', {next: {tags: ['AllPost']}});
    const posts = await res.json();
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
