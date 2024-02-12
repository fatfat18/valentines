<template>
  <div class="w-screen h-screen overflow-y-none bg-red-50 flex flex-col items-center justify-center font-poppins">
    <!-- MAO NI ANG PARENT MODAL -->
    <div
      v-if="showModal"
      class="h-screen w-screen fixed flex items-center justify-center z-50 p-4"
      :class="{
        'backdrop-blur-sm': showModal === true
      }"
    >
      <!-- Modal content -->
      <div
        class="flex flex-col rounded-2xl h-1/2 xl:w-1/2 text-gray-950 w-screen xl:h-max bg-white border-2 border-red-300 xl:rounded-3xl py-4 shadow"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out-back"
      >
        <!-- Modal body -->
        <div class="p-8 pb-0 space-y-4 relative text-center font-medium">Thank you for accepting my invitation! I'm looking forward to a magical Valentine's Day together, See ya! ❤️</div>
        <div class="flex items-center justify-center -translate-y-10">
          <lottie-player
            src="https://lottie.host/04f1ced4-91d9-4885-860a-44a6e0d739b3/fuz6vpM3rF.json"
            background="None"
            speed=".4"
            style="width: 15rem; height: 15rem"
            autoplay
            mode="normal"
          ></lottie-player>
        </div>
      </div>
    </div>

    <div
      class="text-red-300 h-40 p-8 pt-0 flex items-start justify-start w-full text-3xl font-black overflow-hidden"
      data-aos="zoom-out"
      data-aos-easing="ease-out-back"
      data-aos-duration="1000"
      data-aos-delay="1000"
    >
      Happy <br />
      &nbsp &nbsp Valentines
    </div>
    <div class="w-full h-1/2 overflow-hidden">
      <div class="h-full flex items-center justify-center envelope">
        <lottie-player
          src="https://lottie.host/c543b233-438c-43f6-80af-d16d03c400ef/ElMV8rpxCz.json"
          background="None"
          speed="1"
          style="width: 20rem; height: 20rem"
          autoplay
          mode="normal"
        ></lottie-player>
      </div>
    </div>
    <button @click="showModal = true" class="py-4 px-8 rounded-xl bg-red-300 text-white" data-aos="fade-up" data-aos-easing="ease-out-back" data-aos-duration="1000" data-aos-delay="1000">
      Accept Invitation
    </button>
    <div
      class="absolute top-1/4 left-1/5 -translate-x-1/4 -translate-y-1/4 bg-white bg-opacity-75 tracking-wider w-4/5 h-max rounded-xl text-gray-950 text-xs font-semibold text-center opacity-50 font-poppins p-8 overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="1500"
    >
      I would like to extend a heartfelt invitation to you for this upcoming Valentine's Day. Let's celebrate love and companionship in each other's company. Join me for a delightful evening filled
      with warmth, laughter, and cherished moments. I can't wait to share this special day with you.
    </div>

    <div class="absolute top-[22%] left-3/4 -translate-x-1/2 -translate-y-1/2 text-gray-950 overflow-hidden cupid">
      <lottie-player
        src="https://lottie.host/38ecf9ba-bade-4703-ac39-1dc17f5da18d/KfYg8EscZe.json"
        background="None"
        speed="1"
        style="width: 10rem; height: 10rem"
        autoplay
        mode="normal"
        loop
      ></lottie-player>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},

  name: 'Reports',
  data() {
    return {
      showModal: false
    }
  },

  methods: {},
  mounted() {}
})
</script>

<style>
.envelope {
  animation: envelopeani 3s ease-in-out;
}

@keyframes envelopeani {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0px);
  }
}
.cupid {
  animation: cupidani 3s ease-in-out;
}

@keyframes cupidani {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
