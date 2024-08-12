import { useState } from "react"


const initValue = {
                   title: '',
                   details: '',
                   body: '', 
}

export default function AddPost() {
    const [newPost, setNewPost] = useState(initValue);

    const inputHandler = (event) => {
        setNewPost({...newPost, [event.target.name]: event.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setNewPost(initValue);
        fetch('http://localhost:4000/posts', {
            method: "POST",
            body: JSON.stringify(newPost),
            headers: {'content-type' : 'application/json'}
        })
        .then(() => (
            fetch('http://localhost:3000/api/postApi')
        ))
        setNewPost(initValue);
    }
    return(
        <div>
            <form onSubmit={submitHandler}
            style={{width: "70vw", height: "auto", border: "2px solid black", margin: "0 auto", marginTop: "20px"}}
            >
                <p style={{textAlign: "center", fontFamily: "sans-serif", fontWeight: "bold", color: "crimson", fontSize: "20px"}}>Post Title</p>
                <input
                    style={{width: "50vw", height: "30px", textAlign: "center", marginBottom:"10px", marginLeft: "15%"}} 
                    type="text" 
                    name="title" 
                    value={newPost?.title} 
                    onChange={inputHandler}
                    placeholder="Enter Post Title Here..." 
                    required
                />
                <p style={{textAlign: "center", fontFamily: "sans-serif", fontWeight: "bold", color: "crimson"}}>Post Details</p>
                <input
                    style={{width: "50vw", height: "30px", textAlign: "center", marginBottom:"10px", marginLeft: "15%"}}
                    type="text" 
                    name="details" 
                    value={newPost?.details} 
                    onChange={inputHandler}
                    placeholder="Enter Post Details..." 
                    required
                />
                <p style={{textAlign: "center", fontFamily: "sans-serif", fontWeight: "bold", color: "crimson"}}>Post Body</p>
                <input 
                    style={{width: "50vw", height: "30px", textAlign: "center", marginBottom:"10px", marginLeft: "15%"}}
                    type="text" 
                    name="body" 
                    value={newPost?.body} 
                    onChange={inputHandler}
                    placeholder="Enter Post body..." 
                    required
                />
                <br />
                <input type="submit" className="btnAll" style={{width: "20vw", height: "30px", textAlign: "center", marginLeft: "35%"}}/>
            </form>
        </div>
    )
}