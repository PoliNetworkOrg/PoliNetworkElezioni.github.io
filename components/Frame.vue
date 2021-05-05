<template>
    <div  :class="classParam">
        <slot />
    </div>
</template>

<script>
export default {
  props: {
    classParam: {
      type: String,
      default: ''
    }
  }
}
</script>