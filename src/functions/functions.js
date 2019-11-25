export const canBeSwapped = (vitamin, destColor, arr) => {
  const isMaxi = (vitamin, arr) => {
    let color = vitamin.color;
    let num = vitamin.name;

    let toCheck = arr.filter((item) => {
      return item.color === color && +item.name > +num;
    });
    return toCheck.length === 0;
  };

  const willBeMaxi = (vitamin, destColor, arr) => {
    let num = vitamin.name;
    let toCheck = arr.filter((item) => {
      return item.color === destColor && +item.name > +num;
    });
    return toCheck.length === 0
  };
  return (isMaxi(vitamin, arr) && willBeMaxi(vitamin, destColor, arr) && vitamin.prevColor !== destColor)
};
export const colors = (vitamin, destColor, arr) => {
  return arr.map((item) => {
    if (item.name === vitamin.name) {
      item = { ...item, prevColor: item.color, color: destColor};
    }
    return item;
  });
};

export const transforms = (data) => {
  return data.split(" ").map((vitamin) => {
    return {
      name: vitamin.split("")[0],
      color:  vitamin.split("")[1],
      prevColor: ""
    }
  });
};
