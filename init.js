import app from "./index.js";

const PORT ="4000";

const handleListening =() => console.log("listening on: https://localhost:${PORT}");

app.listen(PORT, handleListening);