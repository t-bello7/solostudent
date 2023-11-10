import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA,  VitePWAOptions } from "vite-plugin-pwa";

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "autoUpdate",
  manifest: {
    name: "The name of your application",
    theme_color: "#317EFB",
    short_name: "This name will show in your Windows taskbar, in the start menu, and Android homescreen",
    start_url: "The URL that should be loaded when your application is opened",
    display: "standalone",
    description: "A description for your application",
    lang: " The default language of your application",
    dir: "ltr",
    background_color: "#000000",
    orientation: "any",
    icons: [
        {
            "src": "https://www.pwabuilder.com/assets/icons/icon_512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
        },
        {
            "src": "https://www.pwabuilder.com/assets/icons/icon_192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
        }
    ],
    screenshots: [
        {
            "src": "https://www.pwabuilder.com/assets/screenshots/screen1.png",
            "sizes": "2880x1800",
            "type": "image/png",
        }
    ],
    related_applications: [
        {
            "platform":"windows",
            "url": " The URL to your app in that app store"
        }
    ],
    prefer_related_applications: false,
    shortcuts: [
        {
            "name":"The name you would like to be displayed for your shortcut",
            "url":"The url you would like to open when the user chooses this shortcut. This must be a URL local to your PWA. For example: If my start_url is /, this URL must be something like /shortcut",
            "description":"A description of the functionality of this shortcut"
        }
    ]
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
