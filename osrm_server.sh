#!/bin/bash

sudo apt update
sudo apt install -y build-essential cmake git g++ pkg-config libboost-all-dev \
  libprotobuf-dev protobuf-compiler libosmpbf-dev libbz2-dev libstxxl-dev \
  libxml2-dev libgeos-dev libgeos-c1v5 libgdal-dev
sudo apt install -y python3-pip
sudo apt install -y lua5.2
sudo apt update
sudo apt install libtbb-dev
sudo apt update
sudo apt install lua5.2 liblua5.2-dev


git clone https://github.com/Project-OSRM/osrm-backend.git
cd osrm-backend
mkdir -p build
cd build
cmake ..
make

wget https://download.geofabrik.de/north-america/us/new-york-latest.osm.pbf

# Prepare the OSM data
./osrm-extract -p profiles/car.lua new-york-latest.osm.pbf

# Build the routing graph
./osrm-contract

./osrm-routed --algorithm mld new-york-latest.osm.pbf
