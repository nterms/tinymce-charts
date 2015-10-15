tinymce.PluginManager.add('charts', function(editor, url) {
    // Add a button that opens a window
    editor.addButton('charts', {
        text: 'Charts',
        icon: 'line-chart',
        onclick: function() {
            showModal(url);
        }
    });

    // Adds a menu item to the tools menu
    editor.addMenuItem('charts', {
        text: 'Charts',
        context: 'tools',
        onclick: function() {
            // Open window with a specific url
            editor.windowManager.open({
                title: 'TinyMCE site',
                url: 'http://www.tinymce.com',
                width: 800,
                height: 600,
                buttons: [{
                    text: 'Close',
                    onclick: 'close'
                }]
            });
        }
    });

    var showModal = function(url) {
        // Open window
        editor.windowManager.open({
            title: 'charts plugin',
            body: [
                {type: 'textbox', name: 'title', label: 'Title'}
            ],
            onsubmit: function(e) {
                // Insert content when the window form is submitted
                editor.insertContent('Title: ' + e.data.title);
            }
        });
    };
});
