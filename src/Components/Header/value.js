


export const valueInput = (item) => {
  return  item.map(i => `<li id="${i.countryCode}"> ${i.name}</li>`).join("")
};
