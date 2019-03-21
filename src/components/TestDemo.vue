<template xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div>
    <table>
      <tr v-for="user in users" v-on:click="getClickInfo(user.name)">
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
      </tr>
    </table>
    <input type="text" v-model="value" v-on:keyup.enter="getKeyInfo"/>
    <button  v-on:click="getClickInfo">按123钮</button>
    <p></p>
    <button  v-on:click="checkArr">数组检测</button>
    <p></p>
    <button  v-on:click="getOdd">显示过滤</button>
    <p></p>
    <li v-for="num in wants" v-show="showIn">{{num}}</li>
  </div>
</template>
<script>
 export default{
      name:'TestDemo',
      data(){
        return{
          value:'',
          showIn:false,
          numbers:[1,2,3,4,5,6,7],
          wants:[],
          users:[
            {id:'d',
            name:'张三',
            age:'23'
            },
            {id:'c',
              name:'张三',
              age:'23'
            },
            {id:'b',
              name:'李四',
              age:'21'
            }
          ]
        }
      },
      methods:{
        getClickInfo(){
          return  new Promise((resolve, reject) => {
            let a=1;
            resolve(a);
          }).then(data=>{
            console.log(data);
            return ++data;
          }).then(data=>{
            console.log(data++);
            return ++data;
          })
        },
        getKeyInfo(){
          alert("这个是回车事件"+this.value);
          this.getClickInfo();
        },
        //数组检测
        checkArr(){
          //变异方法:引起视图更新
          //this.users.push({id:"v",name:'六合',age:'56'});
          //替换数组：不会引起视图更新
          this.users.concat([{id:"v",name:'六合',age:'56'}]);
          console.log(this.users);
        },
        //显示过滤
        getOdd(){
          this.showIn=!this.showIn;
          this.wants=[];
          this.numbers.filter(num=>{
            if(num%2!==0){
              this.wants.push(num);
            }
          })
        }
      }
  }
</script>
<style></style>
