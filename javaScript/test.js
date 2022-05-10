function fn() {
    console.log(this);
    setTimeout(() => {
        console.log(this);
    }, 1000);
}