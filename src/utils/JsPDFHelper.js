/* eslint max-classes-per-file: 0 */
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/* eslint max-len: 0 */
class JsPdfOptions {
  constructor() {
    this.format = 'JPEG';
    this.x = 0;
    this.y = 0;
    this.width = 608;
    this.height = 800;
    this.alias = 'imageToPdf';
    this.compression = 'FAST';
    this.rotation = 0;
  }
}

class HTML2CanvasOptions {
  constructor() {
    this.scale = 2;
    this.width = 1350;
    this.height = 1755;
    this.x = 0;
    this.y = 0;
    this.imageTimeout = 2000;
    this.removeContainer = true;
  }

  buildOptions() {
    return {
      scale: this.scale,
      width: this.width,
      height: this.height,
      x: this.x,
      y: this.y,
      imageTimeout: this.imageTimeout,
      removeContainer: this.removeContainer,
    };
  }
}

class JsPDFHelper extends JsPdfOptions {
  constructor(elm, pdfName) {
    super();
    this.elm = elm;
    this.canvasOptions = new HTML2CanvasOptions();
    this.pdfName = pdfName;
  }

  async getCanvas() {
    return html2canvas(this.elm, this.canvasOptions.buildOptions());
  }

  async getImageFromCanvas() {
    const canvas = await this.getCanvas();
    return canvas.toDataURL('image/png');
  }

  /* eslint new-cap: 0 */
  /* eslint class-methods-use-this: 0 */
  createPdf() {
    return new jsPDF({
      orientation: 'p',
      unit: 'pt',
      format: 'a4',
    });
  }

  async createImageFromPdf() {
    const doc = this.createPdf();
    const img = await this.getImageFromCanvas();
    doc.addImage(img, this.format, this.x, this.y, this.width, this.height, this.alias, this.compression, this.rotation);
    return doc;
  }

  async savePdf() {
    const doc = await this.createImageFromPdf();
    doc.save(`${this.pdfName}.pdf`);
  }
}

export default JsPDFHelper;
