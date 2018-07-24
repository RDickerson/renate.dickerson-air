var school = {
    name: "VSchool",
    isCool: true,
    programs: ["fullstack", "ux design"],
    booProof: function() {
        if (this.isCool === true) {
            console.log("I want to go!")
        }
    },
    currentStudents: [
        {
            name: "Rhea",
            class: "July",
            homeTown: "Colorado Springs",
            roomate: {
                name: "Renate Dickerson",
                class: "July",
                homeTown: "Springville",
                address: {
                    street: "355 E 200 S",
                    apt: "6",
                    city: "Springville",
                    state: "Utah",
                    zip: "84663"
                }
            }
        },
        {
            name: "Booby",
            class: "May",
            homeTown: "SLC",
            roomate: [
                {
                    name: "Billy",
                    class: "May",
                    homeTown: "New York",
                    address: [
                        {
                            street: "555 Robber St.",
                            apt: "231",
                            city: "New York",
                            state: "New York",
                            zip: "10001"
                        }
                    ]
                }
            ]
        },
        {
            name: "Sally",
            class: "March",
            homeTown: "Silly Town",
            roomate: [
                {
                    name: "Sue",
                    class: "March",
                    homeTown: "Non Existant",
                    address: [
                        {
                            street: "Wired Java Dr.",
                            apt: "42",
                            city: "Non Existant",
                            state: "Nowhere",
                            zip: "66666"
                        }
                    ]
                }
            ]
        }
    ]
}

school.booProof()