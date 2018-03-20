function availStorage() {
    try {
        if ('localStorage' in window && window['localStorage']) {
            localStorage.setItem("t", true);
            localStorage.removeItem("t");
            return true;
        }
    } catch (e) {
        return false;
    }

}

export default availStorage