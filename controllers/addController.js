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

async function add(req, res) {
    
    let information;
    if (req.apiGateway) {
        information = JSON.parse(req.apiGateway.event.body);
    } else {
        information = req.body;
    }
    console.log(information);
    if (!information) {
        return res.status(400).json({ 'error': "No query was selected" });
    }
    console.log(information);
    let countSearch = await client.search({
        "index": "sample",
        "body": {
            "query": {
                "match_all": {}
            }
        }
    });
    let count = countSearch.hits.total.value;

    const data = await client.index({
        index: 'sample',
        document: { ...information, id: ++count },
    })
    /* console.log({ ...information, id: ++count }); */
    return res.json({ status: "success", data });
}

module.exports = add;