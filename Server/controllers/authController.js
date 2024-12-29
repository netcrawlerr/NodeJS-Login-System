import bcryptjs from "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { prismaClient } from "../server.js";

export const register = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      throw new Error("Fields Are Required");
    }
    const user = await prismaClient.user.findFirst({ where: { email } });
    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "User Already Exists" });
    }

    const hashedPwd = await bcryptjs.hash(password, 10);
    const verificationToken = generateVerificationToken();
    const verificationTokenExpiresAt = new Date(
      Date.now() + 24 * 60 * 60 * 1000
    );
    const newUser = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: hashedPwd,
        verificationToken: verificationToken,
        verificationTokenExpiresAt: verificationTokenExpiresAt,
      },
    });
    generateTokenAndSetCookie(res, newUser.id);
    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      newUser,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await prismaClient.user.findFirst({ where: { email } });
    if (!user) {
      return res.json({ msg: "User Not Found" });
    }

    if (user && (await bcryptjs.compare(password, user.password))) {
      return res.status(200).json({ msg: "User Logged In" });
    }
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  res.send("Logout Controller");
};
