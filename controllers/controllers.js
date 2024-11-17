import user from "../models/userModel.js";
const createUser = async (req, res) => {
  try {
    const { name, age, email, className, address } = req.body;

    const data = new user({ name, age, email, className, address });
    await data.save();

    res.status(201).json({
      message: "User created successfully",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const data = await user.find();
    res.status(200).json({
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const userDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const detailUser = await user.findById(id);

    res.status(200).json({
      status: true,
      data: detailUser,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

const userUpdate = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, age, email, className, address } = req.body;

    const data = await user.findByIdAndUpdate(
      id,
      {
        name,
        age,
        email,
        className,
        address,
      },
      { new: true }
    );

    res.status(201).json({
      message: "User updated successfully",
      status: true,
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    await user.findByIdAndDelete(id);

    res.status(204).json({
      message: "User deleted successfully!",
      status: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

export default { createUser, getUser, userDetails, userUpdate, deleteUser };
