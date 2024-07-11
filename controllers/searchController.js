require('dotenv').config();

const { Client } = require('@elastic/elasticsearch')
const client = new Client({
    cloud: {
        id: "Deployment:bWUtd2VzdDEuZ2NwLmVsYXN0aWMtY2xvdWQuY29tJGVlZmQzMzUwZWZiNTRkMTE5MjhjNjcyNTcyZjRiYzA5JDhkZDdmMWIzMmM4ZDQ0MWRhNjY5YzRjNDk1MzA3YzA2"
    },
    auth: {
        username: "elastic",
        password: "1yd3V5G3UQoTOqfcfjGOcxYX"
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