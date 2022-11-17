import axios from "axios";

import { logError } from "@/utils/logError";

const baseUrl = "/api/v1/emails";

const fetchEmails = async () => {
  try {
    return await axios.get(baseUrl);
  } catch (error) {
    logError(error);
  }
};

export default {
  fetchEmails,
};
