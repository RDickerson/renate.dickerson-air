const axios = require('axios')
// Javascript Promises

// Promises - 1 of 3 states
    // Pending
    // Resolved
    // Rejected

    // Pending
        // const result = axios.get(url)
        // console.log(result)

    // Base Promise Syntax
    // const wait = () => new Promise((resolve, reject) => setTimeout(reject, 2000))
    

    // A Promise 'resolves' if the data comes back in good order (status 200 - 299)
    // A Promise 'rejects'
    
    // wait()
    // .then(res => {
    //     console.log('heyo')
    // })
    // .catch(rej => {
    //     console.log(rej)
    // })

    // const url = 'https://swapi.co/api/people/1'

    // axios.get(url)
    // .then(response => {
    //     const luke = {}
    //     luke.name = response.data.name
    //     return response.data.vehicles[0]
    // })
    // .then(vehicleUrl => {
    //    return axios.get(vehicleUrl)
    // })
    // .then(snowSpeeder => {
    //     return axios.get(snowSpeeder.data.pilots[0])
    // })
    // .then(pilot => {
    //     console.log(pilot)
    // })
    // .catch(err => {
    //     console.log(err)
    // })

const url = "http://www.dnd5eapi.co/api/spells/"

const spellUrl = axios.get(url).then(res => {
    // console.log(res.data.results)
    const allSpells = res.data.results
    allSpells.map(spell => {
        // console.log(spell.url)
        return "spell.url"
    })
}).then(res => {
    console.log(res)
})

// const spellClass = axios.get(spellUrl).then(res => {
//     console.log(res)
//     const classes = {
//         bard: [],
//         cleric: [],
//         druid: [],
//         paladin: [],
//         ranger: [],
//         sorcerer: [],
//         warlock: [],
//         wizard: []
//     }

// })