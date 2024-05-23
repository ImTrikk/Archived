#!/bin/bash

# Ensure script stops on first error
set -e

# Configuration variables
SERVER="192.168.1.18"
USER="administrator"
REMOTE_PATH="/var/www/192.168.1.18"
PORT="22" # Change this to the alternative port if needed

# Checkout to git main (or correct branch name)
echo "Switching to main branch..."
git checkout main

# Pull latest changes
echo "Pulling latest changes..."
git pull origin main

# Build the React app
# echo "Building the app..."
# npm install
# npm run build

# Creating the directories for the NFS
sudo mkdir -p /srv/nfs4/backups
sudo mkdir -p /srv/nfs4/www

# Binding the directories to the NFS
sudo mount --bind /opt/backups /srv/nfs4/backups
sudo mount --bind /var/www /srv/nfs4/www

# Appending the directories to the fstab
echo "/opt/backups /srv/nfs4/backups  none   bind   0   0" | sudo tee -a /etc/fstab
echo "/var/www     /srv/nfs4/www      none   bind   0   0" | sudo tee -a /etc/fstab

# Exportfs
third=$(hostname -I | cut -d'.' -f3)
ip_prefix="192.168.$third"

# Prepare the lines with the correct IP part
# Pagkuha sa ip_prefix run hostname -I for example ang result niya is 192.168.2.1 kuhaa ang 2 then ibutang as 192.168.2.0/24
lines="/srv/nfs4         $ip_prefix.0/24(rw,sync,no_subtree_check,crossmnt,fsid=0)
/srv/nfs4/backups $ip_prefix.0/24(ro,sync,no_subtree_check) $ip_prefix.3(rw,sync,no_subtree_check)
/srv/nfs4/www     $ip_prefix.20(rw,sync,no_subtree_check)"

# Append the lines to the /etc/exports file if they don't already exist
for line in "$lines"; do
    grep -qxF "$line" /etc/exports || echo "$line" | sudo tee -a /etc/exports
done

sudo exportfs -ar
sudo exportfs -v

# Firewall
sudo ufw allow from $ip_prefix.0/24 to any port nfs
sudo ufw status

sudo exportfs -ar
sudo exportfs -v

# Deploy files to server t
echo "Deploying files to server..."
scp -P $PORT -r build/* $USER@$SERVER:$REMOTE_PATH

# Setting permissions on the server
echo "Setting permissions..."
ssh -p $PORT $USER@$SERVER 'sudo chown -R www-data:www-data /var/www/192.168.1.18 && sudo chmod -R 755 /var/www/192.168.1.18'

echo "Done!"
