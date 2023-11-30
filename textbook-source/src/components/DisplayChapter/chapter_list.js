/**
 * Maps chapter keys to numerical and word representations to display.
 * The chapter key should match the name of the folders with chapter content
 * in /docs/textbook.
 * 
 * - the map key should match to the chapter name as above
 * - each element should contain:
 *  - 'number' - represent chapter as number
 *  - 'word'   - represent chapter as word
 * Always enter the 'word' as lower case.  Display in upper or all caps will be managed
 * by the component
 * 
 */
export const chapter_list = {
        // The map key
        'chapter_01' : {
            number: '1',
            word : "one",  // Always enter as lower case.  Will sort out formatting in the method
        },
        'chapter_02' : {
            number: '2',
            word : "two",
        },
        'chapter_03' : {
            number: '3',
            word : "three",
        },
        'chapter_04' : {
            number: '4',
            word : "four",
        },
        'chapter_05' : {
            number: '5',
            word : "five",
        },
        'chapter_06' : {
            number: '6',
            word : "six",
        },
    }

export default chapter_list;