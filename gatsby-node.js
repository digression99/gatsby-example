exports.onCreateNode = ({ node, getNode }) => {
  if (node.internal.type === "MarkdownRemark") {
    console.log("internal type : ", node.internal.type)
    const fileNode = getNode(node.parent)
    console.log(`\n`, fileNode.relativePath)
  }
}
