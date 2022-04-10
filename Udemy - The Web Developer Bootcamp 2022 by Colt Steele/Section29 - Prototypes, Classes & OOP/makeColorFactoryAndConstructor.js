// Factory function
// Crate object by returning

function makeColor(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`
    };
    color.hex = function() {
        return (
            '#' + ((1 << 24) + (r <<16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
}

//Constructor function
//Keyword 'new'
//Add extra functions via adding to prototype

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`
}

Color.prototype.hex = function() {
    return ('#' + ((1 << 24) + (this.r <<16) + (this.g << 8) + this.b).toString(16).slice(1))
}

Color.prototype.rgba = function(a = 1.0) {
    return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`
}

//Class - newer syntax
//Grouping constructor & methods together

class ColorClass{
    constructor(r, g, b, name = undefined) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calcHSL();
    }
    innerRGB() {
        return `${this.r}, ${this.g}, ${this.b}`;
    }
    rgb() {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    rgba(a = 1.0) {
        return `rgb(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
    hex() {
        return (
            '#' + ((1 << 24) + (this.r <<16) + (this.g << 8) + this.b).toString(16).slice(1)
            );
    }
    hsl() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    }
    fullySaturated() {
        return `hsl(${this.h}, 100%, ${l}%)`;
    }
    opposite() {
        return `hsl(${(this.h + 180) % 360}, ${this.s}%, ${this.l}%)`;
    }
    calcHSL() {
        let R = this.r / 255;
        let G = this.g / 255;
        let B = this.b / 255;

        let cmin = Math.min(R, G, B),
            cmax = Math.max(R, G, B),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        if (delta === 0) {
            h = 0;
        }
        else if (cmax === R) {
            h = ((G - B) / delta) % 6;
        }
        else if (cmax === G)
            h = (B - R) / delta + 2;
        else
            h = (R - G) / delta + 4;
        h = Math.round(h * 60);

        if (h < 0) h += 360;

        l = (cmax + cmin) / 2;

        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        this.h = h;
        this.s = s;
        this.l = l;
    }
}