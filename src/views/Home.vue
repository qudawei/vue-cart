<template>
  <div>
    <el-row>
      <el-col :span="6" :key="index" v-for="(item, index) in goods">
        <el-card>
          <img :src="require('@/assets/' + item.src)" alt="" />
          <div style="padding: 14px">
            <span>{{ item.name }}</span>
            <el-button type="text" class="button">
              <i class="el-icon-circle-plus"></i>
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <ul>
      <li v-for="(item, index) in goods">
        {{ item.name }}|{{ item.price
        }}<el-button @click="addCart(index)">+</el-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    data(){
    return{
      welcomeText:"hello vue cart",
      goods:[],
      carts:[]
    }
  },
  async created(){
    await this.axios.get('/getDatas').then(res=>{
      console.log(res);
      if(res.data.code == '200'){
        this.goods = res.data.data;
        console.log(111,this.goods);
      }
    }).catch(error=>{

    })
  },
  methods:{
    addCart(index){
      let item = this.goods[index];
      let good = this.carts.find(c=> c.name==item.name);
      if(good){
        good.count += 1;
      }else{
        this.carts.push({...item,count:1})
      }
    }
  }
};
</script>

<style scoped>
  img{
        width: 100%;
    }
</style>