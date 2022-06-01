<script>
  import { link } from "svelte-routing";
	import Navbar from "./Navbar.svelte";
  import Footer from './Footer.svelte';
  import Section from './Section.svelte';
 
</script>

<Navbar />
<main>
	<div class="relative pt-28 pb-48 flex content-center items-center justify-center min-h-screen-75">
    <div
      class="absolute top-0 w-full h-full bg-center bg-cover bg-gray-900"
    >
    </div>
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              Welcome to SvelteStorm
            </h1>
            <div class="mt-4 text-lg text-white">
              <h2>A Svelte IDE</h2>
              <h3>Embrace the Storm.</h3>
            </div>          
          </div>
        </div>
      </div>
    </div>
    <div
      class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
  </div>


  

  <section class="pb-20 bg-gray-100 -mt-24">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap">
        <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
              >
                <i class="fa-brands fa-chrome"></i>
              </div>
              <h6 class="text-xl font-semibold">Browser Window</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                SvelteStorm's built-in browser window allows for developers to easily view their application 
                without having to switch to a separate window! 
                This feature increases efficiency and creates a smooth coding experience.
              </p>
            </div>
          </div>
        </div>

        <div class="w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
              >
                <i class="fa-solid fa-window-maximize"></i>
              </div>
              <h6 class="text-xl font-semibold">State Management Window</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                Do you have trouble keeping track of your many states while building an application? 
                Have no fear, SvelteStorm is here! Our state visualizer provides a clear and concise 
                layout for developers to view and edit their state.
              </p>
            </div>
          </div>
        </div>

        <div class="pt-6 w-full md:w-4/12 px-4 text-center">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
          >
            <div class="px-4 py-5 flex-auto">
              <div
                class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
              >
                <i class="fa-solid fa-cloud-arrow-down"></i>
              </div>
              <h6 class="text-xl font-semibold">Quick and Easy Download</h6>
              <p class="mt-2 mb-4 text-blueGray-500">
                SvelteStorm is a distributable and with just a push of a button, 
                developers can download SvelteStorm and hop right into the coding extravaganza. 
                Follow the instructions below to try out SvelteStorm!
              </p>
            </div>
          </div>
        </div>
      </div>


      <div class="flex flex-wrap items-center mt-32">
        <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
          <div
            class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <i class="fa-solid fa-download text-xl"></i>
          </div>
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            How to Download
          </h3>
          <p
            class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600"
          >
          SvelteStorm is unbelievably easy to use and install! 
          All you have to do is hit download for your Mac (M1 Chip specific) or Linux machine.
          </p>
          <p
            class="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600"
          >
          For alternate devices, head over to our main repo on GitHub. 
          All you have to do is fork, clone and npm install our lovely IDE.
          </p>
          <p>
            Happy Coding!
          </p>
        </div>

        <div class="w-full md:w-6/12 px-4 mr-auto ml-auto">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-red-400"
          >
            <img
              alt="..."
              src="https://i.imgur.com/4fJCQZP.gif"
              class="max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <Section />

  <Footer />
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
