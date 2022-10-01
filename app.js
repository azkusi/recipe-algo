const express = require("express");
const app = express();
const port =  process.env.PORT || 5000;

const cors = require('cors')

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});

app.use(cors());


app.use(express.static(path.resolve(__dirname, './client/build')));


// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});


module.exports = app;