<template>
  <div style="text-align: center">
    <LayoutNavigationBar :language="$i18n.locale" />
    <br />
    <br />
    <br />
    <!-- Page Content -->
    <div class="container3">
      <h2>Elezioni rappresentanti studenti</h2>
      <br />
      <br />
      <a href="./2022/">
        <h3>Elezioni CNSU 2022</h3>
        <img style="width: 100%;max-width: 40rem;padding: 5px;" src="/img/2022/cnsu.png" />
      </a>
      <br />
      <br />
      <br />
      <br />
      <div style="text-align: left; padding:1rem;">
        Passate:
        <ul>
          <li>
            <h6><a href="./2021/">Elezioni Rappresentanti studenti 2021</a></h6>
          </li>
        </ul>
      </div>
    </div>
    <LayoutFooter :language="$i18n.locale" />
  </div>
</template>


