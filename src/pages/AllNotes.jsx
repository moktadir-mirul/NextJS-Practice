

export default function AllNotes ({posts}) {
    return(
        <div>
            <h1 className="posthd">All Notes</h1>
            <h2 style={{textAlign: 'center', fontFamily: 'sans-serif', fontSize: '25px', fontWeight:'600', margin: '20px', padding: '15px'}}>
                {posts?.map((post) => (
                    <li key={post.id}>
                        <span>{post.title}</span>
                        <button>Go to Link</button>
                    </li>
                ))}
            </h2>
        </div>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const posts = await res.json();
    return{props: {posts}}
}

