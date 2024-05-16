import { createContext } from "react";

const genresURL = "https://api.themoviedb.org/3/genre/movie/list?language=ru";

export const URLContext = createContext(null);

export function ConnectProvider({ children }) {
  return (
    <URLContext.Provider value={genresURL}>{children}</URLContext.Provider>
  );
}

export const userCredentials = {
  name: "",
  password: "",
  mail: "",
  isNewUser: true,
};

export const sortParams = [
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
