const getCroppedImageUrl = (url: string, width: number, height: number) => {
  // const target = "media/";
  // const index = url.indexOf(target) + target.length;
  // const endpoint = url.slice(0, index);
  // return `${endpoint}crop/${width}/${height}/${url.slice(index)}`;
  // REMARK: can't get the cropping to work well right now.
  return url;
};

export default getCroppedImageUrl;
