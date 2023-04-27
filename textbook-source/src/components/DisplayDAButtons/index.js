// A modification of the <Higlight> component from the Docassemble manual
// and modified to display the docassemble save and save and run buttons
// in the textbook text.
import React from "react";
import * as Constants from '@site/src/constants.js';

export function DisplayDAButtons(props) {
    let button_props = {};
    if (props.button) {
        button_props = Constants.da_button_map[props.button.prop];
        return (
            <span
                style={{
                    backgroundColor: button_props.button_colour,
                    borderRadius: '2px',
                    color: button_props.text_colour,
                    padding: '0.2rem',
                }}
            >
                {button_props.button_text}
            </span>
        );
    } else {
        return null;
    }
}
