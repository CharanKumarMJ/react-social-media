import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const { addPost } = useContext(PostList);

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          User ID
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="user-id"
          placeholder="Enter user ID"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          row="4"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reaction"
          placeholder="Tell us how many reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtag" className="form-label">
          #Hashtags
        </label>
        <input
          type="text"
          name="tags"
          className="form-control"
          id="hashtag"
          placeholder="#.."
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      console.log(post);
    });
  return redirect("/");
}

export default CreatePost;
