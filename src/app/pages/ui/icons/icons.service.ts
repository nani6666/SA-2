import { Injectable } from '@angular/core';

@Injectable()
export class IconsService {

     icons = {

        fontAwesome: [
            'fa-glass','fa-music','fa-search','fa-envelope-o','fa-heart','fa-star','fa-star-o','fa-user','fa-film','fa-th-large','fa-th','fa-th-list','fa-check','fa-remove','fa-close','fa-times','fa-search-plus','fa-search-minus','fa-power-off','fa-signal','fa-gear','fa-cog','fa-trash-o','fa-home','fa-file-o','fa-clock-o','fa-road','fa-download','fa-arrow-circle-o-down','fa-arrow-circle-o-up','fa-inbox','fa-play-circle-o','fa-rotate-right','fa-repeat','fa-refresh','fa-list-alt','fa-lock','fa-flag','fa-headphones','fa-volume-off','fa-volume-down','fa-volume-up','fa-qrcode','fa-barcode','fa-tag','fa-tags','fa-book','fa-bookmark','fa-print','fa-camera','fa-font','fa-bold','fa-italic','fa-text-height','fa-text-width','fa-align-left','fa-align-center','fa-align-right','fa-align-justify','fa-list','fa-dedent','fa-outdent','fa-indent','fa-video-camera','fa-photo','fa-image','fa-picture-o','fa-pencil','fa-map-marker','fa-adjust','fa-tint','fa-edit','fa-pencil-square-o','fa-share-square-o','fa-check-square-o','fa-arrows','fa-step-backward','fa-fast-backward','fa-backward','fa-play','fa-pause','fa-stop','fa-forward','fa-fast-forward','fa-step-forward','fa-eject','fa-chevron-left','fa-chevron-right','fa-plus-circle','fa-minus-circle','fa-times-circle','fa-check-circle','fa-question-circle','fa-info-circle','fa-crosshairs','fa-times-circle-o','fa-check-circle-o','fa-ban','fa-arrow-left','fa-arrow-right','fa-arrow-up','fa-arrow-down','fa-mail-forward','fa-share','fa-expand','fa-compress','fa-plus','fa-minus','fa-asterisk','fa-exclamation-circle','fa-gift','fa-leaf','fa-fire','fa-eye','fa-eye-slash','fa-warning','fa-exclamation-triangle','fa-plane','fa-calendar','fa-random','fa-comment','fa-magnet','fa-chevron-up','fa-chevron-down','fa-retweet','fa-shopping-cart','fa-folder','fa-folder-open','fa-arrows-v','fa-arrows-h','fa-bar-chart-o','fa-bar-chart','fa-twitter-square','fa-facebook-square','fa-camera-retro','fa-key','fa-gears','fa-cogs','fa-comments','fa-thumbs-o-up','fa-thumbs-o-down','fa-star-half','fa-heart-o','fa-sign-out','fa-linkedin-square','fa-thumb-tack','fa-external-link','fa-sign-in','fa-trophy','fa-github-square','fa-upload','fa-lemon-o','fa-phone','fa-square-o','fa-bookmark-o','fa-phone-square','fa-twitter','fa-facebook-f','fa-facebook','fa-github','fa-unlock','fa-credit-card','fa-rss','fa-hdd-o','fa-bullhorn','fa-bell','fa-certificate','fa-hand-o-right','fa-hand-o-left','fa-hand-o-up','fa-hand-o-down','fa-arrow-circle-left','fa-arrow-circle-right','fa-arrow-circle-up','fa-arrow-circle-down','fa-globe','fa-wrench','fa-tasks','fa-filter','fa-briefcase','fa-arrows-alt','fa-group','fa-users','fa-chain','fa-link','fa-cloud','fa-flask','fa-cut','fa-scissors','fa-copy','fa-files-o','fa-paperclip','fa-save','fa-floppy-o','fa-square','fa-navicon','fa-reorder','fa-bars','fa-list-ul','fa-list-ol','fa-strikethrough','fa-underline','fa-table','fa-magic','fa-truck','fa-pinterest','fa-pinterest-square','fa-google-plus-square','fa-google-plus','fa-money','fa-caret-down','fa-caret-up','fa-caret-left','fa-caret-right','fa-columns','fa-unsorted','fa-sort','fa-sort-down','fa-sort-desc','fa-sort-up','fa-sort-asc','fa-envelope','fa-linkedin','fa-rotate-left','fa-undo','fa-legal','fa-gavel','fa-dashboard','fa-tachometer','fa-comment-o','fa-comments-o','fa-flash','fa-bolt','fa-sitemap','fa-umbrella','fa-paste','fa-clipboard','fa-lightbulb-o','fa-exchange','fa-cloud-download','fa-cloud-upload','fa-user-md','fa-stethoscope','fa-suitcase','fa-bell-o','fa-coffee','fa-cutlery','fa-file-text-o','fa-building-o','fa-hospital-o','fa-ambulance','fa-medkit','fa-fighter-jet','fa-beer','fa-h-square','fa-plus-square','fa-angle-double-left','fa-angle-double-right','fa-angle-double-up','fa-angle-double-down','fa-angle-left','fa-angle-right','fa-angle-up','fa-angle-down','fa-desktop','fa-laptop','fa-tablet','fa-mobile-phone','fa-mobile','fa-circle-o','fa-quote-left','fa-quote-right','fa-spinner','fa-circle','fa-mail-reply','fa-reply','fa-github-alt','fa-folder-o','fa-folder-open-o','fa-smile-o','fa-frown-o','fa-meh-o','fa-gamepad','fa-keyboard-o','fa-flag-o','fa-flag-checkered','fa-terminal','fa-code','fa-mail-reply-all','fa-reply-all','fa-star-half-empty','fa-star-half-full','fa-star-half-o','fa-location-arrow','fa-crop','fa-code-fork','fa-unlink','fa-chain-broken','fa-question','fa-info','fa-exclamation','fa-superscript','fa-subscript','fa-eraser','fa-puzzle-piece','fa-microphone','fa-microphone-slash','fa-shield','fa-calendar-o','fa-fire-extinguisher','fa-rocket','fa-maxcdn','fa-chevron-circle-left','fa-chevron-circle-right','fa-chevron-circle-up','fa-chevron-circle-down','fa-html5','fa-css3','fa-anchor','fa-unlock-alt','fa-bullseye','fa-ellipsis-h','fa-ellipsis-v','fa-rss-square','fa-play-circle','fa-ticket','fa-minus-square','fa-minus-square-o','fa-level-up','fa-level-down','fa-check-square','fa-pencil-square','fa-external-link-square','fa-share-square','fa-compass','fa-toggle-down','fa-caret-square-o-down','fa-toggle-up','fa-caret-square-o-up','fa-toggle-right','fa-caret-square-o-right','fa-euro','fa-eur','fa-gbp','fa-dollar','fa-usd','fa-rupee','fa-inr','fa-cny','fa-rmb','fa-yen','fa-jpy','fa-ruble','fa-rouble','fa-rub','fa-won','fa-krw','fa-bitcoin','fa-btc','fa-file','fa-file-text','fa-sort-alpha-asc','fa-sort-alpha-desc','fa-sort-amount-asc','fa-sort-amount-desc','fa-sort-numeric-asc','fa-sort-numeric-desc','fa-thumbs-up','fa-thumbs-down','fa-youtube-square','fa-youtube','fa-xing','fa-xing-square','fa-youtube-play','fa-dropbox','fa-stack-overflow','fa-instagram','fa-flickr','fa-adn','fa-bitbucket','fa-bitbucket-square','fa-tumblr','fa-tumblr-square','fa-long-arrow-down','fa-long-arrow-up','fa-long-arrow-left','fa-long-arrow-right','fa-apple','fa-windows','fa-android','fa-linux','fa-dribbble','fa-skype','fa-foursquare','fa-trello','fa-female','fa-male','fa-gittip','fa-gratipay','fa-sun-o','fa-moon-o','fa-archive','fa-bug','fa-vk','fa-weibo','fa-renren','fa-pagelines','fa-stack-exchange','fa-arrow-circle-o-right','fa-arrow-circle-o-left','fa-toggle-left','fa-caret-square-o-left','fa-dot-circle-o','fa-wheelchair','fa-vimeo-square','fa-turkish-lira','fa-try','fa-plus-square-o','fa-space-shuttle','fa-slack','fa-envelope-square','fa-wordpress','fa-openid','fa-institution','fa-bank','fa-university','fa-mortar-board','fa-graduation-cap','fa-yahoo','fa-google','fa-reddit','fa-reddit-square','fa-stumbleupon-circle','fa-stumbleupon','fa-delicious','fa-digg','fa-pied-piper','fa-pied-piper-alt','fa-drupal','fa-joomla','fa-language','fa-fax','fa-building','fa-child','fa-paw','fa-spoon','fa-cube','fa-cubes','fa-behance','fa-behance-square','fa-steam','fa-steam-square','fa-recycle','fa-automobile','fa-car','fa-cab','fa-taxi','fa-tree','fa-spotify','fa-deviantart','fa-soundcloud','fa-database','fa-file-pdf-o','fa-file-word-o','fa-file-excel-o','fa-file-powerpoint-o','fa-file-photo-o','fa-file-picture-o','fa-file-image-o','fa-file-zip-o','fa-file-archive-o','fa-file-sound-o','fa-file-audio-o','fa-file-movie-o','fa-file-video-o','fa-file-code-o','fa-vine','fa-codepen','fa-jsfiddle','fa-life-bouy','fa-life-buoy','fa-life-saver','fa-support','fa-life-ring','fa-circle-o-notch','fa-ra','fa-rebel','fa-ge','fa-empire','fa-git-square','fa-git','fa-hacker-news','fa-tencent-weibo','fa-qq','fa-wechat','fa-weixin','fa-send','fa-paper-plane','fa-send-o','fa-paper-plane-o','fa-history','fa-genderless','fa-circle-thin','fa-header','fa-paragraph','fa-sliders','fa-share-alt','fa-share-alt-square','fa-bomb','fa-soccer-ball-o','fa-futbol-o','fa-tty','fa-binoculars','fa-plug','fa-slideshare','fa-twitch','fa-yelp','fa-newspaper-o','fa-wifi','fa-calculator','fa-paypal','fa-google-wallet','fa-cc-visa','fa-cc-mastercard','fa-cc-discover','fa-cc-amex','fa-cc-paypal','fa-cc-stripe','fa-bell-slash','fa-bell-slash-o','fa-trash','fa-copyright','fa-at','fa-eyedropper','fa-paint-brush','fa-birthday-cake','fa-area-chart','fa-pie-chart','fa-line-chart','fa-lastfm','fa-lastfm-square','fa-toggle-off','fa-toggle-on','fa-bicycle','fa-bus','fa-ioxhost','fa-angellist','fa-cc','fa-shekel','fa-sheqel','fa-ils','fa-meanpath','fa-buysellads','fa-connectdevelop','fa-dashcube','fa-forumbee','fa-leanpub','fa-sellsy','fa-shirtsinbulk','fa-simplybuilt','fa-skyatlas','fa-cart-plus','fa-cart-arrow-down','fa-diamond','fa-ship','fa-user-secret','fa-motorcycle','fa-street-view','fa-heartbeat','fa-venus','fa-mars','fa-mercury','fa-transgender','fa-transgender-alt','fa-venus-double','fa-mars-double','fa-venus-mars','fa-mars-stroke','fa-mars-stroke-v','fa-mars-stroke-h','fa-neuter','fa-facebook-official','fa-pinterest-p','fa-whatsapp','fa-server','fa-user-plus','fa-user-times','fa-hotel','fa-bed','fa-viacoin','fa-train','fa-subway','fa-medium'
        ],

        socicons:[
            {"id": "twitter", "name": "Twitter", "character": "a", "color": "#4da7de"},
            {"id": "facebook", "name": "Facebook", "character": "b", "color": "#3e5b98"},
            {"id": "google", "name": "Google+", "character": "c", "color": "#d93e2d"},
            {"id": "pinterest", "name": "Pinterest", "character": "d", "color": "#c92619"},
            {"id": "foursquare", "name": "foursquare", "character": "e", "color": "#F94877"},
            {"id": "yahoo", "name": "Yahoo!", "character": "f", "color": "#6E2A85"},
            {"id": "skype", "name": "skype", "character": "g", "color": "#28abe3"},
            {"id": "yelp", "name": "yelp", "character": "h", "color": "#c83218"},
            {"id": "feedburner", "name": "FeedBurner", "character": "i", "color": "#FFCC00"},
            {"id": "linkedin", "name": "Linkedin", "character": "j", "color": "#3371b7"},
            {"id": "viadeo", "name": "Viadeo", "character": "k", "color": "#e4a000"},
            {"id": "xing", "name": "Xing", "character": "l", "color": "#005a60"},
            {"id": "myspace", "name": "Myspace", "character": "m", "color": "#323232"},
            {"id": "soundcloud", "name": "soundcloud", "character": "n", "color": "#fe3801"},
            {"id": "spotify", "name": "Spotify", "character": "o", "color": "#7bb342"},
            {"id": "grooveshark", "name": "grooveshark", "character": "p", "color": "#000000"},
            {"id": "lastfm", "name": "last.fm", "character": "q", "color": "#d41316"},
            {"id": "youtube", "name": "YouTube", "character": "r", "color": "#e02a20"},
            {"id": "vimeo", "name": "vimeo", "character": "s", "color": "#51b5e7"},
            {"id": "dailymotion", "name": "Dailymotion", "character": "t", "color": "#004e72"},
            {"id": "vine", "name": "Vine", "character": "u", "color": "#00b389"},
            {"id": "flickr", "name": "flickr", "character": "v", "color": "#1e1e1b"},
            {"id": "500px", "name": "500px", "character": "w", "color": "#58a9de"},
            {"id": "instagram", "name": "Instagram", "character": "x", "color": "#9c7c6e"},
            {"id": "wordpress", "name": "WordPress", "character": "y", "color": "#464646"},
            {"id": "tumblr", "name": "tumblr", "character": "z", "color": "#45556c"},
            {"id": "blogger", "name": "Blogger", "character": "A", "color": "#ec661c"},
            {"id": "technorati", "name": "Technorati", "character": "B", "color": "#5cb030"},
            {"id": "reddit", "name": "reddit", "character": "C", "color": "#e74a1e"},
            {"id": "dribbble", "name": "dribbble", "character": "D", "color": "#e84d88"},
            {"id": "stumbleupon", "name": "StumbleUpon", "character": "E", "color": "#e64011"},
            {"id": "digg", "name": "Digg", "character": "F", "color": "#1d1d1b"},
            {"id": "envato", "name": "Envato", "character": "G", "color": "#597c3a"},
            {"id": "behance", "name": "Behance", "character": "H", "color": "#000000"},
            {"id": "delicious", "name": "Delicious", "character": "I", "color": "#020202"},
            {"id": "deviantart", "name": "deviantART", "character": "J", "color": "#c5d200"},
            {"id": "forrst", "name": "Forrst", "character": "K", "color": "#5B9A68"},
            {"id": "play", "name": "Play Store", "character": "L", "color": "#000000"},
            {"id": "zerply", "name": "Zerply", "character": "M", "color": "#9DBC7A"},
            {"id": "wikipedia", "name": "Wikipedia", "character": "N", "color": "#000000"},
            {"id": "apple", "name": "Apple", "character": "O", "color": "#B9BFC1"},
            {"id": "flattr", "name": "Flattr", "character": "P", "color": "#F67C1A"},
            {"id": "github", "name": "GitHub", "character": "Q", "color": "#221e1b"},
            {"id": "chimein", "name": "Chime.in", "character": "R", "color": "#888688"},
            {"id": "friendfeed", "name": "FriendFeed", "character": "S", "color": "#2F72C4"},
            {"id": "newsvine", "name": "NewsVine", "character": "T", "color": "#075B2F"},
            {"id": "identica", "name": "Identica", "character": "U", "color": "#000000"},
            {"id": "bebo", "name": "bebo", "character": "V", "color": "#EF1011"},
            {"id": "zynga", "name": "zynga", "character": "W", "color": "#DC0606"},
            {"id": "steam", "name": "steam", "character": "X", "color": "#8F8D8A"},
            {"id": "xbox", "name": "XBOX", "character": "Y", "color": "#92C83E"},
            {"id": "windows", "name": "Windows", "character": "Z", "color": "#00BDF6"},
            {"id": "outlook", "name": "Outlook", "character": "1", "color": "#0072C6"},
            {"id": "coderwall", "name": "coderwall", "character": "2", "color": "#3E8DCC"},
            {"id": "tripadvisor", "name": "tripadvisor", "character": "3", "color": "#000000"},
            {"id": "appnet", "name": "appnet", "character": "4", "color": "#494949"},
            {"id": "goodreads", "name": "goodreads", "character": "5", "color": "#463020"},
            {"id": "tripit", "name": "Tripit", "character": "6", "color": "#1982C3"},
            {"id": "lanyrd", "name": "Lanyrd", "character": "7", "color": "#3c80c9"},
            {"id": "slideshare", "name": "SlideShare", "character": "8", "color": "#4ba3a6"},
            {"id": "buffer", "name": "Buffer", "character": "9", "color": "#000000"},
            {"id": "rss", "name": "RSS", "character": ",", "color": "#f26109"},
            {"id": "vkontakte", "name": "VKontakte", "character": ";", "color": "#5a7fa6"},
            {"id": "disqus", "name": "DISQUS", "character": ":", "color": "#2e9fff"},
            {"id": "houzz", "name": "houzz", "character": "+", "color": "#7CC04B"},
            {"id": "mail", "name": "Mail", "character": "@", "color": "#000000"},
            {"id": "patreon", "name": "Patreon", "character": "=", "color": "#E44727"},
            {"id": "paypal", "name": "Paypal", "character": "-", "color": "#009cde"},
            {"id": "playstation", "name": "PlayStation", "character": "^", "color": "#000000"},
            {"id": "smugmug", "name": "SmugMug", "character": "¨", "color": "#ACFD32"},
            {"id": "swarm", "name": "Swarm", "character": "$", "color": "#FC9D3C"},
            {"id": "triplej", "name": "triplej", "character": "*", "color": "#E53531"},
            {"id": "yammer", "name": "Yammer", "character": "&", "color": "#1175C4"},
            {"id": "stackoverflow", "name": "stackoverflow", "character": "(", "color": "#FD9827"},
            {"id": "drupal", "name": "Drupal", "character": "#", "color": "#00598e"},
            {"id": "odnoklassniki", "name": "Odnoklassniki", "character": ".", "color": "#f48420"},
            {"id": "android", "name": "Android", "character": "_", "color": "#8ec047"},
            {"id": "meetup", "name": "Meeptup", "character": "]", "color": "#e2373c"},
            {"id": "persona", "name": "Mozilla Persona", "character": ")", "color": "#e6753d"}
            ]

        
     }

    public  getAll() {
        return this.icons;
    }
}