<template>
    <div>
        <div id="left-bar">
            <p>Hello {{ username }}!</p>
            <p>Email: {{ email }}</p>
            <p>Status: {{ status }}</p>
            <button>Manage Banners</button>
            <button>Manage Spices</button>
            <button>Manage Alerts</button>
            <button>Manage Staff</button>
            <button>Seach Orders</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "PortalActions",
    props: {
        username: String,
        email: String,
        status: String
    }
}
</script>

<style scoped>
#left-bar {
    padding: 10px;
    float: left;
    background-color: #EEEEEE;
    height: 100%;
}
button{
    display: block;
    width: 150px;
    height: 70px;
}
</style>