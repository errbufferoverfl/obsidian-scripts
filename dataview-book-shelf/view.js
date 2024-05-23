/**
 * Initializes the Dataview custom storage if not already set in localStorage.
 * @returns {void}
 */
function initLocalStorage() {
    let dvLocalStorage = localStorage.getItem("DataviewCustomStorage");
    let struct = {
        type: "All",
        typeIndex: 0,
        status: "All",
        statusIndex: 0,
        rating: "All",
        ratingIndex: 0,
        genre: "All",
        genreIndex: 0,
    };

    // Check if localStorage has DataviewCustomStorage set, if not, initialize it.
    if (!dvLocalStorage) {
        let parent = { "reading": struct };
        struct = JSON.stringify(parent);
        localStorage.setItem("DataviewCustomStorage", struct);
    } else {
        dvLocalStorage = localStorage.getItem("DataviewCustomStorage");
        dvLocalStorage = JSON.parse(dvLocalStorage);

        // If reading is not set within DataviewCustomStorage, initialize it.
        if (!dvLocalStorage.reading) {
            dvLocalStorage.reading = struct;
            dvLocalStorage = JSON.stringify(dvLocalStorage);
            localStorage.setItem("DataviewCustomStorage", dvLocalStorage);
        }
    }
}

/**
 * Sets a key-value pair in the Dataview custom storage in localStorage.
 * @param {string} key - The key to set in the custom storage.
 * @param {string|number} value - The value to set for the key.
 * @returns {void}
 */
function setLocalStorage(key, value) {
    let dvLocalStorage = JSON.parse(localStorage.getItem("DataviewCustomStorage"));
    if (dvLocalStorage) {
        let struct = dvLocalStorage.reading;
        struct[key] = value;

        dvLocalStorage.reading = struct;

        struct = JSON.stringify(dvLocalStorage);
        localStorage.setItem("DataviewCustomStorage", struct);
    }
}

/**
 * Formats the image URLs for display.
 * @param {string} title - The title of the literature item.
 * @param {string} img - The image URL or path.
 * @returns {string} - The formatted image HTML string.
 */
const tidyImages = (title, img) => {
    if (typeof (img) === "string" && img === "") {
        return `<img alt="${title} cover" src="${this.app.vault.adapter.getResourcePath("/90-Meta/92-Attachments/placeholder.png")}>`;
    } else if (typeof (img) === "string" && !img.startsWith("![")) {
        return `![${title} cover](${img})`;
    } else if (typeof (img) === "string") {
        return `<img alt="${title} cover" src="${this.app.vault.adapter.getResourcePath("/90-Meta/92-Attachments/" + img)}">`;
    } else {
        return dv.fileLink(img).path;
    }
};

/**
 * Removes the existing table from the container.
 * @returns {void}
 */
function removeTable() {
    let lastStyle;
    // Check if the last child node is a style element and remove the last two elements
    if (container.lastChild.nodeName.toLowerCase() === "style") {
        lastStyle = container.lastChild;

        container.lastChild.remove();
        container.lastChild.remove();

        container.appendChild(lastStyle);
    } else {
        container.lastChild.remove();
    }
}

/**
 * Renders the literature table based on the filters and settings stored in localStorage.
 * @returns {void}
 */
function renderTable() {
    const storage = JSON.parse(localStorage.getItem("DataviewCustomStorage")).reading;
    let filteredPages = pages;

    // Filter pages based on the type selected
    if (storage.type !== "All") {
        filteredPages = filteredPages.where(page => page.type === storage.type);
    }

    // Filter pages based on the status selected
    if (storage.status !== "All") {
        filteredPages = filteredPages.where(page => page.status === storage.status);
    }

    // Filter pages based on the rating selected
    if (storage.rating !== "All") {
        filteredPages = filteredPages.where(page => page.rating === storage.rating);
    }

    // Filter pages based on the genre selected
    if (storage.genre !== "All") {
        filteredPages = filteredPages.where(page => page.genre === storage.genre);
    }

    // Sort pages by title in ascending order
    filteredPages = filteredPages.sort(l => l.title, "ASC");

    const headers = ["Cover", "Title", "Year", "Author"];

    // Render the table using Dataview API
    dv.table(
        headers,
        filteredPages.map(page => {
            let image = page.type === "Research Paper" ? page.cover : page.banner;

            return [
                tidyImages(page.title, image),
                dv.fileLink(page.file.path, false, page.title),
                page.author,
                page.status,
            ];
        }));
}

const container = input.container;
const pages = input.pages;

// Initialize local storage
initLocalStorage();
const storage = JSON.parse(localStorage.getItem("DataviewCustomStorage")).reading;

// Create the table container
let table = document.createElement("div");
table.className = "table-filters";
table.ariaRoleDescription = "table";
table.ariaLabel = "Literature Table";

// Create the row container for filters
let row = document.createElement("div");
row.className = "flex-row";
row.ariaRoleDescription = "row";
row.ariaLabel = "Filters";

/**
 * Configuration of the type selector
 */
let typeColumn = document.createElement("div");
let typeTitle = document.createElement("strong");
typeTitle.innerText = "📚 Type: ";
let typeSelect = document.createElement("select");
typeSelect.id = "selectType";

// Populate the type selector options
const types = ["All", "Book", "Zine", "Research Paper", "Article"];
types.forEach(function (item) {
    const optionObj = document.createElement("option");
    optionObj.textContent = item;
    typeSelect.appendChild(optionObj);
});

typeColumn.appendChild(typeTitle);
typeColumn.appendChild(typeSelect);
row.appendChild(typeColumn);

// Set the selected index based on stored value and add event listener to update storage on change
typeSelect.selectedIndex = storage.typeIndex;
typeSelect.addEventListener("change", function (e) {
    e.preventDefault();
    setLocalStorage("type", this.value); // Save the selected value to local storage
    setLocalStorage("typeIndex", types.indexOf(this.value));
    removeTable();
    renderTable();
});

/**
 * Configuration of the status selector
 */
let statusColumn = document.createElement("div");
let statusTitle = document.createElement("strong");
statusTitle.innerText = "🏷️ Status: ";
let statusSelect = document.createElement("select");
statusSelect.id = "selectStatus";

// Populate the status selector options
const statuses = ["All", "Wishlist", "Backlog", "Up Next", "In Progress", "On Hold", "Incomplete", "Complete"];
statuses.forEach(function (item) {
    const optionObj = document.createElement("option");
    optionObj.textContent = item;
    statusSelect.appendChild(optionObj);
});

statusColumn.appendChild(statusTitle);
statusColumn.appendChild(statusSelect);
row.appendChild(statusColumn);

// Set the selected index based on stored value and add event listener to update storage on change
statusSelect.selectedIndex = storage.statusIndex;
statusSelect.addEventListener("change", function (e) {
    e.preventDefault();
    setLocalStorage("status", this.value); // Save the selected value to local storage
    setLocalStorage("statusIndex", statuses.indexOf(this.value));
    removeTable();
    renderTable();
});

/**
 * Configuration of the rating selector
 */
let ratingColumn = document.createElement("div");
let ratingTitle = document.createElement("strong");
ratingTitle.innerText = "⭐️ Rating: ";
let ratingSelect = document.createElement("select");
statusSelect.id = "selectRating";

// Populate the rating selector options
const ratings = ["All", "5", "4", "3", "2", "1", "Unrated"];
ratings.forEach(function (item) {
    const optionObj = document.createElement("option");
    optionObj.textContent = item;
    ratingSelect.appendChild(optionObj);
});

ratingColumn.appendChild(ratingTitle);
ratingColumn.appendChild(ratingSelect);
row.appendChild(ratingColumn);

// Set the selected index based on stored value and add event listener to update storage on change
ratingSelect.selectedIndex = storage.ratingIndex;
ratingSelect.addEventListener("change", function (e) {
    e.preventDefault();
    setLocalStorage("rating", this.value); // Save the selected value to local storage
    setLocalStorage("ratingIndex", ratings.indexOf(this.value));
    removeTable();
    renderTable();
});

/**
 * Configuration of the genre selector
 */
let genreColumn = document.createElement("div");
let genreTitle = document.createElement("strong");
genreTitle.innerText = "🎭 Genre: ";
let genreSelect = document.createElement("select");
genreSelect.id = "selectGenre";

// Populate the genre selector options
let genres = pages.genre.map(genre => {
    try {
        return genre.path;
    } catch (TypeError) {
        return genre;
    }
});
genres = new Array(...new Set(genres)).sort();
genres.unshift("All");
genres.forEach(function (item) {
    const optionObj = document.createElement("option");
    optionObj.textContent = item;
    genreSelect.appendChild(optionObj);
});

genreColumn.appendChild(genreTitle);
genreColumn.appendChild

(genreSelect);
row.appendChild(genreColumn);

// Set the selected index based on stored value and add event listener to update storage on change
genreSelect.selectedIndex = storage.genreIndex;
genreSelect.addEventListener("change", function (e) {
    e.preventDefault();
    setLocalStorage("genre", this.value); // Save the selected value to local storage
    setLocalStorage("genreIndex", genres.indexOf(this.value));
    removeTable();
    renderTable();
});

// Append the filter row to the table and the table to the container
table.appendChild(row);
container.appendChild(table);

// Render the initial table
renderTable();
