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

const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(port, () => {
    console.log('API Server Online on port %s', server.address().port)
});