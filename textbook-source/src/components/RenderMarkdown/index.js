import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx'; // For MDX rendering

const RenderMarkdown = ({ content }) => {
  // The MDXProvider allows you to customize the rendering of MDX components
  const components = {};

  return (
    <MDXProvider components={components}>
      <MDXRenderer>{content}</MDXRenderer>
    </MDXProvider>
  );
};

export default RenderMarkdown;
