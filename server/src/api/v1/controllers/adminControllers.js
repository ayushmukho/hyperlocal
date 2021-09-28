import SellerApplication from "../models/sellerApplicationModel";
import User from "../models/userModel";

/**
 * @desc get all applucation
 * @router api/admin/seller/applications
 * @access Admin
 */
export const getAllApplication = async (_req, res) => {
  const applications = await SellerApplication.find({});
  res.status(200).json({ message: "Successful", data: applications });
};

/**
 * @desc approve seller
 * @router api/admin/seller/approve/:id
 * @access Admin
 */
export const approveSeller = async (req, res) => {
  const application = await SellerApplication.findById(req.params.id);
  const userid = application.user;
  await User.updateOne(
    { _id: userid },
    {
      isSeller: true,
    }
  );
  await SellerApplication.deleteOne({ _id: application._id });
  res.status(200).json({ message: "Application approved", data: null });
};

/**
 * @desc reject seller
 * @router api/admin/seller/reject/:id
 * @access Admin
 */
export const rejectSeller = async (req, res) => {
  const application = await SellerApplication.findById(req.params.id);
  await SellerApplication.deleteOne({ _id: application._id });
  res.status(200).json({ message: "Application approved", data: null });
};

/**
 * @desc make admin
 * @router api/admin/makeadmin/:id
 * @access Admin
 */
export const makeAdmin = async (req, res) => {
  await User.updateOne(
    { _id: req.params.id },
    {
      isAdmin: true,
    }
  );
  res.status(200).json({ message: `User made admin`, data: null });
};
