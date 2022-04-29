<template>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" :href="'/' + language + '/'">
        <img src="/img/icon.png" style="width: calc(20px + 0.1rem)" />
        <span>&nbsp;PoliNetwork</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" :href="'/' + language + '/'">
              Home 🏠
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="'/' + language + '/organi/'">{{ $t('Organi da votare') }} 🗳</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="'/' + language + '/storia/'">{{ $t('Storia') }} 📑</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" :href="'/' + language + '/contatti/'">{{ $t('Contatti') }} 💬</a>
          </li>
          <li class="nav-item">
            <div class="langDiv">
              <table style="display: inline">
                <tr>
                  <td>
                    <NuxtLink :to="switchLocalePath('it')"
                      ><img src="/img/it.png" class="langImg"
                    /></NuxtLink>
                  </td>
                  <td>
                    <NuxtLink :to="switchLocalePath('en')"
                      ><img src="/img/en.png" class="langImg"
                    /></NuxtLink>
                  </td>
                </tr>
              </table>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.langDiv {
  border: 1px solid #00000029;
  margin: auto;
  border-radius: 10px;
}

.langImg {
  width: 35px;
  padding: 6px;
}
</style>

<script>
export default {
  props: {
    language: {
      type: String,

      required: true,
    },
  },
};
</script>
