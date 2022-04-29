<template>
  <div>
    <LayoutNavigationBar :language="$i18n.locale" />

    <div style="padding-top: calc(50px + 1vh + 1rem); width: 100%">
      <div class="container2">
        <div class="container6">
          <header class="my-4">
            <h2 style="padding-bottom: 1rem" class="container4">
              {{ $t('Curiosità') }}
            </h2>
            <p>
              {{ $t('Questo sito, realizzato da ') }}
              <a :href="'https://polinetwork.org/' + $i18n.locale">PoliNetwork</a>
              {{ $t(', ha l\'obiettivo di rendere più chiaro possibile agli studenti programmi e candidati.') }}
            </p>

            <p>
              {{ $t('Il sito è stato realizzato in collaborazione con le stesse liste di rappresentanza candidate, le quali hanno fornito testi ed immagini.') }}
            </p>

            <p>
              {{ $t('L\'ordine delle liste visualizzato è ') }}
              <i>{{ $t('casuale') }}</i>
              {{ $t(' in ogni pagina, ciò significa che se ricaricate la pagina, l\'ordine, con buona probabilità, cambierà.') }}
            </p>

            <p>
              {{ $t('Se avete ulteriori dubbi sul voto, ad esempio per le modalità dello stesso, visitate la nostra ') }}
              <a href="../istruzioni/">{{ $t('pagina dedicata') }}</a> {{ $t('(oppure quella') }} <a href="../2021/istruzioni/">{{ $t('specifica per il 2021') }}</a>).
            </p>

            <p>
              {{ $t('Se avete necessità di contattarci, specie in caso di errori, segnalazioni, suggerimenti, vi ricordiamo la pagina') }}
              <a href="../contatti/">{{ $t('contatti') }}</a>.
            </p>
          </header>
        </div>
      </div>
    </div>

    <LayoutFooter :language="$i18n.locale" />
  </div>
</template>
