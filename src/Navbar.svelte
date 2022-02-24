<div id='navbar'>
  <div class='flex'>
    <div>
      <div class = 'flex'>
        <div class='flex'>
        <ul class='flex'>
        <li>
          <a href="https://s3.amazonaws.com/svelte-storm.com/sveltestorm-v2.0_2.0_amd64.zip" download>
            <img id ="cloud" src="https://i.imgur.com/to9s4Fn.png" height = "60" width ="150">
          </a>
       </li> 
  </ul>
  </div>
  </div>
    </div>
    <div class='flex'>
      <ul class='flex'>
        <li >
          <a href="https://medium.com/@sveltestorm2.0/sveltestorm-sveltes-first-ide-8b9d99b5d51"><input type="image" src="https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png" name="submit" width="50" height="50" alt="submit"/></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/svelte-storm"><input type="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJizK-O7rjmwzro2mvul2xv-Uw1AuPEQajqA&usqp=CAU" name="submit" width="50" height="50" alt="submit"/></a>
        </li>
        <li>
          <a href="https://github.com/open-source-labs/SvelteStorm"><input type="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9dNoDM8r9dEAJVTNRHbzuP7H_MoNk09Q2YAsMcQMFTGhxIkelG3IXpt6YgHg6Iivr25k&usqp=CAU" name="submit" width="50" height="50" alt="submit"/></a>
        </li>  
        <li>
        </li>
      </ul>
      <div>
      </div>
    </div>
  </div>
</div>


<style>
  #navbar {
    color:rgba(55, 67, 80, 0.836); 
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 10%;
  }
  .flex {
    padding: 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    list-style-type: none;
  }

  li {
    padding-left: 10px;
    padding-right: 10px;
  }

  li a {
    color: white;
  }

  #download {
    border-radius: 15px;
    box-shadow: 5px 5px 25px rgb(163, 162, 162);

  }
 
  #cloud{
    float: left;
    left: 250;
    border-radius: 15px;
    box-shadow: 5px 5px 25px rgb(163, 162, 162);
  }

  input { 
    border-radius: 30px;
  }
  *, *:before, *:after {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

</style>