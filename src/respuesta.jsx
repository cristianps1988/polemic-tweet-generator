import axios from "axios";
import { useState } from "react";
import React from 'react'

const respuesta = () => {

    const [resultado, setResultado] = useState('')

    const generarRespuesta = (tema) => {
        const options = {
            method: 'POST',
            url: 'https://api.cohere.ai/v1/generate',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: `Bearer ${import.meta.env.VITE_COHERE_KEY}`
            },
            data: {
                model: 'command',
                max_tokens: 100,
                temperature: 0.8,
                return_likelihoods: 'NONE',
                truncate: 'END',
                prompt: `Act as an experienced twitter influencer, with millions of followers and excellent engamement, expert in creating controversy in their publications. Write a text with a maximum 270 characters, this text should generate controversy and divided opinions in the readers. The topic to be discussed is something related to ${tema}.`
            }
        };

        axios
            .request(options)
            .then(function (response) {
                setResultado(response.data.generations[0].text);
            })
            .catch(function (error) {
                console.error(error);
            });

    }

    // const imprimirRespuesta = (texto) => {
    //     setResultado(texto)
    //     console.log(resultado)
    // }

    return {
        generarRespuesta,
        // imprimirRespuesta,
        resultado
    }

}

export default respuesta




