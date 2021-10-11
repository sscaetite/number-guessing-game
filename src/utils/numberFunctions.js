export const getDrawNumber = (minNumber, maxNumber) => {
  const randomNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  return randomNumber;
};
