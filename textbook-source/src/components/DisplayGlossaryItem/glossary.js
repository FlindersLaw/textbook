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
    ['comment', {
        text: 'comment',
        plural: 'comments' }
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
    ['dictionary', {
        text: 'dictionary',
        plural: 'dictionaries' }
    ],
    ['field', {
        text: 'field',
        plural: 'fields'}
    ],
    ['fieldlabel', {
        text: 'field label',
        plural: 'field labels'}
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
    ['jinja', { text: 'jinja' }],
    [ 'list', {
        text: 'list',
        plural: 'lists' }
    ],
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
    ['parentheses', { text: 'parentheses' }],
    ['playground', { text: 'playground' }],
    ['python', { text: 'python' }],
    ['questionblock', {
        text: 'question block',
        plural: `question blocks` }
    ],
    ['reservedword', { text: 'reserved word' }],
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