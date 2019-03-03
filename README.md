# SHOPS Drupal 8

Experimental Docksal build

CircleCI: https://circleci.com/gh/ivan-berezhnov/shops

Virtualhost: `http://shop.docksal/`

### Development stack

* We are using Docksal as developer local env.
* Make sure you have latest Docksal installed: https://docksal.io/installation 
* About Docksal + documentation: https://docksal.readthedocs.io/en/master/
* Git clone into Docksal project directory. Specified during installation or in 
`DOCKSAL_NFS_PATH` variable in `~/.Docksal/docksal.env` configuration file
* Your docksal projects should be under docksal NFS path.


### First start
In project root folder execute commands:
* `fin project start`
*  if your Docksal VM is not yet started it will ask you.
* `fin terminus-connect`
* If your terminus key would be installed correctly you will see green message.
* `fin init`
* Wait till finish. First time it takes 10-15 minutes for downloading of the database. 
* If everything is ok, your project would be available at http://shops.docksal/

### Troubleshooting:
Common rebuild process errors:

`[error]  You are not logged in. Run auth:login to authenticate or help auth:login for more info.`
* Make sure you have `SECRET_TERMINUS_TOKEN` setting in global Docksal config for Terminus secret token.
* it should look like `SECRET_TERMINUS_TOKEN="YOUR PANTHEON TOKEN"`
* Global Docksal is located in `~/.Docksal/docksal.env` (~ means your home directory)

`Error: Node Sass does not yet support your current environment: Linux 64-bit with Unsupported runtime (57)`
* If you having node sass error, or any similar on `Running gulp tasks in theme` stage of rebuild, 
simply delete lock file located in: `docroot/themes/(YOUR CURRENT THEME)/package-lock.json` and restart `fin rebuild`


`ERROR: for cli  Cannot start service cli: error while mounting volume '/mnt/sda1/var/lib/docker/volumes/shop_...`
* This error appears when project folder is located outside `DOCKSAL_NFS_PATH` specified in your Global Docksal docksal.env file
* To fix this simply move project folder inside one specified in `DOCKSAL_NFS_PATH`. (`~/projects` by default)


### 3. Install git pre-commit hook

```
$ cp scripts/pre-commit.sh .git/hooks/pre-commit
$ chmod +x .git/hooks/pre-commit
```

### Files clone
We use stage_file_proxy to proxy files from staging to local. 

### Drush usage

`fin drush (command)`

**Examples:**
 
* Cache Rebuild -         `$ fin drush cr`
* Configuration export -  `$ fin drush cex` 
* Configuration import -  `$ fin drush cim`

### Gulp usage

`fin gulp (command)`

**If you have problems with build of gulp, delete package-json.lock file and run `fin gulp build command`**

**Examples:**
 
* Build scss -         `$ fin gulp build`
* Run watch -          `$ fin gulp watch` 

### BackstopJS

1. Take reference screenshots
    
    ```
    fin backstop reference --config=backstop-shop.json
    ```

2. Take test screenshots and compare

    ```
    fin backstop test --config=backstop-shop.json
    ```

By default BackstopJS is using PhantomJS to take screenshots.  
You can also use SlimerJS/Firefox by setting `"engine": "slimerjs"` 
in the [configuration file](tests/backstop/backstop-shop.json).