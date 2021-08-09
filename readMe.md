# culpa cache API (Express.js)

Created by: [Richard Shin](https://www.rshin.dev/)

This is the API server for culpa-cache. Currently supports two types of GET requests:

`/prof/{id}` - Gets all reviews from the professor

`/allprofessors/` - Shows all professors

---

## How to Use
1. Install all dependencies (`npm install`)
2. Either manually scrape all data OR [download via GitHub releases](https://github.com/rshin7/culpa-cache-api/releases/download/v1.0/raw_data_v1.0.tar.gz)
    * If manually scraping you'll need to move the `data` folder where all the scraped .json files are into the directory where this API is.
    * If using the compiled raw_data.tar.gz, you'll need to unzip the `data` folder into the directory where this API is.
3. Start API (`npm start`)