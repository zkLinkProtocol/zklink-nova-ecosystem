<script setup lang="ts">
import selecttype from './selecttype.vue'
import { ref } from 'vue'
const jsonList = import.meta.glob('@/jsonList/*.json')
const baseUrl = '/ecosystem/assets'
const searchList = (item: any) => {
  if (item.type && item.type !== 'All') {
    dappArr.value = arr.filter((i: any) => i.type.includes(item.type))
  } else if (!item.value || (item.value && !item.value.trim())) {
    dappArr.value = arr
  }
  if (item.value && item.value.trim()) {
    dappArr.value = arr.filter((i: any) => i.name.toLowerCase().includes(item.value.toLowerCase()))
  } else if (!item.type || item.type === 'All') {
    dappArr.value = arr
  }
}
let dappArr: any = ref([])
let arr: any = []
let arr1: any = []
let arr2: any = []
let hideNum = 0
Object.keys(jsonList).map(async (i) => {
  const dapp = jsonList[i]
  arr1 = []
  arr2 = []
  await dapp().then((res: any) => {
    if (res.default.name) {
      if (!!res.default.isLiveOnNova) {
        arr1.push(res.default)
      } else {
        arr2.push(res.default)
      }
    } else {
      hideNum++
    }

    arr = arr1.concat(arr2)
    if (arr.length + hideNum === Object.keys(jsonList).length) {
      dappArr.value = arr
    }
  })
})
</script>

<template>
  <selecttype @searchList="searchList" />
  <div class="box">
    <div v-for="i in dappArr" class="listbox">
      <div class="header">
        <img :src="baseUrl + '/banner/' + (i.bannerImg || 'default.jpg')" />
        <div class="live" v-if="i?.isLiveOnNova">LIVE</div>
        <!-- <div class="type">{{ i.type }}</div> -->
        <!-- <div class="status">{{ i.status }}</div> -->
      </div>
      <div class="logo">
        <img :src="baseUrl + '/logo/' + i.logo" />
      </div>
      <div class="name">
        <div class="title">{{ i.name }}</div>
        <div class="description">{{ i.description }}</div>
      </div>
      <div class="link">
        <a :href="i.url" target="_blank" rel="noopener" v-if="i.url">
          <img :src="baseUrl + '/image/link.svg'" alt="" />
        </a>
        <a :href="i.tiwwerUrl" target="_blank" rel="noopener" v-if="i.tiwwerUrl">
          <img :src="baseUrl + '/image/tiwwer.svg'" alt="" />
        </a>
        <a :href="i.discordUrl" target="_blank" rel="noopener" v-if="i.discordUrl">
          <img :src="baseUrl + '/image/discord-logo.svg'" alt="" />
        </a>
      </div>
    </div>
    <img :src="baseUrl + '/image/leftTop.png'" alt="" class="leftTop" />
    <img :src="baseUrl + '/image/rightTop.png'" alt="" class="rightTop" />
  </div>
</template>
.
<style scoped>
.box {
  width: 100%;
  display: flex;
  padding: 30px 0;
  flex-wrap: wrap;
  gap: 3%;
  position: relative;
  background-image: url('/ecosystem/assets/image/center.png');
  background-size: 100%;
  .leftTop {
    position: absolute;
    left: calc(640px - 2rem - 50vw);
    bottom: 0;
    z-index: -1;
  }
  .rightTop {
    position: absolute;
    right: calc(640px - 1rem - 50vw);
    bottom: 0;
    z-index: -1;
  }
}
.listbox {
  width: 30%;
  padding: 10px;
  border-radius: 10px;
  background-color: #202020;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  .header {
    width: 100%;
    position: relative;
    z-index: 2;
    height: 115px;
    img {
      max-width: 100%;
      max-height: 115px;
      border-radius: 8px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    div {
      position: absolute;
      top: 5px;
      padding: 4px 12px;
      border-radius: 4px;
      background-color: hsla(160, 100%, 37%, 1);
    }
    .type {
      left: 5px;
    }
    .status {
      right: 5px;
    }

    .live {
      top: 17px;
      left: 12px;
      color: #fff;
      font-weight: 700;
      font-size: 12px;
      border-radius: 6px;
      background: linear-gradient(90deg, #03d498 0%, #0395ff 100%);
    }
  }
  .logo {
    display: inline-block;
    width: 64px;
    height: 64px;
    background-color: #000;
    border: 5px solid #202020;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 8px;
    position: absolute;
    top: 93px;
    left: calc(50% - 32px);
    z-index: 9;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: scale-down;
      margin-left: auto;
      margin-right: auto;
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .name {
    width: 100%;
    margin-top: 20px;
    text-align: center;
    padding-top: 50px;
    .title {
      /* text-transform: uppercase; */
      margin-top: 0;
      margin-bottom: 10px;
      font-family:
        Chakra Petch,
        sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 120%;
      color: #fff;
    }
    .description {
      opacity: 1;
      text-align: center;
      font-family:
        Chakra Petch,
        sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 120%;
      height: 100px;
      overflow: hidden;
      color: rgba(255, 255, 255, 0.7);
    }
  }
  .link {
    padding-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    a {
      width: 32px;
      height: 32px;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      display: flex;
      margin-right: 10px;
    }
    a:last-child {
      margin-right: 0;
    }
    a:hover {
      background-color: transparent;
    }
    img {
      width: 16px;
    }
  }
}
@media (max-width: 640px) {
  .listbox {
    width: 100%;
  }
}
</style>
