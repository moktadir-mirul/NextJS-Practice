import { useRouter } from "next/router";

export async function getStaticPaths() {
    const res = await fetch('http://localhost:4000/posts');
    const posts = await res.json();
    return{
        paths: posts?.map((post) => (
            {
                params: {
                    postID: post.id,
                }
            }
        )),
        fallback: true,
    }
}

export async function getStaticProps(context) {
    const res = await fetch(`http://localhost:4000/posts/${context.params.postID}`);
    const post = await res.json();
    return{
        props: {post}
    }
}

export default function PostDetails ({post}) {
    const router = useRouter();
    if(router.isFallback) {
        return <h2 className="posthd" style={{marginTop: "30px"}}>Page is Loading......</h2>
    }
    return(
        <div>
            <h1 className="posthd" style={{marginBottom: "10px"}}>Post Details of Post ID - {post?.id}</h1>
            <h2 className="PostName">
                {post?.details}
            </h2>
            <p className="PostPara">
                {post?.body}
            </p>
        </div>
    )
}