# Polyglot Dictionary

An open-source website where users can contribute words to existing languages, propose new languages, and use the platform as a dictionary to search for words across multiple languages.

## Features
- Add words with their meanings to existing languages.
- Propose new languages with descriptions.
- Search for words across all or specific languages.
- Simple, responsive UI with Tailwind CSS.
- RESTful API for extensibility.

## Tech Stack
- **Frontend**: HTML, JavaScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **License**: MIT

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/polyglot-dictionary.git
   cd polyglot-dictionary
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   - Install MongoDB locally or use a cloud provider (e.g., MongoDB Atlas).
   - Ensure MongoDB is running on `mongodb://localhost:27017`.

4. **Run the application**:
   ```bash
   npm start
   ```
   - For development with auto-restart:
     ```bash
     npm run dev
     ```

5. **Access the website**:
   - Open `http://localhost:3000` in your browser.

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## Future Enhancements
- User authentication for contribution tracking.
- Voting system for proposed languages.
- Advanced search with filters (e.g., by date, popularity).
- Support for audio pronunciation uploads.