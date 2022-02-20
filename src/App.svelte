<script>
  import Navbar from './Navbar.svelte';
  import InfoSection from './InfoSection.svelte';
  import ImageSection from './ImageSection.svelte';
</script>

<main>
  <Navbar />
  <div>
    <div id='background'/>
    <div id='container'>
      <h1>Welcome!!!</h1>
      <p>A lot of text can go here.</p>
    </div>
  </div>
  <InfoSection />
  <ImageSection />
</main>

<style>
/* this was needed to reset the 8px padding that shows up in the Chrome browser!!! */
  :global(*, body) {
    margin: 0;
    padding: 0;
  }

  main {
		text-align: center;
		margin: 0 auto;
	}

  #background {
    position: absolute;
    top: 0;
    width: 100%;
    height: 50vh;
    background-size: cover;
    background-position: center;
    background-image: url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80), linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.5));
    background-blend-mode: overlay;   
  }

  #container {
    color: white;
    position: relative;
    padding-top: 130px;
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>