import OpenAI from "openai";

const openai = new OpenAI();

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "Write a haiku about recursion in programming.",
        },
    ],
});


const image = await openai.images.generate({ prompt: "A cute baby sea otter" });


const openi_operation = { image : image, completion: completion }; 

export default openai_operation;