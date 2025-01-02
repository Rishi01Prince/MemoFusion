

import { Router } from "express";
import openai_operation from "./OpenAi.js";
const {image , completion} = openai_operation;
const openai= Router();


openai
    .route('/')
    .get(image)
    .post(completion);



export default openai;