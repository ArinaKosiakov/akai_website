"use client";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets", false, /\.(png|jpe?g|svg)$/)
);

const Image = ({ number, suit }) => {
  const combo = number ? `${number}${suit}` : "red_back";

  return (
    <img
      src={images[`${combo}.png`].default}
      alt={combo}
      height={150}
      width={150}
    />
  );
};

export default Image;
