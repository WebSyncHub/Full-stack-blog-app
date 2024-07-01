const getAllPosts = async (req, res) => {
    try {
       const allPosts = {
        title: "How to build Logic in javascript?",
        des: "This is the description for the blog post.",
        img: "Your image url"
       }
       res.status(200).json(allPosts)
    } catch {
        res.status(400).json({error: "No Posts Found!"})
    }
}

module.exports = {
  getAllPosts
}