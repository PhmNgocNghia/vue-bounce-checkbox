<template>
  <div :class="computedContainerClass">
    <div class="bouncechk__wrapper">
      <input @click="onClicked" :checked="checked" type='checkbox' class="bouncechk__input" :id="computedId" />
      <label :class="computedLabelClass" :for="computedId" />
    </div>
    <span :class="computedTextClass">{{text}}</span>
  </div>
</template>

<script>
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

export default {
  props: {
    /**
     * Automatically generate if not provide
     */
    id: {
      type: String
    },
    containerClass: {
      type: String
    },
    /**
     * Configure checkbox theme by add modifierClass to BEM class: bouncechk__label--{modifierClass}
     */
    modifierClass: {
      type:String
    },
    textClass: {
      type: String
    },

    /**
     * Add text to checkbox
     */
    text: {
      type: String
    },
    
    onClicked: {
      type: Function,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }

  },
  computed: {
    computedContainerClass () {
      return ['bouncechk', this.containerClass || '']
    },

    computedTextClass () {
      return ['bouncechk__text', this.textClass || '']
    },

    computedLabelClass () {
      return ['bouncechk__label',  'bouncechk__label--' + (this.modifierClass || 'blue')]
    },
    
    computedId () {
      return this.id || makeid()
    }
  }
}
</script>

<style lang="sass" src="./Checkbox.sass">

</style>

