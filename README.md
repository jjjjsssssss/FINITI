# FINITI AI Chat

A modern, terminal-style chat interface powered by OpenAI's GPT-4 model, specialized in cryptocurrency and blockchain technology.

![FINITI AI Chat Interface](screenshot.png)

## Features

- 💬 Real-time chat interface with terminal-style design
- 🤖 OpenAI GPT-4 integration for advanced AI capabilities
- 🔗 Cryptocurrency and blockchain focused responses
- 🐳 Docker containerization for easy deployment
- 🎨 Clean, modern UI with animations

## Prerequisites

- Docker and Docker Compose installed on your system
- OpenAI API key with GPT-4 access ([Get one here](https://platform.openai.com/account/api-keys))

## Quick Start

1. Clone the repository:
```bash
git clone [your-repo-url]
cd finiti-chat
```

2. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

3. Build and run with Docker Compose:
```bash
docker-compose up --build
```

4. Access the application:
Open `http://localhost:3000` in your web browser

## Development

### Project Structure
```
finiti-chat/
├── index.html      # Frontend interface
├── styles.css      # Styling
├── server.js       # Backend server
├── package.json    # Node.js dependencies
├── Dockerfile      # Container configuration
└── docker-compose.yml
```

### Technology Stack
- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js, Express
- API: OpenAI GPT-4
- Containerization: Docker

## Running Without Docker

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Access at `http://localhost:3000`

## Environment Variables

| Variable | Description |
|----------|-------------|
| OPENAI_API_KEY | Your OpenAI API key with GPT-4 access (required) |
| PORT | Server port (default: 3000) |

## Important Note

This application uses GPT-4, which requires appropriate access from OpenAI. Make sure your API key has GPT-4 access enabled. If you don't have GPT-4 access, you'll need to modify server.js to use "gpt-3.5-turbo" instead.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OpenAI for their powerful GPT-4 model
- The cryptocurrency and blockchain community
