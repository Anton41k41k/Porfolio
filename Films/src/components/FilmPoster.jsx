import { Paper } from "@mui/material";

export default function FilmPoster({ information }) {
  return (
    <div className="poster" style={{ width: "100%", maxWidth: "300px" }}>
      <Paper square elevation={2} sx={{ width: "100%" }}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${information.poster_path}`}
          alt={information.original_title}
          style={{ width: "100%" }}
        />
      </Paper>
    </div>
  );
}
