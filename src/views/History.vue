<template>
  <div>
        <div class="back">
            <router-link to="/"><img src="../assets/image/back.svg" alt="back"></router-link>
        </div>

        <p style="margin: 0; opacity: 0;">.</p>

        <div class="history" v-if="data.length">
            <p>HISTORY</p>
            <table>
                <thead>
                    <tr>
                        <th class="left">Name</th>
                        <th class="right">Date</th>
                    </tr>
                </thead>
                <tbody v-if="data.length">
                    <tr v-for="item of data" :key="item.id">
                        <td class="left">{{ item.content }}</td>
                        <td class="right">{{ printTime(item.created_at) }}</td>
                    </tr>
                </tbody>
                <tfoot style="opacity: 0;">
                    .
                </tfoot>
            </table>
        </div>

        <div class = "loading" v-else>
            <img src="../assets/image/loading.gif" alt="loading">
        </div>

  </div>
</template>

<script>

import axios from "axios";

export default {
    name: "History",
    data(){
        return {
            data: []
        }
    },
    methods: {
        getData() {
            axios.get("http://localhost:8000/api/hello-world/tampilDataHelloWorld")
                .then( response => {
                    this.data = response.data.content.data
                })
                .catch( error => {
                    console.log(error)
                })
        },
        printTime(data) {
            let date = new Date(data)
            let hh = this.checkTime(date.getHours().toString())
            let mm = this.checkTime(date.getMinutes().toString())
            return `${hh}.${mm}`
        },
        checkTime(time){
            if(time.length < 2) {
                const timeArr = time.split("");
                timeArr.unshift('0');
                return timeArr.join("");
            }
            return time;
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style>



    body {
        background: #5016FF;
    }

    .back {
        position: absolute;
        margin-left: 5vw;
        margin-top: 5vh;
    }

    .back img {
        width: 70px;
    }

    .history {
        width: 600px;
        margin: 0 auto;
        text-align: center;
        color: white;
        margin-top: 100px;
    }

    .history p {
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        font-size: 40px;
        
    }

    table {
        border-collapse: collapse;
        width: 500px;
        height: 300px;
        margin: 0 auto;
        background: #DACEFF;
        color: #5016FF;
        
        font-family: 'Quicksand', sans-serif;
        font-weight: 700;
        border-radius: 20px;
    }

    th {
        padding: 15px;
        border-bottom: 2px solid #5016FF;
    }

    td {
        padding: 5px;
        font-weight: 400;;
    }

    tbody {
        display: block;
        height: 300px;
        overflow-y: scroll;
    }

    tbody::-webkit-scrollbar {
        width: 5px;
    }


    tbody::-webkit-scrollbar-thumb {
        background: #6c49d6;
        border-radius: 10px;
    }
    thead, tbody tr {
        display: table;
        width: 100%;
        table-layout: fixed;
    }

    .left {
        text-align: left;
        padding-left: 20px;
    }

    .right {
        
        text-align: right;
        padding-right: 20px;
    }

    .loading img {
        margin: 0 auto;
        display: block;
    }

    .loading {
        margin-top: 50vh;
    }
    

</style>