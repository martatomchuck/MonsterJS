export default [
    {
        level: 1,
        elements: [
            {
                id: 1,
                class: "monster8",
                tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "ghost",
                tooltip: '< ghost class = "ghost fairy enemy" id = "scary-ghost" > Hello, I am a Ghost! </ ghost >'
            },
            {
                id: 3,
                class: "monster1",
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            }
        ],
        task_description: [
            {id:1, text:'Monster Village has been haunted by Ghost. Help monsters to track down the Ghost by using ', bold:false},
            {id:2, text:'getElementById()', bold:true},
            {id:3, text:' method:', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With ', bold:false},
                {id:2, text:'getElementById()', bold:true},
                {id:3, text:' you can catch the element whose id property matches the "string" you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'There is ', bold:false},
                {id:2, text:'no need for a #', bold:true},
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
        default_input: 'const enemy = document.getElementById',
        expected_input1: '("scary-ghost")',
        expected_input2: "('scary-ghost')",
        expected_output: 'const enemy = document.getElementById("scary-ghost")'
    },
    {
        level: 2,
        elements: [
            {
                id: 1,
                class: "monster3",
                tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "alien",
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster8",
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "ghost",
                tooltip: '< scaryghost class = "fairy" id = "watch-out-the-ghost" > I am a Ghost! </ scaryghost >'
            },
            {
                id: 5,
                class: "monster1",
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster2",
                tooltip: '< monster class = "purple happy" id = "Devil" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "monster4",
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "monster5",
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 9,
                class: "monster6",
                tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            }
        ],
        task_description: [
            {id:1, text:'Oh no! The Ghost is still haunting the Monster Village. Use ', bold:false},
            {id:2, text:'getElementById()', bold:true},
            {id:3, text:' again to help monsters catch the Ghost.', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With ', bold:false},
                {id:2, text:'getElementById()', bold:true},
                {id:3, text:' you can catch the element whose id property matches the "string" you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'There is ', bold:false},
                {id:2, text:'no need for a #', bold:true},
                {id:3, text:' to indicate element id,', bold:false}
            ]},
            {id:3, bullet: [
                {id:1, text:'NOTE! The method will only ever return one element because ID’s are unique. It means there can only be one with the same name on the page at a time.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'This time, try it yourself!', bold:false}
        ],
        default_input: 'const enemy = document.',
        expected_input1: 'getElementById("watch-out-the-ghost")',
        expected_input2: "getElementById('watch-out-the-ghost')",
        expected_output: 'const enemy = document.getElementById("watch-out-the-ghost")'
    },
    {
        level: 3,
        elements: [
            {
                id: 1,
                class: "ghost",
                tooltip: '< ghost class = "ghost fairy enemy" id = "Christopher" > Hello, I am a Ghost! </ ghost >'
            },
            {
                id: 2,
                class: "alien",
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster8",
                tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster1",
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "ghost",
                tooltip: '< ghost class = "ghost fairy enemy" id = "Juliette" > Hello, I am a Ghost! </ ghost >'
            },
            {
                id: 6,
                class: "ghost",
                tooltip: '< ghost class = "ghost fairy enemy" id = "Anastasia" > Hello, I am a Ghost! </ ghost >'
            }
        ],
        task_description: [
            {id:1, text:"Look! There is more and more of Ghosts haunting the Monster Village. The monsters need your JavaScript superpower. Find the Ghosts with ", bold:false},
            {id:2, text:'getElementsByTagName()', bold:true},
            {id:3, text:' method:', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'The method ', bold:false},
                {id:2, text:'getElementsByTagName()', bold:true},
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
        default_input: 'const enemy = document.getElementsByTagName',
        expected_input1: '("ghost")',
        expected_input2: "('ghost')",
        expected_output: 'const enemy = document.getElementsByTagName("ghost")'
    },
    {
        level: 4,
        elements: [
            {
                id: 1,
                class: "alien",
                tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "ghost",
                tooltip: '< ghostnomore class = "fairy enemy" id = "Annabella" > Hello, I am a Ghost! </ ghostnomore >'
            },
            {
                id: 3,
                class: "monster4",
                tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "ghost",
                tooltip: '< ghostnomore class = "fairy enemy" id = "Elisabeth" > Hello, I am a Ghost! </ ghostnomore >'
            },
            {
                id: 5,
                class: "monster1",
                tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "ghost",
                tooltip: '< ghostnomore class = "fairy enemy" id = "Raphael" > Hello, I am a Ghost! </ ghostnomore >'
            },
            {
                id: 7,
                class: "monster5",
                tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "ghost",
                tooltip: '< ghostnomore class = "fairy enemy" id = "Theodor" > Hello, I am a Ghost! </ ghostnomore >'
            },
            {
                id: 9,
                class: "ghost",
                tooltip: '< ghostnomore class = "fairy enemy" id = "Catarina" > Hello, I am a Ghost! </ ghostnomore >'
            }
        ],
        task_description: [
            {id:1, text:'Use ', bold:false},
            {id:2, text:'getElementsByTagName()', bold:true},
            {id:3, text:' again to track down the Ghosts haunting the Monster Village. You are the only hope for little fearfull monsters.', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'The method ', bold:false},
                {id:2, text:'getElementsByTagName()', bold:true},
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
        default_input: 'const enemy = document.',
        expected_input1: 'getElementsByTagName("ghostnomore")',
        expected_input2: "getElementsByTagName('ghostnomore')",
        expected_output: 'const enemy = document.getElementsByTagName("ghostnomore")'
    }
];