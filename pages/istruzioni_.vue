<template>
  <div>
    <LayoutNavigationBar :language="$i18n.locale" />

    <!-- Page Content -->
    <div class="container2">
      <!-- Jumbotron Header -->
      <header class="my-4">
        <div style="text-align: center">
          <span class="contattiTitle">
            <span>{{ $t('Istruzioni al voto') }}</span>
          </span>
          <br />
          <br />
        </div>

        <div style="margin: 3px; padding-top: 1rem">
          <div style="text-align: center">
            <a class="linkEligo" href="../piattaformavoto">
              <span>🌐 {{ $t('Link alla piattaforma di voto \'Eligo\'') }}</span>
            </a>
          </div>
          <div style="text-align: center">
            <a class="linkEligo" href="https://youtu.be/lX5bhxXr_fI">
              <span>📽 {{ $t('Video con istruzioni al voto') }}</span>
            </a>
          </div>
        </div>
          <li class="li">
            <span class="questionSpan">
              <span>{{ $t('Ho ulteriori dubbi') }}</span>
            </span>
            <br class="spacerQuestion" />
            <span class="answerSpan">
              <li>
                <span>
                  {{ $t('Visita il') }}
                  <a href="https://www.polimi.it/en/the-politecnico/organization/university-bodies/student-representatives/university-student-elections/">
                    {{ $t('sito ufficiale') }}
                  </a>
                  {{ $t('dedicato alle elezioni studentesche del Politecnico di Milano') }}
                </span>
              </li>
              <li>
                <span>
                  {{ $t('Visita la nostra pagina') }}
                  <a href="../contatti/"> {{ $t('contatti') }}</a>
                </span>
              </li>
          </span>
        </li>
      </header>
    </div>
    <!-- /.container -->

    <LayoutFooter :language="$i18n.locale" />
  </div>
</template>

<style>
.contattiTitle {
  font-size: calc(0.3vw + 2rem + 5px);
}

.linkEligo {
  font-size: calc(0.16vw + 0.95rem + 4px);
}

.li {
  padding-top: calc(15px + 0.2rem);
  padding-bottom: calc(15px + 0.2rem);
  text-align: center;
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
</style>
