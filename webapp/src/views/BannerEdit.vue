<template>
    <div>
        <button>X</button>
        <h3>Banner Creation</h3>
        <form>
            Color:
            <input name="banner_color" type="color">
            <br/>
            Title:
            <input name="banner_title" type="text">
            <br/>
            Description:
            <input name="banner_desc" type="text">
            <br/>
            Link:
            <input name="banner_link" type="text">
            <br/>
            <input name="banner_img" type="file">
            <br/>
            <input type="submit" value="Save">
            <input type="submit" value="Delete">
        </form>
    </div>
</template>

<script>
export default {
    name: "BannerEdit"
}
</script>

<style scoped>
div {
    border: solid 1px black;
    width: 50%;
    padding: 10px;
}
button {
    display: block;
    float: right;
}
h3 {
    font-size: 20pt;
    font-weight: bold;
}
</style>