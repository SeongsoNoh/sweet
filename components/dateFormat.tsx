type DateType = Date | string | number;

const dateFormater = (format: string, date: DateType = Date.now()): string => {
  const allowForm = date.toString().replace(/\.|\-|\s+/g, "/");
  const _date = new Date(allowForm); // Date 객체로 만들어줍니다.

  return format.replace(/(yyyy|mm|dd|MM|DD|H|i|s)/g, (t: string): any => {
    switch (t) {
      case "yyyy":
        return _date.getFullYear();
      case "mm":
        return _date.getMonth() + 1;
      case "dd":
        return _date.getDate();
      case "MM":
        return zero(_date.getMonth() + 1);
      case "DD":
        return zero(_date.getDate());
      case "H":
        return zero(_date.getHours());
      case "i":
        return zero(_date.getMinutes());
      case "s":
        return zero(_date.getSeconds());
      default:
        return "";
    }
  });
};

export default dateFormater;

function zero(arg0: number): any {
  throw new Error("Function not implemented.");
}
// const format1 = dateFormater("yyyy. MM. DD", Date.now());
// const format2 = dateFormater(
//   "yyyy년 MM월 DD일",
//   "Sun Nov 10 2019 19:27:12 GMT+0900 (한국 표준시)"
// );
// const format3 = dateFormater("MM. DD (yyyy)", "2019 10 16");
