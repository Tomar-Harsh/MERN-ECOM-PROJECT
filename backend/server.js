require('dotenv').config();


// App file ko import kar rahe hain
const app = require("./app");



const connectDatabase = require("./config/database");
connectDatabase();


const PORT = process.env.PORT;
// Server ko start kar rahe hain aur port number console me dikha rahe hain

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});