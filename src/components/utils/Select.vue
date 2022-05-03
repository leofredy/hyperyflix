<template>
  <div class="select">
    <div 
      @click.passive="toggleOptions" 
      class="select-current"
    >
      <p>
        {{ value || label }}
      </p>
      <img 
        width="12"
        height="9"
        :class="{'openOptions': showOptions}" 
        src="@/assets/icons/arrow.svg" 
        alt=""
      >
    </div>

    <transition name="fadeTop">
      <ul v-show="showOptions" class="select-options">
        <li
          class="select-option optionCurrent"
          @click="toggleOptions"
          v-if="value"
        >
          <p>
            {{ value }}
          </p>
        </li>

        <template
          v-for="(option, index) in options"
          :key="index"
        >
          <li
            v-if="option !== value"
            @click="selectOption(option)"
            class="select-option"
          >
            <p>
              {{ option }}
            </p>
          </li>
        </template>
      </ul>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    label: {
      type: String,
      default: "Selecione uma opção",
      required: true,
    },
  },
  data() {
    return {
      showOptions: false,
      exaustToggle: 0
    }
  },
  methods: {
    toggleOptions(event) {
      if (this.showOptions) {
        this.closeOptions();
      } else {
        this.openOptions(event);
      }
    },
    openOptions() {
      this.showOptions = true;
      clearTimeout(this.exaustToggle);
      this.exaustToggle = setTimeout(() => {
        document.addEventListener("click", this.closeOptions);
      }, 1);
    },
    closeOptions() {
      this.showOptions = false;
      document.removeEventListener("click", this.closeOptions);
    },
    selectOption(value) {
      this.toggleOptions();
      this.$emit("change", value);
    }
  }
}
</script>

<style scoped>
.select {
  position: relative;
  z-index: 1;
  display: inline-block;
}
.select-current {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background-color: var(--secondary-background);
  border-radius: 8px;
  cursor: pointer;
}
.select-current p {
  margin-right: 8px;
}
.select-current img {
  transition: transform 0.3s ease-in-out;
}
.select-current img.openOptions {
  transform: rotate(180deg);
}
.select-options {
  position: absolute;
  z-index: -1;
  width: 100%;
}
.select-option {
  padding: 12px 8px;
  background-color: var(--secondary-background);
}
.select-option:not(.optionCurrent) {
  cursor: pointer;
  transition: filter 0.3s ease-in-out;
}
.select-option:first-child {
  border-radius: 8px 8px 0 0;
}
.select-option:last-child {
  border-radius: 0 0 8px 8px;
}
.select-option:not(.optionCurrent):hover {
  filter: brightness(1.4);
}
.optionCurrent {
  background-color: var(--tertiary-background);
  color: var(--text-secondary);
  font-weight: 600;
  cursor: default;
}
</style>