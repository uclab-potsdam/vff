<template>
  <div class="page-wrapper">
    <header>
      <div class="h1"><h1><span>Vis for</span> Future</h1></div>
      <p>
        Visualization can help make the climate crisis visible, tangible and understandable.<br />
        For the global climate strike the ᴜᴄʟᴀʙ is running an international visualization competition.<br />
        Hand in your climate visualization project that is</p>
        <ul>
          <li>innovative</li>
          <li>actionable</li>
          <li>understandable</li>
        </ul>
        <p>and win prizes up to 1000 Euro.
      </p>
    </header>
    <section>
      <h2>Enter the Competition</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.</p>
      <span class="btn">Submit visualisation</span>
    </section>
    <section>
      <h2>Judges</h2>
      <p>The list of judges will be anncounced by 4th September</p>
    </section>
    <section>
      <h2>Dates</h2>
      <ul>
        <li>20th August</li>
        <li>20th September</li>
        <li>27th September</li>
      </ul>
    </section>
    <section>
      <h2>Conditions</h2>
      <p>The conditions are the following</p>
    </section>
    <footer>
      <h2>Imprint</h2>
      <p>The Visualisation for Climate Competition is organised by the Urban Complexity Lab at the FH Potsdam</p>
    </footer>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .page-wrapper {
    margin: 10vh 0vh;
    min-height: 100vh;
    flex-direction: column;

    &.intro {
      min-height: 200vh;
    }

    .h1 {
      max-width: 500px;
      margin-bottom: $spacing;

      span {
        letter-spacing: -0.01em;
      }
    }
  }
</style>
