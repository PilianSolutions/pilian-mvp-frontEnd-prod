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
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

const STYLES = (_theme: ThemeVariables, ref: ThemeRef) => {
  ref.renderStyleSheet(CROPPER_STYLES);
  const cropper = ref.selectorsOf(CROPPER_STYLES);

  return {
    root: lyl `{
      ${cropper.root} {
        max-width: 100%
        height: 300px
      }
    }`,
    sliderContainer: lyl `{
      text-align: center
      max-width: 100%
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
  habilitarBotaoSalvar: boolean = false;
  teste: any
  @Output() dataSaved = new EventEmitter<string>();

  @ViewChild(LyImageCropper, { static: true }) readonly cropper: LyImageCropper | any;
  myConfig: ImgCropperConfig = {
    width: 150, // Default `250`
    height: 150, // Default `200`
    fill: '#ff2997', // Default transparent if type = png else #000
    type: 'image/png', // Or you can also use `image/jpeg`
    round: true
  };

  constructor(
    private readonly ref: DynamicDialogRef,
    readonly sRenderer: StyleRenderer,
    private _platform: Platform,
    public config: DynamicDialogConfig
  ) { }

  ngAfterViewInit() {
    // demo: Load image from URL and update position, scale, rotate
    // this is supported only for browsers

    if (this.config.data.foto && this._platform.isBrowser) {
      const config: ImgCropperLoaderConfig = {
        scale: this.config.data.foto.scale,
        xOrigin: this.config.data.foto.xOrigin,
        yOrigin: this.config.data.foto.yOrigin,
        // rotation: 90,
        originalDataURL: this.config.data.foto.originalDataURL
      };
      this.cropper.loadImage(config);
    }


  }

  onCropped(e: ImgCropperEvent) {
    this.habilitarBotaoSalvar = true;
    this.croppedImage = e.dataURL;
    this.teste = e
    console.log('cropped img: ', e);
  }
  limpar(){
    this.habilitarBotaoSalvar = false;
    this.cropper.clean()
  }
  adicionarFoto(){
    this.habilitarBotaoSalvar = false;
  }
  onLoaded(e: ImgCropperEvent) {
    console.log('img loaded', e);
  }
  onError(e: ImgCropperErrorEvent) {
    console.warn(`'${e.name}' is not a valid image`, e);
  }
  onSliderInput(event: LySliderChange) {
    this.scale = event.value as number;
  }
  salvarFoto(){
    this.ref.close(this.teste);
  }
}
