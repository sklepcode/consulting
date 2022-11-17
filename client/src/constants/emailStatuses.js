export const emailStatuses = {
  NONE: "NONE",
  SENT: "SENT",
  DOCUMENTS_RECEIVED: "DOCUMENTS_RECEIVED",
};

export const emailStatusMap = {
  [emailStatuses.NONE]: {
    translation: "Нет",
    color: "grey",
  },
  [emailStatuses.SENT]: {
    translation: "Отправлено",
    color: "blue",
  },
  [emailStatuses.DOCUMENTS_RECEIVED]: {
    translation: "Документы получены",
    color: "green",
  },
};
