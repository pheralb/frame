import html2canvas from "html2canvas";

// Export the element as an image:
const exportAsImage = async (
  element: HTMLDivElement,
  imageFileName: string,
  imageFileType?: string
) => {
  await html2canvas(element).then((canvas) => {
    const tempCanvas = document.createElement("canvas");
    const ctx = tempCanvas.getContext("2d");

    if (ctx) {
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      ctx.drawImage(canvas, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < imageData.data.length; i += 4) {
        if (
          imageData.data[i] === 255 &&
          imageData.data[i + 1] === 255 &&
          imageData.data[i + 2] === 255
        ) {
          // Set alpha channel to maximum value (255) for white pixels
          imageData.data[i + 3] = 255;
        }
      }
      ctx.putImageData(imageData, 0, 0);
      const dataUrl = tempCanvas.toDataURL(imageFileType || "image/png");
      const link = document.createElement("a");
      link.download = imageFileName;
      link.href = dataUrl;
      link.click();
    }
  });
};

export default exportAsImage;
