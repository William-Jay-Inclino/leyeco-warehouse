<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">po</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>po_number</th>
                <th>meqs_number</th>
                <th>supplier_id</th>
                <th>po_date</th>
                <th>payment_terms</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.POs">
                    <td> {{ item.id }} </td>
                    <td> {{ item.po_number }} </td>
                    <td> {{ item.meqs_number }} </td>
                    <td> {{ item.supplier_id }} </td>
                    <td> {{ item.po_date }} </td>
                    <td> {{ item.payment_terms }} </td>
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