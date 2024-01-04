<template>

    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h1 class="h3 mb-0 text-gray-800">Data Management</h1>
            </div>
            </div>
            <div class="row mb-4">
            <div class="col">
                <h2 class="h5 mb-0 text-gray-600">Brand</h2>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <Breadcrumbs :items="breadcrumbItems"/>
            </div>
        </div>

        <div class="row justify-content-center mt-5">
            <div class="col-4">

                <form @submit.prevent="onSubmit">

                    <div class="row">
                        <div class="col">
                            <div class="card shadow mb-4">
                                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between bg-primary text-white">
                                    <h6 class="m-0 font-weight-bold"> {{ action + ' ' + moduleLabel }} </h6>
                                </div>
                    
                                <div class="card-body">
                                    <div class="form-group">
                                        <label>Name</label>
                                        <input v-model="name" type="text" class="form-control">
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    <div class="row">
                        <div class="col">
                            <div class="d-flex justify-content-between">
                                <button @click="onCancel" type="button" class="btn btn-dark">Cancel</button>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        </div>



  </div>

</template>


<script setup lang="ts">
    import Breadcrumbs from '../../common/components/Breadcrumbs.vue'
    import { computed, onMounted, ref } from 'vue';
    import { routeNames } from '../../common';
    import BrandService from './brand.service';

    const moduleLabel = 'Brand';

    const breadcrumbItems = ref([
    {
        text: 'Brand List',
        route: routeNames.data_management_brand_form,
        isActive: false,
    },
    {
        text: 'Brand Form',
        route: routeNames.data_management_brand_form,
        isActive: true,
    },
    ]);

    const name = ref('');

    const brandService = new BrandService();

    onMounted( async() => {
        const brands = await brandService.getAllBrands()
        console.log('brands', brands)
    })

    const action = computed(() => 'Add');

    const onSubmit = async () => {
        console.log('onSubmit()')
    };

    const onCancel = () => {
        console.log('onCancel');
    };


</script>

