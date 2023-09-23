// utils/firebaseClient.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    // その他の設定
  };

const app = initializeApp(firebaseConfig);

export default app;


// Firebase の初期化は一度だけ行う
if (!getApps().length) {
    initializeApp(firebaseConfig);
  }


// const admin = require('firebase-admin');
// const robot = require('robotjs');

// // Firebaseの初期化
// const serviceAccount = require('path_to_your_service_account_file.json');
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: 'https://your-database-name.firebaseio.com'
// });

// const db = admin.database();
// const ref = db.ref('coordinates');

// // 座標の変更をリッスン
// ref.on('value', snapshot => {
//     const { x, y } = snapshot.val();

//     // ここで座標をマウスにマッピングする
//     robot.moveMouse(x, y); // これは直接マウスの絶対位置に移動します。
//                            // 必要に応じて相対的な移動や他のマウスの操作を実装できます。
// });