<template>
  <!-- Page Content -->
  <div>
    <LayoutNavigationBar :language="$i18n.locale" />
    <div style="padding-top: calc(20px + 0.5vh + 0.5rem); width: 100%">
      <div class="container2">
        <div class="container6">
          <!-- Jumbotron Header -->
          <header class="my-4">
            <div style="text-align: left">
              <span class="contattiTitle">{{ $t('Storia') }} 📑</span>
              <div style="padding: 5px"></div>
            </div>
            <div style="text-align: left">
              <div style="padding: 5px"></div>
              <ul>
				<li>
					<h4>{{ $t("Elezioni CNSU 2022") }}</h4>
					{{ $t("Risultati:") }}
                  <ul style="padding-top: 5px">
                    <li>
                      <a
                        href="/files/2022/it/esiti.pdf"
                        >{{ $t('Risultati') }}</a
                      >
                    </li>
                  </ul>
				</li>
                <li>
                  <h4>{{ $t("Elezioni maggio 2021") }}</h4>
                  {{ $t("Programmi:") }}
                  <ul style="padding-top: 5px">
                    <li>
                      <a href="/files/2021/it/Lista_Aperta.pdf">Lista Aperta</a>
                    </li>
                    <li>
                      <a href="/files/2021/it/Svoltastudenti.pdf"
                        >Svoltastudenti</a
                      >
                    </li>
                    <li>
                      <a href="/files/2021/it/Studenti_Indipendenti.pdf"
                        >Studenti Indipendenti</a
                      >
                    </li>
                    <li>
                      <a href="/files/2021/it/La_Terna_Sinistrorsa.pdf"
                        >La Terna Sinistrorsa</a
                      >
                    </li>
                  </ul>

                  {{ $t("Risultati:") }}
                  <ul style="padding-top: 5px">
                    <li>
                      <a
                        href="/files/2021/it/Scrutinio_complessivo_-_Elezioni_Studentesche_2021.pdf"
                        >{{ $t('Risultati scrutinio complessivo') }}</a
                      >
                    </li>
                    <li>
                      <a href="/files/2021/it/Elenco_eletti_2021.pdf"
                        >{{ $t('Rappresentanti eletti') }}</a
                      >
                    </li>
                  </ul>
                  {{ $t("Altro:") }}
                  <ul style="padding-top: 5px">
                    <li>
                      <a href="./../2021/">{{ $t('Pagina dedicata') }}</a>
                    </li>
                    <li>
                      <a href="./../2021/dibattito/">{{ $t('Debate') }}</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </header>
        </div>
      </div>
    </div>

    <!-- /.container -->

    <LayoutFooter :language="$i18n.locale" />
  </div>
</template>

<style scoped>
:root {
  --mainColor: #ff9800;
}

.containerNavBar {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  color: #545454;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fff;
  padding-right: 15px;
  padding-left: 15px;
}

.nav-link {
  text-align: center;
}

.nav-item {
  padding-right: 50px;
  padding-left: 50px;
  font-size: 1.2em;
}

.navbar {
  border-bottom: 1px solid #545454;
}

.testoCentrale {
  max-width: 60%;
  margin-left: auto;
  margin-right: auto;
}

.listTile {
  width: 450px;
  height: 200px;
  display: flex;
  padding-left: calc(1px + 0.5rem);
  padding-right: calc(1px + 0.5rem);
}

.contattiTitle {
  font-size: calc(0.3vw + 2rem + 5px);
}

.li {
  padding-top: calc(15px + 0.2rem);
  padding-bottom: calc(15px + 0.2rem);
}

.questionSpan {
  font-size: calc(0.16vw + 0.95rem + 4px);
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: black;
  margin-top: calc(3px + 0.1rem);
  margin-bottom: calc(3px + 0.1rem);
  padding-top: calc(3px + 0.1rem);
  padding-bottom: calc(3px + 0.1rem);
}

.answerSpan {
  font-size: calc(0.16vw + 0.7rem + 3px);
  margin-top: calc(3px + 0.1rem);
  margin-bottom: calc(3px + 0.1rem);
  padding-top: calc(3px + 0.1rem);
  padding-bottom: calc(3px + 0.1rem);
}

.spacerQuestion {
  margin-top: calc(3px + 0.2rem);
  margin-bottom: calc(3px + 0.2rem);
  padding-top: calc(3px + 0.2rem);
  padding-bottom: calc(3px + 0.2rem);
}

.tableScuole {
  color: black;
  height: 100%;
  vertical-align: middle;
  width: 100%;
}

.scuole {
  margin: auto;
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

h1 {
  background: linear-gradient(
      to bottom,
      var(--mainColor) 0%,
      var(--mainColor) 100%
    )
    repeat-x 0 100%;
  background-size: 0px 0px;
  color: #000;
  text-decoration: none;
  transition: background-size 0.2s;
}

h1:hover {
  background-size: 4px 50px;
}

.imageList {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* SLIDER ON LIST IMAGE */
.cap-left {
  padding: 1px 1px 1px 1px;
  height: 100%;
  display: block;
  position: relative;
  float: left;
  overflow: hidden;
  margin: 0;
}

figcaption {
  position: absolute;
  background: white;
  background: rgba(0, 0, 0, 0.75);
  color: white;
  padding: 10px 20px;
  opacity: 0.6;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease;
  height: 100%;
  width: 100%;
}

figure:hover figcaption {
  opacity: 1;
}

figure:before {
  position: absolute;
  font-weight: 800;
  background: black;
  background: rgba(255, 255, 255, 0.75);
  text-shadow: 0 0 5px white;
  color: black;
  width: 24px;
  height: 24px;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  text-align: center;
  font-size: 14px;
  line-height: 24px;
  -webkit-transition: all 0.6s ease;
  -moz-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease;
  opacity: 0.75;
}

figure:hover:before {
  opacity: 0;
}

.cap-left:before {
  bottom: 10px;
  left: 10px;
}

.cap-left figcaption {
  bottom: 0;
  left: -100%;
}

.cap-left:hover figcaption {
  left: 0;
}

.cap-right:before {
  bottom: 10px;
  right: 10px;
}

.cap-right figcaption {
  bottom: 0;
  right: -30%;
}

.cap-right:hover figcaption {
  right: 0;
}

.cap-top:before {
  top: 10px;
  left: 10px;
}

.cap-top figcaption {
  left: 0;
  top: -30%;
}

.cap-top:hover figcaption {
  top: 0;
}

.cap-bot:before {
  bottom: 10px;
  left: 10px;
}

.cap-bot figcaption {
  left: 0;
  bottom: -30%;
}

.cap-bot:hover figcaption {
  bottom: 0;
}

@media (max-width: 768px) {
  .testoCentrale {
    max-width: 100% !important;
  }

  ul {
    padding-left: 5px;
  }
}
</style>
