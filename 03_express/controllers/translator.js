const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const fetch = require('node-fetch');

let subscriptionKey = "b45f1080455c4245ac48bb9e76cd3d72";
let endpoint = "https://api.cognitive.microsofttranslator.com";

// Add your location, also known as region. The default is global.
// This is required if using a Cognitive Services resource.
let location = "westeurope";


exports.TranslateToRus = async function (req, res){
    let data = [{
        'text': 'Hello World!'
    }]

    fetch(endpoint + '/translate?api-version=3.0&from=en&to=ru&to=uk', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    })
        .then(response => { return response.json()})
        .then(data => {
            console.log(data)
            return res.status(200).json(data);
        })
        .catch(err=> {
            console.log(err)
            return res.status(400).json(err)
        })

}



exports.TranslateToRusAxios = function (req, res){
    axios({
        baseURL: endpoint,
        url: '/translate',
        method: 'post',
        headers: {
            'Ocp-Apim-Subscription-Key': subscriptionKey,
            'Ocp-Apim-Subscription-Region': location,
            'Content-type': 'application/json',
            'X-ClientTraceId': uuidv4().toString()
        },
        params: {
            'api-version': '3.0',
            'from': 'en', //  Тогда будет говорить, что за язык
            'to': ['ru', 'uk'],
        },
        data: [{
            'text': 'Hello World!'
        }],
        responseType: 'json'
    }).then(function(response){
        console.log(JSON.stringify(response.data, null, 4));
        return res.status(200).json(response.data);
    }).catch(err => {
        console.log(err.message)
        return res.status(400).json(err)
    })
}






