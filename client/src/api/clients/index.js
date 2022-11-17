import axios from "axios";

import { logError } from "@/utils/logError";

const baseUrl = "/api/v1/clients";

const fetchClients = async () => {
  try {
    return await axios.get(baseUrl);
  } catch (error) {
    logError(error);
  }
};

export default {
  fetchClients,
};
