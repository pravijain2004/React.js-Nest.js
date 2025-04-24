import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;
@Schema()

export class User{

  @Prop({required :true, trim:true})
  username:string

  @Prop({required :true, trim:true})
  email:string

  @Prop({ required :true, trim:true})
  password:string

  @Prop()
  resetToken?: string;
}
 
export const UserSchema = SchemaFactory.createForClass(User);