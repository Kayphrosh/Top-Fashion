const tl = gsap.timeline({defaults: { ease: "power1.out"} });

tl.to('.text', {y: "0%", duration: 2.5, stagger: 0.2});
tl.to('.slider', { y: "-100%", duration: 1, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1}, "-=1");


const panels = document.querySelectorAll('.panel');


panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

drift.on("ready", function(api) {
    drift.api.startInteraction({ interactionId: XXXXXX, goToConversation: true }); /* <-- your playbook's interaction ID here */
  });

  (function() {
    /* Add this class to any elements you want to use to open Drift.
     *
     * Examples:
     * - <a class="drift-open-chat">Questions? We're here to help!</a>
     * - <button class="drift-open-chat">Chat now!</button>
     *
     * You can have any additional classes on those elements that you
     * would like.
    */
    var DRIFT_CHAT_SELECTOR = '.drift-open-chat'
    /* http://youmightnotneedjquery.com/#ready */
    function ready(fn) {
      if (document.readyState != 'loading') {
        fn();
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
      } else {
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState != 'loading')
            fn();
        });
      }
    }
    /* http://youmightnotneedjquery.com/#each */
    function forEachElement(selector, fn) {
      var elements = document.querySelectorAll(selector);
      for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
    }
    function openChat(driftApi, event) {
      event.preventDefault();
      driftApi.openChat();
      return false;
    }
    ready(function() {
      drift.on('ready', function(api) {
        var handleClick = openChat.bind(this, api)
        forEachElement(DRIFT_CHAT_SELECTOR, function(el) {
          el.addEventListener('click', handleClick);
        });
      });
    });
  })();