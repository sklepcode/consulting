import axios from "axios";

import { logError } from "@/utils/logError";

const baseUrl = "/api/v1/operations";

const fetchOperations = async () => {
  try {
    return await axios.get(baseUrl);
  } catch (error) {
    logError(error);
  }
};

const createOperation = async (body) => {
  try {
    return await axios.post(baseUrl, body);
  } catch (error) {
    logError(error);
  }
};

export default {
  fetchOperations,
  createOperation,
};
