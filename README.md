# Nodeyoutube

Create your own search engine based on youtube auto generated subtitles.

## Getting Started

* Download the info data from the youtube channels using [youtubel-dl](https://youtube-dl.org/) and save on the folder __json__ inside __scripts__.

* Run __npm videoInfo__ inside the scripts folder.

* Choose the subject of the videos ( like "history" or "programming") on the prompt

## Tips

* The database is built from YouTube's automatically generated captions so there will be mistakes, misspellings etc.
* Try searching for what you think would be the most common spelling based on the sound of the word.
* The search is case sensitive.
* Common words like "can" or "the" can delay the search. Try to be as specific as possible.
