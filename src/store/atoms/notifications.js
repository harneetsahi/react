import { atom, selector } from "recoil";

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: {
    network: 7,
    jobs: 8,
    messages: 13,
    notifications: 3,
  },

  // to get the values from the your backend api, we would put a async call on the selector instead of hardcoding values like above
  // default: selector({
  //   key: "notificationsSelector",
  //   get: async () => {
  //     const res = await axios.get("https://whateveryourapi.com");
  //     return res.data;
  //   },
  // }),
});

export const totalNoticationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    const allNotifications = get(notificationsAtom);

    return (
      allNotifications.network +
      allNotifications.jobs +
      allNotifications.messages +
      allNotifications
    );
  },
});
