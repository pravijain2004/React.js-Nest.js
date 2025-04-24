import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;
@Schema()

export class User{

  @Prop({ isRequired :true, trim:true})
  Username:string

  @Prop({isRequired:true, trim:true})
  Email:string

  @Prop({ isRequired:true, trim:true})
  Password:string

  @Prop()
  resetToken?: string;
}
 
export const UserSchema = SchemaFactory.createForClass(User);