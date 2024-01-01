<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">item</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>brand_id</th>
                <th>unit_id</th>
                <th>canvass_id?</th>
                <th>jo_id?</th>
                <th>rv_id?</th>
                <th>spr_id?</th>
                <th>description</th>
                <th>quantity</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.items">
                    <td> {{ item.id }} </td>
                    <td> {{ item.brand_id }} </td>
                    <td> {{ item.unit_id }} </td>
                    <td> {{ item.canvass_id }} </td>
                    <td> {{ item.jo_id }} </td>
                    <td> {{ item.rv_id }} </td>
                    <td> {{ item.spr_id }} </td>
                    <td> {{ item.description }} </td>
                    <td> {{ item.quantity }} </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>



<script setup lang="ts">

    import { tempStore } from '../temp.store';

    const $data = tempStore()

    console.log('$data', $data)

</script>

<style scoped>
.caption-top {
    caption-side: top;
}
</style>