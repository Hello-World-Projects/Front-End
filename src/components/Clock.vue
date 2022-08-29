<template>
    <div class="clock">
        <div class="hours-container">
            <div class="hours"></div>
        </div>
        <div class="mnutes-container">
            <div class="minutes"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "clock",
    methods: {
        initLocalClocks(){
            
            const deg = 6;
            const hr = document.querySelector('.hours');
            const mn = document.querySelector('.minutes');
            setInterval(()=> {
                let day = new Date();
                let hh = day.getHours() * 30;
                let mm = day.getMinutes() * deg;
                hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
                mn.style.transform = `rotateZ(${mm}deg)`;
                
            })
        }
    },
    mounted(){
        this.initLocalClocks()
    }
}
</script>

<style>
    .clock {
        border-radius: 50%;
        background: url(../assets/image/bg_clock.svg) no-repeat center;
        position: relative;
        height: 300px;
        width: 300px;
    }


    .minutes-container, .hours-container, .seconds-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .minutes {
        background: #fff;
        height: 30%;
        width: 3%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        position: absolute;
        left: 49%;
        top: 20%;
        transform-origin: 50% 100%;
    }

    .hours {
        background: #fff;
        height: 20%;
        position: absolute;
        left: 48.75%;
        top: 30%;
        transform-origin: 50% 100%;
        width: 3%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }



</style>