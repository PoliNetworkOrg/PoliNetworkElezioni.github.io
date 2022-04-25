<template>
  <div>
    <div class="intestazioneLista">
      <div>
        <h2>{{ item.name }}</h2>
        <div v-if="showIfFromPolimiOrNot">
          <h3 v-if="fromPolimi" class="fromPolimi">✅ {{ $t('Presente al PoliMi') }}</h3>
          <h3 v-if="!fromPolimi" class="notFromPolimi">❌ {{ $t('Non presente al PoliMi') }}</h3>
        </div>
      </div>

      <div class="descrizioneFrameSenatoCdA">
        <span>
          {{ item.desc }}
        </span>
      </div>
    </div>
    <div class="tabCandidati">
      <LayoutFrame
        v-for="candsenato in item.candidati"
        :key="candsenato.id"
        class-param="col-md-6"
        style-param="margin: auto;"
      >
        <div>
          <ListeCandidato :cand="candsenato" :url-lista="item.linkLista" />
        </div>
      </LayoutFrame>
    </div>

    <div style="padding: 10px">&nbsp;</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
    fromPolimi: {
      type: Boolean,
      default: true,
    },
    showIfFromPolimiOrNot: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
.intestazioneLista {
  height: 40vh;
}

.descrizioneFrameSenatoCdA {
  font-size: calc(1px + 1rem);
  color: black;
  padding: calc(1px + 1vw);
  margin: auto;
  width: 100%;
  max-width: calc(70px + 15rem + 40vw);
  padding-left: calc(1vw + 1px + 0.07rem);
  padding-right: calc(1vw + 1px + 0.07rem);
  padding-bottom: calc(0.3rem + 6px);
}

.tabCandidati {
  display: flex;
  flex-wrap: wrap;
}

.fromPolimi {
  color: green;
}

.notFromPolimi {
  color: red;
}
</style>
