import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  articles: [],
  articleDetail: null,
  error: null,
};
export const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    getArticlesStart: (state) => {
      state.isLoading = true;
    },
    getArticlesSuccess: (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    getArticlesFailure: (state, action) => {
      state.error = action.payload;
    },
    getArticleDetailStart: (state) => {
      state.isLoading = true;
    },
    getArticleDetailSuccess: (state, action) => {
      state.isLoading = false;
      state.articleDetail = action.payload;
    },
    getArticleDetailFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailure,
  getArticleDetailFailure,
  getArticleDetailSuccess,
  getArticleDetailStart,
} = articleSlice.actions;
export default articleSlice.reducer;
