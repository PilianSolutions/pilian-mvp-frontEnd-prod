import { StyleRenderer, ThemeRef, ThemeVariables, lyl } from '@alyle/ui';
import {
  STYLES as CROPPER_STYLES,
  ImgCropperConfig,
  ImgCropperErrorEvent,
  ImgCropperEvent,
  ImgCropperLoaderConfig,
  LyImageCropper
} from '@alyle/ui/image-cropper';
import { LySliderChange } from '@alyle/ui/slider';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

const STYLES = (_theme: ThemeVariables, ref: ThemeRef) => {
  ref.renderStyleSheet(CROPPER_STYLES);
  const cropper = ref.selectorsOf(CROPPER_STYLES);

  return {
    root: lyl `{
      ${cropper.root} {
        max-width: 400px
        height: 300px
      }
    }`,
    sliderContainer: lyl `{
      text-align: center
      max-width: 400px
      margin: 14px
    }`,
    cropResult: lyl `{
      border-radius: 50%
    }`
  };
};

@Component({
  selector: 'app-modal-editar-foto-perfil-funcionario',
  templateUrl: './modal-editar-foto-perfil-funcionario.component.html',
  styleUrls: ['./modal-editar-foto-perfil-funcionario.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    StyleRenderer
  ]
})
export class ModalEditarFotoPerfilFuncionarioComponent {
  classes = this.sRenderer.renderSheet(STYLES, 'root');
  croppedImage?: string;
  scale: number | undefined;
  ready: boolean | undefined;
  minScale: number | undefined;
  habilitarBotao: boolean | undefined;

  @ViewChild(LyImageCropper, { static: true }) readonly cropper: LyImageCropper | any;
  myConfig: ImgCropperConfig = {
    width: 150, // Default `250`
    height: 150, // Default `200`
    fill: '#ff2997', // Default transparent if type = png else #000
    type: 'image/png', // Or you can also use `image/jpeg`
    round: true
  };

  constructor(
    readonly sRenderer: StyleRenderer,
    private _platform: Platform
  ) { }

  ngAfterViewInit() {
    // demo: Load image from URL and update position, scale, rotate
    // this is supported only for browsers
    if (this._platform.isBrowser) {
      const config: ImgCropperLoaderConfig = {
        scale: 0.745864772531767,
        xOrigin: 642.380608078103,
        yOrigin: 236.26357452128866,
        // rotation: 90,
        originalDataURL: 'https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2Flarm-rmah-47685-unsplash-1.png?alt=media&token=96a29be5-e3ef-4f71-8437-76ac8013372c'
      };

      this.cropper.loadImage(config);
    }

    this.habilitarBotao = false;
  }

  onCropped(e: ImgCropperEvent) {
    this.croppedImage = e.dataURL;
    console.log('cropped img: ', e);
  }
  onLoaded(e: ImgCropperEvent) {
    this.habilitarBotao = true;
    console.log('img loaded', e);
  }
  onError(e: ImgCropperErrorEvent) {
    console.warn(`'${e.name}' is not a valid image`, e);
  }
  onSliderInput(event: LySliderChange) {
    this.scale = event.value as number;
  }
}