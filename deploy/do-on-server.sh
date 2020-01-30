now=`date +"%Y-%m-%d_%H_%M_%S"`
release_dir="epicure_client_$now"
releases_dir="/home/ubuntu/epicure/Client/releases"
app_dir="/home/ubuntu/Client"
gzipName="epicure-client.tar.gz"

echo 'removing old versions'
cd $releases_dir
# sudo rm -r ./*

sudo mkdir $release_dir

cd ~

echo 'extracting version'
sudo tar -xf $gzipName --directory $releases_dir"/"$release_dir

sudo rm $gzipName

echo 'Setting permissions...'
cd $releases_dir"/"$release_dir

#sudo mv * ../
cd ../
#sudo rm -r Client


 sudo chgrp -R www-data $releases_dir"/"$release_dir
 sudo chmod -R ug+rwx  $releases_dir"/"$release_dir


echo 'Updating symlinks...'
sudo ln -nfs $releases_dir"/"$release_dir"/dist"  $app_dir

exit