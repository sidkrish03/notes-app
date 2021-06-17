const request = require('request')

//
// Goal 4: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// Callback function - Single reusable function
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2lka3Jpc2gwMyIsImEiOiJja3BzczZyNXIwdTBmMnZxY2NyeTJzdzZhIn0.7HIt0l3GfxJvKYh135RbxQ'

    request({ url, json: true }, (error, { body } = {}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location! Please try again with a different search!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode