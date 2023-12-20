$(document).ready(function () {
    /**
     * This function returns the maximum height based on every height property available
     * for the passed document.
     */
    function getDocHeight(doc) {
        doc = doc || document;
        var body = doc.body;
        var html = doc.documentElement;
        var height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        return height + 'px';
    }

    // For every iframe, on load it will set the height based on the document height.
    $('iframe').on('load', function () {
        var doc = this.contentDocument ? this.contentDocument : this.contentWindow.document;
        this.style.height = getDocHeight(doc);
    });
});