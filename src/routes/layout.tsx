import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuTwitter, LuMail, LuLinkedin } from "@qwikest/icons/lucide"

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
                <a href="/blogs" id="nav-item" class="link mr-4">
                  Blogs
                </a>
                <Link href="/seedlings">
                  <div id="nav-item" class="link mr-4">
                    Seedlings
                  </div>
                </Link>
              </div>
              <div id="social" class="flex">
                <a href="https://twitter.com/NithishKarthi11" target="_blank" id="nav-item" class="link mr-4 text-xl">
                  <LuTwitter />
                </a>
                <a href="mailto:nithishkarthik01@gmail.com" id="nav-item" class="link mr-4 text-xl">
                  <LuMail />
                </a>
                <a href="https://www.linkedin.com/in/nithishkarthik/" target="_blank" id="nav-item" class="link mr-4 text-xl">
                  <LuLinkedin />
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
