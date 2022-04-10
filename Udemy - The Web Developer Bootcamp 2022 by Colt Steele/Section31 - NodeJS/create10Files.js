const fs = require('fs');

for (let i = 1; i <= 10; i++) {
	fs.mkdirSync(`file${i}`);
}
