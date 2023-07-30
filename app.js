
const request= require ("request")
const forcast = require('./data1.js/forecast')
const geocode = require ('./data1.js/geocode')
const country = process.argv[2]

geocode(country,(error , data)=>{   
    console.log("Error", error)
    console.log("Data", data)
    if (data){
        forcast (data.latitude , data.longtitude , (error , data)=>{
            console.log("Error: ", error)
            console.log("Data: ", data)
        })
    } else {
        console.log("Undeifine Country")
    }
})
 