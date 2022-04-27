import { useState } from "react";

function CommentBox() {
    const [comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setComment("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h4>Add a comment</h4>
            <textarea value={comment} onChange={handleChange}/>
            <div>
                <button>Submit Comment</button>
            </div>
        </form>
    );
}

export default CommentBox;