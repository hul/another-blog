import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

let postNum = 1;

export const newPost = post => ({
  type: 'NEW',
  payload: post
});

export const editPost = post => ({
  type: 'EDIT',
  payload: post
});

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW':
      return [...state, { ...action.payload, id: postNum++ }];
    case 'EDIT':
      return state.map(post => {
        return post.id === action.payload.id ? action.payload : post;
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  posts: postsReducer
});

export const store = createStore(rootReducer, composeWithDevTools());

store.dispatch(newPost({ title: 'Post Na Dobry Początek', text: 'Treść posta pierwszego...' }));

