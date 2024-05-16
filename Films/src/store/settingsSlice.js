import { createSlice } from "@reduxjs/toolkit";

const sortParams = [
  {
    id: 0,
    name: "По популярности",
    URL: `https://api.themoviedb.org/3/movie/popular?language=ru&page=`,
  },
  {
    id: 1,
    name: "По рейтингу",
    URL: "https://api.themoviedb.org/3/movie/top_rated?language=ru&page=",
  },
];

const startSettings = {
  sort: sortParams[0],
  age: [1930, 2024],
  genres: [],
  pages: { page: 1, count: 500 },
  query: "",
};

const settingSlice = createSlice({
  name: "settings",
  initialState: startSettings,
  reducers: {
    changeQuery(state, action) {},
    changeSort(state, action) {},
    changePage(state, action) {},
    changeTotalPages(state, action) {},
    changeAge(state, action) {},
    changeGenres(state, action) {},
    resetFilter(state, action) {},
  },
});

export const {
  changeQuery,
  changeSort,
  changePage,
  changeTotalPages,
  changeAge,
  changeGenres,
  resetFilter,
} = settingSlice.actions;

export default settingSlice.reducer;
