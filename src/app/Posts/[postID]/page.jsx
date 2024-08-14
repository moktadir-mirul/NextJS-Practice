
export async function generateStaticParams() {
    const posts = await fetch('http://localhost:4000/posts')
    .then((res) => res.json())

    return posts.map((post) => (
        {postID: post.id}
    ))
}
export default async function PostDetails ({params}) {
    // const router = useRouter();
    // if(router.isFallback) {
    //     return <h2 className="posthd" style={{marginTop: "30px"}}>Page is Loading......</h2>
    // }
    // const { post } = params;
    // console.log(post);
    const res = await fetch(`http://localhost:4000/posts/${params.postID}`);
    const post = await res.json();
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