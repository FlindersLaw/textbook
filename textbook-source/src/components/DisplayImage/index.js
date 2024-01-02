// Display an image with a border and other decoration suitable
// for this textbook
import React from "react";
import * as Constants from '@site/src/constants';

/**
 * Display an image with a border and other decoration sutiable for this textbook
 * @param {string} imageURL - URL to image to display. Can be relative (eg: /img/...)
 *                            or external
 * @param {string} size     - A size in CSS syntax eg: '50%' or '25px'.  Default is
 *                            '100%'
 * @param {string} align    - Alignment to pass to css.align.  Default is 'center' 
 * @returns <img /> component
 */
export function DisplayImage(props) {
  const imageURL = props.imageURL;
  const size = props.size || "100%";
  const align = props.align || "center";
  const altText = props.altText || 'image';

  // We use this default style to display the image
  // TODO: This style should be moved to custom.css.
  const borderStyle = props.borderStyle || Constants.DI_shadow_block;
  let css = { ...Constants.DI_border_styles[borderStyle] };

  // Set the size and alignment
  css.maxWidth = size;
  css.float = align || 'center';

  // Set padding for the float if we're not centred
  if ( align === 'right' ) {
    css.marginLeft = '20px';
  } else if ( align === 'left' ) {
    css.marginRight = '20px';
  } else if ( align == 'center' ) {
    css.margin = '20px auto';
  }

 // Define returnValue so we can console.log() it for debugging
 // if necessary
  let returnValue = <img src={imageURL} alt={altText} style={css} />
  return returnValue;
}