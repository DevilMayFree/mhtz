window._dl = {}

window._dl = {
    channel: 'wholesale',
    content: '關於',
    country: 'tw',
    language: 'zh-hant',
    page_name: 'fidtw: wholesale: taiwan',
    site_section: '',
    spa: false,
};


var page_name_parts = '/about-fidelity/taiwan/'.replace(/^\/|\/$/g, '').replace(/\//g, ': ');
if (page_name_parts.length) {
    window._dl.page_name = 'fidtw: wholesale: ' + page_name_parts;
    window._dl.site_section = page_name_parts.split(': ')[0];
} else {
    window._dl.page_name = 'fidtw: wholesale: homepage';
    window._dl.site_section = 'homepage';
}