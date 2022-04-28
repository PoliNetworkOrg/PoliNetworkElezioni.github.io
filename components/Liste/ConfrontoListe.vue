<template>
  <div>
    <LayoutNavigationBar :language="language" />
    <!-- Page Content -->
    <div class="container2">
      <!-- Jumbotron Header -->
      <div class="container7">
        <header class="jumbotron my-4 testoCentrale" style="border: none">
          <div style="margin: auto">
            <div style="text-align: center">
              <h2>
                <span>{{ $t("Elezioni rappresentanti degli studenti") }}</span>
              </h2>
              <br />
              <LayoutFrame v-for="item in organiConfronto" :key="item.id">
                <div>
                  <h4>{{ item.name }}</h4>
                  <blockquote>
                    {{ item.desc[$i18n.locale] }}
                  </blockquote>
                </div>
              </LayoutFrame>
            </div>
          </div>
        </header>
      </div>
      <!-- Page Features -->
      <div class="row text-center" id="listeContainer2" v-on:load="test2">
        <LayoutFrame
          class-param="col-md-3"
          v-for="item in liste"
          :key="item.id"
          :style-param="'max-width: 15%;flex: 1 4 25%;min-width: ' + ($device.isMobile ? '350px;' : '512px;')"
        >
          <a
            :href="
              item.linkLista.startsWith('https://')
                ? item.linkLista
                : '/' + language + item.linkLista
            "
          >
            <div class="card">
              <div>
                <div class="cap-left">
                  <div>
                    <img class="imageList" :src="item.imageUrlHorizontal" />
                  </div>
                  <div style="padding-top: 10px">
                    <div>
                      <LayoutFrame v-for="item2 in item.organi" :key="item2.id">
                        <ListeFrameSenatoCdA
                          :item="item2"
                          :fromPolimi="item.fromPolimi"
                          :showIfFromPolimiOrNot="showIfFromPolimiOrNot"
                        />
                      </LayoutFrame>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </LayoutFrame>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container -->
    <LayoutFooter :language="language" />
  </div>
</template>

<style>
.container2 {
  width: 100%;
  max-width: 100%;
  margin: auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  opacity: 0.5;
  justify-content: center;
}

.card {
  margin-bottom: 10px;
}

.imageList {
  width: 512px;
  height: 512px;
  margin-top: 10px;
}

.cap-left {
  width: 100%;
  display: block;
  padding: 0px;
}
</style>

<script>
export default {
  props: {
    liste: {
      type: Array,
      default: null,
    },
    organiConfronto: {
      type: Array,
      default: null,
    },
    language: {
      type: String,
      default: "it",
      required: true,
    },
    showIfFromPolimiOrNot: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.test2();
    });
  },
  methods: {
    test2() {
      for (var j = 0; j < 5; j++) {
        var ul = document.getElementById("listeContainer2");
        if (ul != null) {
          for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[(Math.random() * i) | 0]);
          }

          ul.style.opacity = "1";
        }
      }
    },
  },
};
</script>
