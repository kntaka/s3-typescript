import AWS from 'aws-sdk'
import S3 from 'aws-sdk/clients/s3'

AWS.config.logger = console // 通信のデバッグ用。不要であれば削除可。

const accessKeyId = ''; // IAMユーザの認証情報の「アクセスキーID」から確認できます。
const secretAccessKey = ''; // IAMユーザのシークレットアクセスキー。アクセスキーを作ったときだけ見れるやつです。
const bucketName = ''; // 東京リージョンなら 'ap-northeast-1'

const bucket = new S3({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: 'ap-northeast-1',
})
const param: S3.Types.PutObjectRequest = {
  Bucket: bucketName,
  Key: 'test.txt', // ファイル絶対パス
  Body: 'hello!', // ファイルの内容
  ACL: 'public-read', // インターネットから誰でもダウンロードできるように
  ContentType: 'text/plain',
}
bucket.upload(param, (err: Error, data: S3.ManagedUpload.SendData) => {
  if (err) {
    console.error(err)
  } else {
    console.log('Successfully uploaded file.', data)
  }
})
