const userRoutes = (app, fs) => {

    app.get('/prof/:id', (req, res) => {
      const actual_id = req.params.id
      const dataPath = `./data/prof-${actual_id}.json`;
      fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          res.json({ error: 'Professor Not Found'});
          // throw err;
        } else {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(JSON.parse(data));
      }
      });
    });
  };
  
  module.exports = userRoutes;