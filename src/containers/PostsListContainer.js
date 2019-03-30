import { connect } from "react-redux";
import { PostsList } from "../components/PostsList";

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
