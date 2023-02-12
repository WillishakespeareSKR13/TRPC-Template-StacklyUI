import type { Model } from "mongoose";
import mongoose, { model, Schema } from "mongoose";

export interface IRole {
  name: string;
  label: string;
}

const RoleSchema = new Schema<IRole>(
  {
    name: {
      type: String,
      trim: true,
    },
    label: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

RoleSchema.set("toJSON", {
  virtuals: true,
});

const roleModel = () =>
  (mongoose?.models?.Role ?? model("Role", RoleSchema)) as Model<IRole>;

export default roleModel;
