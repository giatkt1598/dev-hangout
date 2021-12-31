import moment from "moment";
export const fToNow = (date: Date, withSuffix?: boolean) => {
  return moment(date).fromNow(!withSuffix);
}