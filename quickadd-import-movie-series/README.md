# QuickAdd: Import Movies and Series

## Overview

`QuickAdd: Import Movies and Series` is a custom macro designed for Obsidian, utilizing the QuickAdd and MetaEdit plugins. This macro allows users to import movie and series information from the OMDb API directly into their Obsidian vault. It is best used in conjunction with the Obsidian Buttons plugin and the `QuickAdd: Update Movie & Book Status` macro.

## Features

- Import detailed information about movies and series from the OMDb API.
- Automatically generate and populate notes with movie and series data.
- Configure valid statuses, ratings, and streaming platforms via QuickAdd.
- Integrate seamlessly with other Obsidian tools and plugins.

## Prerequisites

1. [QuickAdd](https://github.com/chhoumann/quickadd) plugin installed in Obsidian.
2. [MetaEdit](https://github.com/chhoumann/MetaEdit) plugin installed in Obsidian.
3. An API key from [OMDb API](https://www.omdbapi.com/).
4. [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) plugin installed and configured to use inline and JavaScript queries.
5. [Templater](https://github.com/SilentVoid13/Templater) plugin installed in Obsidian.
6. (Optional) [Obsidian Buttons](https://github.com/shabegom/buttons) for enhanced UI interaction.
7. (Optional) `QuickAdd: Update Movie & Book Status` macro for comprehensive note management.

## Installation

1. Ensure that the QuickAdd, MetaEdit, Dataview, and Templater plugins are installed and enabled in your Obsidian vault.
2. Obtain an API key from the [OMDb API](https://www.omdbapi.com/apikey.aspx).
3. Download the `qaCreateMovie.js` file and place it in your desired location within your vault.
4. Open QuickAdd settings in Obsidian and add a new macro.
5. In the macro settings, select `Run JavaScript` and point it to the `qaCreateMovie.js` file.
6. Configure the settings as per your requirements (see Configuration section below).

## Configuration

Here are the customizable settings for the `QuickAdd: Import Movies and Series` macro:

- `API_URL`: The URL used for querying movies & TV shows. (Default: `"https://www.omdbapi.com/"`)
- `API_KEY_OPTION`: Your OMDb API key. (Default: `""`)
- `DEFAULT_NOTE_NAME`: The default title of a newly created note. (Default: `"Untitled Movie"`)
- `VALID_STATUSES`: A stringified array of valid statuses for films and television shows. (Default: `["Wishlist", "Up Next", "In Progress", "On Hold", "Incomplete", "Complete"]`)
- `IN_PROGRESS_STATUS`: The status indicating a show or film is being watched. (Default: `"In Progress"`)
- `WATCHED_STATUS`: The status indicating a show or film has been seen. (Default: `"Complete"`)
- `RATINGS`: An array of numbers to represent the rating of a movie or stars. (Default: `["5", "4", "3", "2", "1"]`)
- `STREAMING_PLATFORMS`: An array of streaming platforms that you can watch media on. (Default: `["Netflix", "Stan", "Prime Video", "Disney+", "Kanopy", "iView", "SBS on Demand", "Docplay", "Foxtel Now", "Binge", "Kayo", "YouTube Premium", "Tubi", "BritBox", "Apple TV +", "Hayu", "Crunchyroll", "AnimeLab Australia", "Shudder", "Reelgood", "Mubi", "iwonder", "Curiosity Stream", "Paramount+", "9Now", "AMC+"]`)

## Usage

1. Run the `QuickAdd: Import Movies and Series` macro in Obsidian.
2. Enter the movie title or IMDb ID when prompted.
3. Select the desired movie or series from the search results.
4. Choose the streaming platform and status.
5. The macro will create a new note with detailed information about the movie or series.

## Example

An example markdown file `example.md` is included in the repository to demonstrate how the frontmatter should be structured and how the macro interacts with it. For this template to work, ensure the Dataview plugin is configured to use inline and JavaScript queries.
