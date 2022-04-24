<template>
  <div>
    <div class="titoloFrameSenatoCdA">
      <h2>{{ item.name }}</h2>
    </div>
    <div class="descrizioneFrameSenatoCdA">
      <span>
        {{ item.desc }}
      </span>
    </div>

    <div style="display: flex; flex-wrap: wrap">
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
  },
};
</script>

<style>
.titoloFrameSenatoCdA {
  width: 100%;
  height: 12vh;
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
  height: 20vh;
}
</style>
