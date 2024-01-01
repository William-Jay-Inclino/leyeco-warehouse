<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">meqs</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>jo_id?</th>
                <th>rv_id?</th>
                <th>spr_id?</th>
                <th>meqs_number</th>
                <th>reference_type</th>
                <th>meqs_date</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.MEQSs">
                    <td> {{ item.id }} </td>
                    <td> {{ item.jo_id }} </td>
                    <td> {{ item.rv_id }} </td>
                    <td> {{ item.spr_id }} </td>
                    <td> {{ item.meqs_number }} </td>
                    <td> {{ item.reference_type }} </td>
                    <td> {{ item.meqs_date }} </td>
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