export default [
    {
        level: 1,
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
        task_description: [
            {id:1, text:'Monster Village has been haunted by a ghost. Help monsters to track down the ghost by using ', bold:false},
            {id:2, text:'getElementById( )', bold:true},
            {id:3, text:' method.', bold:false}
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
            {id:1, text:'EXAMPLE: ', bold:false},
            {id:2, text:'document.getElementById("element_id");', bold:true},
            {id:3, text:' will access the element with #element_id.', bold:false}
        ],
        expected_input1: 'getElementById("scary-ghost")',
        expected_input2: "getElementById('scary-ghost')",
        expected_input3: "getElementById(`scary-ghost`)"
    },
    {
        level: 2,
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
        task_description: [
            {id:1, text:'Oh no! A ghost is still haunting the Monster Village. Use ', bold:false},
            {id:2, text:'getElementById( )', bold:true},
            {id:3, text:' again to help monsters catch the ghost.', bold:false}
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
            {id:1, text:'This time, try it yourself!', bold:false}
        ],
        expected_input1: 'getElementById("watch-out-the-ghost")',
        expected_input2: "getElementById('watch-out-the-ghost')",
        expected_input3: "getElementById(`watch-out-the-ghost`)"
    },
    {
        level: 3,
        elements: [
            {
                id: 1,
                class: "ghost",
                disappear: true,
                tooltip: '< ghost class = "ghost fairy enemy" id = "Christopher" > Hello, I am a Ghost! </ ghost >'
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
                tooltip: '< ghost class = "ghost fairy enemy" id = "Juliette" > Hello, I am a Ghost! </ ghost >'
            },
            {
                id: 6,
                class: "ghost",
                disappear: true,
                tooltip: '< ghost class = "ghost fairy enemy" id = "Anastasia" > Hello, I am a Ghost! </ ghost >'
            }
        ],
        task_description: [
            {id:1, text:"Look! There is more and more of ghosts haunting the Monster Village. The monsters need your JavaScript superpower. Find the ghosts with ", bold:false},
            {id:2, text:'getElementsByTagName( )', bold:true},
            {id:3, text:' method.', bold:false}
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
                {id:1, text:'BE CAREFULL! It means that the native array methods will not work unless you ', bold:false},
                {id:2, text:'convert them into an array', bold:true},
            ]}
        ],
        example: [
            {id:1, text:'EXAMPLE: ', bold:false},
            {id:2, text:'document.getElementsByTagName("element_tag");', bold:true},
            {id:3, text:' will access all the elements with <element_tag></element_tag>.', bold:false}
        ],
        expected_input1: 'getElementsByTagName("ghost")',
        expected_input2: "getElementsByTagName('ghost')",
        expected_input3: "getElementsByTagName(`ghost`)"
    },
    {
        level: 4,
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
        task_description: [
            {id:1, text:'Use ', bold:false},
            {id:2, text:'getElementsByTagName( )', bold:true},
            {id:3, text:' again to track down the ghosts haunting the Monster Village. You are the only hope for little fearfull monsters.', bold:false}
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
                {id:1, text:'BE CAREFULL! It means that the native array methods will not work unless you ', bold:false},
                {id:2, text:'convert them into an array', bold:true},
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input1: 'getElementsByTagName("ghostnomore")',
        expected_input2: "getElementsByTagName('ghostnomore')",
        expected_input3: "getElementsByTagName(`ghostnomore`)"
    },
    {
        level: 5,
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
                tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous Virus! </ virus >'
            }
        ],
        task_description: [
            {id:1, text:'The ghosts are gone but the Monsters are facing a new challenge -  an unsafe coronavirus spreading around the Monster Village. You have to act quickly. Fight the virus with the method ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:' . Use an ID to define a selector.', bold: false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'REMEMBER! This selector ', bold:false},
                {id:2, text:'requires a hash (#)', bold:true},
                {id:3, text:' and an id name to denote an ID,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'This selector works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:3, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'EXAMPLE: ', bold:false},
            {id:2, text:'document.querySelector("#id");', bold:true},
            {id:3, text:' will access the first element with the specified id.', bold:false}
        ],
        expected_input1: 'querySelector("#COVID-19")',
        expected_input2: "querySelector('#COVID-19')",
        expected_input3: "querySelector(`#COVID-19`)"
    },
    {
        level: 6,
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
                tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous Virus! </ virus >'
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
        task_description: [
            {id:1, text:'The coronavirus appeared again in the public space of Monster Village. Fight the virus by using ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:' . This time, use class to define a selector.', bold: false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'REMEMBER! This selector ', bold:false},
                {id:2, text:'requires a dot ( . )', bold:true},
                {id:3, text:' and a class name to denote class,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'This selector works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:3, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'EXAMPLE: ', bold:false},
            {id:2, text:'document.querySelector(".class");', bold:true},
            {id:3, text:' will access the first element with the specified class.', bold:false}
        ],
        expected_input1: 'querySelector(".dangerous")',
        expected_input2: "querySelector('.dangerous')",
        expected_input3: "querySelector(`.dangerous`)"
    },
    {
        level: 7,
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
                tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous Virus! </ virus >'
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
        task_description: [
            {id:1, text:'Previous methods did not help in the long run. New Monsters are getting sick because of the coronavirus. Make use of ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:' one more time to fight the virus. Now, use a tag to define a selector.', bold: false}
        ],
        instructions: [
            {id:1, bullet: [
                {id:1, text:'REMEMBER! This selector ', bold:false},
                {id:2, text:'requires a tag name', bold:true},
                {id:3, text:' to denote a tag,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'This selector works with all CSS selectors but it will only ever ', bold:false},
                {id:2, text:'return one element', bold:true}
            ]},
            {id:3, bullet: [
                {id:1, text:'BE CAREFULL! ', bold:false},
                {id:2, text:'Only the first element', bold:false},
                {id:3, text:' matching the passed-in string will be returned.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'EXAMPLE: ', bold:false},
            {id:2, text:'document.querySelector("tag");', bold:true},
            {id:3, text:' will access the first element with the specified tag.', bold:false}
        ],
        expected_input1: 'querySelector("virus")',
        expected_input2: "querySelector('virus')",
        expected_input3: "querySelector(`virus`)"
    }
];