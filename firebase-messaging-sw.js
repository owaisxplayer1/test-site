importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js");

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAYFp2jHPDfPAcCV8GjSusimzbguia4yWU",
    authDomain: "oneplay-qa-2b807.firebaseapp.com",
    projectId: "oneplay-qa-2b807",
    storageBucket: "oneplay-qa-2b807.firebasestorage.app",
    messagingSenderId: "935976642998",
    appId: "1:935976642998:web:83a9278d62d30ffdbf7917",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('Background message received. ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon
    };

    return self.registration.showNotification(notificationTitle, notificationOptions);
});
