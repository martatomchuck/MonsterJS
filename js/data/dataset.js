export default [
    {
        le: 1,
        elements: [
            {
                id: 1
            },
            {
                id: 2
            }
        ],
        task_description: "Monster Village has been haunted by ghost. Help monsters to catch the ghost by using <span>getElementById()</span> method.",
        instructions: `<ul>Keep in mind:
            <li>The method <span>getElementById() </span>catches the element whose id property matches the "string" you typed in brackets</li>
            <li>There is <span>no need for a # </span>to indicate element id</li>
            <li>Note! The method will only ever return one element because ID’s are unique and there can only be one with the same name on the page at a time</li>
            Try it yourself. Type your code to the console.</ul>`,
        example: '<b>EXAMPLE: </b><span>document.getElementById("elements_id");</span>',
        default_input: 'const enemy = document.getElementById()',
        user_input: '"scary_ghost"',
        expected_output: 'const enemy = document.getElementById("scary_ghost")'
    },
    {
        level: 2,
        elements: [
            {
                id: 1
            },
            {
                id: 2
            }
        ],
        task_description: "",
        instructions: "",
        default_input: "",
        user_input: "",
        expected_output: ""
    },
    {
        level: 3,
        elements: [
            {
                id: 1
            },
            {
                id: 2
            }
        ],
        task_description: "",
        instructions: "",
        default_input: "",
        user_input: "",
        expected_output: ""
    },
    {
        level: 4,
        elements: [
            {
                id: 1
            },
            {
                id: 2
            }
        ],
        task_description: "",
        instructions: "",
        default_input: "",
        user_input: "",
        expected_output: ""
    },
    {
        level: 5,
        elements: [
            {
                id: 1
            },
            {
                id: 2
            }
        ],
        task_description: "",
        instructions: "",
        default_input: "",
        user_input: "",
        expected_output: ""
    }
];