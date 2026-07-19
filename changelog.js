const notesRoot = document.querySelector("#patch-notes");
const versionNavigation = document.querySelector("#version-navigation");

function slugify(value) { return `version-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`; }
function appendInlineText(parent, value) {
  value.split(/(`[^`]+`)/g).filter(Boolean).forEach(part => {
    if (part.startsWith("`") && part.endsWith("`")) { const code = document.createElement("code"); code.textContent = part.slice(1, -1); parent.append(code); }
    else parent.append(document.createTextNode(part));
  });
}
function renderMarkdown(markdown) {
  const lines = markdown.replace(/\r/g, "").split("\n");
  const fragment = document.createDocumentFragment(); const versions = [];
  let article = null, section = null, list = null, isFirst = true;
  for (const rawLine of lines) {
    const line = rawLine.trim(); if (!line || line === "# Patch Notes") { list = null; continue; }
    if (line.startsWith("## ")) {
      const title = line.slice(3); const version = title.match(/^(\d+\.\d+\.\d+)/)?.[1] ?? title;
      article = document.createElement("article"); article.className = "release-note"; article.id = slugify(version);
      const heading = document.createElement("div"); heading.className = "release-heading";
      const badge = document.createElement("span"); badge.className = "version-badge"; badge.textContent = `v${version}`;
      const h2 = document.createElement("h2"); h2.textContent = title.replace(/^\d+\.\d+\.\d+\s*[—-]?\s*/, "") || `Version ${version}`;
      heading.append(badge, h2);
      if (isFirst) { const latest = document.createElement("span"); latest.className = "latest-badge"; latest.textContent = "Latest"; heading.append(latest); }
      article.append(heading); fragment.append(article); versions.push({ version, title: h2.textContent, id: article.id, latest: isFirst });
      isFirst = false; section = article; list = null; continue;
    }
    if (!article) continue;
    if (line.startsWith("### ")) {
      const block = document.createElement("section"); block.className = `note-group note-${line.slice(4).toLowerCase().replace(/\s+/g, "-")}`;
      const h3 = document.createElement("h3"); h3.textContent = line.slice(4); block.append(h3); article.append(block); section = block; list = null; continue;
    }
    if (line.startsWith("- ")) {
      if (!list) { list = document.createElement("ul"); section.append(list); }
      const item = document.createElement("li"); appendInlineText(item, line.slice(2)); list.append(item); continue;
    }
    const paragraph = document.createElement("p"); if (section === article) paragraph.className = "release-date"; appendInlineText(paragraph, line); section.append(paragraph); list = null;
  }
  notesRoot.replaceChildren(fragment);
  versionNavigation.replaceChildren(...versions.map(item => {
    const link = document.createElement("a"); link.href = `#${item.id}`; if (item.latest) link.classList.add("active");
    const version = document.createElement("b"); version.textContent = `v${item.version}`; const title = document.createElement("span"); title.textContent = item.title; link.append(version, title); return link;
  }));
}
async function loadPatchNotes() {
  try { const response = await fetch("CHANGELOG.md", { cache: "no-cache" }); if (!response.ok) throw new Error(`Patch notes returned ${response.status}`); renderMarkdown(await response.text()); }
  catch (error) { notesRoot.innerHTML = '<div class="notes-error"><h2>Patch notes are temporarily unavailable.</h2><a href="CHANGELOG.md">Open the plain changelog →</a></div>'; versionNavigation.textContent = "Unavailable"; console.info("Could not load patch notes.", error); }
}
loadPatchNotes();
