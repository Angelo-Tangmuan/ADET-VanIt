/* VanIt toast notification (the small green message at the top of the screen).

   How to use it on any page:
     1. Add <script src="toast.js"></script> just before </body>.
     2. Then do ONE of these:
          a) Put data-toast="Your message" on a button or link.
             If it is a link (<a href="...">), the page shows the message first
             and then goes to the link about 1.2 seconds later.
          b) Call showToast("Your message") from your own JavaScript.

   The look of the toast is in style.css (.toast-vanit).
   It needs Bootstrap Icons for the check mark. */

(function () {
    var toast = null;
    var messageEl = null;
    var timer = null;

    // Builds the toast once, so pages don't need any toast HTML
    function build() {
        if (toast) return;

        toast = document.createElement("div");
        toast.className = "toast-vanit";
        toast.setAttribute("role", "status");
        toast.setAttribute("aria-live", "polite");

        var icon = document.createElement("i");
        icon.className = "bi bi-check-circle-fill";

        messageEl = document.createElement("span");

        toast.appendChild(icon);
        toast.appendChild(messageEl);
        document.body.appendChild(toast);
    }

    // Shows the toast, then hides it after `duration` milliseconds (default 3000)
    window.showToast = function (message, duration) {
        build();
        messageEl.textContent = message;
        toast.classList.add("show");

        clearTimeout(timer);
        timer = setTimeout(function () {
            toast.classList.remove("show");
        }, duration || 3000);
    };

    // Any element with data-toast="..." shows its message when clicked
    document.addEventListener("click", function (event) {
        var trigger = event.target.closest("[data-toast]");
        if (!trigger) return;

        window.showToast(trigger.getAttribute("data-toast"));

        // For links: wait a moment so the message can be read, then follow the link
        var href = trigger.getAttribute("href");
        if (href) {
            event.preventDefault();
            setTimeout(function () {
                window.location.href = href;
            }, 1200);
        }
    });
})();
