import { component$ } from "@builder.io/qwik"
import { LuDownload } from "@qwikest/icons/lucide"

export const DownloadIcon = component$<{ title: string }>(() => {
  return (
    <a href="/resume.pdf" aria-label="Download resume pdf" target="_blank" class="link mr-4 text-xl">
      <LuDownload />
    </a>
  )
})
