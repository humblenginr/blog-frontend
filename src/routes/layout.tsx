import { Slot, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <main class="h-screen">
        <div class=" bg-violet-700 text-white pb-7 pt-10">
          <div class="align flex flex-col">
            <div class="name text-5xl">
              Nithish Karthik
            </div>
            <div class="gray flex justify-between mt-7">
              <div id="nav-links" class="flex">
                <Link href="/blogs">
                  <div id="nav-item" class="opacity-70 hover:opacity-100 ease-in duration-100 cursor-pointer mr-4">
                    Blog
                  </div>
                </Link>
                <Link href="/archives">
                  <div id="nav-item" class="opacity-70 hover:opacity-100 ease-in duration-100 cursor-pointer mr-4">
                    Archives
                  </div>
                </Link>
                <Link href="/seedlings">
                  <div id="nav-item" class="opacity-70 hover:opacity-100 ease-in duration-100 cursor-pointer mr-4">
                    Seedlings
                  </div>
                </Link>
              </div>
              <div id="social"></div>
            </div>
          </div>
        </div>
        <section>
          <div class="align pt-8">
            <Slot />
          </div>
        </section>
      </main>
    </>
  )
})
