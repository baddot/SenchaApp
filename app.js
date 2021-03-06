/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.0.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({

    requires: [
        'Ext.Img',
        'Ext.Anim'
    ],
    views: [
        'LoginFormPanel',
        'mainView'
    ],
    controllers: [
        'MyController'
    ],
    name: 'vertex',

    launch: function() {
        document.addEventListener('deviceready', function () {
            if (Ext.os.is.iOS && Ext.os.version.major >= 7) {
                document.body.style.marginTop = "20px";
                Ext.Viewport.setHeight(Ext.Viewport.getWindowHeight() - 20);
            }
        });
        Ext.create('vertex.view.LoginFormPanel', {fullscreen: true});
    }

});
