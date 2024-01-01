<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">canvass</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>requested_by_id</th>
                <th>noted_by_id</th>
                <th>rc_number</th>
                <th>date_requested</th>
                <th>purpose</th>
                <th>notes</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.canvasses">
                    <td> {{ item.id }} </td>
                    <td> {{ item.requested_by_id }} </td>
                    <td> {{ item.noted_by_id }} </td>
                    <td> {{ item.rc_number }} </td>
                    <td> {{ item.date_requested }} </td>
                    <td> {{ item.purpose }} </td>
                    <td> {{ item.notes }} </td>
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