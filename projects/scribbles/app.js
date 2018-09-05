var axios = require("axios")


axios.get("http://dnd5eapi.co/api/spells").then(res => console.log(res))