<template>

    <div class="container-fluid">

        <div class="row">
            <div class="col">
                <h1 class="h3 mb-0 text-gray-800">Purchasing</h1>
            </div>
            </div>
            <div class="row mb-4">
            <div class="col">
                <h2 class="h5 mb-0 text-gray-600">Canvass</h2>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card shadow mb-4">
                    <div class="card-header py-3 d-flex flex-row align-items-center">
                        <div class="row w-100 justify-content-between align-items-center">
                            <div class="col-6">
                            <Search />
                            </div>
                            <div class="col-6 text-right">
                                <router-link :to="{name: routeNames.purchasing_canvass_form}">
                                    <button class="btn btn-primary">Add Canvass</button>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!-- Card Body -->
                    <div class="card-body">

                        <div class="row mb-3">
                            <TablePerPage />
                        </div>

                        <div class="row">
                            <div class="col">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th>RC Number</th>
                                                <th>Requisitioner</th>
                                                <th>Date</th>
                                                <th class="text-center">
                                                    <i class="fas fa-fw fa-cogs"></i>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col">
                                <TablePagination class="float-right"/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


  </div>

</template>

<script setup lang="ts">

import Search from './components/Search.vue'
import TablePagination from './components/TablePagination.vue'
import TablePerPage from './components/TableSelectPerPage.vue'

import { routeNames } from '../common';

</script>