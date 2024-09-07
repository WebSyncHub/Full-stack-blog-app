import React, { useState } from "react";
import { images } from "../../constant";
import { handlePostBlogs } from "..";

import "./blogform.css";

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const handlePost = async (e) => {
    e.preventDefault();

    // Validation check: Ensure that all fields are filled
    // if (!title || !desc || !image) {
    //   setError("All fields are required.")
    //   setSuccessMsg(null)
    //   return // Stop the function from proceeding
    // }

    let errorMsg =
      !title && !desc && !image
        ? "Please enter all fields data" // All fields are empty
        : !title && !desc
        ? "Title and Description are required!" // Title and Description are empty
        : !title && !image
        ? "Title and Image are required!" // Title and Image are empty
        : !desc && !image
        ? "Description and Image are required!" // Description and Image are empty
        : !title
        ? "Title is required!" // Only Title is empty
        : !desc
        ? "Description is required!" // Only Description is empty
        : !image
        ? "Image is required!" // Only Image is empty
        : null; // No error

    if (errorMsg) {
      setError(errorMsg);
      setSuccessMsg(null);
      return;
    }

    setError(null);
    setSuccessMsg("Successfully created a new post");

    try {
      // Clear any previous error messages
      setError(null);

      // Call the function to post the blog
      await handlePostBlogs({ title, desc, image });

      // Reset the fields after successful submission
      setTitle("");
      setDesc("");
      setImage("");

      // Show the success message
    } catch (error) {
      // Set the error message in case of failure
      setError("Error: Failed to create the post.");
      setSuccessMsg(null);
    }
  };

  return (
    <div className="post-inp">
      <form onSubmit={handlePost}>
        <div className="title input">
          <label htmlFor="">
            Title <img src={images.title} alt="title" width={20} />:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="image input">
          <label htmlFor="">
            ImageURI <img src={images.imageLogo} alt="image" width={20} />:
          </label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="desc input">
          <label htmlFor="">
            Description <img src={images.description} alt="desc" width={20} />:
          </label>
          <textarea
            name="desc"
            id="desc"
            rows={10}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <div className="publish-btn">
          <button type="submit">
            <img src={images.publish} alt="publish" width={22} />
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
