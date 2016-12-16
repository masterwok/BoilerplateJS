import { expect } from 'chai';

describe('Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(true);
    });
});


// Leaving this commented code here to serve as an example
// describe('index.html', () => {
//     it('should say hello', (done) => {
//         const index = fs.readFileSync('./src/index.html', 'utf-8');
//         jsdom.env(index, (error, window) => {
//            const h1 = window.document.getElementsByTagName('h1')[0];
//            expect(h1.innerHTML).to.equal('Hello, World!');
//            done();
//         });
//     });
// });
