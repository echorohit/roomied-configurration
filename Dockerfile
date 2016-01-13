FROM dockerfile/nodejs

MAINTAINER Matthias Luebken, matthias@catalyst-zero.com

WORKDIR /home/bll/roomied-configuration

# Install  Prerequisites
RUN npm install -g grunt-cli
RUN npm install -g bower

# Install  packages
ADD package.json /home/bll/roomied-configuration/package.json
RUN npm install

# Manually trigger bower. Why doesnt this work via npm install?
ADD .bowerrc /home/bll/roomied-configuration/.bowerrc
ADD bower.json /home/bll/roomied-configuration/bower.json
RUN bower install --config.interactive=false --allow-root

# Make everything available for start
ADD . /home/bll/roomied-configuration

# currently only works for development
ENV NODE_ENV development

# Port 3000 for server
# Port 35729 for livereload
EXPOSE 3000 35729
CMD ["grunt"]
Status