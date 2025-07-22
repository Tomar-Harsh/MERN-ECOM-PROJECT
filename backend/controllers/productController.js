// Sabhi products ko get karne ka controller function
const getAllProducts = (req, res) => {
  // Response bhej rahe hain ki route sahi se kaam kar raha hai
  res.status(200).json({ message: "Route is working fine" });
};

module.exports = { getAllProducts };