const User = require("../model/user");
const jwt = require("jsonwebtoken");

const { validationResult } = require("express-validator");

//회원가입
exports.postsign = async (req, res) => {
    const { UserId, Nickname, Password } = req.body;

    const error = validationResult(req);
    if (!error.isEmpty()) {
        console.log(error.array());
        return res.status(200).json({ message: error.array() });
    }
    await User.create({ accountId: UserId, nickname: Nickname, password: Password });
    return res.status(200).json({ message: [] });
    // const isusername = await User.findOne({ where: { username: username } });

    // if (isusername) {
    //     return res.status(400).json({ errorMessage: "중복된 아이디입니다." });
    // }
    // if (CheckPassword !== Password) {
    //     return res.status(400).json({ errorMessage: "비밀번호가 일치하지 않습니다." });
    // }
};

//로그인
exports.postlogin = async (req, res) => {
    const { UserId, Password } = req.body;
    
    const finduser = await User.findOne({ where: { accountId: UserId } });
    console.log(finduser)

    if (!finduser) {
        return res.status(400).json({ errorMessage: "아이디가 일치하지 않습니다." });
    }
    if (Password !== finduser.password) {
        return res.status(400).json({ errorMessage: "패스워드가 일치하지 않습니다." });
    }
    const accessToken = jwt.sign({ Id: finduser.userId }, "wow", { expiresIn: "12h" });
    return res.status(200).json({ accessToken: "Bearer " + accessToken, message: "로그인 성공!" });
};
