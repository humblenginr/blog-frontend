import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>
        Seedlings
      </h1>
      <p>
        When I am consuming content (reading an article, watching a video etc.), I get some insightful <em>ideas/thoughts</em>.
        I store these ideas in some form and attend to them whenever I get time, thereby making them grow. When a thought is born,
        it would be in it's most <em>abstract</em> form. As we keep nurturing it, it takes shape and becomes more and more <em>concretized</em>.
        <br />
        <br />
        These ideas are what I call <em>Seedlings.</em>
        <br />
        <br />
        This is an incomplete feature of this site. I intend to add functionalities that will allow me to post my seedlings here and allow others to be able to comment on them.
      </p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Seedlings - Nithish Karthik",
  meta: [
    {
      name: 'description',
      content: "Seedlings by Nithish Karthik",
    },
  ],
}
