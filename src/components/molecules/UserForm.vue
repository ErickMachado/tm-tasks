<template>
  <div class="user-form">
    <h1>What is your name? ✨</h1>
    <form @submit.prevent="handleSessionCreation">
      <div class="user-form__input">
        <input
          v-model="name"
          type="text"
          placeholder="First name"
          data-jest="name-input"
        />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
            stroke="#fff"
            stroke-opacity="0.3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
            stroke="#fff"
            stroke-opacity="0.3"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <Button :disabled="!name" data-jest="done-btn">
        Done
        <img src="@/assets/images/check.svg" alt="" />
      </Button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Button } from '@/components/atoms'

export default {
  components: { Button },
  data: () => ({
    name: ''
  }),
  methods: {
    ...mapActions(['createUserSession']),
    async handleSessionCreation() {
      try {
        await this.createUserSession(this.name)
        this.$router.push({ name: 'dashboard' })
      } catch (_) {
        alert('Algo deu errado!')
      }
    }
  },
  name: 'UserForm'
}
</script>

<style lang="scss" scoped>
.user-form {
  > h1 {
    color: $light;
    font-size: 3.2rem;
  }

  > form {
    margin-top: 3.2rem;

    > .btn {
      margin-top: 1.6rem;
      width: 100%;

      > img {
        opacity: 0;
        transition: all 0.3s;
        width: 0;
      }

      &:not([disabled]):hover > img {
        opacity: 1;
        width: 2.4rem;
      }
    }
  }

  &__input {
    position: relative;

    input ~ svg {
      bottom: 50%;
      left: 0.8rem;
      position: absolute;
      transform: translate3d(0, -50%, 0);
      top: 50%;
    }

    input {
      background: transparent;
      border: 1px solid rgba($light, 0.3);
      border-radius: 0.8rem;
      color: $light;
      height: 5rem;
      outline: none;
      padding-left: 3.6rem;
      transition: border-color 0.3s;
      text-transform: capitalize;
      width: 100%;

      &:focus {
        border-color: $light;
      }
    }

    input:focus ~ svg path {
      stroke-opacity: 1;
    }
  }
}
</style>
