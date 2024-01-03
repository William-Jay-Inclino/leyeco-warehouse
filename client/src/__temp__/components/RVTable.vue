<template>

    <div class="table-responsive">
        <table class="table table-bordered table-hovered table-sm">
            <caption class="caption-top">rv</caption>
            <thead class="thead-dark">
                <th>id</th>
                <th>canvass_id</th>
                <th>supervisor_id</th>
                <th>classification_id</th>
                <th>rv_number</th>
                <th>date_requested</th>
                <th>work_order_no</th>
                <th>work_order_date</th>
                <th>is_cancelled</th>
            </thead>

            <tbody>
                <tr v-for="item in $data.RVs">
                    <td> {{ item.id }} </td>
                    <td> {{ item.canvass_id }} </td>
                    <td> {{ item.supervisor_id }} </td>
                    <td> {{ item.classification_id }} </td>
                    <td> {{ item.rv_number }} </td>
                    <td> {{ item.date_requested }} </td>
                    <td> {{ item.work_order_no }} </td>
                    <td> {{ item.work_order_date }} </td>
                    <td>
                        <button @click="toggleIsCancelled(item)" class="btn btn-sm btn-secondary">
                            {{ item.is_cancelled }}
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</template>



<script setup lang="ts">

    import { tempStore } from '../temp.store';
    import { rvStore } from '../../purchasing/rv.store';
    import { IRV } from '../../common/entities/common.entities';

    const $data = tempStore()
    const $rv = rvStore()

    console.log('$data', $data)

    const toggleIsCancelled = (rv: IRV) => {
        const item = $rv._items.find(i => i.id === rv.id)

        if(!item){
            console.error('item not found')
            return 
        }

        item.is_cancelled = !item.is_cancelled

    }

</script>

<style scoped>
.caption-top {
    caption-side: top;
}
</style>