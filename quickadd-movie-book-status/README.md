# QuickAdd: Update Movie & Book Status

## Overview

`QuickAdd: Update Movie & Book Status` is a custom macro designed for Obsidian, utilizing the QuickAdd and MetaEdit plugins. This macro allows users to update the status, start and end dates, current progress, and ratings of their movie and book notes directly from Obsidian. This tool is especially helpful when used with the Obsidian Buttons plugin and the Obsidian Book Search plugin.

## Features

* Update the status of movies and books.
* Track start and end dates for movies and books.
* Record the current page and total pages for books.
* Assign ratings to movies and books.
* Easily configure valid statuses and other settings via QuickAdd.

## Prerequisites

* [QuickAdd](https://github.com/chhoumann/quickadd) plugin installed in Obsidian.
* [MetaEdit](https://github.com/chhoumann/MetaEdit) plugin installed in Obsidian.
* (Optional) [Obsidian Buttons](https://github.com/shabegom/buttons) for enhanced UI interaction.
* (Optional) [Obsidian Book Search](https://github.com/anpigon/obsidian-book-search-plugin) for better book management.

## Installation

1. Ensure that the QuickAdd and MetaEdit plugins are installed and enabled in your Obsidian vault.
2. Download the `qaUpdateMovieBookStatus.js` file and place it in your desired location within your vault.
3. Open QuickAdd settings in Obsidian and add a new macro.
4. In the macro settings, select Run JavaScript and point it to the `qaUpdateMovieBookStatus.js` file.
5. Configure the settings as per your requirements (see Configuration section below).

## Configuration

Here are the customizable settings for the QuickAdd: Update Movie & Book Status macro:

* `STATUS_KEY`: The frontmatter key that manages the status of the note. (Default: "status")
* `VALID_BOOK_STATUSES`: A stringified array of valid statuses for books. (Default: ["Wishlist", "Up Next", "In Progress", "On Hold", "Incomplete", "Complete"])
* `VALID_FILM_STATUSES`: A stringified array of valid statuses for movies. (Default: ["Wishlist", "Up Next", "In Progress", "On Hold", "Incomplete", "Complete"])
* `DATE_STARTED_KEY`: The key that tracks when a book or film was started. (Default: "started")
* `DATE_COMPLETED_KEY`: The key that tracks when a book or film was completed. (Default: "finished")
* `RATING_KEY`: The key that tracks the book or film rating. (Default: "rating")
* `BOOK_IN_PROGRESS_STATUS`: The status value that indicates a book is in progress. (Default: "In Progress")
* `BOOK_COMPLETED_STATUS`: The status value that indicates a book is completed. (Default: "Complete")
* `CURRENT_PAGE_KEY`: The key that tracks the current page of a book. (Default: "current")
* `TOTAL_PAGE_KEY`: The key that tracks the total pages of a book. (Default: "total")
* `FILM_IN_PROGRESS_STATUS`: The status value that indicates a film is in progress. (Default: "In Progress")
* `FILM_COMPLETED_STATUS`: The status value that indicates a film is completed. (Default: "Complete")
* `RATINGS`: An array of numbers to represent the rating of a movie or book. (Default: ["5", "4", "3", "2", "1"])

## Usage

* Open a note representing a movie or book in Obsidian.
* Run the QuickAdd: Update Movie & Book Status macro.
* Follow the prompts to update the status, dates, current progress, and rating of the note.

## Example

An example markdown file [example.md](example.md) is included in the repository to demonstrate how the frontmatter should be structured and how the macro interacts with it.
