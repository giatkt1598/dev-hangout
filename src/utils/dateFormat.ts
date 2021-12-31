import moment from "moment";
export const fToNow = (date: Date) => {
  return moment(date).fromNow(true);
}