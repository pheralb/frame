import html2canvas from "html2canvas";

// Export the element as an image:
const exportAsImage = async (el: HTMLDivElement, imageFileName: string) => {
  const canvas = await html2canvas(el);
  const image = canvas.toDataURL("image/png", 1.0);
  downloadImage(image, imageFileName);
};

// Download the image:
const downloadImage = (blob: string, fileName: string) => {
  const createLink = window.document.createElement("a");
  createLink.download = fileName;
  createLink.href = blob;
  document.body.appendChild(createLink);
  createLink.click();
  document.body.removeChild(createLink);
  createLink.remove();
};

export default exportAsImage;
