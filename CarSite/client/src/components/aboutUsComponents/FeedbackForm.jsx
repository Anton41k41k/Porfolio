import { useReducer } from "react";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FormInput from "../FormInput";

const topics = [
  { id: 0, text: "Автомобили" },
  { id: 1, text: "Поддержка веб-сайта" },
  { id: 2, text: "Проверка на наличие технических акций" },
  { id: 3, text: "Другое" },
];

export default function FeedbackForm() {
  const initUserReqest = {
    gender: "male",
    firstName: "",
    lastName: "",
    surname: "",
    email: "",
    number: "",
    VIN: "",
    topic: "",
    message: "",
  };

  function reducer(state, action) {
    if (action.type === "changeGender") {
      return {
        ...state,
        gender: action.gender,
      };
    }
    if (action.type === "changeFirstName") {
      return {
        ...state,
        firstName: action.firstName,
      };
    }
    if (action.type === "changeLastName") {
      return {
        ...state,
        lastName: action.lastName,
      };
    }
    if (action.type === "changeSurname") {
      return {
        ...state,
        surname: action.surname,
      };
    }
    if (action.type === "changeEmail") {
      return {
        ...state,
        email: action.email,
      };
    }
    if (action.type === "changeNumber") {
      return {
        ...state,
        number: action.number,
      };
    }
    if (action.type === "changeVIN") {
      return {
        ...state,
        VIN: action.VIN,
      };
    }
    if (action.type === "changeTopic") {
      return {
        ...state,
        topic: action.topic,
      };
    }
    if (action.type === "changeMessage") {
      return {
        ...state,
        message: action.message,
      };
    }
    throw Error("Unknown action.");
  }

  const [state, dispath] = useReducer(reducer, initUserReqest);

  return (
    <Grid
      component="form"
      mt={5}
      xs={4}
      sm={6}
      md={10}
      lg={14}
      xl={16}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(JSON.stringify(state));
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
        spacing={2}
        component={FormControl}
      >
        <Grid mb={1} xs={4} sm={8} md={12} lg={16} xl={18}>
          <FormLabel>Обращение</FormLabel>
          <RadioGroup
            value={state.gender}
            row
            sx={{ ":focus": { color: "#262626" } }}
            onChange={(e) => {
              dispath({
                type: "changeGender",
                gender: e.target.value,
              });
            }}
          >
            <FormControlLabel
              value="male"
              control={<Radio size="medium" />}
              label="Уважаемый"
            />
            <FormControlLabel
              value="female"
              control={<Radio size="medium" />}
              label="Уважаемая"
            />
          </RadioGroup>
        </Grid>
        <FormInput
          value={state.firstName}
          type="text"
          handleChange={(e) => {
            dispath({
              type: "changeFirstName",
              firstName: e.target.value,
            });
          }}
          name="firstName"
          label="Имя"
          required={true}
        />

        <FormInput
          value={state.lastName}
          type="text"
          handleChange={(e) => {
            dispath({
              type: "changeLastName",
              lastName: e.target.value,
            });
          }}
          name="lastName"
          label="Фамилия"
          required={true}
        />
        <FormInput
          value={state.surname}
          type="text"
          handleChange={(e) => {
            dispath({
              type: "changeSurname",
              surname: e.target.value,
            });
          }}
          name="surname"
          label="Отчество"
          required={false}
        />
        <FormInput
          value={state.email}
          type="mail"
          handleChange={(e) => {
            dispath({
              type: "changeEmail",
              email: e.target.value,
            });
          }}
          name="email"
          label="Email"
          required={true}
        />
        <FormInput
          value={state.number}
          type="tel"
          handleChange={(e) => {
            dispath({
              type: "changeNumber",
              number: e.target.value,
            });
          }}
          name="number"
          label="Номер телефона"
          required={true}
        />
        <FormInput
          value={state.VIN}
          type="text"
          handleChange={(e) => {
            dispath({
              type: "changeVIN",
              VIN: e.target.value,
            });
          }}
          name="VIN"
          label="VIN автомобиля, последние 7 знаков"
          required={false}
        />
        <Grid
          required
          fullWidth
          component={FormControl}
          xs={4}
          sm={8}
          md={6}
          lg={5.33}
          xl={6}
        >
          <InputLabel
            id="selectId"
            sx={{
              pt: "0.5rem",
              pl: "0.8rem",
              backgroundColor: "unSet",
            }}
          >
            Тема обращения
          </InputLabel>
          <Select
            required
            onChange={(e) => {
              dispath({
                type: "changeTopic",
                topic: e.target.value,
              });
            }}
            fullWidth
            label="Тема обращения"
            labelId="selectId"
            value={state.topic}
            sx={{
              MozAppearance: "none",
            }}
          >
            {topics.map((topic) => (
              <MenuItem key={topic.id} value={topic.text}>
                {topic.text}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid xs={4} sm={8} md={12} lg={16} xl={18} mb={1}>
          <TextField
            required
            minRows={4}
            multiline
            label={"Текст письма"}
            name="message"
            value={state.message}
            onChange={(e) => {
              dispath({
                type: "changeMessage",
                message: e.target.value,
              });
            }}
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "60%",
                xl: "70%",
              },
            }}
          />
        </Grid>
        <Grid xl={3}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            id="FeedbackFormSubmit"
          >
            Отправить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
