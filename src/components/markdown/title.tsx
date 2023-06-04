import { component$ } from "@builder.io/qwik"


export const Title = component$<{ title: string }>(({ title }) => {
  return (
    <div class="text-4xl font-semibold text-slate-600 heading-font mb-4">
      {title}
    </div>
  )
})
