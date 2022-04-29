<template>
  <div
    class="candidatoCard"
    :style="$device.isMobile ? 'height: 50vh !important;' : ''"
  >
    <a :href="urlLista">
      <div class="candidatoSV" style="text-align: center">
        <figure class="wow animated fadeInLeft">
          <img
            class="border-img img-responsive center-block immagineCandidato"
            :src="
              cand.imgUrl == null
                ? 'https://ui-avatars.com/api/?name=' +
                  cand.name.split(' ').join('+') +
                  '&size=512'
                : cand.imgUrl
            "
            style="width: 100%"
          />
        </figure>
        <div class="imgcaption" style="text-align: center">
          <strong class="nameCandidato">
            <div style="width: 100%">
              <span class="nameCandidatoFull">{{ cand.name }}</span>
            </div>
            <div v-if="cand.detto" style="width: 100%">
              <span class="text">
                {{
                  cand.detto == null
                    ? ""
                    : $t("Alternative valide sulla scheda:")
                }}
              </span>
              <br />
              <span class="nameDetto">
                {{ cand.detto }}
              </span>
            </div>
          </strong>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    cand: {
      type: Object,
      default: null,
    },
    urlLista: {
      type: String,
      default: null,
    },
  },
};
</script>

<style>
figure {
  margin-left: auto;
  margin-right: auto;
}

.animated {
  visibility: visible;
  animation-name: fadeInLeft;
  width: 100%;
  margin-bottom: calc(0.2rem);
  margin-top: calc(0.3rem);
}

.nameCandidatoFull {
  font-size: medium;
}

.nameDetto {
  font-size: small;
  color: #009ad7;
  font-style: italic;
}

.text {
  font-size: 8pt;
  color: black;
}

.candidatoCard {
  border: 1px solid black;
  border-color: rgba(0, 0, 0, 0.1);
  border-radius: calc(1px + 1rem);
  padding: calc(1px + 0.3rem);
  margin-bottom: 10px;
  height: 35vh;
}
</style>
