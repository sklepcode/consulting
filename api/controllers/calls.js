exports.sendVoiceMessage = async (req, res) => {
  try {
    res.send({ success: true });
  } catch (err) {
    res.status(500).send({
      message: err.response?.data || err.message || "Some error occurred",
    });
  }
};
