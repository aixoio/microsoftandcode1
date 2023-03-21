import $ from "jquery"

import "./index.scss"

fetch(" https://dog.ceo/api/breeds/image/random").then(d => d.json()).then(data => {
    
    $("#dogimg").attr("src", data.message)

})
