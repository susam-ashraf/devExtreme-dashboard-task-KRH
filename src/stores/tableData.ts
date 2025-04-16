import type { ActionMethods, TableDataState } from "@/types/dataTypes";
import { defineStore } from "pinia";

export const useTableDataStore = defineStore<"test", TableDataState, {}, ActionMethods>("test", {
  state: (): TableDataState => ({
    message: "Hello from Pinia!",
    orders: [
      {
        ID: 1115346,
        EmployeeName: "Harv Mudd",
        TypeReason: "Vacation",
        Reason: "Summer Vacation",
        EntryWork: "2025/04/10",
        ReturnWork: "2025/04/13 9:00",
        OfficeOpening: "2025/04/13 9:00",
        OfficeReEntry: "2025/04/13 9:00",
      },
      {
        ID: 1112566,
        EmployeeName: "Jim Packard",
        TypeReason: "Sick Leave",
        Reason: "Having bad Headache",
        EntryWork: "2017/04/10",
        ReturnWork: "2017/04/13 9:00",
        OfficeOpening: "2025/04/13 9:00",
        OfficeReEntry: "2025/04/13 9:00",
      },
      {
        ID: 1142564,
        EmployeeName: "Noman Khan",
        TypeReason: "Sick Leave",
        Reason: "Having bad Headache",
        EntryWork: "2017/04/10",
        ReturnWork: "2017/04/13 9:00",
        OfficeOpening: "2025/04/13 9:00",
        OfficeReEntry: "2025/04/13 9:00",
      },
      {
        ID: 1142536,
        EmployeeName: "John Korner",
        TypeReason: "Sick Leave",
        Reason: "Having bad Headache",
        EntryWork: "2017/04/10",
        ReturnWork: "2017/04/13 9:00",
        OfficeOpening: "2025/04/13 9:00",
        OfficeReEntry: "2025/04/13 9:00",
      },
      {
        ID: 12242536,
        EmployeeName: "Steave Korner",
        TypeReason: "Sick Leave",
        Reason: "Having bad Headache",
        EntryWork: "2017/04/10",
        ReturnWork: "2017/04/13 9:00",
        OfficeOpening: "2025/04/13 9:00",
        OfficeReEntry: "2025/04/13 9:00",
      },
      {
        ID: 123332536,
        EmployeeName: "Russ Korner",
        TypeReason: "Sick Leave",
        Reason: "Having bad Headache",
        EntryWork: "2017/04/10",
        ReturnWork: "2017/04/13 9:00",
        OfficeOpening: "2025/04/13 9:00",
        OfficeReEntry: "2025/04/13 9:00",
      },
    ],
  }),
  actions: {
    updateMessage(newMessage: string) {
      this.message = newMessage;
      console.log("updateMessage----");
    },
    addTabelData(firstData: string, secoundData: string) {
      console.log("updateMessage----");

      this.orders.push({
        ID: Number(firstData),
        EmployeeName: secoundData,
        TypeReason: "Half Day Leave",
        Reason: "Suddenly feeling sick",
        EntryWork: "2025/06/18",
        ReturnWork: "2025/03/13 9:00",
        OfficeOpening: "2025/04/13 7:00",
        OfficeReEntry: "2025/04/13 8:00",
      });
    },
  },
});
