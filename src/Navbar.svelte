<div id='navbar'>
  <div class='flex'>
    <span>SvelteStorm</span>
    <ul class='flex'>
      <li>
        <a href=''>Home</a>
      </li>
      <li>
        <a href=''>Info</a>
      </li>
    </ul>
    <button>Download</button>
  </div>
</div>


<style>
  #navbar {
    color: white;
    position: absolute;
    z-index: 50;
    width: 100%;
    height: 20%;
  }
  .flex {
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  ul {
  }

  li {
    
    padding: 2px;
  }

  li a {
    color: white;
  }

</style>