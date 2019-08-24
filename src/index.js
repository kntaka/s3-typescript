import AWS from 'aws-sdk'
import S3 from 'aws-sdk/clients/s3'

AWS.config.logger = console

const accessKeyId = '';
const secretAccessKey = '';
const bucketName = '';

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
