import path from 'path';

export default function (app) {
   app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../index.html'));
   });
}
