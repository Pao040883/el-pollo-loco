class DrawableObject {
    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;

    // Lädt ein einzelnes Bild
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    // Lädt mehrere Bilder in den Cache
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;

            this.imageCache[path] = img;
        });
    }

    // Zeichnet das Bild, falls es vollständig geladen ist
    draw(ctx) {
        if (this.img && this.img.complete) { // Überprüfe, ob das Bild vollständig geladen ist
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    // Zeichnet den Rahmen um das Objekt (optional für Debugging)
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof ThrowableObject || this instanceof Endboss || this instanceof Bottles) {
            ctx.beginPath();
            ctx.lineWidth = '0';
            ctx.strokeStyle = 'none';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }
}
