import SellerApplication from "../models/sellerApplicationModel";
import User from "../models/userModel";

/**
 * @desc get all sellers
 * @route api/seller/
 * @access Public
 */
export const getAllSellers = async (_req, res) => {
  const sellers = await User.find({ isSeller: true });
  res.status(200).json({ message: "Succesful", data: sellers });
};

/**
 * @desc apply to become a seller
 * @route api/seller/apply
 * @access Seller
 */
export const applySeller = async (req, res) => {
  const { description } = req.body;
  const newApplication = await SellerApplication.create({
    user: req.user._id,
    description,
  });
  res.status(200).json({ message: "Application sent", data: newApplication });
};
