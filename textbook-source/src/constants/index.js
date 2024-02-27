// Global constants used throughout the site

// Our teaching docassemble server
export const flinders_da_server_url = 'https://docassemble.flinders.edu.au';
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

// Topic repository
export const github_topic_repo = github_server_url + '/LLAW3301';
// Teaching code repo
export const github_teaching_code = github_topic_repo + '/docassemble-LLAW3301TeachingCode';

// Docassemble variable panel colours
export const da_undeclared_variable = '#BB2D3B';
export const da_declared_variable = '#0B5ED7';
export const da_unused_variable = '#FFCA2C';

// Docassemble save, save and run button colours
// These are for calling buttons
export const da_continue_prop = 'continue';
export const da_download_prop = 'download';
export const da_delete_prop = 'delete';
export const da_exit_prop = 'exit';
export const da_restart_prop = 'restart';
export const da_save_prop = 'save';
export const da_save_and_run_prop = 'snr';
// These are the colours
const da_btn_primary_bg = '#0D6EFD';
const da_btn_primary_fg = '#fff';
const da_btn_warning_bg = '#FFCA2C';
const da_btn_warning_fg = '#000';
const da_btn_danger_bg  = '#BB2D3B';
const da_btn_danger_fg  = '#fff';
export const da_button_map = {
    [da_save_prop] : {
        button_colour: da_btn_primary_bg,
        text_colour  : da_btn_primary_fg,
        button_text  : 'Save'
    },
    [da_continue_prop] : {
        button_colour: da_btn_primary_bg,
        text_colour  : da_btn_primary_fg,
        button_text  : 'Continue'
    },
    [da_save_and_run_prop] : {
        button_colour: da_btn_warning_bg,
        text_colour  : da_btn_warning_fg,
        button_text  : 'Save and Run'
    },
    [da_restart_prop] : {
        button_colour: da_btn_warning_bg,   // Same as Save and Run but store as separate record for clarity
        text_colour  : da_btn_warning_fg,
        button_text  : 'Restart'
    },
    [da_download_prop] : {
        button_colour: '#0DCAF0',
        text_colour  : '#000',
        button_text  : 'Download',

    },
    [da_delete_prop] : {
        button_colour: da_btn_danger_bg,
        text_colour  : da_btn_danger_fg,
        button_text  : 'Delete'
    },
    [da_exit_prop] : {
        button_colour: da_btn_danger_bg,
        text_colour  : da_btn_danger_fg,
        button_text  : 'Exit'
    }
}

// Constants for DisplayImage. 
// Border styles
export const DI_shadow_block = 'disb';
export const DI_inline_shadow = 'diis';
export const DI_border_styles = {
    [DI_shadow_block]: {
        borderRadius: '5px',
        display: 'block',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.25)',
        marginLeft: '20px'
    },
    [DI_inline_shadow] : {
        borderRadius: '5px',
        boxShadow: '0px 2px 5px rgba(0,0,0,0.25)'
    }
}