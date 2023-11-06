# Feed 

## Branch Explanation

### calllum, callan, and luke
- do you testing to not mess up dev and main
- merge from dev or main
### pc-dev
- for frontend, doesn't include GPIO
- once personal branch is testing merge with this
### raspi-dev
- for backend, includes GPIO
- once personal branch is testing merge with this
### main
- once raspi-dev and pc-dev are tested merge here
- this will be where final code is

## IP
- Add IP to vit.config.js and to package.json under proxy
    - can get ip by running ifconfig
    - or run backend 

## GPIO Control (raspi-dev only)
- Run command in terminal outside of virtual environment and inside later on
    - sudo apt install python3-gpiozero
    - sudo apt install python3-RPi.GPIO

## Backend/Server
- Cd to server and run the commands:
    - python3 -m venv venv
    - source venv/bin/activate
    - pip install -r requirements.txt
    - virtualenv --system-site-packages venv
    - sudo -E venv/bin/flask run --host=0.0.0.0
- LCD install stuff is: sudo sh install sh (figure out how we should do this, eg put this in the requirements?)

## Material UI for React (might not be required)
- npm install @mui/material @emotion/react @emotion/styled

## Frontend/Client
- In another terminal, cd to client and run command:
    - npm install
    - npm fund
    - npm run dev -- --host  
