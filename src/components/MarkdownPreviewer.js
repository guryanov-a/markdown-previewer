import React, { Component } from 'react';
import marked from 'marked';
import styled from 'styled-components';
import dedent from 'dedent';

marked.setOptions({
  xhtml: true,
  breaks: true,
});

// for freecodecamp.com test suite
window.marked = marked;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 200px);
  grid-gap: 30px;
`;

const Input = styled.textarea`
  width: 100%;
  height: 100%;
`;

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);

    let defaultText = dedent`
      # Heading 1

      ## Heading 2

      [link](https://www.google.com)

      \`code\`

      \`\`\`
      code block
      \`\`\`

      * list item 1
      * list item 2

      > blockquote

      ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text")

      **bold text**
    `;

    this.state = {
      input: defaultText,
      output: marked(defaultText),
    };
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value,
      output: marked(e.target.value),
    });
  }

  render() {
    return (
      <Wrapper>
        <div>
          <Input id="editor" value={this.state.input} onChange={this.handleChange}></Input>
        </div>
        <div id="preview" dangerouslySetInnerHTML={{ __html: this.state.output}}></div>
      </Wrapper>
    );
  }
  
  componentDidMount() {
    const $script = require('scriptjs');

    // freecodecamp test suite
    $script('https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js');
  }
}

export default MarkdownPreviewer;
