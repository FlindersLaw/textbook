/**
 * 
 * Add glossary items here.  This may get removed out to constants.js or
 * its own data file eventually but here will do for now.
 * Also for now, the map contains a key and a text value which is
 * what will be displayed.  I envisage this data structure will be 
 * expanded in future.
 */
export const glossary = new Map([
    ['assign', {
        text: 'assign',
        plural: 'assigns',
    }],
    ['block', {
        text: 'block',
        plural: 'blocks' }
    ],
    ['boolean', {
        text: 'boolean',
        plural: 'booleans'} ],
    ['brace', {
        text: 'brace',
        plural: 'braces' }
    ],
    ['bracket', {
        text: 'bracket',
        plural: 'brackets' }
    ],
    ['codeblock', {
        text: 'code block',
        plural: `code blocks` }
    ],
    ['css', {
        text: 'CSS',
    }],
    ['comment', {
        text: 'comment',
        plural: 'comments' }
    ],
    ['complexdatatype', {
        text: 'complex data type',
        plural: 'complex data types' }
    ],
    ['curlybrace', {
        text: 'curly brace',
        plural: 'curly braces' }
    ],
    ['datablock', {
        text: 'data block',
        plural: 'data blocks',
        description: 'Remember to include the term "variable name declaration" in this description' }
    ],
    ['datatype', {
        text: 'data type',
        plural: 'data types',
    }],
    ['datavalidation', {
        text: 'data validation',
    }],
    ['dictionary', {
        text: 'dictionary',
        plural: 'dictionaries'
    }],
    ['escapecharacter', {
        text: 'escape character',
        plural: 'escape characters'
    }],
    ['eventtag', {
        text: 'event tag',
        plural: 'event tags',
    }],
    ['field', {
        text: 'field',
        plural: 'fields'}
    ],
    ['fieldlabel', {
        text: 'field label',
        plural: 'field labels'}
    ],
    ['float', {
        text: 'float',
        plural: 'floats'}
    ],
    ['forloop', {
        text: "'for' loop",
        plural: "'for' loops"}
    ],
    [ 'function', {
        text: 'function',
        plural: 'functions' }
    ],
    [ 'ifstatement', {
        text: 'if statement',
        plural: 'if statements' }
    ],
    [ 'inputtype', {
        text: 'input type',
        plural: 'input type',
    }],
    [ 'integer', {
        text: 'integer',
        plural: 'integers',
    }],
    [ 'iteration', {
        text: 'iteration',
        plural: 'iterations',
    }],
    ['jinja', { text: 'jinja' }],
    [ 'list', {
        text: 'list',
        plural: 'lists'
    }],
    [ 'loop', {
        text: 'loop',
        plural: 'loops'
    }],
    ['mako', { text: 'mako' }],
    ['mandatory', { text: 'mandatory' }],
    ['mandatoryblock', {
        text: 'mandatory block',
        description: 'A block with the tag `mandatory: True` set. This indicates to Docassemble that this block must be executed',
        plural: 'mandatory blocks' }
    ],
    ['mandatoryquestionblock', {
        text: 'mandatory question block',
        plural: 'mandatory question blocks' }
    ],
    ['markdown', { text: 'markdown' }],
    ['method', { text: 'method', plural: 'methods' }],
    ['navbar', {
        text: 'navbar',
    }],
    ['parentheses', { text: 'parentheses' }],
    ['playground', { text: 'playground' }],
    ['python', { text: 'python' }],
    ['questionblock', {
        text: 'question block',
        plural: `question blocks` }
    ],
    ['reservedword', { 
        text: 'reserved word',
        plural: 'reserved words'
    }],
    ['squarebracket', {
        text: 'square bracket',
        plural: 'square backets' }
    ],
    ['string', {
        text: 'string',
        plural: 'strings' }
    ],
    ['subquestion', {
        text: 'subquestion',
        plural: 'subquestions'
    }],
    ['subquestionblock', {
        text: 'subquestion block',
        plural: `subquestion blocks` }
    ],
    ['table', {
        text: 'table',
        plural: 'tables' }
    ],
    ['tableblock', {
        text: 'table block',
        plural: 'table blocks' }
    ],
    ['variable', {
        text: 'variable',
        plural: 'variables' }
    ],
    [ 'value', {
        text: 'value',
        plural: 'values',
    }],
    ['yaml', {
        text: 'YAML',
    }],
]);

export default glossary;