import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import FilmPoster from "./components/FilmPoster";
import FilmInformation from "./components/FilmInformation";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function FilmPage() {
  const [cookies] = useCookies();
  const { filmId } = useParams();
  const [information, setInformation] = useState();
  const [credits, setCredits] = useState();
  const [followList, setFollowList] = useState();
  const token = cookies.token;
  const accountId = cookies.accountId;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${filmId}?language=ru`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setInformation(json));

    fetch(`https://api.themoviedb.org/3/movie/${filmId}/credits?language=ru`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((json) => setCredits(json));

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
      .then((json) => setFollowList(json));
  }, []);
  return (
    <Box display={"flex"} sx={{ padding: "20px", gap: "5rem" }}>
      {information && <FilmPoster information={information} />}
      {information && followList && credits && (
        <FilmInformation
          information={information}
          credits={credits}
          followList={followList}
        />
      )}
    </Box>
  );
}
