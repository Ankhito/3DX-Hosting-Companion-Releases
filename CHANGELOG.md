# Patch Notes

## 0.7.0 — Experimental Co-Hosting
Released July 20, 2026

> **Testing notice:** Co-Hosting is wholly untested in a real two-user hosting session at release. It is an experimental first pass and needs detailed feedback from Hosts and Co-Hosts before it should be considered reliable.

### New

- Added private Co-Hosting rooms between accepted friends.
- The inviter is the **Host** and the friend who accepts is the **Co-Host**.
- Synchronizes the Host's Game Host phrase folders, phrases, and current turn order into a temporary live session.
- Both users can send synchronized phrases through their own local 3DX client.
- Both users can add, remove, and mark players in the shared turn order.
- Co-Host turn-order changes update the Host's normal Turn Order Manager.

### Privacy and boundaries

- Co-Hosting works only through direct invitations to accepted friends. There are no public rooms, random users, room keys, or join codes.
- The Co-Host receives an ephemeral session copy of the Host's phrases. It is not saved into the Co-Host's local phrase library.
- Co-Hosts cannot overwrite the Host's saved phrase library.
- Rooms expire after 12 hours and their temporary server session state is deleted.

### Fixed

- Added single-instance protection to prevent duplicate app processes from producing false global-hotkey conflict warnings.

## 0.6.1 — Friends
Released July 20, 2026

### New

- Added a dedicated Friends window for signed-in users.
- Every account receives a unique Friend Code that can be copied and shared directly.
- Send, accept, decline, and cancel friend requests.
- View and remove accepted friends from one self-contained screen.

### Privacy

- OAuth accounts are not searchable through the Companion.
- Adding a friend does not automatically share phrases, Room Files, or cloud backups.
- Friends provide the trusted relationship needed for future co-hosting and explicit content sharing.

## 0.6.0 — Optional Cloud Backups
Released July 20, 2026

### New

- Added manual cloud backup and restore for phrase libraries, including folders, commands, quickbinds, and linked outcomes.
- Added optional cloud backup for explicitly selected Room Files, with a cloud-copy list, restore destination picker, and individual deletion.
- Re-uploading a Room File with the same filename updates its existing cloud copy.

### Safety and privacy

- Cloud features require an optional Google or Discord account. Every local hosting feature remains available while signed out or offline.
- Signing in never uploads phrases or Room Files. Uploads happen only when the user chooses a cloud backup action.
- Cloud transfers use encrypted HTTPS connections, and private backup objects are encrypted at rest by Cloudflare R2.
- Room Files remain byte-for-byte unchanged and are independently checksum-verified during upload, download, and final restore.
- Cloud storage uses managed encryption rather than end-to-end encryption with a user-held key.

## 0.5.6 — Countdown and Status Controls
Released July 19, 2026

### Fixed

- Countdown numbers now clear any stale chat-input text before pasting, preventing messages from joining into strings such as `54321`.
- Added a short processing window after each Enter key so 3DX can finish sending before the next countdown step.

### Improved

- Moved custom-status creation to a clearly visible **Manage Statuses** button beside the player count.
- Added a dedicated panel for creating, selecting, and removing custom player-status labels.

## 0.5.5 — Custom Player Statuses
Released July 19, 2026

### New

- Added custom player-status labels to the Turn Order Manager.
- Create short markers such as **SH** for Shield and use them from player dropdowns in both turn-order windows.
- Custom statuses are saved locally and included in local backups.

### Improved

- Removing a custom status safely returns players using it to Playing.
- Custom markers appear naturally in sent turn orders, for example `Ankh(SH)`.
- The Turn Order Manager controls panel now scrolls cleanly at smaller window sizes.

## 0.5.4 — Host Message Editors
Released July 19, 2026

### New

- Added Pause and Resume message editing directly to the main Turn Order Manager.
- Added the categorized 3DX emoji picker to both built-in message editors.
- Pause and Resume editors now display colored emojis instead of raw sprite tags.

### Improved

- Right-click editing from the Turn / Skip Overlay now opens without selecting all existing text.
- Improved editor text contrast and readability.
- Changes made in the main manager are used immediately by an already-open overlay.

## 0.5.3 — Native 3DX Emoji
Released July 19, 2026

### New

- Added a searchable emoji picker directly to the Phrase Editor.
- Added the complete 639-emoji catalog used by 3DX, including its Std, Extra, Fun, Symbols, and Stickman categories.
- Emoji now appear as their proper colored images in the picker and chat preview while remaining fully compatible with 3DX chat.

### Improved

- Related emoji are grouped into easier-to-browse sections such as faces, gestures, words, alphabet, numbers, and figures.
- Alphabet and number tiles follow their natural order.
- Audited every emoji category against 3DX so word tiles remain under Symbols and all pink figure emoji remain under Stickman.
- Selecting an emoji inserts it at the current message cursor instead of only appending it to the end.

## 0.5.2 — Overlay Polish
Released July 19, 2026

### Improved

- Refreshed the Phrase, Turn/Skip, and Turn Order overlays with cleaner compact controls, centered labels, modern icons, and clearer hover feedback.
- Phrase buttons now share the width needed by the longest visible phrase, keeping regular and parent phrases aligned without clipping typical names.
- Parent-phrase result arrows now fit naturally within the shared button layout instead of shifting later buttons out of alignment.
- Moved the Phrase Overlay title above its folder and Quickbind controls so folder switching remains accessible at very small overlay sizes.

### New

- Added **Show overlay names** in Settings. Turn it off to hide identifying overlay titles while keeping folder controls, status information, Quickbind, player counts, and close buttons available.

## 0.5.1 — Hosting Workspace Refresh
Released July 19, 2026

### Improved

- Moved Game Host, Venue Host, and the new Greeter mode into a dedicated Hosting Mode switcher in the upper-right corner.
- Moved Settings out of the workspace navigation and replaced it with a compact cog control.
- Moved folder import and export beside the Phrase Library where those actions apply.
- Simplified the centered navigation so it contains only active hosting workspaces.
- Refreshed the app with the public website’s layered charcoal surfaces, rounded cards, softer controls, and pink/violet accents.

### Coming later

- Venue Host and Greeter remain visible as planned modes but are not active yet.

## 0.5.0 — Optional Accounts
Released July 19, 2026

### Highlights

- Added optional sign-in with Google or Discord.
- The app remains fully usable without an account, including while offline.
- Prepared the secure cloud foundation for future premium backup and sync features.

### New

- A new **Optional Companion account** section in Settings.
- Browser-based Google and Discord sign-in, so the app never asks for either provider password.
- Sign Out and Delete Cloud Account controls.
- Public Privacy Policy and Terms of Use covering optional accounts and future cloud storage.

### Privacy and security

- Account sessions are protected for the current Windows user.
- Local phrases, settings, turn orders, backups, and Room File sources are not uploaded by signing in.
- Deleting a cloud account removes its online identity, sessions, and cloud backups without deleting local data.

### Known limitations

- Accounts are optional groundwork in this release; premium cloud backup and sync are not yet available in the Windows interface.
- Venue Host mode is not available yet.

## 0.4.2 — Startup Crash Hotfix
Released July 19, 2026

### Fixed

- Fixed a startup crash caused by the new update notification’s shadow effect.
- Restored normal launching for the installed app.

### Important

- Version 0.4.1 cannot stay open long enough to install this update from inside the app. If you installed 0.4.1, download and run the 0.4.2 installer manually from the public release page.

## 0.4.1 — Update Notice and Relaunch Fix
Released July 19, 2026

### Improved

- Replaced the subtle update message with a prominent action bar above the footer.
- The update bar shows the available version, provides a direct action, and can be dismissed manually or automatically after 15 seconds.
- Opening Settings from the update bar now presents the detected update immediately.

### Fixed

- Improved automatic relaunch reliability after an update finishes installing.
- Added a local update-restart log to help diagnose installation or relaunch problems.

## 0.4.0 — Smoother In-App Updates
Released July 19, 2026

### Highlights

- The main window now briefly announces when a new version is ready.
- Updates launched from Settings automatically reopen the app after installation.

### New

- A 15-second update banner includes a direct shortcut to the application-update controls in Settings.

### Improved

- The update flow now waits for Windows Installer to finish before reopening the newly installed version.
- Update confirmation text clearly explains that the app will close and restart.

## 0.3.1 — Windows Shortcut Icon Fix
Released July 19, 2026

### Fixed

- Desktop and Start Menu shortcuts now display the 3DX Hosting Companion icon after updating.

## 0.3.0 — Faster Phrase Folder Switching
Released July 19, 2026

### Highlights

- Switch phrase folders directly from the Phrase Overlay without returning to the main client.
- Added the new 3DX Hosting Companion icon throughout the app and Windows installer.

### New

- A compact folder menu now sits immediately beside the selected folder name in the Phrase Overlay.

### Improved

- Folder changes made in the overlay immediately update its phrase buttons and stay synchronized with the client.
- The most recently selected folder is restored the next time the app starts.
- Application branding is now easier to recognize in Windows, the taskbar, and Installed Apps.

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


