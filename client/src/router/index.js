import Vue from "vue";
import VueRouter from "vue-router";

import CreateNewOperation from "../pages/CreateNewOperation/CreateNewOperation";
import CreateNewSupplier from "../pages/CreateNewSupplier/CreateNewSupplier";
import DocumentOperations from "../pages/DocumentOperations/DocumentOperations";
import DebtOperations from "../pages/DebtOperations/DebtOperations";
import Suppliers from "../pages/Suppliers/Suppliers";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/document-operations",
  },
  {
    path: "/document-operations",
    component: DocumentOperations,
  },
  {
    path: "/debt-operations",
    component: DebtOperations,
  },
  {
    path: "/suppliers",
    component: Suppliers,
  },
  {
    path: "/create-new-operation",
    component: CreateNewOperation,
  },
  {
    path: "/create-new-supplier",
    component: CreateNewSupplier,
  },
];

const router = new VueRouter({ mode: "history", routes });

export default router;
