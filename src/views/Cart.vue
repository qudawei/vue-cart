<template>
  <div>
    cart

    <cartInfo :datas="carts" @add="onAdd" @decrease="onDecrease"></cartInfo>
  </div>
</template>

<script>
import cartInfo from '@/components/cart.vue'
export default {
    components:{cartInfo},
//   props: ["carts"],
  data() {
      return{
          carts:[]
      }
  },
  methods: {
    onDecrease(index) {
      if (this.carts[index].count >= 1) {
        this.carts[index].count--;
      }
    },
    onAdd(index) {
      this.carts[index].count++;
    },
  },
};
</script>

<style >
    
</style>