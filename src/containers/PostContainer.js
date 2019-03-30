import { connect } from "react-redux";
import { Post } from "../components/Post";

const mapStateToProps = (state, ownProps) => ({
  post: state.posts.find(post => post.id.toString() === ownProps.match.params.id)
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
