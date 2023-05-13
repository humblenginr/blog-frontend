import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>
        Seedlings
      </h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "Seedlings - Nithish Karthik",
  meta: [
    {
      name: 'description',
      content: "Seedlings of Nithish Karthik",
    },
  ],
}
