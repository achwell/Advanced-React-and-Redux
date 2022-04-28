import {useState} from "react";
import requireAuth from "components/requireAuth";
import {connect} from "react-redux";
import * as actions from "../actions";

function CommentBox({fetchComments, saveComment}) {

    const [comment, setComment] = useState("")

    const handleChange = (e) => {
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        saveComment(comment);
        setComment("");
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h4>Add a comment</h4>
                <textarea value={comment} onChange={handleChange}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
            <button className="fetch-comments" onClick={fetchComments}>Fetch comments</button>
        </>
    );
}

export default connect(null, actions)(requireAuth(CommentBox));