import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialize OpenAI
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// Chat endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const { message } = req.body;
        
        const completion = await openai.chat.completions.create({
            model: "gpt-4",  // Updated to GPT-4
            messages: [
                {
                    role: "system",
                    content: "You are FINITI AI, a specialized AI assistant focused on cryptocurrency and blockchain technology. Provide concise, accurate responses about crypto markets, token analysis, and blockchain trends."
                },
                {
                    role: "user",
                    content: message
                }
            ],
            max_tokens: 150
        });

        res.json({ 
            response: completion.choices[0].message.content 
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ 
            error: 'An error occurred while processing your request.' 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
