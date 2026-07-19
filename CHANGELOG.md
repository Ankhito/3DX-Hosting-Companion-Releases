# Patch Notes

## 0.2.1 — Update Compatibility Fix
Released July 19, 2026

### Fixed

- Restored native update discovery for the installer and checksum filenames published by GitHub.

### Note

- Users on version 0.1.0 or 0.2.0 should install 0.2.1 manually once. Native update checks will work for later releases.

## 0.2.0 — Phrase Workspace Update
Released July 19, 2026

### Highlights

- Redesigned the main phrase workspace to make folders, phrases, editing, and previews easier to scan.
- Added a live 3DX-style Local Chat preview for normal and `/me` phrases.
- Improved PhraseExpress importing with destination-folder selection and folder creation.

### New

- Compact folder and phrase navigator on the left side of the client.
- Live message preview with `/me` formatting, character count, Copy, and Send actions.
- Official Ko-fi support button in the bottom-right corner.

### Improved

- Phrase content, behavior, linking, and preview controls now use responsive panels that adapt to both window width and height.
- PhraseExpress import now sits beside the Phrase editor and remembers the chosen destination while importing multiple phrases.
- Maximized windows now stay above the Windows taskbar, including on secondary monitors.
- Ko-fi support is less intrusive and uses official branding.

### Fixed

- Creating or selecting PhraseExpress destination folders is now explicit and reliable.
- Removed the raw OCR diagnostic-text panel from the main phrase workspace while retaining silent chat detection and troubleshooting logs.

### Known limitations

- Venue Host mode is not available yet.
- Chat sending requires 3DX to be running with its chat panel visible.

## 0.1.0 — Initial Testing Release
Released July 19, 2026

### Highlights

- First public testing release of 3DX Hosting Companion.
- Manage saved phrases in folders and send them from a compact Phrase Overlay.
- Build and manage player and turn orders from the client or Turn / Skip Overlay.
- Use configurable Pause, Resume, and skip-countdown messages while hosting.

### New

- Phrase commands, linked outcome phrases, search, quickbinds, and folder import/export.
- Responsive overlays with remembered size, position, and independent opacity.
- Local backup and restore for phrases, folders, settings, and Room File selections.
- Automatic chat-location detection with optional scheduled rescans.
- Built-in update checks with verified Windows installer downloads.

### Known limitations

- Venue Host mode is not available yet.
- PhraseExpress import remains experimental.
- Chat sending relies on external mouse and keyboard simulation; 3DX must be running and visible.


