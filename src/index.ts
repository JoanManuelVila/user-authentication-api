import dotenv from 'dotenv'
import app from './app';
import './databse';

dotenv.config();

function main(){
  app.listen(app.get('port'))
  console.log('Server on port', app.get('port'))
  
}

main();