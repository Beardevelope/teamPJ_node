const sequelize = require("../util/database");
const Sequelize = require("sequelize");
const User = require("./user");

const Post = sequelize.define("posts", {
    postId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Like: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Post.belongsTo(User, { foreignKey: "userId", as: "poster" });
Post.belongsTo(User, { foreignKey: "nickname", as: "nicknameUser" });
module.exports = Post;
