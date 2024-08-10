

export default function AllNotes ({posts}) {
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

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();
    return{props: {posts}}
}

