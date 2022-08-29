<template>
    <div class="main">
        <div class="back">
            <router-link to="/"><img src="../assets/image/back.svg" alt="back"></router-link>
        </div>
        <div class="center">
            <Clock />
            <p class="time">{{ time }}</p>
            <p v-if="content !== ''" class="content">{{ content }}</p>
            <img v-else class="loading" src="../assets/image/loading.gif" alt="loading">
        </div>
    </div>
</template>

<script>

import Clock from "../components/Clock.vue";
import axios from "axios";

export default {
    name: 'helloWorld',
    data() {
        return{
            content: "",
            time: ""
        }
    },
    components: {
        Clock
    },
    methods: {
        initTime(){
            setInterval(()=>{
                
                const date = new Date();
                let hh = this.checkTime(date.getHours().toString());
                let mm = this.checkTime(date.getMinutes().toString());

                this.time = `${hh} : ${mm}`;
            })
        },
        checkTime(time){
            if(time.length < 2) {
                const timeArr = time.split("");
                timeArr.unshift('0');
                return timeArr.join("");
            }
            return time;
        },
        getContent(){
            axios.get("http://localhost:8000/api/hello-world/tampil")
                .then( response => {
                    let data = response.data.content.data
                    this.content = data
                    this.saveData(data)
                })
                .catch( error => {
                    console.log(error)
                })
        },
        saveData(data) {
            axios.post("http://localhost:8000/api/hello-world/tambahDataHelloWorld", {
                content: data
            })
            .then(response => {
                //success
                console.log(response.data.status)
            })
            .catch(error => {
                //error
                console.log(error)
            })
        }


    },
    mounted(){
        this.initTime();
        this.getContent();
    }
}
</script>
<style scoped>
    .main {
        width: 100%;
        height: 100%;
        background: #5016FF;
        position: absolute;
    }

    .center {
        margin: 0 auto;
        margin-top:10vh;
        width: 500px;
    }

    .clock {
        margin: 0 auto;
    }

    .time {
        color: white;
        text-align: center;
        font-size: 100px;
        font-weight: 400;
        font-family: 'Quicksand', sans-serif;
        margin: 0 auto;
    }

    .content {
        color: white;
        text-align: center;
        font-size: 30px;
        font-weight: 700;
        font-family: 'Quicksand', sans-serif;
        margin: 0 auto;
    }

    .loading {
        display: block;
        width: 70px;
        margin: 0 auto;
        
    }

    .back {
        position: absolute;
        margin-left: 5vw;
        margin-top: 5vh;
    }

    .back img {
        width: 70px;
    }

    
    @media screen and (max-width: 520px) {
        .clock {
            width: 200px;
            height: 200px;
        }

        .content {
            font-size: 25px;
        }

        .time {
            font-size: 75px;
        }

        .center {
            width: 300px;
        }     
        
        .back img {
            width: 60px;
        }
    }

    @media screen and (max-width: 300px) {
        .center {
            width: 200px
        }

        .time {
            font-size: 55px;
        }
   
        .content {
            font-size: 20px;
        }

        .back img {
            width: 50px;
        }
    }
</style>