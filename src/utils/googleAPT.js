import OpenAI from "openai";
import { API_KEY } from "./const";

const client = new OpenAI({
    apiKey: API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
    dangerouslyAllowBrowser: true
});

const handleGptSearch = async (query) => {
    const result = await client.chat.completions.create({
        model: "google/gemma-3-4b-it:free",
        messages: [
            {
                role: "user",
                content: `You are a movie recommendation AI for Netflix. Based on the user's query, suggest exactly 3 movie names. Return ONLY a JSON array of strings, no explanation, no markdown, nothing else. Example output: ["Inception", "Interstellar", "The Dark Knight"]\n\nUser query: ${query}`
            }
        ],
    });

    const text = result.choices[0].message.content;
    try {
        const movies = JSON.parse(text);
        console.log(movies);
        return movies;
    } catch (e) {
        // extract array if model added extra text
        const match = text.match(/\[.*\]/s);
        return match ? JSON.parse(match[0]) : [];
    }

};

export default handleGptSearch;