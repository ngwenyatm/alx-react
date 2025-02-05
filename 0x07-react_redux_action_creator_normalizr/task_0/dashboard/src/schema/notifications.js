import * as notificationItem from "../../notifications.json";


export const getAllNotificationsByUser = (userId) => {
  if (!Array.isArray(notifications)) {
    console.error("Notifications data is not an array");
    return [];
  }
  return notifications.filter((item) => item.author.id === userId)
    .map(({ context }) => context);
};