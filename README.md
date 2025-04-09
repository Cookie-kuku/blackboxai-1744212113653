
Built by https://www.blackbox.ai

---

```markdown
# Phone Number Location Tracker

## Project Overview
The Phone Number Location Tracker is a web application that allows users to enter a phone number and track its geographical location. The application features a simple user interface where users can input a phone number and receive location information such as the country, state, city, telecom circle, carrier, and geographical coordinates.

## Installation

### Prerequisites
- Node.js (version 10 or above)
- npm (comes with Node.js)

### Steps to Install
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/phone-location-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd phone-location-tracker
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
   or for development purposes (with automatic restarts):
   ```bash
   npm run dev
   ```

## Usage
1. Open your web browser and go to `http://localhost:8000`.
2. Enter a valid phone number in the input field (e.g., `+91 98765 43210`).
3. Click on the "Track Location" button.
4. After a brief loading period, the location information will be displayed beneath the input field.

## Features
- User-friendly interface built with Tailwind CSS.
- Input validation to ensure a phone number is entered before tracking.
- Fetches location details such as country, state, city, telecom circle, carrier, and geographical coordinates.
- Handles errors effectively and displays appropriate messages to the user.

## Dependencies
- **Express** - Web framework for Node.js  
- **CORS** - Middleware for enabling Cross-Origin Resource Sharing  
- **Nodemon** (development only) - Automatically restarts the server upon code changes

To install the dependencies, run the command:
```bash
npm install
```

## Project Structure
```plaintext
phone-location-tracker/
├── index.html        # Main HTML file for the front end
├── app.js            # JavaScript file containing the tracking logic
├── server.js         # Node.js / Express server file
├── package.json      # NPM package file with metadata and dependencies
└── package-lock.json # NPM package lock file to ensure reproducible builds
```

### Frontend
- **index.html**: Contains the structure of the web application and links to external stylesheets and scripts.
- **app.js**: Handles input validation, makes API calls to the server, and updates the DOM with location information.

### Backend
- **server.js**: Sets up an Express server, handles incoming requests to track phone numbers, and returns mock location data.

## Note
In a production environment, ensure to implement:
- A real location tracking API integration.
- Proper authentication and authorization mechanisms.
- Compliance with applicable privacy laws and regulations.

For any contributions or suggestions, feel free to create an issue or submit a pull request.

Happy tracking!
```