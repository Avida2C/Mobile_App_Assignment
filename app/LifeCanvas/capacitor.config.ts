import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lifecanvas.splashandico',
  appName: 'LifeCanvas',
  webDir: 'www',
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      launchFadeOutDuration: 3000,
      //backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "FIT_XY",
      //showSpinner: true,
      //androidSpinnerStyle: "large",
      //iosSpinnerStyle: "small",
      //spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  server: {
    androidScheme: 'https'
  },
}
};

export default config;
