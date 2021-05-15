import { createApp, h} from 'vue'

import App from './App.vue'
import HomeData from './HomeData'
//import { createApp } from '../../shims-vue'
/* eslint-disable no-new */

//const app =createApp(App);
const startApp = function (modelData: any) {
    createApp({
        render() {
            
            let data: HomeData = { id: 1, value: "One" }
            return h(App, {
                home: modelData
            })
        }
    }).mount("#app");
};

    //createApp({
    //    render() {
    //        let data: HomeData = { uid: 1, value:"One"}
    //        return h(App, {
    //            home: data
    //        })
    //    }
    //}).mount("#app");



    //app.component('message-comp', {
    //    props: ['message'],
    //    template: '<h2>{{ message }}</h2>'
    //}).mount("#app");

(window as any).app = {
    startApp: startApp
}