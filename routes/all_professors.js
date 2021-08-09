const userRoutes = (app, fs) => {
    // variables
    const dataPath = './data/all_professors.json';
  
    // READ
    app.get('/all-professors', (req, res) => {
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        res.header("Access-Control-Allow-Origin", "*");
        res.send(JSON.parse(data));
      });
    });
  };
  
  module.exports = userRoutes;