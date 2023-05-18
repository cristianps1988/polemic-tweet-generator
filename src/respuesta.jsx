import axios from "axios";

const generarRespuesta = (tema) => {
    const options = {
        method: 'POST',
        url: 'https://api.cohere.ai/v1/generate',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer kDRFgH0Ihd5SESEfjVD0KJabeoAWOl1OzYFpWXqE'
        },
        data: {
            model: 'command',
            max_tokens: 215,
            temperature: 0.8,
            return_likelihoods: 'NONE',
            truncate: 'END',
            prompt: `Write a text of maximum 280 characters, this text should generate controversy and divided opinions in the readers. The topic to be discussed is something related to ${tema}. Act as an experienced twitter influencer, with millions of followers and excellent engamement, expert in creating controversy in their publications`
        }
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data.generations[0].text);
        })
        .catch(function (error) {
            console.error(error);
        });

}

export default generarRespuesta