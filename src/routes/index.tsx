import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      Hello
    </>
  );
});

export const head: DocumentHead = {
  title: "Nithish's Blog",
  meta: [
    {
      name: 'description',
      content: "Nithish Karthik's blogging site",
    },
  ],
};
