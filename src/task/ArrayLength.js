const ArrayLength = () => {
  const array = [1, 2, 3, 2, 2, 2, 3, 3, 1, 4, 2];
  const find = [1, 5, 4, 2, 3];

  let vl = 1;
  const count = array.filter((e) => e === vl).length;
  const marr = {")":1,"(":1,"]":2,"[":2,"}":3,"{":3 };
  console.log(marr)
  const index = find.indexOf(5);
  return (
    console.log(index,"length find"),
    console.log(`${vl}:`, count),
    console.log("2:", array.filter((e) => e === 2).length),
    console.log("3:", array.filter((e) => e === 3).length),
    console.log("4:", array.filter((e) => e === 4).length)
  );
};

export default ArrayLength;
