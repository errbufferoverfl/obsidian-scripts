# Dataview: Movie Shelf

## Overview

`Dataview: Movie Shelf` is a custom JavaScript view for the Dataview plugin in Obsidian. This script allows you to create an interactive movie shelf that displays and filters your media collection (movies and series) based on type, status, rating, genre, and platform. The view uses local storage to preserve your filter selections across sessions, providing a seamless and personalized browsing experience.

## Features

- Display and filter your media collection by type, status, rating, genre, and platform.
- Preserves filter selections using local storage.
- Provides an interactive and user-friendly interface for managing your movie shelf.

## Prerequisites

1. [Dataview](https://blacksmithgu.github.io/obsidian-dataview/) plugin installed and enabled in Obsidian.
2. JavaScript queries enabled in the Dataview plugin settings.
3. [Obsidian Minimal theme](https://minimal.guide/home) installed and enabled.

## Installation

1. Ensure that the Dataview plugin is installed and enabled in your Obsidian vault.
2. Ensure that the Obsidian Minimal theme is installed and enabled in your Obsidian vault.
3. Download the `view.js` file and place it in your desired location within your vault.
4. Create or edit a note where you want to include the movie shelf view.
5. At the top of your note, add the following helper classes to enhance the formatting for posters:

    ```markdown
    ---
    cssclasses:
    - cards
    - cards-cover
    - cards-2-3
    - table-max
    ---
    ```

6. Add the following code block to the note to embed the custom view:

    ````markdown
    ```dataviewjs
    const pages = dv.pages('#media');

    await dv.view('path/to/view/folder', {
        container: this.container,
        pages: pages
    })
    ```
    ````

Replace `path/to/view/folder` with the actual path to the `view.js` folder in your vault.

## How It Works

The `Dataview: Movie Shelf` script initializes a table with filter options for type, status, rating, genre, and platform. It stores the selected filter options in local storage, ensuring that your preferences are remembered across sessions. The table dynamically updates to show the filtered results based on the selected criteria.

### Code Functionality

- **Initialization**: The script initializes local storage if not already set and retrieves stored filter settings.
- **Filter Configuration**: It creates filter selectors for type, status, rating, genre, and platform, populating them with options and setting event listeners to update the view and local storage on change.
- **Rendering**: The script renders the media table based on the selected filter criteria and updates the view dynamically.

### Inline Comments

The script is heavily commented to explain each part of the code, making it easy to understand and customize.
