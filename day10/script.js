/**
 * Created by preb on 14.12.16.
 */
document.querySelectorAll("li").forEach((listItem) => {
    listItem.addEventListener("click", listItemClick);
});

let lastChecked = null;

function listItemClick(e) {
    if(this.classList.contains('done')) {
        this.classList.remove('done');
        lastChecked = null;
    } else {
        if(lastChecked && e.shiftKey) {
            const ulDOM = this.parentNode;
            let cross = false;
            ulDOM.querySelectorAll('li').forEach((element) => {
                if(!cross) {
                    if (element === this || element === lastChecked) {
                        cross = true;
                        element.classList.add('done');
                    }
                } else {
                    element.classList.add('done');
                    if(element === this || element === lastChecked) {
                        cross = false;
                    }
                }
            });
        } else {
            this.classList.add('done');
            lastChecked = this;
        }
    }
}