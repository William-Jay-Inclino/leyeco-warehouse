<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">approver</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>approver_id</th>
                <th>jo_id?</th>
                <th>rv_id?</th>
                <th>spr_id?</th>
                <th>meqs_id?</th>
                <th>po_id?</th>
                <th>date_approval</th>
                <th>notes</th>
                <th>status</th>
                <th>label</th>
                <th>order</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.approvers">
                    <td> {{ item.id }} </td>
                    <td> {{ item.approver_id }} </td>
                    <td> {{ item.jo_id }} </td>
                    <td> {{ item.rv_id }} </td>
                    <td> {{ item.spr_id }} </td>
                    <td> {{ item.meqs_id }} </td>
                    <td> {{ item.po_id }} </td>
                    <td> {{ item.date_approval }} </td>
                    <td> {{ item.notes }} </td>
                    <td> {{ item.status }} </td>
                    <td> {{ item.label }} </td>
                    <td> {{ item.order }} </td>
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