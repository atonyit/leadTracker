# Lead Tracker Extension

## Overview
The Lead Tracker is a Chrome extension designed to help users easily save and manage website URLs. Whether you're researching, following leads, or simply want to keep track of interesting websites, this tool allows you to save URLs directly from your browser to a local list, which you can view at any time.

## Features
- **Save Input:** Manually enter a website URL to save it to your lead list.
- **Save Tab:** Automatically save the URL of the currently active tab.
- **Delete All:** Clear all saved leads with one click.

## Setup
To install and run the Lead Tracker extension locally:

1. **Clone the Repository**


2. **Load the Extension in Chrome:**
   - Open Google Chrome.
   - Navigate to `chrome://extensions/`.
   - Enable Developer Mode (top right).
   - Click on "Load unpacked extension".
   - Select the directory where you cloned the Lead Tracker.

3. **Required Files:**
   Ensure the following files are in your project directory:
   - `index.html`: The main HTML document.
   - `index.js`: JavaScript for functionality.
   - `index.css`: Styling for the HTML document.
   - `manifest.json`: Contains metadata about the extension.

## Usage
- **Adding a Lead:**
  - Click the "SAVE INPUT" button after typing a URL into the input field.
  - Click the "SAVE TAB" button to save the URL of your current tab.
- **Viewing Leads:**
  - All saved leads are listed below the buttons. Click on any URL to open it in a new tab.
- **Deleting Leads:**
  - Click the "DELETE ALL" button to remove all saved leads.

## Dependencies
- Chrome Browser with support for Manifest V3.

## Support
For any issues or questions, please open an issue on the GitHub repository page or contact me directly.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
