import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function AuthorizationPage() {
  const [setCookie, removeCookie] = useCookies();

  const navigate = useNavigate();

  const [isGetToken, setIsGetToken] = useState(false);

  async function getAccountId(token) {
    fetch("https://api.themoviedb.org/3/account/account_id", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((account) => {
        removeCookie("accountId");
        setCookie("accountId", account.id);
      });
  }

  function GetTokenPopup() {
    return (
      <Dialog
        fullWidth
        open={true}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.mail;
            console.log(email);
            setIsGetToken(true);
          },
        }}
      >
        <DialogTitle>Запросить токен</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="mail"
            label="Почта"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => navigate(-1)}>Отмена</Button>
          <Button type="submit">Запросить</Button>
        </DialogActions>
      </Dialog>
    );
  }
  function PostTokenPopup() {
    return (
      <Dialog
        fullWidth
        open={true}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const token = formJson.token;
            removeCookie("token");
            setCookie("token", token);
            getAccountId(token);
            navigate(-1);
          },
        }}
      >
        <DialogTitle>Ввести токен</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="token"
            label="Токен"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsGetToken(false)}>Отмена</Button>
          <Button type="submit">Ок</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return <>{isGetToken ? <PostTokenPopup /> : <GetTokenPopup />}</>;
}
