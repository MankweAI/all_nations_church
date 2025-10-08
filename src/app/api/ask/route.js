import OpenAI from "openai";

// Initialize the OpenAI client with your API key from the environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// This function handles POST requests to /api/ask
export async function POST(req) {
  try {
    const { question } = await req.json(); // Get the user's question from the request body

    if (!question) {
      return new Response(JSON.stringify({ error: "Question is required" }), {
        status: 400,
      });
    }

    // Send the question to the OpenAI API
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are a helpful business coach assistant for a South African audience. Keep your answers concise and easy to understand.",
        },
        { role: "user", content: question },
      ],
    });

    const answer = chatCompletion.choices[0].message.content;

    // Send the answer back to the frontend
    return new Response(JSON.stringify({ answer }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to get an answer from OpenAI" }),
      { status: 500 }
    );
  }
}

