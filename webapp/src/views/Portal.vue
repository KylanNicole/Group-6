<template>
  <div class="about">
    <Alerts/>
    <PortalActions v-bind="props"/>
    <OrderQ/>
  </div>
</template>

<script>
import PortalActions from "../components/PortalActions.vue"
import OrderQ from "../components/OrderQ.vue"
import Alerts from "../components/Alerts.vue"
export default {
    name: "Portal",
    components: { PortalActions, OrderQ, Alerts},
    data() {
        return {
            props: {
                username:"Joe123",
                email:"joe@joe.com",
                status:"Admin"
            }
        }
    }
}
</script>

<style scoped>
</style>