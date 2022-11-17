const express = require("express");
const cors = require("cors");

const clients = require("./routes/clients");
const suppliers = require("./routes/suppliers");
const operations = require("./routes/operations");
const emails = require("./routes/emails");
const calls = require("./routes/calls");

const app = express();

app.use(cors());

app.use("/attachments", express.static("attachments"));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/clients", clients);
app.use("/api/v1/suppliers", suppliers);
app.use("/api/v1/operations", operations);
app.use("/api/v1/emails", emails);
app.use("/api/v1/calls", calls);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
