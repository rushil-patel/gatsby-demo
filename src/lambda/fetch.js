import axios from "axios"
import config from "../../config"

exports.handler = function(event, context, callback) {
  const apiKey = process.env.API_KEY || config.apiKey
  const apiSecret =  process.env.API_SECRET || config.apiSecret
  const apiRoot = `https://${apiKey}:${apiSecret}@api.cloudinary.com/v1_1`

  const endpoint = `${apiRoot}/rushildev/resources/image`;

  axios.get(endpoint).then(res => {
    console.log(res);
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        images: res.data.resources
      }),
    })
  }).catch(error => {
    console.log(error)
  })
}