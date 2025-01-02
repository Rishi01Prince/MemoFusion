

import { Router } from "express";
import openai_operation from "./OpenAi.js";
const { text , image} = openai_operation;
const openai= Router();


openai
    .route('/text')
    .get(text)


openai
    .route('/image')
    .get(image)


export default openai;