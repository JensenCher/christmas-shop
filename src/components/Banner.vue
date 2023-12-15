<template>
  <div class="relative overflow-hidden flex items-center justify-center mb-20">
    <div
      class="absolute top-0 px-10 py-3 bg-[#F7F6F2] shadow-lg shadow-zinc-500 rounded-b-lg z-[99999999] -translate-y-[120%]"
    >
      <img
        src="https://cdn.inspireuplift.com/uploads/images/seller_products/1695270816_18.png"
        alt=""
        class="w-20"
      />
    </div>
    <div
      id="container"
      class="relative z-0 bg-gradient-to-br h-fit from-[#01252D] via-[#206C8B] to-zinc-200 text-zinc-300 min-w-[62rem] w-screen flex flex-col items-center justify-center shadow-lg shadow-cyan-400 overflow-hidden"
    >
      <div class="snow"></div>
      <h1
        class="text-xl xs:text-3xl sm:text-4xl text-center title mt-20 px-5 transition-all"
      >
        iCodeMas 23' is coming to town
      </h1>
      <p
        class="mt-3 text-center px-8 text-xs xs:text-sm sm:text-base transition-all"
      >
        Celebrate the magic of tis' season!
      </p>
      <p class="text-center text-xs xs:text-sm sm:text-base transition-all">
        Exclusive Christmas Challenges for 24 Days!
      </p>
      <div
        class="grid grid-cols-4 gap-3 my-5 w-full max-w-xs xs:max-w-sm sm:max-w-xl text-[#206C8B] px-5"
      >
        <div
          class="bg-[#F7F6F2] w-full rounded-md px-5 py-2 sm:py-5 flex flex-col gap-1 sm:gap-3 items-center justify-center transition-[padding_gap]"
        >
          <div id="days" class="text-xl xs:text-2xl sm:text-4xl font-bold">
            {{ countdown.days }}
          </div>
          <div
            class="font-bold text-[0.5rem] xs:text-xs sm:text-base transition-[font-size]"
          >
            Days
          </div>
        </div>
        <div
          class="bg-[#F7F6F2] w-full rounded-md px-5 py-2 sm:py-5 flex flex-col gap-1 sm:gap-3 items-center justify-center transition-[padding_gap]"
        >
          <div id="hours" class="text-xl xs:text-2xl sm:text-4xl font-bold">
            {{ countdown.hours }}
          </div>
          <div
            class="font-bold text-[0.5rem] xs:text-xs sm:text-base transition-[font-size]"
          >
            Hours
          </div>
        </div>
        <div
          class="bg-[#F7F6F2] w-full rounded-md px-5 py-2 sm:py-5 flex flex-col gap-1 sm:gap-3 items-center justify-center transition-[padding_gap]"
        >
          <div id="minutes" class="text-xl xs:text-2xl sm:text-4xl font-bold">
            {{ countdown.minutes }}
          </div>
          <div
            class="font-bold text-[0.5rem] xs:text-xs sm:text-base transition-[font-size]"
          >
            Minutes
          </div>
        </div>
        <div
          class="bg-[#F7F6F2] w-full rounded-md px-5 py-2 sm:py-5 flex flex-col gap-1 sm:gap-3 items-center justify-center transition-[padding_gap]"
        >
          <div id="seconds" class="text-xl xs:text-2xl sm:text-4xl font-bold">
            {{ countdown.seconds }}
          </div>
          <div
            class="font-bold text-[0.5rem] xs:text-xs sm:text-base transition-[font-size]"
          >
            Seconds
          </div>
        </div>
      </div>
      <div class="w-full relative z-0 max-h-[20rem]">
        <!-- Left Trees -->
        <div
          class="absolute text-[12rem] bottom-10 rotate-[0deg] left-40 text-transparent bg-gradient-to-b from-[#95B4C2] to-[#02434F] bg-clip-text origin-bottom"
        >
          <i class="fa-solid fa-tree"></i>
        </div>
        <div
          class="absolute text-[20rem] bottom-0 text-transparent bg-gradient-to-b from-[#95B4C2] from-10% to-80% to-[#02434F] bg-clip-text origin-bottom animate-tree-1"
        >
          <i class="fa-solid fa-tree"></i>
        </div>
        <div
          class="absolute text-[32rem] -bottom-20 -left-80 rotate-6 text-transparent bg-gradient-to-b from-[#95B4C2] from-10% to-80% to-[#02434F] bg-clip-text origin-bottom"
        >
          <i class="fa-solid fa-tree"></i>
        </div>
        <div class="absolute bottom-5 left-20 z-[15]">
          <img
          src="/images/banner/snoopy_tree.png"
            alt="planting_snoopy"
            class="w-52"
          />
        </div>

        <!-- Right trees -->
        <div class="absolute right-20 bottom-20 z-[20] animate-santa">
          <img
            src="/images/banner/snoopy_santa.png"
            alt="santa_snoopy"
            class="w-20 -scale-x-100 -rotate-[30deg]"
          />
        </div>
        <div
          class="absolute text-[24rem] bottom-5 rotate-[0deg] -right-60 -z-10 text-transparent bg-gradient-to-b from-[#95B4C2] to-[#02434F] bg-clip-text origin-bottom"
        >
          <i class="fa-solid fa-tree"></i>
        </div>
        <div
          class="absolute text-[20rem] bottom-5 rotate-[0deg] right-0 -z-10 text-transparent bg-gradient-to-b from-[#95B4C2] to-[#02434F] bg-clip-text origin-bottom"
        >
          <i class="fa-solid fa-tree"></i>
        </div>
        <div
          class="absolute text-[12rem] bottom-10 animate-tree-2 -rotate-3 right-0 -z-10 text-transparent bg-gradient-to-b from-[#95B4C2] to-[#02434F] bg-clip-text origin-bottom"
        >
          <i class="fa-solid fa-tree"></i>
        </div>
        <!-- Snows -->
        <div class="absolute left-[40%] -bottom-3 z-[20]">
          <img
             src="/images/banner/snoopy_stop.png"
            alt="stop_snoopy"
            class="w-60"
          />
        </div>
        <div class="absolute -z-20 top-5 inset-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffff"
              fill-opacity="1"
              d="M0,128L80,117.3C160,107,320,85,480,80C640,75,800,85,960,96C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div class="absolute z-10 top-0 inset-0 -right-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#c3dbeb"
              fill-opacity="1"
              d="M0,256L60,245.3C120,235,240,213,360,218.7C480,224,600,256,720,234.7C840,213,960,139,1080,117.3C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f3f4f5"
              fill-opacity="1"
              d="M0,128L48,112C96,96,192,64,288,53.3C384,43,480,53,576,96C672,139,768,213,864,224C960,235,1056,181,1152,170.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div class="absolute z-10 top-20 -left-12 inset-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#D5E6F1"
              fill-opacity="1"
              d="M0,96L48,90.7C96,85,192,75,288,64C384,53,480,43,576,85.3C672,128,768,224,864,266.7C960,309,1056,299,1152,298.7C1248,299,1344,309,1392,314.7L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div class="absolute z-10 -top-16 inset-0">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffff"
              fill-opacity="1"
              d="M0,192L48,197.3C96,203,192,213,288,213.3C384,213,480,203,576,186.7C672,171,768,149,864,144C960,139,1056,149,1152,160C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg> -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#FFFFFF"
              fill-opacity="1"
              d="M0,288L60,277.3C120,267,240,245,360,240C480,235,600,245,720,245.3C840,245,960,235,1080,240C1200,245,1320,267,1380,277.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-family: "Henny Penny", sans-serif;
}
.snow,
.snow:after,
.snow::before {
  content: "";
  position: absolute;
  top: -650px;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: radial-gradient(4px 4px at 100px 50px, #fff, transparent),
    radial-gradient(6px 6px at 200px 150px, #fff, transparent),
    radial-gradient(3px 3px at 300px 250px, #fff, transparent),
    radial-gradient(4px 4px at 400px 350px, #fff, transparent),
    radial-gradient(6px 6px at 500px 100px, #fff, transparent),
    radial-gradient(3px 3px at 50px 200px, #fff, transparent),
    radial-gradient(4px 4px at 150px 300px, #fff, transparent),
    radial-gradient(6px 6px at 250px 400px, #fff, transparent),
    radial-gradient(3px 3px at 350px 500px, #fff, transparent),
    radial-gradient(4px 4px at 550px 550px, #fff, transparent);
  background-size: 650px 650px;
  animation: SnowAnim 3s linear infinite;
}
.snow:after {
  margin-left: -250px;
  opacity: 0.5;
  filter: blur(2px);
  animation-direction: reverse;
  animation-duration: 6s;
}
.snow::before {
  margin-left: -350px;
  opacity: 0.7;
  filter: blur(1px);
  animation-direction: reverse;
  animation-duration: 9s;
}
@keyframes SnowAnim {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(650px);
  }
}

.animate-tree-1 {
  animation: rotation1 10s infinite ease-in-out;
}

@keyframes rotation1 {
  50% {
    transform: rotate(6deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.animate-tree-2 {
  animation: rotation2 3s infinite ease-in-out;
}

@keyframes rotation2 {
  50% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-3deg);
  }
}

.animate-santa {
  animation: moveSanta 10s infinite ease-in-out;
}

@keyframes moveSanta {
  0% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-5rem);
  }
  50% {
    transform: translateX(-5rem) rotateY(180deg);
  }
  90% {
    transform: rotateY(-180deg);
  }
  100% {
    transform: translateX(0);
  }
}
</style>

<script setup lang="ts">
import { reactive, onMounted } from "vue";

const countdown = reactive({
  days: "00",
  hours: "00",
  minutes: "00",
  seconds: "00",
});

const setTripDate = new Date("12/25/2023");

function changeDate() {
  const currDate = new Date();
  const timeDiff: number = setTripDate.getTime() - currDate.getTime();
  if (timeDiff <= 0) {
    countdown.days = "00";
    countdown.hours = "00";
    countdown.minutes = "00";
    countdown.seconds = "00";
  } else {
    const diffTime = Math.abs(timeDiff);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffSeconds = Math.floor(diffTime / 1000);
    countdown.days = setText(diffDays);
    countdown.hours = setText(Math.floor(diffHours % 24));
    countdown.minutes = setText(Math.floor(diffMinutes % 60));
    countdown.seconds = setText(Math.floor(diffSeconds % 60));
  }
}

function setText(number: number) {
  if (number < 10) {
    return "0" + number;
  }
  return number.toString();
}

onMounted(() => {
  changeDate();
  setInterval(changeDate, 1000);
});
</script>
