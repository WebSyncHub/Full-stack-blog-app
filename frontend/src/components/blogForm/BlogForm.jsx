// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
import {images} from "../../constant";
import {handlePostBlogs, useBlogContext} from "..";

import "./blogform.css";

const BlogForm = () => {
    const {createBlog} = useBlogContext(); // Import createBlog from context
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [image, setImage] = useState("");
    const [tags, setTags] = useState([]);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState(null);

    const tagOptions = ['All', 'Web Dev', 'SEO', 'Content Writing', 'Design']

    const handleTagChange = (tag) => {
        if (tags.includes(tag)) {
            setTags(tags.filter((t) => t !== tag))
        } else {
            setTags([...tags, tag])
        }
    }

    const handlePost = async (e) => {
        e.preventDefault();

        // Validate form input
        let errorMsg =
            !title && !desc && !image && tags.length === 0
                ? "Please enter all fields data"
                : !title && !desc
                    ? "Title and Description are required!"
                    : !title && !image
                        ? "Title and Image are required!"
                        : !desc && !image
                            ? "Description and Image are required!"
                            : !title
                                ? "Title is required!"
                                : !desc
                                    ? "Description is required!"
                                    : !image
                                        ? "Image is required!"
                                        : tags.length === 0
                                            ? "Tags are required!"
                                            : null
        if (errorMsg) {
            setError(errorMsg);
            setSuccessMsg(null);
            return;
        }

        setError(null);
        setSuccessMsg("Successfully created a new post");

        try {
            const newBlog = {title, desc, image, tags};

            // Call the function to post the blog and await the response
            const createdBlog = await handlePostBlogs(newBlog); // This should create the blog in the backend

            // Ensure createdBlog has the expected properties
            if (createdBlog && createdBlog._id) {
                createBlog(createdBlog); // Add the newly created blog to the context
            } else {
                new Error("Blog creation failed: Invalid response from server");
            }

            // Reset the fields after successful submission
            setTags([])
            setTitle("");
            setDesc("");
            setImage("");

        } catch (error) {
            setError("Error: Failed to create the post.");
            setSuccessMsg(null);
            console.error(error); // Log error for debugging
        }
    };

    return (
        <div className="post-inp">
            <form onSubmit={handlePost}>
                <div className="title input">
                    <label htmlFor="title">
                        Title <img src={images.title} alt="title" width={20}/>:
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="image input">
                    <label htmlFor="image">
                        ImageURI <img src={images.imageLogo} alt="image" width={20}/>:
                    </label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
                <div className="desc input">
                    <label htmlFor="desc">
                        Description <img src={images.description} alt="desc" width={20}/>:
                    </label>
                    <textarea
                        name="desc"
                        id="desc"
                        rows={10}
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className="tags inupt">
                    {/* <label htmlFor="tags" className="tag-title">Tag Options:</label> */}
                    <div className="input-tag tag-options">
                        {tagOptions.map((tag) => (
                            <div className="tag-option" key={tag}>
                                <input type="checkbox" id={tag} checked={tags.includes(tag)}
                                       onChange={() => handleTagChange(tag)}/>
                                <label htmlFor="tags">{tag}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="publish-btn">
                    <button type="submit">
                        <img src={images.publish} alt="publish" width={22}/>
                        Publish
                    </button>
                </div>
            </form>
            {error && <p className="err">{error}</p>}
            {successMsg && <p className="success-msg">{successMsg}</p>}
        </div>
    );
};

export default BlogForm;
