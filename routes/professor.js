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