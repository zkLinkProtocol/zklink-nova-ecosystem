<template>
  <div class="tabBox">
    <div class="select">
      <input type="text" placeholder="Search" class="search" @input="search" v-model="value">
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZWTHeAj9xIQ7usaa788UrfTnY_QZnMFCjJNNSYRqcHcEGXQ/viewform"
        target="_blank" class="btn-add">Add your project</a>
    </div>
    <div class="tipBox">
      <div class="tip" :class="{'active':selectType === i.name}" @click="changeType(i.name)" v-for="i in arr">{{ i.name }}</div>
    </div>
  </div>
</template>
<style scoped>
.tabBox{
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
  width: calc(100% - 500px);
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

.select {
  display: flex;
  flex-wrap: wrap;
  width: 480px;
  justify-content: space-between;
  align-items: center;
  margin-right: 20px;
}

.btn-add {
  outline: none;
  padding: 10px 24px 10px 23px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: 1px solid #00BD7E;
  color: #00BD7E;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.5px;
  cursor: pointer;
  transition: all ease 0.2s;
}

.btn-add:hover {
  background: rgba(0, 189, 126, 0.20);

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
