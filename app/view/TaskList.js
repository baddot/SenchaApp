/*
 * File: app/view/TaskList.js
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

Ext.define('vertex.view.TaskList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.tasklist',

    requires: [
        'Ext.XTemplate'
    ],

    config: {
        title: 'Task List',
        store: 'Tasks',
        itemTpl: [
            '<div>',
            '    <tpl if="completed">COMPLETED:</tpl>',
            '    {priority} -',
            '    {description}',
            '    <tpl if="dueDate"> - {dueDate:date}</tpl>',
            '</div>'
        ]
    }

});