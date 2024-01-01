<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">department</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>division_id</th>
                <th>code</th>
                <th>name</th>
                <th>status</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.departments">
                    <td> {{ item.id }} </td>
                    <td> {{ item.division_id }} </td>
                    <td> {{ item.code }} </td>
                    <td> {{ item.name }} </td>
                    <td> {{ item.status }} </td>
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