var path = require("path"),
express = require("express");

var DIST_DIR = path.join(__dirname, "dist"),
PORT = 3000,
app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
// app.get("*", function (req, res) {
//   res.sendFile(path.join(DIST_DIR, "index.html"));
// });

router = express.Router();
// placeholder route handler

router.get('/x', (req, res, next) => {
    res.json({
        message: 'Hello World !!!!'
    });
});
app.use('/', router);


app.listen(PORT);
