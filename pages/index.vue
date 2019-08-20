<template>
  <div class="page-wrapper">
    <header title="Visualisation for Future">
      <hgroup class="logo"><h1><span>Vis for</span><br />Future</h1></hgroup>
      <img src="~/assets/map.png" alt="Vis for Future logo" />
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
        <li><strong>innovative:</strong> The data visualization employs original and creative ways of representing the complexities of climate change and its impacts.</li>
        <li><strong>understandable:</strong> The visual encodings are comprehensible for the intended audience and their interaction design is inviting its use.</li>
        <li><strong>actionable:</strong> The visualization offers insights that can directly inform and encourage personal and/or political transformations.</li>
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
        <li><strong>20 Aug:</strong> Call is launched</li>
        <li><strong>05 Sep:</strong> Jury is published</li>
        <li><strong>20 Sep:</strong> Submissions due</li>
        <li><strong>23 Sep:</strong> All projects published</li>
        <li><strong>27 Sep:</strong> Winners announced</li>
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
			<p>If you have any questions, feel free to contact us: <a href="&#0109;&#097;&#0105;&#0108;&#0116;&#0111;&#058;&#0118;&#0102;&#0102;&#064;&#0102;&#0104;&#045;&#0112;&#0111;&#0116;&#0115;&#0100;&#097;&#0109;&#046;&#0100;&#0101;">&#0118;&#0102;&#0102;&#064;&#0102;&#0104;&#045;&#0112;&#0111;&#0116;&#0115;&#0100;&#097;&#0109;&#046;&#0100;&#0101;</a></p>
    </section>
    <footer>
			<p>
				<a href="https://uclab.fh-potsdam.de"><img alt="UCLAB logo" style="width:8rem;" src="~/assets/uclab.svg" /></a>
				<a href="https://www.fh-potsdam.de"><img alt="FHP logo" style="width:12rem; margin:.75rem 1.5rem;" src="~/assets/fhp.svg" /></a>
			</p>
      <p>
				<a href="https://www.fh-potsdam.de/datenschutzhinweis/">Privacy policy</a><br>
				<a href="https://www.fh-potsdam.de/impressum/">Imprint</a>
			</p>
    </footer>
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

    .logo {
      // max-width: 500px;
      margin-bottom: $spacing;

      span {
        letter-spacing: -0.01em;
      }
    }
  }
</style>
