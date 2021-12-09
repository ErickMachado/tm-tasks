<template>
  <div class="loading-screen">
    <svg
      width="70"
      height="70"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 11L12 14L22 4"
        stroke="#000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16"
        stroke="#000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen'
}
</script>

<style lang="scss" scoped>
@keyframes loading {
  0% {
    width: 100%;
  }
  100% {
    width: 0;
  }
}

@keyframes brand {
  0% {
    stroke-dasharray: 1 100;
    stroke-width: 0;
  }

  25% {
    stroke-dasharray: 100 1;
    stroke-width: 1;
  }

  60%,
  100% {
    fill-opacity: 0;
    stroke-width: 1;
  }
}

.loading-screen {
  animation: loading 1s forwards;
  animation-delay: 4s;
  align-items: center;
  background: $light;
  display: flex;
  height: 100vh;
  left: 0;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;

  > svg {
    > path {
      animation: brand 10s forwards;
    }
  }
}
</style>
