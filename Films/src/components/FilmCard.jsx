import { Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { memo } from "react";

function FilmCard({ filmData, followList }) {
  const [cookies] = useCookies();
  const [isFollow, setIsFollow] = useState(
    followList.results.filter((film) => film.id === filmData.id).length !== 0
  );

  async function handleChangeFollowList() {
    setIsFollow(!isFollow);
    fetch(
      `https://api.themoviedb.org/3/account/${cookies.accountId}/favorite`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookies.token}`,
          "Content-Type": "application/json;charset=utf-8",
          accept: "application / json",
        },
        body: `{"media_type": "movie", "media_id": ${
          filmData.id
        }, "favorite": ${!isFollow}}`,
      }
    ).catch((error) => {
      setIsFollow(isFollow);
      alert("Ошибка соединения: " + error.message);
    });
  }

  return (
    <Card>
      <Link to={`/${filmData.id}`}>
        <CardMedia
          component="img"
          height="200"
          image={`https://image.tmdb.org/t/p/w500${
            !filmData.backdrop_path ? null : filmData.backdrop_path
          }`}
          alt={"Film Name"}
        />
      </Link>
      <CardHeader
        action={
          <IconButton aria-label="follow-icon" onClick={handleChangeFollowList}>
            {isFollow ? <StarIcon /> : <StarBorderIcon />}
          </IconButton>
        }
        title={filmData.title}
        subheader={filmData.vote_average}
      />
    </Card>
  );
}

export default FilmCard;
