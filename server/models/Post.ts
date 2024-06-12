import {DataTypes} from "sequelize";
import sequelize from "@/config/db/mysql";

const Post = sequelize.define(
  "Post",
  {
    id: {
      type: DataTypes.BIGINT({length: 20}).UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.BIGINT({length: 20}).UNSIGNED,
      allowNull: false,
    },
    category_id: {
      type: DataTypes.BIGINT({length: 20}).UNSIGNED,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "posts_slug_unique",
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    excerpt: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: "TIMESTAMP",
      defaultValue: null,
    },
    updated_at: {
      type: "TIMESTAMP",
      defaultValue: null,
    },
    published_at: {
      type: "TIMESTAMP",
      defaultValue: null,
    },
  },
  {
    timestamps: false,
  }
);

export default Post;
