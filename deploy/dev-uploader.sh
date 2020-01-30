  
url="epicure-gilad.moveodevelop.com"
pemPath="~/Desktop/epicure-key.pem"
gzipName="epicure-client.tar.gz"
cd ../
echo 'compressing'
tar -czf $gzipName dist/
#tar --exclude='.git/' --exclude='node_modules'  --exclude='.vscode' -czf litigator.tar.gz Litigator-Web/

echo 'copying files to server'
scp -i $pemPath $gzipName ubuntu@$url:~

ssh -i $pemPath ubuntu@$url 'bash -s' < deploy/do-on-server.sh

echo 'done'