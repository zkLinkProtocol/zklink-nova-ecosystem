<template>
  <div class="box">
    <div class="select">
      <input type="text" placeholder="Search" class="search" @input="search" v-model="value">
    </div>
    <div class="tipBox">
      <div class="tip" :class="{'active':selectType === i.name}" @click="changeType(i.name)" v-for="i in arr">{{ i.name }}</div>
    </div>
  </div>
</template>
<style scoped>
.box{
  display: flex;
}
.search{
  outline: none;
  font-size: 1.5rem;
  border: 0;
  border-radius: 20px;
  color: #fff;
  background-color: #333;
  padding: 10px 20px;
  margin-right: 20px;
}
.tipBox{
  width: calc(100% - 365px);
  display: flex;
  overflow: auto;
  white-space: nowrap;
}
.tip{
  padding-top: 10px;
  cursor: pointer;
  color: #7c7979;
  margin-right: 15px;
}
.active{
  color: #fff;
}
@media (min-width: 1024px) {
  
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
      ],
      selectType: 'All',
      value: ''
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
