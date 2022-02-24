<section id='info'>
  <div class='container flex'>
    <div class='section-padding'>
      <div id = 'sectionflex' class='section flex'>
        <h1 id = "header">Browser Window</h1>
        <p id ="description">SvelteStorm's built-in browser window allows for developers to easily view their application without having to switch to a separate window! This feature increases efficiency and creates a smooth coding experience.</p>    
      </div>
    </div>
    <div class='section-padding middle'>
      <div id = 'sectionflex' class='section flex'>
        <h1 id = "header">State Management Window</h1>
        <p id = "description">Do you have trouble keeping track of your many states while building an application? Have no fear, SvelteStorm is here! Our state visualizer provides a clear and concise layout for developers to view and edit their state. </p>
      </div>
    </div>
    <div class='section-padding'>
      <div id = 'sectionflex' class='section flex'>
        <h1 id= "header">Quick and Easy Download</h1>
        <p id ="description">SvelteStorm is a distributable and with just a push of a button, developers can download SvelteStorm and hop right into the coding extravaganza. Follow the instructions below to try out SvelteStorm!</p>
      </div>
    </div>
  </div>
</section>

<style>
   #description{
   font-family:'lato', sans-serif;
   font-size: 14px;
   }
 #header{
    font-family:'lato', sans-serif;
 }

 #sectionflex{
   background-color: white;
   position:relative;
   z-index: 5;
 }


  #info {
    margin-top: 80px;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    height: 400px;
  }

  .section-padding {
    height: 190px;
    width: 20%;
    padding: 16px;
  }
  .middle {
    align-self: flex-start;
  }
  .section {
    color: rgba(28, 28, 36, 0.678); 
    padding: inherit;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    border-radius: 10px;
    box-shadow: 5px 5px 25px rgb(185, 180, 180);
  }
</style>