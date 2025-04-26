sudo apt update
sudo apt install docker.io -y
sudo usermod -aG docker $USER
docker run -d -p localhost:3000:3000 bkinimich/juice-shop