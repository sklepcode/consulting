import axios from "axios";

import { logError } from "@/utils/logError";

const baseUrl = "/api/v1/suppliers";

const fetchSuppliers = async () => {
  try {
    return await axios.get(baseUrl);
  } catch (error) {
    logError(error);
  }
};

const createSupplier = async (body) => {
  try {
    return await axios.post(baseUrl, body);
  } catch (error) {
    logError(error);
  }
};

export default {
  fetchSuppliers,
  createSupplier,
};
