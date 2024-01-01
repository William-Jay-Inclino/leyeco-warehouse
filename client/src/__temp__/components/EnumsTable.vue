<template>

    <div class="row">

        <div class="col">
            <div class="table-responsive">
                <table class="table table-bordered table-hovered table-sm">
                    <caption class="caption-top">DEPARTMENT_STATUS</caption>
                    <thead class="thead-dark">
                        <th>Key</th>
                        <th>Value</th>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td> ACTIVE </td>
                            <td> 1 </td>
                        </tr>
                        <tr>
                            <td> INACTIVE </td>
                            <td> 2 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="col">
            <div class="table-responsive">
                <table class="table table-bordered table-hovered table-sm">
                    <caption class="caption-top">DIVISION_STATUS</caption>
                    <thead class="thead-dark">
                        <th>Key</th>
                        <th>Value</th>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td> ACTIVE </td>
                            <td> 1 </td>
                        </tr>
                        <tr>
                            <td> INACTIVE </td>
                            <td> 2 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>    

        <div class="col">
            <div class="table-responsive">
                <table class="table table-bordered table-hovered table-sm">
                    <caption class="caption-top">APPROVAL_STATUS</caption>
                    <thead class="thead-dark">
                        <th>Key</th>
                        <th>Value</th>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td> PENDING </td>
                            <td> 1 </td>
                        </tr>
                        <tr>
                            <td> APPROVED </td>
                            <td> 2 </td>
                        </tr>
                        <tr>
                            <td> DISAPPROVED </td>
                            <td> 3 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
        <div class="col">
            <div class="table-responsive">
                <table class="table table-bordered table-hovered table-sm">
                    <caption class="caption-top">EMPLOYEE_POSITION</caption>
                    <thead class="thead-dark">
                        <th>Key</th>
                        <th>Value</th>
                    </thead>
        
                    <tbody>
                        <tr>
                            <td> ADMIN </td>
                            <td> 1 </td>
                        </tr>
                        <tr>
                            <td> GM </td>
                            <td> 2 </td>
                        </tr>
                        <tr>
                            <td> AUDIT </td>
                            <td> 3 </td>
                        </tr>
                        <tr>
                            <td> IT </td>
                            <td> 4 </td>
                        </tr>
                        <tr>
                            <td> CETD </td>
                            <td> 5 </td>
                        </tr>
                        <tr>
                            <td> BUDGET_OFFICER </td>
                            <td> 6 </td>
                        </tr>
                        <tr>
                            <td> WAREHOUSE_OPERATOR </td>
                            <td> 7 </td>
                        </tr>
                        <tr>
                            <td> CPC_MEMBER </td>
                            <td> 8 </td>
                        </tr>
                        <tr>
                            <td> FINANCE </td>
                            <td> 9 </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


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