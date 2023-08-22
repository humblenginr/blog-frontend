/** @jsxImportSource react */
import { CodeBlock, a11yDark } from "react-code-blocks";
import { qwikify$ } from '@builder.io/qwik-react';

function CB(props: { text: string, language: string }) {
  return <CodeBlock
    // @ts-ignore
    text={props.text}
    language={props.language}
    theme={a11yDark}
    wrapLines={true}
    showLineNumbers={false}
    codeBlock
  />;
}

export const QCodeBlock = qwikify$(CB);
