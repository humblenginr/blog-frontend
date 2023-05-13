import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>
        Archives
      </h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Archives - Nithish Karthik",
  meta: [
    {
      name: 'description',
      content: "Nithish Karthik's archive blogs",
    },
  ],
}
