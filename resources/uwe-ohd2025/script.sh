sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker $USER
docker run -d -p 127.0.0.1:3000:3000 bkimminich/juice-shop