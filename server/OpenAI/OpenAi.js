import OpenAI from "openai";

const openai = new OpenAI();

// Method to generate a text response
const generateTextResponse = async (req, res) => {
    const prompt = req.body.prompt;
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: prompt },
            ],
        });

        console.log("Completion Response:", completion);

        if (completion && completion.choices && completion.choices[0] && completion.choices[0].message) {
            const response = completion.choices[0].message.content;
            console.log("Text Response:", response);

            return res.json({ success: true, data: response });
        } else {
            throw new Error("No valid message found in the response");
        }
    } catch (error) {
        console.error("Error generating text response:", error.message || error);

        return res.status(500).json({
            success: false,
            error: error.message || "Something went wrong",
        });
    }
};

// Method to generate an image response
const generateImageResponse = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ success: false, error: "Prompt is required for image generation" });
        }

        const imageResponse = await openai.images.generate({
            prompt,
            n: 1, // Number of images to generate
            size: "1024x1024", // Image dimensions
        });

        console.log("Image Response:", imageResponse);

        if (imageResponse && imageResponse.data && imageResponse.data[0] && imageResponse.data[0].url) {
            const imageUrl = imageResponse.data[0].url;
            console.log("Generated Image URL:", imageUrl);

            return res.json({ success: true, data: imageUrl });
        } else {
            throw new Error("No image URL found in the response");
        }
    } catch (error) {
        console.error("Error generating image response:", error.message || error);

        return res.status(500).json({
            success: false,
            error: error.message || "Something went wrong",
        });
    }
};

const openai_operation = {
    text: generateTextResponse,
    image: generateImageResponse,
};

export default openai_operation;
