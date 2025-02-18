import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 8,
});

export const jobsAtom = atom({
  key: "jobsAtom",
  default: 7,
});

export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 102,
});

export const messagesAtom = atom({
  key: "messagesAtom",
  default: 12,
});

export const totalNoticationsSelector = selector({
  key: "totalNotificationsSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationsAtomCount = get(notificationsAtom);
    const messagesAtomCount = get(messagesAtom);

    return (
      networkAtomCount +
      jobsAtomCount +
      notificationsAtomCount +
      messagesAtomCount
    );
  },
});
