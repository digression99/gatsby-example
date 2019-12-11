exports.onCreateNode = ({ node }) => {
  if (node.internal.type === "MarkdownRemark") {
    console.log("internal type : ", node.internal.type)
  }
}
