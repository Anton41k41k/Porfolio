import { Link, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FeedbackForm from "./components/aboutUsComponents/FeedbackForm";

export default function ContactsPage() {
  const theme = useTheme();
  return (
    <Grid
      container
      component="section"
      justifyContent="center"
      columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 18 }}
      spacing={2}
      mx={1}
    >
      <Grid mt={7} mb={1} xs={4} sm={6} md={10} lg={14} xl={16}>
        <Typography
          color={theme.typography}
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1.4rem",
              md: "2rem",
              lg: "2rem",
            },
          }}
          variant="h3"
        >
          СЛУЖБА КЛИЕНСТСКОЙ ПОДДЕРЖКИ
        </Typography>
      </Grid>
      <Grid xs={4} sm={6} md={10} lg={14} xl={16}>
        <Typography
          variant="p"
          color={theme.typography}
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.1rem",
              lg: "1.2rem",
              xl: "1.3rem",
            },
          }}
          display="block"
        >
          Если Вы хотите связаться с представителями Службы клиентской
          поддержки, то Вы можете позвонить нам по телефону:
        </Typography>
        <Typography
          mt={2}
          display="block"
          variant="p"
          color={theme.typography}
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.1rem",
              lg: "1.2rem",
              xl: "1.3rem",
            },
          }}
        >
          <Link href="tel:+78432040000" underline="none" fontWeight="700">
            +7(843)204-00-00
          </Link>{" "}
          или{" "}
          <Link href="tel:+78633103333" underline="none" fontWeight="700">
            +7(863)310-33-33
          </Link>{" "}
          с 8:00 до 20:00.
          <br />
          <Link
            href="mailto:bars.carshowroom@mail.ru"
            underline="none"
            fontWeight="700"
          >
            bars.carshowroom@mail.ru
          </Link>
        </Typography>
        <Typography
          mt={2}
          display="block"
          variant="p"
          color={theme.typography}
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.1rem",
              lg: "1.2rem",
              xl: "1.3rem",
            },
          }}
        >
          Вы также можете обратиться в Службу клиентской поддержки, заполнив
          форму на этой странице.
        </Typography>
        <Typography
          mt={2}
          display="block"
          variant="p"
          color={theme.typography}
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "1rem",
              md: "1.1rem",
              lg: "1.2rem",
              xl: "1.3rem",
            },
          }}
        >
          Мы будем рады ответить на все Ваши вопросы!
        </Typography>
      </Grid>
      <FeedbackForm />
    </Grid>
  );
}
