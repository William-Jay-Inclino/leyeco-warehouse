<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">po_items</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>po_id</th>
                <th>description</th>
                <th>brand_id</th>
                <th>unit_id</th>
                <th>quantity</th>
                <th>price</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.POItems">
                    <td> {{ item.id }} </td>
                    <td> {{ item.po_id}} </td>
                    <td> {{ item.description}} </td>
                    <td> {{ item.brand_id}} </td>
                    <td> {{ item.unit_id}} </td>
                    <td> {{ item.quantity}} </td>
                    <td> {{ item.price}} </td>
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