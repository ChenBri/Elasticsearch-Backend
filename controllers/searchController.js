require('dotenv').config();

const { Client } = require('@elastic/elasticsearch')
const client = new Client({
    cloud: {
        id: process.env.CLOUD_ID
    },
    auth: {
        username: process.env.AUTH_USERNAME,
        password: process.env.AUTH_PASSWORD
    }
})

async function search(req, res) {
    let query;
    if (req.apiGateway) {
        query = JSON.parse(req.apiGateway.event.body).query;
    } else {
        query = req.body.query;
    }

    if (!query) {
        return res.status(400).json({ 'error': "No query was selected." });
    }

    const data = await client.search(query);

    if (data.aggregations) {
        return res.json({ status: "success", data: data.aggregations, query });
    }
    return res.json({ status: "success", data: data.hits, query });
}

module.exports = search;