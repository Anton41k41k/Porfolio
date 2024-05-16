import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { orange } from "@mui/material/colors";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { countries } from "../iata";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";

export default function FilmInformation({ information, credits, followList }) {
  const { filmId } = useParams();
  const [isFollow, setIsFollow] = useState(
    followList.results.filter((film) => `${film.id}` === filmId).length !== 0
  );
  const navigate = useNavigate();
  const [cookies] = useCookies();

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
        body: `{"media_type": "movie", "media_id": ${filmId}, "favorite": ${!isFollow}}`,
      }
    ).catch((error) => {
      setIsFollow(isFollow);
      alert("Ошибка соединения: " + error.message);
    });
  }

  function handleGoBack() {
    navigate(-1);
  }

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + ":" + minutes;
  }
  const country = countries.filter(
    (country) => country.value === information.origin_country[0]
  )[0];
  const age = new Date(information.release_date).getFullYear();

  return (
    <div
      className="information"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "1rem",
      }}
    >
      <Typography variant="h4">
        {information.title} ({age})
        <IconButton aria-label="follow-icon" onClick={handleChangeFollowList}>
          {isFollow ? (
            <StarIcon fontSize="large" sx={{ color: orange[500] }} />
          ) : (
            <StarBorderIcon fontSize="large" sx={{ color: orange[500] }} />
          )}
        </IconButton>
      </Typography>
      <Typography align="justify" paragraph={true} variant="subtitle1">
        {information.overview}
      </Typography>
      <IconButton
        aria-label="back"
        sx={{ padding: "0" }}
        onClick={handleGoBack}
      >
        <ArrowBackIcon fontSize="large" />
      </IconButton>
      <List dense sx={{ padding: "0", marginBottom: "2rem" }}>
        {credits.cast.slice(0, 4).map((person) => (
          <ListItem key={person.id} sx={{ padding: "0" }}>
            <ListItemText
              primaryTypographyProps={{ fontSize: "1.2em" }}
              primary={person.name}
              secondary={person.character}
            />
          </ListItem>
        ))}
      </List>
      <Typography variant="h5" component="h5">
        Детали
      </Typography>

      <Table aria-label="simple table" sx={{ maxWidth: "600px" }}>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Страна
            </TableCell>
            <TableCell component="th" scope="row">
              {country.text}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Год
            </TableCell>
            <TableCell component="th" scope="row">
              {age}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              {information.genres.length === 1 ? "Жанр" : "Жанры"}
            </TableCell>
            <TableCell component="th" scope="row">
              {information.genres.length === 1
                ? information.genres.map((genre) => genre.name)
                : information.genres.map((genre) => genre.name).join(", ")}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Длительность
            </TableCell>
            <TableCell component="th" scope="row">
              {information.runtime +
                " мин. / " +
                getTimeFromMins(information.runtime)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
