<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">po_approver_default</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>approver_id</th>
                <th>label</th>
                <th>order</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.poApprovers">
                    <td> {{ item.id }} </td>
                    <td> {{ item.approver_id }} </td>
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