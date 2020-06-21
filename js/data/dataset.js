export default [
    {
        level: 1,
        task: [
            {id:1, text:'Select the ghost', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "ghost",
                disappear: true,
                tooltip: '< ghost class = "ghost fairy enemy" id = "scary-ghost" > Hello, I am a Ghost! </ ghost >'
            },
            {
                id: 3,
                class: "monster1",
                disappear: false,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "Monster Village has been haunted by a ghost. Help the Monsters to track down the ghost and chase it away from the village.",
        task_description: [
            {id:1, text:'Catch the ghost using the method ', bold:false},
            {id:2, text:'getElementById( )', bold:true},
            {id:3, text:'with appropriate id attribute.', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With getElementById( ) you can catch the element which id property matches the string you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'There is ', bold:false},
                {id:2, text:'no need for a hash (#)', bold:true},
                {id:3, text:' to indicate element id,', bold:false}
            ]},
            {id:3, bullet: [
                {id:1, text:'NOTE! The method will only ever return one element because ID’s are unique. It means there can only be one with the same name on the page at a time.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'document.getElementById("element_id")', bold:true},
            {id:2, text:' will access the element with an id = "element_id"', bold:false}
        ],
        expected_input: [
            'getElementById("scary-ghost")',
            "getElementById('scary-ghost')",
            "getElementById(`scary-ghost`)",
            'getElementById("scary-ghost");',
            "getElementById('scary-ghost');",
            "getElementById(`scary-ghost`);",
        ]
    },
    {
        level: 2,
        task: [
            {id:1, text:'Select the ghost', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster5",
                disappear: false,
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster4",
                disappear: false,
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "ghost",
                disappear: true,
                tooltip: '< ghost class = "scary little-ghost" id = "look-at-me" > I am a Ghost! </ ghost >'
            },
            {
                id: 4,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "Look! There is another one! A ghost is still haunting the Monster Village. Try again to catch it.",
        task_description: [
            {id:1, text:'Catch the ghost using the method ', bold:false},
            {id:2, text:'getElementById( )', bold:true},
            {id:3, text:'with appropriate id attribute.', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With ', bold:false},
                {id:2, text:'getElementById( )', bold:false},
                {id:3, text:' you can catch the element which id property matches the string you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'There is ', bold:false},
                {id:2, text:'no need for a hash (#)', bold:true},
                {id:3, text:' to indicate element id,', bold:false}
            ]},
            {id:3, bullet: [
                {id:1, text:'NOTE! The method will only ever return one element because ID’s are unique. It means there can only be one with the same name on the page at a time.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'document.getElementById("element_id")', bold:true},
            {id:2, text:' will access the element with an id = "element_id"', bold:false}
        ],
        expected_input: [
            'getElementById("look-at-me")',
            "getElementById('look-at-me')",
            "getElementById(`look-at-me`)",
            'getElementById("look-at-me");',
            "getElementById('look-at-me');",
            "getElementById(`look-at-me`);",
        ]
    },
    {
        level: 3,
        task: [
            {id:1, text:'Select the ghost', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster3",
                disappear: false,
                tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "ghost",
                disappear: true,
                tooltip: '< scaryghost class = "fairy" id = "watch-out-the-ghost" > I am a Ghost! </ scaryghost >'
            },
            {
                id: 5,
                class: "monster1",
                disappear: false,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster2",
                disappear: false,
                tooltip: '< monster class = "purple happy" id = "Devil" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "monster4",
                disappear: false,
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "monster5",
                disappear: false,
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 9,
                class: "monster6",
                disappear: false,
                tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "Oh no! The ghost seems to settle down in the Monster Village. Let's try one more time to chase it away.",
        task_description: [
            {id:1, text:"Catch the ghost using the method ", bold:false},
            {id:2, text:'getElementById( )', bold:true},
            {id:3, text:'with appropriate id attribute.', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With ', bold:false},
                {id:2, text:'getElementById( )', bold:false},
                {id:3, text:' you can catch the element which id property matches the string you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'There is ', bold:false},
                {id:2, text:'no need for a hash (#)', bold:true},
                {id:3, text:' to indicate element id,', bold:false}
            ]},
            {id:3, bullet: [
                {id:1, text:'NOTE! The method will only ever return one element because ID’s are unique. It means there can only be one with the same name on the page at a time.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'getElementById("watch-out-the-ghost")',
            "getElementById('watch-out-the-ghost')",
            "getElementById(`watch-out-the-ghost`)",
            'getElementById("watch-out-the-ghost");',
            "getElementById('watch-out-the-ghost');",
            "getElementById(`watch-out-the-ghost`);",
        ]
    },
    {
        level: 4,
        task: [
            {id:1, text:'Select all the ghosts in one shot', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "ghost",
                disappear: true,
                tooltip: '< ghost class = "ghost fairy enemy" id = "Christopher" > Hello, I am a Ghost! </ ghost >'
            },
            {
                id: 2,
                class: "monster4",
                disappear: false,
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >',
                author: "Smashicons"
            },
            {
                id: 3,
                class: "ghost",
                disappear: true,
                tooltip: '< ghost class = "ghost fairy enemy" id = "Juliette" > Hello, I am a Ghost! </ ghost >'
            }
        ],
        story: "The ghost family came to the rescue! The Monster looks terrified of ghosts around him.",
        task_description: [
            {id:1, text:"Catch all the ghosts in one shot using the method ", bold:false},
            {id:2, text:'getElementsByTagName( )', bold:true},
            {id:3, text:' with appropriate tag name.', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'The method ', bold:false},
                {id:2, text:'getElementsByTagName( )', bold:false},
                {id:3, text:'will search for tags that match the passed-in string,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'Notice ', bold:false},
                {id:2, text:'the “S”', bold:true},
                {id:3, text:' in elements — this selector returns multiples in an array-like structure', bold:false} 
            ]},
            {id:3, bullet: [
                {id:1, text:'REMEMBER! It means that the native array methods will not work unless you ', bold:false},
                {id:2, text:'convert them into an array', bold:false},
            ]}
        ],
        example: [
            {id:1, text:'document.getElementsByTagName("element")', bold:true},
            {id:2, text:' will access all the elements with a tag named "element".', bold:false}
        ],
        expected_input: [
            'getElementsByTagName("ghost")',
            "getElementsByTagName('ghost')",
            "getElementsByTagName(`ghost`)",
            'getElementsByTagName("ghost");',
            "getElementsByTagName('ghost');",
            "getElementsByTagName(`ghost`);",
        ]
    },
    {
        level: 5,
        task: [
            {id:1, text:'Select all the ghosts in one shot', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "ghost",
                disappear: true,
                tooltip: '< ghostfamily class = "fairy scary" id = "Marry" > Hello, I am a Ghost! </ ghostfamily >'
            },
            {
                id: 2,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster1",
                disappear: false,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "ghost",
                disappear: true,
                tooltip: '< ghostfamily class = "little-ghost" id = "Andrea" > Hello, I am a Ghost! </ ghostfamily >'
            },
            {
                id: 6,
                class: "ghost",
                disappear: true,
                tooltip: '< ghostfamily class = "ghost enemy" id = "Anastasia" > Hello, I am a Ghost! </ ghostfamily >'
            }
        ],
        story: "There is more and more of ghosts in the Monster Village. The Monsters need your JavaScript superpower again!",
        task_description: [
            {id:1, text:"Catch all the ghosts using the method ", bold:false},
            {id:2, text:'getElementsByTagName( )', bold:true},
            {id:3, text:'with appropriate tag name.', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'The method ', bold:false},
                {id:2, text:'getElementsByTagName( )', bold:false},
                {id:3, text:' will search for tags that match the passed-in string,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'Notice ', bold:false},
                {id:2, text:'the “S”', bold:true},
                {id:3, text:' in elements — this selector returns multiples in an array-like structure', bold:false} 
            ]},
            {id:3, bullet: [
                {id:1, text:'REMEMBER! It means that the native array methods will not work unless you ', bold:false},
                {id:2, text:'convert them into an array', bold:false},
            ]}
        ],
        example: [
            {id:1, text:'document.getElementsByTagName("element")', bold:true},
            {id:2, text:' will access all the elements with a tag named "element".', bold:false}
        ],
        expected_input: [
            'getElementsByTagName("ghostfamily")',
            "getElementsByTagName('ghostfamily')",
            "getElementsByTagName(`ghostfamily`)",
            'getElementsByTagName("ghostfamily");',
            "getElementsByTagName('ghostfamily');",
            "getElementsByTagName(`ghostfamily`);",
        ]
    },
    {
        level: 6,
        task: [
            {id:1, text:'Select all the ghosts in one shot', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "ghost",
                disappear: true,
                tooltip: '< ghostnomore class = "fairy enemy" id = "Annabella" > Hello, I am a Ghost! </ ghostnomore >'
            },
            {
                id: 3,
                class: "monster4",
                disappear: false,
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster6",
                disappear: false,
                tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster1",
                disappear: false,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "ghost",
                disappear: true,
                tooltip: '< ghostnomore class = "fairy enemy" id = "Raphael" > Hello, I am a Ghost! </ ghostnomore >'
            },
            {
                id: 7,
                class: "monster5",
                disappear: false,
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "ghost",
                disappear: true,
                tooltip: '< ghostnomore class = "fairy enemy" id = "Theodor" > Hello, I am a Ghost! </ ghostnomore >'
            },
            {
                id: 9,
                class: "ghost",
                disappear: true,
                tooltip: '< ghostnomore class = "fairy enemy" id = "Catarina" > Hello, I am a Ghost! </ ghostnomore >'
            }
        ],
        story: "Try again to track down the ghosts haunting the Monster Village. You are the only hope for the little fearfull Monsters.",
        task_description: [
            {id:1, text:'Catch all the ghosts in one shot using the method ', bold:false},
            {id:2, text:'getElementsByTagName( )', bold:true},
            {id:3, text:'with appropriate tag name.', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'The method ', bold:false},
                {id:2, text:'getElementsByTagName( )', bold:false},
                {id:3, text:' will search for tags that match the passed-in string,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'Notice ', bold:false},
                {id:2, text:'the “S”', bold:true},
                {id:3, text:' in elements — this selector returns multiples in an array-like structure', bold:false} 
            ]},
            {id:3, bullet: [
                {id:1, text:'REMEMBER! It means that the native array methods will not work unless you ', bold:false},
                {id:2, text:'convert them into an array', bold:false},
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'getElementsByTagName("ghostnomore")',
            "getElementsByTagName('ghostnomore')",
            "getElementsByTagName(`ghostnomore`)",
            'getElementsByTagName("ghostnomore");',
            "getElementsByTagName('ghostnomore');",
            "getElementsByTagName(`ghostnomore`);",
        ]
    },
    {
        level: 7,
        task: [
            {id:1, text:'Select all the monsters together', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster7",
                disappear: true,
                tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster10",
                disappear: true,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "volcano",
                disappear: false,
                tooltip: ' < volcano class = "nature lava" id = "Agung" > Do not mess with the Volcano! </ volcano >'
            },
            {
                id: 4,
                class: "monster8",
                disappear: true,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster1",
                disappear: true,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The volcano nearby is going to erupt very soon. Gather all the monsters together and evacuate the Monster Village. Hurry up!",
        task_description: [
            {id:1, text:'Catch all the monsters with the ', bold:false},
            {id:2, text:'getElementsByTagName( )', bold:true},
            {id:3, text:'method.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'The method ', bold:false},
                {id:2, text:'getElementsByTagName( )', bold:false},
                {id:3, text:' will search for tags that match the passed-in string,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'Notice ', bold:false},
                {id:2, text:'the “S”', bold:true},
                {id:3, text:' in elements — this selector returns multiples in an array-like structure', bold:false} 
            ]},
            {id:3, bullet: [
                {id:1, text:'REMEMBER! It means that the native array methods will not work unless you ', bold:false},
                {id:2, text:'convert them into an array', bold:false},
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'getElementsByTagName("monster")',
            "getElementsByTagName('monster')",
            "getElementsByTagName(`monster`)",
            'getElementsByTagName("monster");',
            "getElementsByTagName('monster');",
            "getElementsByTagName(`monster`);",
        ]
    },
    {
        level: 8,
        task: [
            {id:1, text:'Select the coronavirus', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster7",
                disappear: false,
                tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster6",
                disappear: false,
                tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "coronavirus",
                disappear: true,
                tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous Coronavirus! </ virus >'
            }
        ],
        story: "The ghosts are gone but the Monsters are facing a new challenge -  an unsafe coronavirus spreading around the Monster Village.",
        task_description: [
            {id:1, text:'Catch the virus with the ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:'method. Use an ID to define a selector.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'REMEMBER! This selector ', bold:false},
                {id:2, text:'requires a hash (#)', bold:true},
                {id:3, text:' and an id name to denote an ID,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'This method works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:3, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'document.querySelector("#id")', bold:true},
            {id:2, text:' will access the first element with the specified id.', bold:false}
        ],
        expected_input: [
            'querySelector("#COVID-19")',
            "querySelector('#COVID-19')",
            "querySelector(`#COVID-19`)",
            'querySelector("#COVID-19");',
            "querySelector('#COVID-19');",
            "querySelector(`#COVID-19`);"
        ]
    },
    {
        level: 9,
        task: [
            {id:1, text:'Select the coronavirus', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster1",
                disappear: false,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster6",
                disappear: false,
                tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "coronavirus",
                disappear: true,
                tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous Coronavirus! </ virus >'
            },
            {
                id: 5,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster7",
                disappear: false,
                tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The coronavirus appeared again in the public space of Monster Village. You have to act quickly.",
        task_description: [
            {id:1, text:'Catch the virus with the ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:'method. Use class to define a selector.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'REMEMBER! This selector ', bold:false},
                {id:2, text:'requires a dot ( . )', bold:true},
                {id:3, text:' and a class name to denote class,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'This method works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:3, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'document.querySelector(".class")', bold:true},
            {id:2, text:' will access the first element with the specified class.', bold:false}
        ],
        expected_input: [
            'querySelector(".dangerous")',
            "querySelector('.dangerous')",
            "querySelector(`.dangerous`)",
            'querySelector(".dangerous");',
            "querySelector('.dangerous');",
            "querySelector(`.dangerous`);"
        ]
    },
    {
        level: 10,
        task: [
            {id:1, text:'Select the coronavirus', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster9",
                disappear: false,
                tooltip: '< monster class = "light-purple buka" id = "Alice" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster6",
                disappear: false,
                tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "coronavirus",
                disappear: true,
                tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous Coronavirus! </ virus >'
            },
            {
                id: 4,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster3",
                disappear: false,
                tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "monster4",
                disappear: false,
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "monster5",
                disappear: false,
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 9,
                class: "monster1",
                disappear: false,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "Previous methods did not help in the long run. New Monsters are getting sick because of the coronavirus.",
        task_description: [
            {id:1, text:'Catch the virus with the ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:'method. Use a tag to define a selector.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'REMEMBER! This selector ', bold:false},
                {id:2, text:'requires a tag name', bold:true},
                {id:3, text:' to denote a tag,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'This method works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:3, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'document.querySelector("tag")', bold:true},
            {id:2, text:' will access the first element with a specified tag.', bold:false}
        ],
        expected_input: [
            'querySelector("virus")',
            "querySelector('virus')",
            "querySelector(`virus`)",
            'querySelector("virus");',
            "querySelector('virus');",
            "querySelector(`virus`);"
        ]
    },
    {
        level: 11,
        task: [
            {id:1, text:'Select the monster sick with coronavirus', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster9",
                disappear: false,
                tooltip: '< monster class = "light-purple buka" id = "Alice" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "infected",
                disappear: true,
                tooltip: ' < infected class = "spreading coronavirus"> I am sick with Coronavirus! </ infected > '
            },
            {
                id: 3,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster4",
                disappear: false,
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster5",
                disappear: false,
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The best way to reduce the spread of the virus is to isolate every monster tested positive for COVID-19. Catch the infected monster and send him home.",
        task_description: [
            {id:1, text:'Catch the infected monster with the ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:'. Define a selector using an ID, class or a tag - the choice is yours.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'This method works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:2, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'querySelector("infected")',
            "querySelector('infected')",
            "querySelector(`infected`)",
            'querySelector("infected");',
            "querySelector('infected');",
            "querySelector(`infected`);",
            'querySelector(".spreading")',
            "querySelector('.spreading')",
            "querySelector(`.spreading`)",
            'querySelector(".spreading");',
            "querySelector('.spreading');",
            "querySelector(`.spreading`);",
            'querySelector(".coronavirus")',
            "querySelector('.coronavirus')",
            "querySelector(`.coronavirus`)",
            'querySelector(".coronavirus");',
            "querySelector('.coronavirus');",
            "querySelector(`.coronavirus`);",
        ]
    },
    {
        level: 12,
        task: [
            {id:1, text:'Select the monsters sick with coronavirus', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "infected",
                disappear: true,
                tooltip: ' < isolated class = "tested virus"> I am sick with Coronavirus! </ isolated > '
            },
            {
                id: 2,
                class: "monster5",
                disappear: false,
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster4",
                disappear: false,
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster9",
                disappear: false,
                tooltip: '< monster class = "light-purple buka" id = "Alice" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster2",
                disappear: false,
                tooltip: '< monster class = "purple happy" id = "Devil" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "infected",
                disappear: false,
                tooltip: ' < infected class = "spreading virus"> I am sick with Coronavirus! </ infected > '
            },
            {
                id: 7,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "infected",
                disappear: false,
                tooltip: ' < sick class = "corona virus"> I am sick with Coronavirus! </ sick > '
            },
            {
                id: 9,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The coronavirus infection can go with no symptoms. Reach all the monsters that are sick with COVID-19 weather they are feeling symptoms or not.",
        task_description: [
            {id:1, text:'Try to catch all the infected monsters with the ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:'. Define a selector using an ID, class or a tag - the choice is yours.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'This method works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:2, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'querySelector(".virus")',
            "querySelector('.virus')",
            "querySelector(`.virus`)",
            'querySelector(".virus");',
            "querySelector('.virus');",
            "querySelector(`.virus`);",
        ]
    },
    {
        level: 13,
        task: [
            {id:1, text:'Select the monsters sick with coronavirus', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster5",
                disappear: false,
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster4",
                disappear: false,
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster9",
                disappear: false,
                tooltip: '< monster class = "light-purple buka" id = "Alice" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster2",
                disappear: false,
                tooltip: '< monster class = "purple happy" id = "Devil" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "infected",
                disappear: true,
                tooltip: ' < infected class = "spreading virus"> I am sick with Coronavirus! </ infected > '
            },
            {
                id: 6,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "infected",
                disappear: true,
                tooltip: ' < sick class = "corona virus"> I am sick with Coronavirus! </ sick > '
            },
            {
                id: 8,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "Oopsie, you reached only the first monster infected with the virus. The others still have to be isolated. Don't worry, there is a way to reach them all!",
        task_description: [
            {id:1, text:'Catch the rest of the infected monsters with the ', bold:false},
            {id:2, text:'querySelectorAll( )', bold:true},
            {id:3, text:'. You can use the same selector you used in the previous level.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'', bold:false},
                {id:2, text:'', bold:true}
            ]},
            {id:2, bullet: [
                {id:1, text:'', bold:false},
                {id:2, text:'', bold:false},
                {id:3, text:'', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'document.querySelectorAll(".class")', bold:true},
            {id:2, text:' will access all the elements with a specified class.', bold:false}
        ],
        expected_input: [
            'querySelectorAll(".virus")',
            "querySelectorAll('.virus')",
            "querySelectorAll(`.virus`)",
            'querySelectorAll(".virus");',
            "querySelectorAll('.virus');",
            "querySelectorAll(`.virus`);",
        ]
    },
    {
        level: 14,
        task: [
            {id:1, text:'Select the monsters with infected hands', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster6",
                disappear: false,
                tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "hand",
                disappear: true,
                tooltip: ' < hands class = "spreading virus" id = "COVID-19" > I am not washing my hands! </ hands > '
            },
            {
                id: 3,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "hand",
                disappear: true,
                tooltip: ' < hands class = "hand hygiene"> I am not washing my hands! </ hands > '
            },
            {
                id: 5,
                class: "monster1",
                disappear: false,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            },
        ],
        story: "Every monster should sanitize hands to avoid getting infected with coronavirus. Track the monsters that do not wash their hands.",
        task_description: [
            {id:1, text:'Catch all the monsters that do not sanitize their hands using the ', bold:false},
            {id:2, text:'querySelectorAll( )', bold:true},
            {id:3, text:'. Use an appropriate selector.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'', bold:false},
                {id:2, text:'', bold:true}
            ]},
            {id:2, bullet: [
                {id:1, text:'', bold:false},
                {id:2, text:'', bold:false},
                {id:3, text:'', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'document.querySelectorAll("tag")', bold:true},
            {id:2, text:' will access all the elements with a specified tag.', bold:false}
        ],
        expected_input: [
            'querySelectorAll("hands")',
            "querySelectorAll('hands')",
            "querySelectorAll(`hands`)",
            'querySelectorAll("hands");',
            "querySelectorAll('hands');",
            "querySelectorAll(`hands`);",
        ]
    },
    {
        level: 15,
        task: [
            {id:1, text:'Select the dragon', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster8",
                disappear: false,
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster1",
                disappear: false,
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster6",
                disappear: false,
                tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "dragon",
                disappear: true,
                tooltip: ' < dragon class = "chinese dragon" id = "oriental" > Hi, I am a Dragon! </ dragon >'
            },
            {
                id: 5,
                class: "monster10",
                disappear: false,
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster7",
                disappear: false,
                tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The virus has gone. Just after opening borders, a dragon appeared in the village. Catch this colorful creature and send it back where it belongs.",
        task_description: [
            {id:1, text:'Catch the dragon with the ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:'method. Use class to define a selector.', bold:false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'REMEMBER! This selector ', bold:false},
                {id:2, text:'requires a dot ( . )', bold:true},
                {id:3, text:' and a class name to denote class,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'This method works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:3, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'document.querySelector(".class")', bold:true},
            {id:2, text:' will access the first element with the specified class.', bold:false}
        ],
        expected_input: [
            'querySelector(".chinese")',
            "querySelector('.chinese')",
            "querySelector(`.chinese`)",
            'querySelector(".chinese");',
            "querySelector('.chinese');",
            "querySelector(`.chinese`);",
            'querySelector(".dragon")',
            "querySelector('.dragon')",
            "querySelector(`.dragon`)",
            'querySelector(".dragon");',
            "querySelector('.dragon');",
            "querySelector(`.dragon`);"
        ]
    }
];