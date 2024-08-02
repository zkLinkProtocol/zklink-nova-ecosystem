<template>
  <div class="tabBox">
    <div class="select">
      <input type="text" placeholder="Search" class="search" @input="search" v-model="value">
      <img :src="baseUrl + '/image/Vector.png'" alt="" class="Vector">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZWTHeAj9xIQ7usaa788UrfTnY_QZnMFCjJNNSYRqcHcEGXQ/viewform"
        target="_blank" class="btn-add">Add your project 
      <img :src="baseUrl + '/image/Chevron.png'" alt="" class="Chevron"></a>
    </div>
    <div class="tipBox">
      <div class="tip" :class="{'active':selectType === i.name}" @click="changeType(i.name)" v-for="i in arr">{{ i.name }}</div>
    </div>
  </div>
</template>
<style scoped>
.tabBox{
  /* display: flex; */
}
.search{
  outline: none;
  font-size: 1.2rem;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 30px;
  color: #fff;
  background-color: transparent;
  padding: 15px 20px 15px 50px;
  width: 50%;
}
.tipBox{
  width: 100%;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 30px;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  padding: 10px 20px 10px 20px;
}
.tip{
  cursor: pointer;
  color: #7c7979;
  margin-right: 15px;
}
.active{
  color: #fff;
}

.select {
  width: 100%;
  display: flex;
  position: relative;
  /* flex-wrap: wrap;
  width: 480px; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.Vector{
  position: absolute;
  width: 16px;
  height: 16px;
  left: 20px;
}
.btn-add {
  outline: none;
  padding: 15px 28px 15px 28px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border: 1px solid #00BD7E;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
  cursor: pointer;
  transition: all ease 0.2s;
  background-color: #03D498;
}

.btn-add:hover {
  background: rgba(0, 189, 126, 0.20);
}
.Chevron{
  display: inline-block;
  width: 13px;
  margin-left: 10px;
}

@media (min-width: 1024px) {}

@media (max-width: 640px) {
  .btn-add {
    margin-top: 20px;
  }
}
</style>
<script>
export default {
  name: 'Select',
  data() {
    return {
      arr: [
        {
          name: 'All'
        },
        {
          name: 'DEX'
        },
        {
          name: 'L1/L2'
        },
        {
          name: 'LST/LRTs'
        },
        {
          name: 'Wallet'
        },
        {
          name: 'Infra'
        },
        {
          name: 'Lending'
        },
        {
          name: 'Social'
        },		
        {
          name: 'Cross-chain'
        },
        {
          name: 'Tools'
        },
        {
          name: 'Liquidity'
        },
        {
          name: 'NFT'
        },		
        {
          name: 'Oracles'
        },
        {
          name: 'Stable Coin'
        },
        {
          name: 'Node'
        },
      ],
      selectType: 'All',
      value: '',
      baseUrl: "/ecosystem/assets"
    };
  },
  methods: {
    search(e) {
      this.selectType = ''
      this.$emit('searchList',{value: e.target.value})
      if (!e.target.value) {
        this.selectType = 'All'
      }
    },
    changeType(type){
      this.selectType = type
      this.value = ''
      this.$emit('searchList',{type: type})
    }
  },
};
</script>
