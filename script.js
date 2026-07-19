const releaseApi = "https://api.github.com/repos/Ankhito/3DX-Hosting-Companion-Releases/releases/latest";

function formatBytes(bytes) {
  if (!Number.isFinite(bytes)) return "";
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function loadLatestRelease() {
  try {
    const response = await fetch(releaseApi, { headers: { Accept: "application/vnd.github+json" } });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const release = await response.json();
    const installer = release.assets.find(asset => asset.name.toLowerCase().endsWith(".msi"));
    const checksum = release.assets.find(asset => asset.name.toLowerCase().endsWith(".sha256"));
    if (!installer) return;

    document.querySelectorAll("#download-button, #download-button-bottom").forEach(link => {
      link.href = installer.browser_download_url;
    });
    const version = document.querySelector("#release-version");
    version.textContent = `${release.tag_name} · ${formatBytes(installer.size)}`;
    if (checksum) document.querySelector("#checksum-link").href = checksum.browser_download_url;
  } catch (error) {
    console.info("Latest release metadata unavailable; using the GitHub Releases fallback.", error);
  }
}

loadLatestRelease();
