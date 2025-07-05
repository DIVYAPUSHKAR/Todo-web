require("dotenv").config(); // Only if not already done
const app = require("./app");

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
