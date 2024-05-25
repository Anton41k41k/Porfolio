import { Box } from "@mui/material";
import "./mainPage.css";
import MainImgSection from "./components/mainComponents/MainImgSection";
import MainPageInformaton from "./components/mainComponents/MainPageInformation";
import MongoClient from "mongodb";

export default function MainPage() {
  // Замените на свой MongoDB URI-адрес. По умолчанию используется локальный сервер с портом 27017
  const uri =
    "mongodb+srv://trol04:Antonn@request.v4fe9vw.mongodb.net/?retryWrites=true&w=majority&appName=request";
  const client = new MongoClient(uri);

  async function main() {
    try {
      // Подключение к серверу MongoDB
      await client.connect();

      // Немного кода для работы с MongoDB, например:
      const db = client.db("carSite"); // Замените на имя вашей базы данных
      const collection = db.collection("request"); // Замените на имя вашей коллекции

      // Вставка документа
      const result = await collection.insertOne({ key: "value" });
      console.log("Document inserted:", result.insertedId);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      // Завершение работы с MongoDB и закрытие соединения
      await client.close();
    }
  }
  main();
  return (
    <Box component={"main"} className="main">
      <MainImgSection />
      <MainPageInformaton />
    </Box>
  );
}
