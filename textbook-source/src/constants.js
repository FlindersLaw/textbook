// Global constants used throughout the site

// Our teaching docassemble server
export const flinders_da_server_url = 'https://flinders.docassemble.edu.au';
export const flinders_da_server_name = 'Docassemble server';

// Official Docassemble website URLs
export const da_website_url = 'https://docassemble.org';
export const da_manual_url = da_website_url + '/docs.html';
export const da_manual_root = da_website_url + '/docs';
export const da_website_name = 'Docassemble Website';
export const da_manual_name = 'Docassemble Manual';

// GitHub - you never know, we may move to an enterprise server
// one day!
export const github_server_url = 'https://github.com';
export const github_server_name = 'GitHub';

// Docassemble variable panel colours
export const da_undeclared_variable = '#BB2D3B';
export const da_declared_variable = '#0B5ED7';
export const da_unused_variable = '#FFCA2C';

// Docassemble save, save and run button colours
export const da_save_prop = 'save';
export const da_save_and_run_prop = 'snr';
export const da_button_map = {
    [da_save_prop] : {
        button_colour: '#0D6EFD',
        text_colour  : '#fff',
        button_text  : 'Save'
    },
    [da_save_and_run_prop] : {
        button_colour: '#FFCA2C',
        text_colour  : '#000',
        button_text  : 'Save and Run'

    }
}