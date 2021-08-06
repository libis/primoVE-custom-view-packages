## CUSTOM VIEWS
#### Dev env:
Example of VIEW_CODE in dev env: **32KUL_KUL-KUL** (this is also the foldername)\
Run command: gulp run --view **32KUL_KUL-KUL** --ve\
Create package command: gulp create-package --ve

Using **32KUL_KUL-KUL** instead of **KUL** makes sure that name of the package zip and folder are correct.

#### Deploy:
Upload zip to Alma configuration of **Institution (KUL or LIBISnet)** -> Discovery -> Manage customization package


## CENTRAL PACKAGE
#### Dev env:
Name of folder = **32KUL_LIBIS_NETWORK-CENTRAL_PACKAGE**\
Run command: gulp run --view **32KUL_LIBIS_NETWORK-CENTRAL_PACKAGE** --ve --browserify\
Create package command: gulp create-package --ve --browserify

#### Deploy:
Upload to Alma configuration of **Network Zone** -> Discovery -> Manage customization package

Using **32KUL_LIBIS_NETWORK-CENTRAL_PACKAGE** instead of **CENTRAL_PACKAGE** makes sure that name of the package zip and folder are correct.

To enable this you have to change ./gulp/primoProxy.js in your dev env: replace CENTRAL_PACKAGE with 32KUL_LIBIS_NETWORK-CENTRAL_PACKAGE