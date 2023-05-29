import { useState } from "react";
import { OpenAI } from "langchain/llms/openai";
import {
    PromptTemplate
} from "langchain/prompts"


const apiCall = () => {

    const [resultado, setResultado] = useState('')
    const model = new OpenAI({ openAIApiKey: import.meta.env.VITE_OPENAI_KEY, temperature: 0.9, cache: true });

    const generarRespuesta = async (tema) => {
        const template = "Detects the language of the written text which is delimited with triple backticks, to respond to the following instruction: Act as a twitter expert in creating controversies, discussions and polemics on social networks, to write a polemic tweet with your opinion about the theme which is delimited with triple backticks. This tweet should generate reactions from readers in favor and against, add at the end 1 hastag. Your answer should not exceed 180 characters. Theme: ```{input} ```"

        const promptA = new PromptTemplate({ template, inputVariables: ["input"] });
        const responseA = await promptA.format({ input: tema });

        try {
            const res = await model.call(responseA);
            setResultado(res)
        } catch (error) {
            setResultado(error.response.request.status)
            console.log(error.message)
        }
    }

    return {
        generarRespuesta,
        resultado
    }
}

export default apiCall