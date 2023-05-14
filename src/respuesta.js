import cohere from "cohere-ai";


const respuesta = async (tema) => {

    cohere.init('kDRFgH0Ihd5SESEfjVD0KJabeoAWOl1OzYFpWXqE');

    const response = await cohere.generate({
        model: 'command',
        prompt: 'Write a text of maximum 280 characters, this text should generate controversy and divided opinions in the readers. The topic to be discussed is something related to the migration of Latinos to the United States. Act as an experienced twitter influencer, with millions of followers and excellent engamement, expert in creating controversy in their publications',
        max_tokens: 215,
        temperature: 0.9,
        k: 0,
        p: 0,
        stop_sequences: [],
        return_likelihoods: 'NONE',
    });
    console.log(`Tu tweet: ${response.body.generations[0].text}`);
    console.log(tema)
};

export { respuesta }