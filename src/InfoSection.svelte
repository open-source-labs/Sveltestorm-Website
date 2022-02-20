<section id='info'>
  <div class='container flex'>
    <div class='section-padding'>
      <div class='section flex'>
        <h1>First section</h1>
        <p>Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.</p>
      </div>
    </div>
    <div class='section-padding middle'>
      <div class='section flex'>
        <h1>Second section</h1>
        <p>Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.</p>
      </div>
    </div>
    <div class='section-padding'>
      <div class='section flex'>
        <h1>Third section</h1>
        <p>Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!</p>
      </div>
    </div>
  </div>
</section>

<style>
  #info {
    margin-top: 220px;
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
    height: 250px;
    width: 20%;
    padding: 16px;
  }
  .middle {
    align-self: flex-start;
  }
  .section {
    color: grey;
    padding: inherit;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    border-radius: 10px;
    box-shadow: 5px 5px 25px rgb(185, 180, 180);
  }
</style>