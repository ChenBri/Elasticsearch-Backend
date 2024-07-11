
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

async function update(req, res) {

    let query;
    if (req.apiGateway) {
        query = JSON.parse(req.apiGateway.event.body).query;
    } else {
        query = req.body.query;
    }

    console.log(query);
    console.log("----------------------------------------------------");
    if (!query) {
        return res.status(400).json({ 'error': "No query was selected." });
    }
    console.log(query);
    const data = await client.updateByQuery(query);

    return res.json({ status: "success", data });
}

module.exports = update;