class Snake {
    constructor(length, tiles, parent) {
        this.length = length;
        this.tiles = tiles;
        this.parent = parent;
        this.direction = 1;
        this.pos = 0;
        this.start = [];
        this.body = [];
        this.generateSnake();
        this.startWatch();
        this.watchKeyes();
    }

    startWatch() {
        var self = this;
        setInterval(function () {
            self.move();
        }, 10);
    }

    move() {
        switch (this.direction) {
            case 0:
                this.body.unshift(this.body[0] - Math.sqrt(this.tiles.length));
                break;
            case 1:
                this.body.unshift(this.body[0] + 1);
                break;
            case 2:
                this.body.unshift(this.body[0] + Math.sqrt(this.tiles.length));
                break;
            case 3:
                this.body.unshift(this.body[0] - 1);
                break;
        }

        if (this.tiles[this.body[0]].type != 'food') {
            this.tiles[this.body.pop()].setEmpty()
        } else {
            this.parent.generateFood()
        }

        for (var i = 0; i < this.body.length; i++) {
            this.tiles[this.body[i]].setSnake();
        }

    }

    generateSnake() {
        this.pos = this.tiles.length / 2 + this.length;
        for (var i = 0; i < (this.length); i++) {
            this.tiles[this.pos - i].setSnake();
            this.body.push(this.pos - i);
        }
    }

    watchKeyes() {
        var self = this;
        document.body.addEventListener("keydown", function (ev) {
            switch (ev.keyCode) {
                case 38: if (self.direction != 2) {
                    self.direction = 0;
                }
                    break;
                case 39: if (self.direction != 3) {
                    self.direction = 1;
                }
                    break;
                case 40: if (self.direction != 0) {
                    self.direction = 2;
                }
                    break;
                case 37: if (self.direction != 1) {
                    self.direction = 3;
                }
                    break;
            }
        })
    }
}
