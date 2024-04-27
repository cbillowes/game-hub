const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const endpoint = url.slice(0, index);
  return `${endpoint}crop/600/400/${url.slice(index)}`;
};

export default getCroppedImageUrl;
