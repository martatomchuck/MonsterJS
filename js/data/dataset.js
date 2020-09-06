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
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghost',
                    class:'"ghost fairy enemy"',
                    id:'"scary-ghost"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghost class = "ghost fairy enemy" id = "scary-ghost" > Hello, I am a ghost! </ ghost >'
            },
            {
                id: 3,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
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
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghost',
                    class:'"scary little-ghost"',
                    id:'"look-at-me"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghost class = "scary little-ghost" id = "look-at-me" > I am a ghost! </ ghost >'
            },
            {
                id: 4,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
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
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow notched"',
                    id:'"Clark"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'scaryghost',
                    class:'"fairy"',
                    id:'"watch-out-the-ghost"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< scaryghost class = "fairy" id = "watch-out-the-ghost" > I am a ghost! </ scaryghost >'
            },
            {
                id: 5,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster2",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"purple happy"',
                    id:'"Devil"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "purple happy" id = "Devil" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 9,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
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
                tooltip: {
                    start:'< ',
                    tag:'ghost',
                    class:'"ghost fairy enemy"',
                    id:'"Christopher"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghost class = "ghost fairy enemy" id = "Christopher" > Hello, I am a ghost! </ ghost >'
            },
            {
                id: 2,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghost',
                    class:'"ghost fairy enemy"',
                    id:'"Juliette"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghost class = "ghost fairy enemy" id = "Juliette" > Hello, I am a ghost! </ ghost >'
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
                tooltip: {
                    start:'< ',
                    tag:'ghostfamily',
                    class:'"fairy scary"',
                    id:'"Marry"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghostfamily class = "fairy scary" id = "Marry" > Hello, I am a ghost! </ ghostfamily >'
            },
            {
                id: 2,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghostfamily',
                    class:'"little-ghost"',
                    id:'"Andrea"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghostfamily class = "little-ghost" id = "Andrea" > Hello, I am a ghost! </ ghostfamily >'
            },
            {
                id: 6,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghostfamily',
                    class:'"ghost enemy"',
                    id:'"Anastasia"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghostfamily class = "ghost enemy" id = "Anastasia" > Hello, I am a ghost! </ ghostfamily >'
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
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghostnomore',
                    class:'"fairy enemy"',
                    id:'"Annabella"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghostnomore class = "fairy enemy" id = "Annabella" > Hello, I am a ghost! </ ghostnomore >'
            },
            {
                id: 3,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghostnomore',
                    class:'"fairy enemy"',
                    id:'"Raphael"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghostnomore class = "fairy enemy" id = "Raphael" > Hello, I am a ghost! </ ghostnomore >'
            },
            {
                id: 7,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghostnomore',
                    class:'"fairy enemy"',
                    id:'"Theodor"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghostnomore class = "fairy enemy" id = "Theodor" > Hello, I am a ghost! </ ghostnomore >'
            },
            {
                id: 9,
                class: "ghost",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'ghostnomore',
                    class:'"fairy enemy"',
                    id:'"Catarina"',
                    innertext:' Hello, I am a ghost! ',
                    end:' >'
                }
                // tooltip: '< ghostnomore class = "fairy enemy" id = "Catarina" > Hello, I am a ghost! </ ghostnomore >'
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
            {id:1, text:'Select all the Monsters', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster7",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"brown fatso"',
                    id:'"Mathias"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster10",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "volcano",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'volcano',
                    class:'"nature lava"',
                    id:'"Agung"',
                    innertext:' Do not mess with a volcano! ',
                    end:' >'
                }
                // tooltip: ' < volcano class = "nature lava" id = "Agung" > Do not mess with a volcano! </ volcano >'
            },
            {
                id: 4,
                class: "monster8",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster1",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
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
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"brown fatso"',
                    id:'"Mathias"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "coronavirus",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'virus',
                    class:'"dangerous"',
                    id:'"COVID-19"',
                    innertext:' I am a dangerous coronavirus! ',
                    end:' >'
                }
                // tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous coronavirus! </ virus >'
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
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "coronavirus",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'virus',
                    class:'"dangerous"',
                    id:'"COVID-19"',
                    innertext:' I am a dangerous coronavirus! ',
                    end:' >'
                }
                // tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous coronavirus! </ virus >'
            },
            {
                id: 5,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster7",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"brown fatso"',
                    id:'"Mathias"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
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
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"light-purple buka"',
                    id:'"Alice"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "light-purple buka" id = "Alice" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "coronavirus",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'virus',
                    class:'"dangerous"',
                    id:'"COVID-19"',
                    innertext:' I am a dangerous coronavirus! ',
                    end:' >'
                }
                // tooltip: '< virus class = "dangerous" id = "COVID-19" > I am a dangerous coronavirus! </ virus >'
            },
            {
                id: 4,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster3",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow notched"',
                    id:'"Clark"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 9,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
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
            {id:1, text:'Select the coronavirus infection', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster9",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"light-purple buka"',
                    id:'"Alice"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "light-purple buka" id = "Alice" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "infected",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'infection',
                    class:'"spreading"',
                    id:'"virus"',
                    innertext:' I am sick with coronavirus! ',
                    end:' >'
                }
                // tooltip: ' < infection id = "virus" class = "spreading" > I am sick with coronavirus! </ infection > '
            },
            {
                id: 3,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The best way to reduce the spread of the virus is to isolate every Monster tested positive for COVID-19. Catch the infected Monster and send him home.",
        task_description: [
            {id:1, text:'Catch the virus infection with the ', bold:false},
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
            'querySelector("infection")',
            "querySelector('infection')",
            "querySelector(`infection`)",
            'querySelector("infection");',
            "querySelector('infection');",
            "querySelector(`infection`);",
            'querySelector(".spreading")',
            "querySelector('.spreading')",
            "querySelector(`.spreading`)",
            'querySelector(".spreading");',
            "querySelector('.spreading');",
            "querySelector(`.spreading`);",
            'querySelector("#virus")',
            "querySelector('#virus')",
            "querySelector(`#virus`)",
            'querySelector("#virus");',
            "querySelector('#virus');",
            "querySelector(`#virus`);",
        ]
    },
    {
        level: 12,
        task: [
            {id:1, text:'Select the first coronavirus infection', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "infected",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'infection',
                    class:'"tested virus"',
                    innertext:' I am sick with coronavirus! ',
                    end:' >'
                }
                // tooltip: ' < infection class = "tested virus"> I am sick with coronavirus! </ infection > '
            },
            {
                id: 2,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster9",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"light-purple buka"',
                    id:'"Alice"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "light-purple buka" id = "Alice" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster2",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"purple happy"',
                    id:'"Devil"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "purple happy" id = "Devil" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "infected",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'infection',
                    class:'"spreading virus"',
                    innertext:' I am sick with coronavirus! ',
                    end:' >'
                }
                // tooltip: ' < infection class = "spreading virus"> I am sick with coronavirus! </ infection > '
            },
            {
                id: 7,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "infected",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'sick',
                    class:'"no-symptoms virus"',
                    innertext:' I am sick with coronavirus! ',
                    end:' >'
                }
                // tooltip: ' < sick class = "no-symptoms virus"> I am sick with coronavirus! </ sick > '
            },
            {
                id: 9,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The coronavirus infection can go with no symptoms. Reach all the Monsters that are sick with COVID-19 no matter of feeling symptoms.",
        task_description: [
            {id:1, text:'Select the first coronavirus infection with the ', bold:false},
            {id:2, text:'querySelector( )', bold:true},
            {id:3, text:'. Define a selector common for every infected element.', bold:false}
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
            "querySelector(`.virus`);"
        ]
    },
    {
        level: 13,
        task: [
            {id:1, text:'Select all the coronavirus cases', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster9",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"light-purple buka"',
                    id:'"Alice"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "light-purple buka" id = "Alice" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster2",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"purple happy"',
                    id:'"Devil"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "purple happy" id = "Devil" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "infected",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'infected',
                    class:'"spreading virus"',
                    id: '"fever"',
                    innertext:' I am sick with coronavirus! ',
                    end:' >'
                }
                // tooltip: ' < infected class = "spreading virus" id = "fever" > I am sick with coronavirus! </ infected > '
            },
            {
                id: 6,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "infected",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'sick',
                    class:'"cough virus pneumonia"',
                    innertext:' I am sick with coronavirus! ',
                    end:' >'
                }
                // tooltip: ' < sick class = "cough virus pneumonia"> I am sick with coronavirus! </ sick > '
            },
            {
                id: 8,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "Oopsie, you reached only the first infection case. All the infected Monsters have to be isolated. Don't worry, there is a way to reach them all!",
        task_description: [
            {id:1, text:'Select all the coronavirus infections with the ', bold:false},
            {id:2, text:'querySelectorAll( )', bold:true},
            {id:3, text:'. Use class to define a selector. You see? You can use the same selector you used in the previous level.', bold:false}
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
            {id:1, text:'Select the carrier of the virus', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "hand",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'carrier',
                    class:'"spreading virus"',
                    id:'"COVID-19"',
                    innertext:' I am not washing my hands! ',
                    end:' >'
                }
                // tooltip: ' < carrier class = "spreading virus" id = "COVID-19" > I am not washing my hands! </ carrier > '
            },
            {
                id: 3,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "hand",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'carrier',
                    class:'"hand hygiene"',
                    innertext:' I am not washing my hands! ',
                    end:' >'
                }
                // tooltip: ' < carrier class = "hand hygiene"> I am not washing my hands! </ carrier > '
            },
            {
                id: 5,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            },
        ],
        story: "Every monster should sanitize hands to prevent the spread of a virus. Track the Monsters that do not wash their hands properly.",
        task_description: [
            {id:1, text:'Catch all the Monsters that do not sanitize their hands properly. Use the ', bold:false},
            {id:2, text:'querySelectorAll( )', bold:true},
            {id:3, text:'. Choose an appropriate selector.', bold:false}
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
            'querySelectorAll("carrier")',
            "querySelectorAll('carrier')",
            "querySelectorAll(`carrier`)",
            'querySelectorAll("carrier");',
            "querySelectorAll('carrier');",
            "querySelectorAll(`carrier`);",
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
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "dragon",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'dragon',
                    class:'"chinese dragon"',
                    id:'"oriental"',
                    innertext:' Hi, I am a dragon! ',
                    end:' >'
                }
                // tooltip: ' < dragon class = "chinese dragon" id = "oriental" > Hi, I am a Dragon! </ dragon >'
            },
            {
                id: 5,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster7",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"brown fatso"',
                    id:'"Mathias"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The virus has gone. Just after opening borders, a chinese dragon appeared in the village. To be cautious, catch the dragon and send it back where it belongs.",
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
            {id:1, text:'Try it yourself!', bold:false}
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
    },
    {
        level: 16,
        task: [
            {id:1, text:'Select all the newcomers', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "mummy",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'mummy',
                    class:'"fantastic halloween"',
                    id:'"Tutankhamun"',
                    innertext:' I am a newcomer! ',
                    end:' >'
                }
                // tooltip: ' < mummy class = "fantastic halloween" id = "Tutankhamun" > I am a newcomer! </ mummy >'
            },
            {
                id: 3,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster3",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow notched"',
                    id:'"Clark"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "troll",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'troll',
                    class:'"mystical fantastic"',
                    id:'"Borg"',
                    innertext:' I am a newcomer! ',
                    end:' >'
                }
                // tooltip: ' < troll class = "mystical fantastic" id = "Borg" > I am a newcomer! </ troll >'
            },
            {
                id: 6,
                class: "monster7",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"brown fatso"',
                    id:'"Mathias"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "orc",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'orc',
                    class:'"fantastic fiona"',
                    id:'"Shrek"',
                    innertext:' I am a newcomer! ',
                    end:' >'
                }
                // tooltip: ' < orc class = "fantastic fiona" id = "Shrek" > I am a newcomer! </ orc >'
            },
            {
                id: 8,
                class: "monster8",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The newcomers from afar are stopping by for a visit. Recovering from the virus, the Monsters are not willing to meet with strangers. Keep newcomers away from the village.",
        task_description: [
            {id:1, text:'Catch all the newcomers: orc, troll and mummy with the ', bold:false},
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
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'querySelectorAll(".fantastic")',
            "querySelectorAll('.fantastic')",
            "querySelectorAll(`.fantastic`)",
            'querySelectorAll(".fantastic");',
            "querySelectorAll('.fantastic');",
            "querySelectorAll(`.fantastic`);",
        ]
    },
    {
        level: 17,
        task: [
            {id:1, text:'Select all the Monsters', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "tornado",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'tornado',
                    class:'"force nature"',
                    id:'"wind"',
                    innertext:' Do not mess with a tornado! ',
                    end:' >'
                }
                // tooltip: '< tornado class = "force nature" id = "wind" > Do not mess with a tornado! </ tornado >'
            },
            {
                id: 2,
                class: "monster10",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster3",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow notched"',
                    id:'"Clark"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster7",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"brown fatso"',
                    id:'"Mathias"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster1",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster8",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            }
        ],
        story: "A huge tornado is coming to the village. Take all the Monsters together and guide them to the nearest shelter.",
        task_description: [
            {id:1, text:'Catch all the Monsters together with the ', bold:false},
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
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'querySelectorAll("monster")',
            "querySelectorAll('monster')",
            "querySelectorAll(`monster`)",
            'querySelectorAll("monster");',
            "querySelectorAll('monster');",
            "querySelectorAll(`monster`);",
        ]
    },
    {
        level: 18,
        task: [
            {id:1, text:'Select the spaceship', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "ufo",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'spaceship',
                    datafor: '"foreigner"',
                    class:'"ufo"',
                    id:'"Air Force UFO"',
                    innertext:' Hello, UFO here! ',
                    end:' >'
                }
                // tooltip: '< spaceship for = "foreigner" class = "ufo" id = "Air Force UFO" > Hello, UFO here! </ spaceship >'
            },
            {
                id: 3,
                class: "monster7",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"brown fatso"',
                    id:'"Mathias"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "The monsters seem to have bad luck. Someone has seen a spaceship in the sky and now they all live in fear of aliens.",
        task_description: [
            {id:1, text:'Catch the spaceship with the method ', bold:false},
            {id:2, text:'getElementsByClassName( )', bold:true},
            {id:3, text:'. Use an appropriate class.', bold:false}
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
            {id:1, text:'document.getElementsByClassName("classname")', bold:true},
            {id:2, text:' will access all the elements with a specified class.', bold:false}
        ],
        expected_input: [
            'getElementsByClassName("ufo")',
            "getElementsByClassName('ufo')",
            "getElementsByClassName(`ufo`)",
            'getElementsByClassName("ufo");',
            "getElementsByClassName('ufo');",
            "getElementsByClassName(`ufo`);",
        ]
    },
    {
        level: 19,
        task: [
            {id:1, text:'Select all the aliens', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "alien",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'alien',
                    datafrom: '"Planet Mars"',
                    class:'"non-native"',
                    id:'"Eva"',
                    innertext:' I am an alien! ',
                    end:' >'
                }
                // tooltip: '< alien from = "Planet Mars" class = "non-native" id = "Eva" > I am an alien! </ alien >'
            },
            {
                id: 2,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster7",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"brown fatso"',
                    id:'"Mathias"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "brown fatso" id = "Mathias" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "monster3",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow notched"',
                    id:'"Clark"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "alien",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'alien',
                    datafrom: '"Planet Mars"',
                    class:'"non-native"',
                    id:'"Gregory"',
                    innertext:' I am an alien! ',
                    end:' >'
                }
                // tooltip: '< alien from = "Planet Mars" class = "non-native" id = "Gregory" > I am an alien! </ alien >'
            }
        ],
        story: "Too late. The spaceship has landed. Welcome aliens to Planet Earth and ask them gently to leave the Monster Village.",
        task_description: [
            {id:1, text:'Catch all the aliens with the method ', bold:false},
            {id:2, text:'getElementsByClassName( )', bold:true}
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
            {id:1, text:'document.getElementsByClassName("classname")', bold:true},
            {id:2, text:' will access all the elements with a specified class.', bold:false}
        ],
        expected_input: [
            'getElementsByClassName("non-native")',
            "getElementsByClassName('non-native')",
            "getElementsByClassName(`non-native`)",
            'getElementsByClassName("non-native");',
            "getElementsByClassName('non-native');",
            "getElementsByClassName(`non-native`);",
        ]
    },
    {
        level: 20,
        task: [
            {id:1, text:'Select all the aliens and the spaceship', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster3",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow notched"',
                    id:'"Clark"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster10",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow alien"',
                    id:'"Alex"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow alien" id = "Alex" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "alien",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'alien',
                    datafrom: '"Planet Mars"',
                    class:'"visitor foreigners"',
                    id:'"Gregory"',
                    innertext:' I am an alien! ',
                    end:' >'
                }
                // tooltip: '< alien from = "Planet Mars" class = "visitor foreigners" id = "Gregory" > I am an alien! </ alien >'
            },
            {
                id: 4,
                class: "alien",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'alien',
                    datafrom: '"Planet Mars"',
                    class:'"foreigners non-native"',
                    id:'"Eva"',
                    innertext:' I am an alien! ',
                    end:' >'
                }
                // tooltip: '< alien from = "Planet Mars" class = "foreigners non-native" id = "Eva" > I am an alien! </ alien >'
            },
            {
                id: 5,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 6,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 7,
                class: "monster6",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"pink crazy-lady"',
                    id:'"Martha"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "pink crazy-lady" id = "Martha" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 8,
                class: "ufo",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'spaceship',
                    class:'"ufo foreigners"',
                    id:'"Air Force UFO"',
                    innertext:' Hi, UFO here! ',
                    end:' >'
                }
                // tooltip: '< spaceship class = "ufo foreigners" id = "Air Force UFO"> Hi, UFO here! </ spaceship >'
            },
            {
                id: 9,
                class: "monster1",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-green one-eyed"',
                    id:'"Jacob"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-green one-eyed" id = "Jacob" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "It seems that the aliens like the village too much and do not intend to fly away. Unfortunately, the monsters do not like them back. Help them to get rid of the visitors.",
        task_description: [
            {id:1, text:'Catch all the aliens and the spaceship with the method ', bold:false},
            {id:2, text:'getElementsByClassName( )', bold:true}
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
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'getElementsByClassName("foreigners")',
            "getElementsByClassName('foreigners')",
            "getElementsByClassName(`foreigners`)",
            'getElementsByClassName("foreigners");',
            "getElementsByClassName('foreigners');",
            "getElementsByClassName(`foreigners`);",
        ]
    },
    {
        level: 21,
        task: [
            {id:1, text:'Select the Frankenstein', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 2,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "frankenstein",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monstrum',
                    name:'"frankenstein"',
                    innertext:' I am the Frankenstein! ',
                    end:' >'
                }
                // tooltip: '< monstrum name = "frankenstein" > I am the Frankenstein! </ monstrum >'
            }
        ],
        story: "One of the Monster experiments in hiding trying to create a perfect monster. Accidentally, he creates Frankenstein's creature!",
        task_description: [
            {id:1, text:'Catch the Frankenstein with the method ', bold:false},
            {id:2, text:'getElementsByName( )', bold:true},
            {id:3, text:'. Use name attribute as a selector.', bold:false}
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
            {id:1, text:'document.getElementsByName("name-attr")', bold:true},
            {id:2, text:' will access all the elements with a name attribute set up as "name-attr".', bold:false}
        ],
        expected_input: [
            'getElementsByName("frankenstein")',
            "getElementsByName('frankenstein')",
            "getElementsByName(`frankenstein`)",
            'getElementsByName("frankenstein");',
            "getElementsByName('frankenstein');",
            "getElementsByName(`frankenstein`);",
        ]
    },
    {
        level: 22,
        task: [
            {id:1, text:'Select all the Frankensteins', bold:false}
        ],
        elements: [
            {
                id: 1,
                class: "frankenstein",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monstrum',
                    class:'"gigantic"',
                    name:'"creature"',
                    innertext:' I am the Frankenstein! ',
                    end:' >'
                }
                // tooltip: '< monstrum class = "gigantic" name = "creature" > I am the Frankenstein! </ monstrum >'
            },
            {
                id: 2,
                class: "monster8",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"green one-eyed"',
                    id:'"Frank"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "green one-eyed" id = "Frank"> Hello, I am a Monster! </ monster >'
            },
            {
                id: 3,
                class: "monster5",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"dark-blue tentacles"',
                    id:'"Julia"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "dark-blue tentacles" id = "Julia" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 4,
                class: "monster3",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"yellow notched"',
                    id:'"Clark"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "yellow notched" id = "Clark" > Hello, I am a Monster! </ monster >'
            },
            {
                id: 5,
                class: "frankenstein",
                disappear: true,
                tooltip: {
                    start:'< ',
                    tag:'monstrum',
                    class:'"green-face"',
                    name:'"creature"',
                    innertext:' I am the Frankenstein! ',
                    end:' >'
                }
                // tooltip: '< monstrum class = "green-face" name = "creature" > I am the Frankenstein! </ monstrum >'
            },
            {
                id: 6,
                class: "monster4",
                disappear: false,
                tooltip: {
                    start:'< ',
                    tag:'monster',
                    class:'"turquoise dotted"',
                    id:'"Thomas"',
                    innertext:' Hello, I am a Monster! ',
                    end:' >'
                }
                // tooltip: '< monster class = "turquoise dotted" id = "Thomas" > Hello, I am a Monster! </ monster >'
            }
        ],
        story: "Wait… The Frankenstein has doubled. Try to chase the creatures again before they take revenge on their creator and his family!",
        task_description: [
            {id:1, text:'Catch the Frankensteins with the method ', bold:false},
            {id:2, text:'getElementsByName( )', bold:true},
            {id:3, text:'. Use name attribute as a selector.', bold:false}
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
            {id:1, text:'Try it yourself!', bold:false}
        ],
        expected_input: [
            'getElementsByName("creature")',
            "getElementsByName('creature')",
            "getElementsByName(`creature`)",
            'getElementsByName("creature");',
            "getElementsByName('creature');",
            "getElementsByName(`creature`);",
        ]
    }
];