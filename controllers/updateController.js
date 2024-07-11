
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