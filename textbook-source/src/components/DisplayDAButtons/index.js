// A modification of the <Higlight> component from the Docassemble manual
// and modified to display the docassemble save and save and run buttons
// in the textbook text.
import React from "react";
import * as Constants from '@site/src/constants';

export function DisplayDAButtons(props) {
    if (props.button) {
        let button_props = Constants.da_button_map[props.button];
        let button_text = props.button_text || button_props.button_text;
        return (
            <span
                style={{
                    backgroundColor: button_props.button_colour,
                    borderRadius: '6px',
                    color: button_props.text_colour,
                    padding: '6px',
                }}
            >
                {button_text}
            </span>
        );
    } else {
        return null;
    }
}
