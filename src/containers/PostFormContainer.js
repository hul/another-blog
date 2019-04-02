import { connect } from "react-redux";
import { newPost, editPost } from "../store";
import { PostForm } from "../components/PostForm";

const mapStateToProps = (state, props) => ({
  post: state.posts.find(post => props.match.params.id === post.id.toString())
});

const mapDispatchToProps = dispatch => ({
  newPost: post => dispatch(newPost(post)),
  editPost: post => dispatch(editPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
