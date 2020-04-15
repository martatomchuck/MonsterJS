export default [
    {
        level: 1,
        elements: [
            {
                id: 1,
                tooltip: ''
            },
            {
                id: 2,
                tooltip: ''
            }
        ],
        task_description: [
            {id:1, text:'Monster Village has been haunted by ghost. Help monsters to track down the ghost by using ', bold:false},
            {id:2, text:'getElementById()', bold:true},
            {id:3, text:' method:', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With the method ', bold:false},
                {id:2, text:'getElementById()', bold:true},
                {id:3, text:' you can catch the element whose id property matches the "string" you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'There is ', bold:false},
                {id:2, text:'no need for a #', bold:true},
                {id:3, text:' to indicate element id,', bold:false}
            ]},
            {id:3, bullet: [
                {id:1, text:'NOTE! The method will only ever return one element because ID’s are unique and there can only be one with the same name on the page at a time.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'EXAMPLE: ', bold:false},
            {id:2, text:'document.getElementById("element_id");', bold:true},
            {id:3, text:' will access the element with #element_id.', bold:false}
        ],
        default_input: 'const enemy = document.',
        expected_input: 'getElementById("scary_ghost")',
        expected_output: 'const enemy = document.getElementById("scary_ghost")'
    },
    {
        level: 2,
        elements: [
            {
                id: 1,
                tooltip: ''
            },
            {
                id: 2,
                tooltip: ''
            },
            {
                id: 3,
                tooltip: ''
            },
            {
                id: 4,
                tooltip: ''
            },
            {
                id: 5,
                tooltip: ''
            },
            {
                id: 6,
                tooltip: ''
            }
        ],
        task_description: [
            {id:1, text:'Monster Village has been haunted by ghost. Help monsters to catch the ghost by using ', bold:false},
            {id:2, text:'getElementById()', bold:true},
            {id:3, text:' method:', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With the method ', bold:false},
                {id:2, text:'getElementById()', bold:true},
                {id:3, text:' you can catch the element whose id property matches the "string" you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'There is ', bold:false},
                {id:2, text:'no need for a #', bold:true},
                {id:3, text:' to indicate element id,', bold:false}
            ]},
            {id:3, bullet: [
                {id:1, text:'NOTE! The method will only ever return one element because ID’s are unique and there can only be one with the same name on the page at a time.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        default_input: 'const enemy = document.getElementById()',
        expected_input: '"scary_ghost"',
        expected_output: 'const enemy = document.getElementById("scary_ghost")'
    },
    {
        level: 3,
        elements: [
            {
                id: 1,
                tooltip: ''
            },
            {
                id: 2,
                tooltip: ''
            },
            {
                id: 3,
                tooltip: ''
            },
            {
                id: 4,
                tooltip: ''
            },
            {
                id: 5,
                tooltip: ''
            },
            {
                id: 6,
                tooltip: ''
            }
        ],
        task_description: [
            {id:1, text:'Monster Village has been haunted by ghost. Help monsters to catch the ghost by using ', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With the method ', bold:false},
                {id:2, text:'getElementById()', bold:true},
                {id:3, text:' you can catch the element whose id property matches the "string" you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'There is ', bold:false}
            ]},
            {id:3, bullet: [
                {id:1, text:'NOTE! The method will only ever return one element because ID’s are unique and there can only be one with the same name on the page at a time.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        default_input: 'const enemy = document.getElementById()',
        expected_input: '"scary_ghost"',
        expected_output: 'const enemy = document.getElementById("scary_ghost")'
    },
    {
        level: 4,
        elements: [
            {
                id: 1,
                tooltip: ''
            },
            {
                id: 2,
                tooltip: ''
            },
            {
                id: 3,
                tooltip: ''
            },
            {
                id: 4,
                tooltip: ''
            },
            {
                id: 5,
                tooltip: ''
            },
            {
                id: 6,
                tooltip: ''
            }
        ],
        task_description: [
            {id:1, text:'Monster Village has been haunted by ghost. Help monsters to catch the ghost by using ', bold:false},
            {id:2, text:'getElementById()', bold:true},
            {id:3, text:' method:', bold:false}
        ],
        instructions:[
            {id:1, bullet: [
                {id:1, text:'With the method ', bold:false},
                {id:2, text:'getElementById()', bold:true},
                {id:3, text:' you can catch the element whose id property matches the "string" you typed in brackets,', bold:false}
            ]},
            {id:2, bullet: [
                {id:1, text:'Monster Village has been haunted by ghost. Help monsters to catch the ghost by using ', bold:false},
                {id:2, text:'getElementById()', bold:true},
                {id:3, text:' method:', bold:false}
            ]},
            {id:3, bullet: [
                {id:1, text:'NOTE! The method will only ever return one element because ID’s are unique and there can only be one with the same name on the page at a time.', bold:false}
            ]}
        ],
        example: [
            {id:1, text:'Try it yourself!', bold:false}
        ],
        default_input: 'const enemy = document.getElementById()',
        expected_input: '"scary_ghost"',
        expected_output: 'const enemy = document.getElementById("scary_ghost")'
    }
];