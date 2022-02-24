<div>
  <div class='section flex even'>
    <div class='width'>
      <img id = 'sveltestorm' src='https://i.imgur.com/ALjdtDB.gif'/>
    </div>
    <div class='width'>
      <h1 id= "header">How to Download</h1>
      <p id ="paragraph">
        SvelteStorm is unbelievably easy to use and install! All you have to do is hit download for your Mac (M1 Chip specific) or Linux machine. For alternate devices, head over to our main repo on GitHub. All you have to do is fork, clone and npm install our lovely IDE. Happy Coding!
      </p>
    </div>
  </div>
  <div class='section flex odd'>
    <div class='width'>
      <h1 id= "header">Browser Window</h1>
      <p id = "paragraph">
        The tedious act of opening up a separate browser and entering your localhost port is not an issue when creating applications in SvelteStorm! SvelteStorm contains a built-in browser window which allows developers to view their code and their rendered application all in one, central location.
      </p>
    </div>
    <div class='widthText'>
      <img id = 'sveltestorm' src='https://i.imgur.com/uh6wEtK.gif' />
    </div>
  </div>
  <div class='section flex even'>
    <div class='widthText'>
      <img id = 'sveltestorm' src='https://i.imgur.com/ALjdtDB.gif' />
    </div>
    <div class='width'>
      <h1 id="header">Code Editor</h1>
      <p id = "paragraph">
        Built using CodeMirror, SvelteStorm's code editor automatically completes keywords, contains bracket pairing and uses a lovely dracula dark-mode theme to make the coding experience even more enjoyable. 
      </p>
    </div>
  </div>
  <div class='section flex odd'>
    <div class='width'>
      <h1 id="header">Terminal</h1>
      <p id = "paragraph">
        SvelteStorm's fully functioning terminal welcomes developers to build, commit and cd to their hearts' content! A simplistic, clean design, the bash shell terminal is the perfect place to run all your commands.
      </p>
    </div>
    <div class='widthCode'>
      <img src='https://i.imgur.com/Br0TnuE.gif' />
    </div>
  </div>
</div>

<style>

    #paragraph{
    font-family:'lato', sans-serif;
    font-size: 20px;
    color: rgba(55, 67, 80, 0.836); 
  }
  #header{
    font-family:'lato', sans-serif;
    font-size: 30px;
    color: rgba(55, 67, 80, 0.836); 
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .section {
    height: 500px;
  }
  .even {
    background-color: rgba(226, 232, 240);
    width: 100%;
  }
  img {
    height: 400px;
    border-radius: 10px;
    box-shadow: 5px 5px 25px rgb(185, 180, 180);
  }
  .width {
    width: 30%;
    padding-left: 230px;
    padding-right: 50px;
  }

  .widthText{
    width: 30%;
    padding-left: 100px;
    padding-right: 50px; 
  }

  .widthCode{
    width: 30%;
    padding-left: 50px;
    padding-right: 350px;  
  }

</style>