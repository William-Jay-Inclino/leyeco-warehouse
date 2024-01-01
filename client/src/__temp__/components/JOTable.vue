<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">jo</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>canvass_id</th>
                <th>supervisor_id</th>
                <th>classification_id</th>
                <th>jo_number</th>
                <th>date_requested</th>
                <th>equipment</th>
                <th>department_id</th>
                <th>is_cancelled</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.JOs">
                    <td> {{ item.id }} </td>
                    <td> {{ item.canvass_id }} </td>
                    <td> {{ item.supervisor_id }} </td>
                    <td> {{ item.classification_id }} </td>
                    <td> {{ item.jo_number }} </td>
                    <td> {{ item.date_requested }} </td>
                    <td> {{ item.equipment }} </td>
                    <td> {{ item.department_id }} </td>
                    <td> {{ item.is_cancelled }} </td>
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