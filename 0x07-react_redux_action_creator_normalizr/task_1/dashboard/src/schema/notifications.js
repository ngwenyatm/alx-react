import { schema } from 'normalizr';
import * as notificationItem from "../../notifications.json";

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, {
  idAttribute: "guid"
});

const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

export const getAllNotificationsByUser = (userId) => {
  if (!Array.isArray(notificationItem.default)) {
    console.error("Notifications data is not an array");
    return [];
  }
  return notificationItem.default.filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};