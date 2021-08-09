const allProfRoutes = require('./all_professors.js');
const ProfRoutes = require('./professor.js');

const appRouter = (app, fs) => {
  app.get('/', (req, res) => {
    res.send('culpa-cache API server' + '<br />' + '- <a href="https://www.rshin.dev/" target="_blank">rs</a>');
  });

  
  allProfRoutes(app, fs);
  ProfRoutes(app, fs);
};


module.exports = appRouter;