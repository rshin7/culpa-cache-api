// Copyright (C) 2021 Richard Shin

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

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