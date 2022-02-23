<div id='navbar'>
  <div class='flex'>
    <div>
      <span>SVELTESTORM</span>
    </div>
    <div class='flex'>
      <ul class='flex'>
        <li>
          <a href="https://www.linkedin.com/company/svelte-storm"><button>MEDIUM</button></a>
          <!-- <a href='https://www.linkedin.com/company/svelte-storm'>L</a> -->
        </li>
        <li>
          <a href="https://www.linkedin.com/company/svelte-storm"><button>LINKEDIN</button></a>
          <!-- <a href='https://www.linkedin.com/company/svelte-storm'>L</a> -->
        </li>
        <li>
          <a href="https://github.com/open-source-labs/SvelteStorm"><button>GITHUB</button></a>
          <!-- <a href='https://github.com/open-source-labs/SvelteStorm'>G</a> -->
        </li>  
        <li>
          <button>DOWNLOAD</button>
        </li>
      </ul>
      <div>
        <!-- <img src='../public/download-button.png'/> -->
      
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

  button {
    color: rgba(22, 22, 29, 0.753); 
    padding: 7px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 5px;
  }

</style>