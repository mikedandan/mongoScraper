
#The Mongo Scraper

#Overview
The Mongo Scraper is a scraper app which captures the title, link and summary of articles from Wikileaks. In this app, users are able to save their preferred articles, add notes and edit notes to one or multiple articles.

In this repository, you can see source code of Mongo Scraper.

Key Dependencies
request: enables cheerio to get access to front-end code of https://wikileaks.org/-News-.html

cheerio: scrapes front-end code from https://wikileaks.org/-News-.html

mongoose: be in charge of database of scrap

express: builds server-side routes and functions

morgan: logs server-side requests, helping debugging

express-handlebars: a powerful front-end builder without requiring multiple html pages