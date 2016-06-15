# Usage

```bash
git clone https://github.com/nobutakaoshiro/meteor-app-example-1-3-2-4.git
cd meteor-app-example-1-3-2-4
meteor npm install
meteor npm start
# => open http://localhost:3000/ with browser
```

# MEMO

```bash
meteor create meteor-app-example-1-3-2-4 --release 1.3.2.4
cd meteor-app-example-1-3-2-4

meteor npm install
meteor remove autopublish insecure
meteor add react-meteor-data aldeed:simple-schema
meteor npm install -S react react-dom react-addons-pure-render-mixin

mkdir -p imports/api/items/server \
         imports/startup/{client,server} \
         imports/ui/{components,containers,layouts} \
         imports/ui/components/Items

touch imports/api/items/{items,methods}.js \
      imports/api/items/server/publications.js \
      imports/startup/{client,server}/index.js \
      imports/startup/server/fixtures.js \
      imports/ui/components/Items/{Item,Items}.js \
      imports/ui/containers/AppContainer.js \
      imports/ui/layouts/AppLayout.js

# heroku setup
heroku create meteor-app-example-1-3-2-4
heroku buildpacks:set https://github.com/AdmitHub/meteor-buildpack-horse.git
heroku addons:create mongolab
heroku config:set ROOT_URL=https://meteor-app-example-1-3-2-4.herokuapp.com/
heroku labs:enable http-session-affinity

# deploy
git push heroku master

#=> open https://meteor-app-example-1-3-2-4.herokuapp.com/ with browser
```