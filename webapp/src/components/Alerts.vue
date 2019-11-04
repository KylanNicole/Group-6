<template>
    <div>
        <button :click="toggleAlerts">Alerts</button>
        <div class="alert"> </div>
    </div>
</template>

<script>
export default {
    name: "Alerts",
    methods: {
        toggleAlerts() {

        }
    }
}
</script>

<style scoped>
div {
    margin: 5px;
    float: right;
    top: 0;
    padding: 10px;
    max-height: 400px;
    background-color: #DDDDDD;
    overflow: scroll;
}
.alert {
    background-color: white;
    height: 1000px;
    width: 100px;
    overflow: hidden;
}
button {
    position: sticky;
    top: 0;
    float: right;
}
</style>