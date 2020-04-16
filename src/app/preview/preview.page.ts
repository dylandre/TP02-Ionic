import { Component, OnInit } from '@angular/core';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  picture: string;
  enrPicture: string;

  constructor(private cameraPreview: CameraPreview) {
    this.initCamera();
  }

  ngOnInit() {
  }

  initCamera() {
    // camera options (Size and location).
    // In the following example, the preview uses the rear camera and display the preview in the back of the webview
    const cameraPreviewOpts: CameraPreviewOptions = {
      x: 0,
      y: 0,
      width: window.screen.width,
      height: window.screen.height,
      camera: 'back',
      tapPhoto: true,
      previewDrag: true,
      toBack: true,
      alpha: 1
    };
    // start camera
    this.cameraPreview.startCamera(cameraPreviewOpts).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      });
  }

  takePicture() {
    // picture options
    const pictureOpts: CameraPreviewPictureOptions = {
      width: 1280,
      height: 1280,
      quality: 85
    };
    // take a picture
    this.cameraPreview.takePicture(pictureOpts).then((imageData) => {
      this.picture = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
      this.picture = 'assets/img/test.jpg';
    });
  }

  endCamera() {
    // Stop the camera preview
    this.cameraPreview.stopCamera();
    this.enrPicture = this.picture;
  }
}
