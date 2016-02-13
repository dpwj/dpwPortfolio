# Duane Winkel Jr. - DWP

## Server links

http://162.243.79.208/ - Staging Server

http://162.243.109.42/ - Production Server



## Deployment Plan

1. Create Droplet on Digital Ocean

2. ssh into your server

3. create a new user 

4. Install and update all software needed on the server
    1. sudo apt-get update
    2. sudo apt-get upgrade
    3. sudo aptitude update
    4. sudo aptitude safe-upgrade
    5. sudo reboot
    
5. Install Git
    1. configure git
    2. store ssh key
    
6. Install Apache
    1. update config file for security
        
7. On local machine git init in your root directory

8. Set-up remotes  
    1. git remote add name server/location/file/path
    
9. git push name
    1. will send your files to your server
    
    
        
        
        