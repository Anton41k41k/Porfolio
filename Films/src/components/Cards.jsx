import { Box } from "@mui/material";
import FilmCard from "./FilmCard";
import { useContext, useEffect, useState } from "react";
import { SettingsContext, SettingsDispatchContext } from "./filterReducer";
import { useCookies } from "react-cookie";

export default function Cards() {
  const [cookies] = useCookies();
  const [moviesList, setMovieList] = useState();
  const [searchList, setSearchList] = useState();
  const token = cookies.token;
  const settings = useContext(SettingsContext);
  const [followList, setFollowList] = useState();
  const accountId = cookies.accountId;
  const dispatch = useContext(SettingsDispatchContext);

  useEffect(() => {
    fetch(settings.sort.URL + settings.pages.page, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setMovieList(json);
      })
      .catch((err) => {
        setMovieList("error");
        console.log(err.message);
      });
    fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite/movies?language=ru&page=1&sort_by=created_at.asc`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setFollowList(json))
      .catch((err) => {
        setFollowList("error");
        console.log(err.message);
      });
  }, [settings]);

  useEffect(() => {
    settings.query.length !== 0
      ? fetch(
          `https://api.themoviedb.org/3/search/movie?query=${settings.query}&language=ru&page=${settings.pages.page}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        )
          .then((response) => response.json())
          .then((json) => {
            setSearchList(json);
            dispatch({
              type: "changeTotalPages",
              total: json.total_pages,
            });
          })
      : dispatch({
          type: "changeTotalPages",
          total: 500,
        });
  }, [settings.query, settings.pages.page]);

  return (
    <Box component="section" className="cards">
      {settings.query.length === 0 &&
        moviesList !== "error" &&
        moviesList &&
        followList &&
        moviesList.results.map((result) => (
          <FilmCard key={result.id} filmData={result} followList={followList} />
        ))}
      {searchList &&
        moviesList !== "error" &&
        searchList.results.map((result) => (
          <FilmCard key={result.id} filmData={result} followList={followList} />
        ))}
    </Box>
  );
}
