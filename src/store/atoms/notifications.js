import { atom, selector } from "recoil";

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: {
    network: 7,
    jobs: 8,
    messages: 13,
    notifications: 3,
  },
});

export const totalNoticationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationsAtom);

    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.messages +
      allNotifications.notifications
    );
  },
});
