import { connect } from "react-redux";
import { newPost, editPost } from "../store";
import { PostForm } from "../components/PostForm";

const mapStateToProps = (state, ownProps) => ({
  post: state.posts.find(post => post.id.toString() === ownProps.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  newPost: post => dispatch(newPost(post)),
  editPost: post => dispatch(editPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
