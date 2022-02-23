<script>
  import Navbar from './Navbar.svelte';
  import InfoSection from './InfoSection.svelte';
  import ImageSection from './ImageSection.svelte';
  import Footer from './Footer.svelte';
</script>

<main>
  <div id = "top">
  <Navbar />
  <div>
    <div id='background'/>
    <div id='container'>
      <h1>Welcome to SvelteStorm</h1>
      <div class = 'space'>
      <h2 id ='paragraph'>A Svelte IDE</h2>
      <h3 id ='paragraph'>Embrace the Storm.</h3> 
    </div> 
  </div>
  </div>
  </div>
  <InfoSection />  
  <ImageSection />
  <Footer />
</main> 

 <style> 
/* this was needed to reset the 8px padding that shows up in the Chrome browser!!! */
  :global(*, body) {
    margin: 0;
    padding: 0;
  }

  #top{
    background-color: rgba(226, 232, 240);
   /* background-image: url(https://i.imgur.com/9b4XNhI.png),linear-gradient(rgba(162, 187, 218, 0.75),rgba(78, 84, 116, 0.5)); */
  } 

  main {
		text-align: center;
		margin: 0 auto;
	}

  h1{
    overflow: hidden;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
    animation: typing 5s steps(40, end);
    color: rgba(55, 67, 80, 0.836); 
    font-size: 50px;
    font-family:'lato', sans-serif;
  }

  #paragraph {
    color: rgba(55, 67, 80, 0.836); 
    text-align: center;
    font-size: 30px;
    font-family:'lato', sans-serif;
    letter-spacing: .15em; 
  }

  #background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-color: rgba(226, 232, 240);
    /* background-image: url(https://i.imgur.com/9b4XNhI.png),linear-gradient(rgba(186, 194, 204, 0.75),rgba(36, 38, 43, 0.5)); */
    background-blend-mode: overlay;   
  }

  #container {
    color: rgba(28, 28, 36, 0.678); 
    position: relative;
    padding-top: 130px;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

  @keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
/* @keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
} */
</style>