<template>
  <div>
      <h1>购物车</h1>
      <table border="1">
      <tr>
        <td>商品</td>
        <td>单价</td>
        <td>价格</td>
        <td>总量</td>
        <td>操作</td>
      </tr>
      <tr v-for="(cart, index) in datas">
        <td>{{cart.name}}</td>
        <td>{{cart.price}}</td>
        <td>{{cart.price*cart.count}}</td>
        <td>{{cart.count}}</td>
        <td ><el-button @click="addClick(index)">+</el-button><el-button @click="decrease(index)">-</el-button></td>
      </tr>
      <p>总价：{{total}}</p>
    </table>
  </div>
</template>

<script>
export default {
    props:['datas'],
    computed:{
        total(){
            return this.datas.reduce((sum,data)=>{
                return sum += data.price*data.count;
            },0)
        }
    },
    methods:{
        decrease(index){
            this.$emit('decrease',index);
        },
        addClick(index){
            this.$emit('add',index);
        }
    }
}
</script>

<style scoped>
  img{
        width: 100%;
    }
</style>