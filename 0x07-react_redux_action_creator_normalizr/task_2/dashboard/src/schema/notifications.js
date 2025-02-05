import { schema, normalize } from 'normalizr';
import * as notificationItem from "../../notifications.json";

const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, {
  idAttribute: "guid"
});

const notification = new schema.Entity("notifications", {
  author: user,
  context: message
});

const normalizedData = normalize(notificationItem.default, [notification]);

export const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const userNotifications = [];

  for (const id in notifications) {
    if (notifications[id].author === userId) {
      userNotifications.push(notifications[id].context);
    }
  }

  return userNotifications;
};