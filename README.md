# ESPN Scrapper

In this project I scrape an IPL data of a website named `ESPN` which as a result gives highest wicket taker name and batsman name who hits maximum no. of sixes. 

## Working 📝

- We provide a link of a match page of `ESPN` website.
- It gives two outputs :
    - 1st - Highest wicket taker name, no. of wickets taken by him and his economy in that match.
    - 2nd - batsman name who hits highest no. of sixes, no. of sixes and his strike rate in that match.

- The project uses npm packages `fs`, `cheerio`, and `request` to scrape data from the ESPN website.

- The `request` package is used to make HTTP requests to the ESPN website, while `cheerio` is used to parse and manipulate the HTML data that is returned.

- The `fs` package is used to write the scraped data to a file for storage or further processing.

## Tech Stack ⚒

**Javascript, Nodejs, FS Module, Request & Cheerio.**

