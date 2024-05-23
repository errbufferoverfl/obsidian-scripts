---
title: "{{VALUE:Title}}"
banner: "{{VALUE:Poster}}"
type: "{{VALUE:type}}"
status: "{{VALUE:status}}"
published: {{VALUE:Year}}
started: {{VALUE:started}}
finished: {{VALUE:finished}}
rating: {{VALUE:rating}}
total: {{VALUE:Runtime}}
imdbID: "{{VALUE:imdbID}}"
summary: "<% `{{VALUE:Plot}}`.replace(/[^A-Za-z0-9\-._~:\/\?#\[\]@!$&()*+,;= ]/g, "") %>"
---

# {{VALUE:Title}}

directed by <% "{{VALUE:directorLink}}".split(",").map(line => `**(director::${line.trim()})**`).join(", ") %>
featuring <% "{{VALUE:actorLink}}".split(",").map(line => `**(actor::${line.trim()})**`).join(", ") %>

`button-updateMovieStatus`

```dataviewjs
const status = dv.current().status;

const finished = dv.current().finished ? dv.current().finished : moment();
const started = dv.current().started ? dv.current().started : moment();

if (status.toLowerCase() === "in progress"){
    dv.span(`⏩ *${status}*`)
}

if (status.toLowerCase() === "complete"){
    dv.span(`✅ *${status}*  ·  ${dv.current().rating ? "🟡".repeat(dv.current().rating) : "⚫️⚫️⚫️⚫️⚫️"} ${dv.current().rating}/5`)
}

if (status.toLowerCase() === "on hold"){
    dv.span(`⏸️ *${status}*. `)
}

if (status.toLowerCase() === "incomplete"){
    dv.span(`⏹️ *${status}*.`)
}
```

_`$= dv.current().summary`_

- ## Details
	- 🏷 **Status:** `$= dv.current().status`
	- 👀 **Watched:** `$= dv.current().finished`

- ## Additional Info.
	- ## 📺 Watch on
		- (watchon::{{VALUE:platform}})
	- ## 💬 **Recommended by**
		- (recommended::)

**Genres**
<% "{{VALUE:genreLink}}".split(",").map(line => `(genre::${line.trim()})`).join(", ") %>

`$= dv.current().total` runtime.
*Released `$= dv.current().published`*

## 💬 Comments

```dataviewjs
const pages = dv.pages('[[]] AND #comment AND !"90-Meta"');

await dv.view("90-Meta/99-Scripts/dataview/comments", {
	container: this.container,
	pages: pages
});
```

## 📌 Tagged

<%"#media/{{VALUE:Type}}".toLowerCase()%> {{VALUE:genreTags}}
