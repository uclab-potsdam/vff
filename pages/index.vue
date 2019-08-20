<template>
  <div class="page-wrapper">
    <header>
      <div class="h1"><h1><span>Vis for</span><br>Future</h1></div>
      <img src="~/assets/map.png"/>
    </header>
    <section>
      <p>
        From 20-27 September 2019, millions of people worldwide will join the young climate protesters in a <a href="https://globalclimatestrike.net">global climate strike</a> to fight for climate justice. To support their cause, we are launching an international competition to gather state-of-the-art visualizations of climate change that were created in the last three years. Winners will be selected by an international jury of climate scientists, communicators, and activists. All submissions including infographics, animations, and interactive visualizations will be listed on this website.
      </p>
    </section>
    <section class="submit">
      <span class="btn">Submit Visualization</span>
    </section>
    <section>
      <p>
        While climate change is a complex phenomenon with severe impacts for people and the environment, it is a human-made development, the trajectory of which can still be altered. The complexity of climate change requires new methods for making sense of scientific insights and communicating possible paths for action to various stakeholders and citizens. To better understand the dynamics of climate change and inform policy change, visualization is widely recognized as an indispensable tool for analysis and communication.
      </p>
      <p>
        Over the last few years a broad range of climate visualizations have already been created by scientists, journalists, designers, developers and artists, some of which were targeted at the public, while many are hidden in academic papers and reports requiring expert knowledge. Considering the severity and complexity of the climate crisis, we feel there is a need to up the game for visualization creators. With this competition we seek to put a spotlight on the ingenuity and impact that well-crafted data visualizations can have to communicate the causes and impacts of climate change and inform personal and political action.
      </p>
      <p>
        To take part in the competition, submit your climate visualization project that is
      </p>
      <ul>
        <li><b>innovative:</b> The data visualization employs original and creative ways of representing the complexities of climate change and its impacts.</li>
        <li><b>understandable:</b> The visual encodings are comprehensible for the intended audience and their interaction design is inviting its use.</li>
        <li><b>actionable:</b> The visualization offers insights that can directly inform and encourage personal and/or political transformations.</li>
      </ul>
      <p>
        The submission is simple: you share basic information about the visualization including title, description, project team, publication date, a weblink, and type (commercial, academic, journalistic, independent). If the project is not in English, a description of the visualization's content is necessary. After the submission deadline our international jury of experienced climate scientists, communicators, and activists will review the submissions according to above criteria, and choose the winners. Winners can earn prizes of up to 500 €.<p>
      </p>
    </section>
    <section class="submit">
      <span class="btn">Submit Visualization</span>
    </section>
    <section>
      <h2>Timeline</h2>
      <ul>
        <li><b>20 Aug:</b> Call is launched</li>
        <li><b>05 Sep:</b> Jury is published</li>
        <li><b>20 Sep:</b> Submissions due</li>
        <li><b>23 Sep:</b> All projects published</li>
        <li><b>27 Sep:</b> Winners announced</li>
      </ul>
    </section>
    <section>
      <h2>Conditions</h2>
      <ul>
        <li>the visualization should be about climate change and/or its consequences</li>
        <li>visualizations created by the organizers (ᴜᴄʟᴀʙ) are excluded from the competition</li>
        <li>projects can be submitted by teams, but we still need a single contact person</li>
        <li>multiple entries per person or team are permitted</li>
        <li>with submitting a project you're confirming to have it published on this website</li>
      </ul>
    </section>
    
    <section>
      <h2>Who are we</h2>
      <p>We are a <a href="http://uclab.fh-potsdam.de">visualization research group</a> at the <a href="https://www.fh-potsdam.de/">University of Applied Sciences Potsdam</a>. Our work revolves around data visualization with a particular focus on the challenges and questions arising from social, cultural, and technological transformations. While one of our recent projects focuses on climate change scenarios, we feel there is a broader need to contribute to the growing awareness and ongoing discussions about climate change via well-designed visualizations. Climate change poses new challenges for each and everyone of us and requires transformations in all sectors of our lives. With this competition, we hope to achieve an open process of knowledge transfer in which innovative visualizations inspire people to join in the climate movement and explore paths towards a more sustainable future.</p>
    </section>
    <!-- <footer>
      <h2>Imprint</h2>
      <p>The Visualisation for Climate Competition is organised by the Urban Complexity Lab at the FH Potsdam</p>
    </footer> -->
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/global";

  .page-wrapper {
    margin: 10vh $spacing / 2;
    min-height: 100vh;
    flex-direction: column;

    header {
      display: flex;
      flex-direction: column;
      // flex-wrap: wrap-reverse;
      justify-content: center;
      align-items: center;

      img {
        width: 500px;
        height: auto;
        margin: -$spacing * 1.6 0 $spacing / 2;
        max-width: 80%;
        z-index: -1;
      }
    }

    &.intro {
      min-height: 200vh;
    }

    .submit {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    p {
      hyphens: auto;
    }

    p + p, ul + p {
      margin-top: 1em;
    }

    .h1 {
      // max-width: 500px;
      margin-bottom: $spacing;

      span {
        letter-spacing: -0.01em;
      }
    }
  }
</style>
