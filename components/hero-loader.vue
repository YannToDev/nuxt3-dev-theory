<template>
    <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
            <div class="fulfilling-square-spinner">
                <div class="spinner-inner"></div>
        </div>
    </div>
</div>
</template>

<style scoped>
    .fulfilling-square-spinner , .fulfilling-square-spinner * {
        box-sizing: border-box;
    }

      .fulfilling-square-spinner {
        height: 50px;
        width: 50px;
        position: relative;
        border: 4px solid;
        @apply border-primary;
        animation: fulfilling-square-spinner-animation 4s infinite ease;
      }

    .fulfilling-square-spinner .spinner-inner {
        vertical-align: top;
        display: inline-block;
        @apply bg-primary;
        width: 100%;
        opacity: 1;
        animation: fulfilling-square-spinner-inner-animation 4s infinite ease-in;
    }

    @keyframes fulfilling-square-spinner-animation {
        0% {
        transform: rotate(0deg);
        }

        25% {
          transform: rotate(180deg);
        }

        50% {
          transform: rotate(180deg);
        }

        75% {
          transform: rotate(360deg);
        }

        100% {
          transform: rotate(360deg);
        }
    }

    @keyframes fulfilling-square-spinner-inner-animation {
        0% {
          height: 0%;
        }

        25% {
          height: 0%;
        }

        50% {
          height: 100%;
        }

        75% {
          height: 100%;
        }

        100% {
          height: 0%;
        }
    }
</style>