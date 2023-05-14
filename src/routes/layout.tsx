import { Slot, component$ } from "@builder.io/qwik";
import { LuTwitter, LuMail, LuLinkedin, LuGithub } from "@qwikest/icons/lucide"

export default component$(() => {
  return (
    <>
      <main class="h-screen">
        <div class="bg-violet-700 text-white pb-7 pt-10">
          <div class="px-4 align flex flex-col">
            <a href="/" class="name text-5xl">
              Nithish Karthik
            </a>
            <div class="gray flex justify-between mt-7">
              <div id="nav-links" class="flex">
                <a href="/blogs" aria-label="Go to blogs page" id="nav-item-1" class="link mr-4">
                  Blogs
                </a>
                <a href="/seedlings" aria-label="Go to seedlings page">
                  <div id="nav-item-2" class="link mr-4">
                    Seedlings
                  </div>
                </a>
              </div>
              <div id="social" class="flex" aria-label="social media links">
                <a href="https://twitter.com/NithishKarthi11" aria-label="Follow me on twitter" target="_blank" id="nav-item-twitter" class="link mr-4 text-xl">
                  <LuTwitter />
                </a>
                <a href="mailto:nithishkarthik01@gmail.com" aria-label="Mail me" id="nav-item-mail" class="link mr-4 text-xl">
                  <LuMail />
                </a>
                <a href="https://www.linkedin.com/in/nithishkarthik/" aria-label="Follow me on LinkedIn" target="_blank" id="nav-item-linkedin" class="link mr-4 text-xl">
                  <LuLinkedin />
                </a>
                <a href="https://www.github.com/sudo-NithishKarthik/" aria-label="My github handle" target="_blank" id="nav-item-github" class="link mr-4 text-xl">
                  <LuGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div class="align py-8 px-4">
            <Slot />
          </div>
        </section>
      </main>
    </>
  )
})
