<template>
  <div>
    <LayoutNavigationBar :language="$i18n.locale" />
    <div style="padding: 2rem"></div>
    <div class="container">
      <div class="container2">
        <div class="container3">
          <div class="container4">
            <div class="container5">
              <span>
                {{ $t('La piattaforma di voto è solamente accessibile dai') }}
                <a href="https://www.polimi.it/servizi-online/"
                  >{{ $t('Servizi Online del Polimi') }}</a
                >.
              </span>
              <div style="padding: 0.5rem"></div>
              <span>
                {{ $t('Entra nella tua area personale dei servizi online e cerca') }}
                <b>"{{ $t('Votazioni Online') }}"</b> {{ $t('nella lista servizi.') }}
              </span>
              <div style="padding: 0.5rem"></div>
              <span>
                {{ $t('Clicca') }} <a href="../../istruzioni/">{{ $t('qui') }} </a>{{ $t('per tornare alle istruzioni di voto.') }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <LayoutFooter :language="$i18n.locale" />
  </div>
</template>