# QuickAdd: Update Current Page

## Overview

`QuickAdd: Update Current Page` is a custom macro designed for Obsidian, utilizing the QuickAdd and MetaEdit plugins. This macro allows users to update the current page number of their book notes and optionally track the number of pages read in a daily note. This tool is especially helpful when used with the Obsidian Buttons plugin and the `QuickAdd: Update Movie & Book Status` macro.

## Features

- Update the current page number of book notes.
- Optionally update a daily note to track the number of pages read in a day.
- Easily configure metadata keys and settings via QuickAdd.

## Prerequisites

- [QuickAdd](https://github.com/chhoumann/quickadd) plugin installed in Obsidian.
- [MetaEdit](https://github.com/chhoumann/MetaEdit) plugin installed in Obsidian.
- (Optional) [Obsidian Buttons](https://github.com/shabegom/buttons) for enhanced UI interaction.
- (Optional) `QuickAdd: Update Movie & Book Status` macro for book & movie note management.

## Installation

1. Ensure that the QuickAdd and MetaEdit plugins are installed and enabled in your Obsidian vault.
2. Download the `qaUpdateCurrentPage.js` file and place it in your desired location within your vault.
3. Open QuickAdd settings in Obsidian and add a new macro.
4. In the macro settings, select `Run JavaScript` and point it to the `qaUpdateCurrentPage.js` file.
5. Configure the settings as per your requirements (see Configuration section below).

## Configuration

Here are the customizable settings for the `QuickAdd: Update Current Page` macro:

- `PAGE_NUMBER_KEY`: The metadata key that should be updated by the user. (Default: `"current"`)
- `UPDATE_DAILY_NOTE`: Toggle to determine whether the daily note should be updated to track the number of pages read in a day. (Default: `true`)
- `DAILY_NOTE_KEY`: The metadata key in the daily note that is used to track the number of pages read in a day. (Default: `"pages"`)

## Usage

1. Open a book note in Obsidian.
2. Run the `QuickAdd: Update Current Page` macro.
3. Follow the prompt to enter the new current page number.
4. (Optional) If enabled, the macro will also update the daily note to track the number of pages read.

## Example

An example markdown file [example.md](quickadd-movie-book-status/example.md) is included in the repository to demonstrate how the frontmatter should be structured and how the macro interacts with it.
