import { Schema, model } from "mongoose";


const notificationSchema = new Schema(
  {
    userId: { 
      type: Schema.Types.ObjectId, 
      ref: 'User', 
      required: true 
    },
    title: { 
      type: String, 
      required: true 
    },
    message: { 
      type: String, 
      required: true 
    }, 
    type: { 
      type: String, 
      enum: ["like", "follow", "comment", "share", "post", "wallet"], 
      required: true 
    }, 
    status: { 
      type: String, 
      enum: ['unread', 'read', 'archived'],
      default: 'unread',
      required: true 
    },
    data: { 
      type: Schema.Types.Mixed, 
      required: false 
    }, 
    url: { 
      type: String, 
      required: false 
    }, 
    createdAt: { 
      type: Date, 
      default: Date.now 
    }, 
    updatedAt: { 
      type: Date, 
      default: Date.now 
    } 
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


const NotificationModel = model("Notification", notificationSchema);

export { NotificationModel };
